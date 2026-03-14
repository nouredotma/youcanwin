import { Rocket, ShieldCheck, PieChart } from "lucide-react";

export function GreenFeatureSection() {
  const features = [
    { title: "Engagements immédiat", desc: "Créez une connexion directe avec vos clients grâce à des expériences interactives.", Icon: Rocket },
    { title: "Plateforme robuste", desc: "Nos solutions sont conçues pour supporter les plus grandes campagnes marketing.", Icon: ShieldCheck },
    { title: "Études approfondies", desc: "Accédez à des données détaillées sur le comportement et les préférences de vos clients.", Icon: PieChart },
  ];

  return (
    <section className="bg-green-600 py-12 md:py-20 relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Transformez vos ventes en expérience mémorable
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto opacity-90">
            YouCanWin offre à vos clients plus qu'un produit : une expérience interactive complète autour du football
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl text-white hover:bg-white/15 transition-all flex flex-col items-center text-center">
                <div className="shrink-0 w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <feature.Icon className="w-7 h-7 text-white/90" />
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-white leading-relaxed font-medium opacity-80">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
