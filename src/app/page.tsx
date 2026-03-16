import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero_lab_researchers.png" 
            alt="Enzymatica virusforskning laboratorium med forskare" 
            fill 
            priority
            className="object-cover"
          />
          {/* Subtle Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/30 dark:bg-slate-900/40"></div>
          {/* Gradient for a premium feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
          <span className="inline-block py-1 px-4 rounded-full bg-brand-cyan/25 backdrop-blur-sm text-white text-sm font-bold tracking-wider mb-2 border border-white/20">
            BARRIÄRTEKNIK SOM SKYDDAR
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-6 drop-shadow-2xl">
            Skydda dig mot <br />
            <span className="text-brand-cyan">infektioner</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg font-medium">
            ColdZyme® munhålespray skapar en skyddande barriär som verkar omedelbart mot förkylningsvirus.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <button className="bg-brand-teal hover:bg-brand-dark text-white text-xl px-10 py-4 rounded-full font-bold transition-all shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-1">
              Läs mer om ColdZyme®
            </button>
            <Link href="/articles" className="glassmorphism text-white text-xl px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:bg-white/20 transform hover:-translate-y-1 text-center">
              Våra Nyheter
            </Link>
          </div>
        </div>

        {/* Abstract shapes for decoration */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten filter opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten filter opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white">
                Oberoende studieresultat
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-brand-light/50 dark:bg-slate-900 rounded-2xl border border-brand-teal/10">
                  <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-cyan mb-3">
                    ColdZyme® minskar förkylningstiden
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    En vetenskaplig artikel publicerad i Journal of Physiology, bekräftar att ColdZyme® inte bara lindrar förkylningssymtom, utan angriper den underliggande orsaken.
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-cyan mb-3">
                    Banbrytande nya studier
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Professor Davison och professor Wilflingseder presenterar oberoende studieresultat publicerade i The Journal of Physiology.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] w-full bg-slate-100 dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-800 transform hover:scale-[1.02] transition-all duration-500">
              <Image 
                src="/product_presentation.png" 
                alt="ColdZyme Produktpresentation" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-12 text-white">
                <span className="text-xs font-black uppercase tracking-[0.3em] opacity-60 mb-2 block">Premium Barriärteknik</span>
                <h3 className="text-2xl font-bold">ColdZyme® Skyddsteknik</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
