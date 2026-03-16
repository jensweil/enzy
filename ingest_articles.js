const fs = require('fs');
const path = require('path');
const https = require('https');

const articlesData = [
  {
    "title": "Enzymaticas presentation från Stora Aktiedagarna finns nu tillgänglig",
    "date": "2026-03-11",
    "snippet": "Den 10 mars presenterade Sana Alajmovic Enzymatica AB vid Stora Aktiedagarna i Stockholm, ett av Sveriges största investerarevent arrangerat av Aktiespararna.",
    "imageUrl": "https://www.enzymatica.com/images/70b3575f-c110-41ca-8506-69f446503278/screenshot-49.png",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/enzymaticas-presentation-fran-stora-aktiedagarna-finns-nu-tillganglig/"
  },
  {
    "title": "Enzymaticas vd om vägen framåt för ColdZyme",
    "date": "2026-03-04",
    "snippet": "Ett år har gått sedan de kliniska resultaten för ColdZyme publicerades i den vetenskapliga tidskriften The Journal of Physiology.",
    "imageUrl": "https://www.enzymatica.com/images/53221258-91e0-42d3-840c-800c8ee48671/article.jpg",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/enzymaticas-vd-om-vagen-framat-for-coldzyme/"
  },
  {
    "title": "BioStock intervjuar Enzymaticas vd om nästa fas i bolagets utveckling",
    "date": "2026-02-23",
    "snippet": "I en aktuell intervju med BioStock berättar Enzymaticas vd Sana Alajmovic om sin första tid i bolaget och om ambitionerna framåt.",
    "imageUrl": "https://www.enzymatica.com/images/0a98ed93-b918-435c-814b-ea9d6200aaf2/a4871df2-bf6f-4d9d-87d3-59d7681a1748.jpg",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/biostock-intervjuar-enzymaticas-vd-om-nasta-fasi-bolagets-utveckling/"
  },
  {
    "title": "VD Sana Alajmovic om Enzymaticas strategiska inriktning och framtid",
    "date": "2026-02-11",
    "snippet": "Se när Enzymaticas nya vd, Sana Alajmovic, gästar BioStocks studio för ett samtal om sitt nya uppdrag, bolagets kommersiella strategi och vägen framåt.",
    "imageUrl": "https://www.enzymatica.com/images/2260f929-003e-496d-8728-194d728827e4/sana-biostock.png",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/vdn-sana-alajmovic-om-enzymaticas-strategiska-inriktning-och-framtid/"
  },
  {
    "title": "Sana Alajmovic har tillträtt som vd för Enzymatica",
    "date": "2026-02-03",
    "snippet": "Sana Alajmovic har nu officiellt har tillträtt som vd för bolaget.",
    "imageUrl": "https://www.enzymatica.com/images/179cb57f-cc45-4c4e-bb54-9ed831a02471/sana-alajmovic-4.jpg",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/sana-alajmovic-har-tilltratt-som-vd-for-enzymatica/"
  },
  {
    "title": "Studien om ColdZyme uppmärksammas i nationell tv – lyfts fram i TV4 Efter Fem",
    "date": "2025-12-03",
    "snippet": "Den kliniska studien om ColdZyme som visade signifikant kortare sjukdomstid och lindrigare symptom vid förkylning har uppmärksammats i nationell tv.",
    "imageUrl": "https://www.enzymatica.com/images/379b2053-da55-4ecb-9a3f-99b891dc9890/image-tv4-efter-fem.png",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/studien-om-coldzyme-uppmarksammas-i-nationell-tv-lyfts-fram-i-tv4-efter-fem/"
  },
  {
    "title": "Enzymatica i BioStock: Nytt samarbete med UK Sports Institute",
    "date": "2025-11-27",
    "snippet": "BioStock rapporterar om Enzymaticas nya samarbete med UK Sports Institute (UKSI).",
    "imageUrl": "https://www.enzymatica.com/images/75ec1ade-039b-43c0-83e5-12033ca656cc/uksi-website-1.png",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/enzymatica-i-biostock-nytt-samarbete-med-uk-sports-institute/"
  },
  {
    "title": "Enzymatica inleder samarbete med UK Sports Institute",
    "date": "2025-11-20",
    "snippet": "Enzymatica AB har tecknat ett samarbetsavtal med UK Sports Institute (UKSI).",
    "imageUrl": "https://www.enzymatica.com/images/d607e95e-278c-41ce-8b6f-b3e082f422ba/uksi-website-2.png",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/enzymatica-inleder-samarbete-med-uk-sports-institute/"
  },
  {
    "title": "ColdZyme tar plats i brittiska landslaget",
    "date": "2025-10-21",
    "snippet": "ColdZyme har blivit en del av det brittiska landslagets medicinska utrustning.",
    "imageUrl": "https://www.enzymatica.com/images/225da387-c640-49e6-9612-9f4c443b3824/gb-cz-v3.png",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/coldzyme-tar-plats-i-brittiska-landslaget/"
  },
  {
    "title": "Enzymatica lanserar ColdZyme® Eucalyptus",
    "date": "2025-10-14",
    "snippet": "Enzymatica utökar sitt produktsortiment med ColdZyme® Eucalyptus.",
    "imageUrl": "https://www.enzymatica.com/images/a98466fa-724e-4caa-9779-35356ada7dfd/coldzyme_eucaplyptus_img_9966.jpg",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/enzymatica-lanserar-coldzyme-eucalyptus/"
  },
  {
    "title": "Proffscyklisten Charlotte Hodgkins-Byrne om hur ColdZyme hjälper henne till framgång",
    "date": "2024-09-13",
    "snippet": "Lär känna den professionella cyklisten Charlotte Hodgkins-Byrne och professor Glen Davison, som diskuterar fördelarna med ColdZyme.",
    "imageUrl": "https://www.enzymatica.com/images/04120951-3250-402c-b587-24154382e9ce/Charlotte_bike.jpg",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/powered-by-penzyme/"
  },
  {
    "title": "Biostock om de rapporterade slutgiltiga studieresultaten",
    "date": "2024-09-12",
    "snippet": "BioStock analyserar de slutgiltiga resultaten från den kliniska studien om ColdZyme.",
    "imageUrl": "https://www.enzymatica.com/images/53221258-91e0-42d3-840c-800c8ee48671/article.jpg",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/biostock-analyserar-studieresultat/"
  },
  {
    "title": "Professor Glen Davison presenterade ColdZyme-studie vid Global Health Summit",
    "date": "2024-07-02",
    "snippet": "Professor Glen Davison presenterade resultaten från den kliniska studien vid Global Health Summit.",
    "imageUrl": "https://www.enzymatica.com/images/e4ef88ab-1f42-4a31-9518-2a2a8fbf15f3/GlenDavison.jpg",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/professor-glen-davison-talade-vid-global-health-summit/"
  },
  {
    "title": "Enzymatica deltar i Global Health Campaign",
    "date": "2024-04-05",
    "snippet": "Enzymatica deltar i en internationell kampanj för global hälsa.",
    "imageUrl": "https://www.enzymatica.com/images/dcc775f5-0519-40d1-82d6-6a2cf3692ca7/Claus-Egstrand---Global-Health.jpg",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/enzymatica-deltar-i-global-heath-campaign/"
  },
  {
    "title": "Abstract om klinisk ColdZyme studie publicerat av British Journal of Sports Medicine",
    "date": "2024-03-18",
    "snippet": "Ett abstract om den kliniska studien har publicerats i den ansedda tidskriften British Journal of Sports Medicine.",
    "imageUrl": "https://www.enzymatica.com/images/f0fb489a-3cb1-4837-8d3e-39b921ddeae5/BJSM1.jpg",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/abstract-om-klinisk-studie-publicerat/"
  },
  {
    "title": "Resultat från ColdZyme-studie presenterade vid olympisk konferens",
    "date": "2024-03-03",
    "snippet": "Resultat från den senaste studien om ColdZyme presenterades vid en internationell olympisk konferens.",
    "imageUrl": "https://www.enzymatica.com/images/0a4e21ec-9d5d-407b-ba54-3d2a5a14489d/OlympicGlen.jpg",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/resultat-fran-coldzyme-studie-presenterade-vid-olympisk-konferens/"
  },
  {
    "title": "ColdZyme i amerikanska morgonshowen \"The Balancing Act\"",
    "date": "2024-01-08",
    "snippet": "ColdZyme visades upp i den populära amerikanska morgonshowen \"The Balancing Act\".",
    "imageUrl": "https://www.enzymatica.com/images/aa7ca9bd-bca7-47f4-bb87-68483c446c09/TBA.jpg",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/coldzyme-i-amerikanska-morgonshowen-the-balancing-act/"
  },
  {
    "title": "ColdZyme i reklamen under 10 år",
    "date": "2023-07-13",
    "snippet": "Följ med på en resa genom 10 år av reklamfilmer för ColdZyme.",
    "imageUrl": "https://www.enzymatica.com/images/303f3dfa-e700-471d-b712-1a99a6972a49/A-decade-of-ColdZyme-advertising.jpg",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/coldzyme-i-reklamen-under-10-ar/"
  },
  {
    "title": "Intervju med VD Claus Egstrand av analytikern Maria Karlsson Osipova",
    "date": "2023-05-17",
    "snippet": "En djupintervju med Enzymaticas dåvarande vd Claus Egstrand.",
    "imageUrl": "https://www.enzymatica.com/images/ac620cc3-6e75-4e42-8594-8de1c6cb3653/Screenshot-Penser.png",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/intervju-med-vd-claus-egstrand-av-analytikern-maria-karlsson-osipova/"
  },
  {
    "title": "Marknadskampanj i Sverige",
    "date": "2023-04-17",
    "snippet": "Enzymatica lanserar en ny marknadskampanj i Sverige för ColdZyme.",
    "imageUrl": "https://www.enzymatica.com/images/26b68695-5f0a-416e-8400-38ceb06c3124/coldzyme-commercial.png",
    "url": "https://www.enzymatica.com/sv/media/artiklar-insikter/marknadskampanj-i-sverige/"
  }
];

const downloadImage = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(`Failed to download: ${url}, status: ${res.statusCode}`);
      }
    }).on('error', reject);
  });
};

const main = async () => {
    const uploadDir = path.join(process.cwd(), 'public/uploads/scraped');
    const articlesJsonPath = path.join(process.cwd(), 'data/articles.json');

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    const existingArticles = JSON.parse(fs.readFileSync(articlesJsonPath, 'utf8'));
    const newArticles = [];

    for (let i = 0; i < articlesData.length; i++) {
        const item = articlesData[i];
        const ext = path.extname(item.imageUrl) || '.png';
        const filename = `article_${Date.now()}_${i}${ext}`;
        const localPath = path.join(uploadDir, filename);

        console.log(`Downloading image for: ${item.title}`);
        try {
            await downloadImage(item.imageUrl, localPath);
            
            newArticles.push({
                id: `scraped_${Date.now()}_${i}`,
                title: item.title,
                type: "Article",
                date: new Date(item.date).toISOString(),
                imageUrl: `/uploads/scraped/${filename}`,
                content: item.snippet,
                socialMedia: {
                    facebook: true,
                    instagram: false,
                    linkedin: true,
                    tiktok: false
                }
            });
        } catch (err) {
            console.error(err);
        }
    }

    const combined = [...existingArticles, ...newArticles];
    fs.writeFileSync(articlesJsonPath, JSON.stringify(combined, null, 2));
    console.log(`Successfully ingested ${newArticles.length} new articles.`);
};

main();
