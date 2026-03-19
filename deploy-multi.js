const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const inquirer = require('inquirer').default;

const parentDir = path.dirname(__dirname);

const projects = fs.readdirSync(parentDir)
  .filter(dir => {
    const dirPath = path.join(parentDir, dir);
    return fs.statSync(dirPath).isDirectory() &&
           fs.existsSync(path.join(dirPath, 'package.json')) &&
           dir !== path.basename(__dirname); // exclude current if it's a project
  })
  .concat(path.basename(__dirname)); // include current

async function main() {
  const { project } = await inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      message: 'Choose a project to deploy:',
      choices: projects
    }
  ]);

  const projectPath = path.join(parentDir, project);
  process.chdir(projectPath);

  try {
    // Check if git repo
    execSync('git status', { stdio: 'pipe' });

    // Get remotes
    const remotesOutput = execSync('git remote', { encoding: 'utf8' });
    const remotes = remotesOutput.split('\n').filter(line => line.trim());

    if (remotes.length === 0) {
      console.log('No git remotes found. Please set up git remotes for your websites.');
      process.exit(1);
    }

    const { remote } = await inquirer.prompt([
      {
        type: 'list',
        name: 'remote',
        message: 'Choose a website/remote to deploy to:',
        choices: remotes
      }
    ]);

    // Build
    console.log(`Building ${project}...`);
    execSync('npm run build', { stdio: 'inherit' });

    // Add and commit
    console.log('Committing changes...');
    execSync('git add .');
    execSync(`git commit -m "Deploy ${project} to ${remote}"`, { stdio: 'inherit' });

    // Get current branch
    const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();

    // Push
    console.log(`Pushing ${project} to ${remote}...`);
    execSync(`git push ${remote} ${branch}`, { stdio: 'inherit' }); // Assume main branch

    console.log('Deployment successful!');

  } catch (error) {
    console.error('Error during deployment:', error.message);
    process.exit(1);
  }
}

main();