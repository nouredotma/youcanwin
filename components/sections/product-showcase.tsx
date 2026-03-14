import { Lightbulb, Smartphone, Puzzle, Gift, BarChart3, Calendar } from "lucide-react";

export function ProductShowcase() {
  const points = [
    { title: "Activation instantanée", desc: "QR codes uniques sur chaque produit", Icon: Smartphone },
    { title: "Collection digitale", desc: "Cartes de joueurs, rareté, échanges", Icon: Puzzle },
    { title: "Récompenses exclusives", desc: "Tirages au sort, lots partenaires, expériences VIP", Icon: Gift },
    { title: "Analytics avancés", desc: "Dashboard temps réel, insights consommateurs", Icon: BarChart3 },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-100/50">
          <img 
            src="/showcase.png" 
            alt="Digital Engagement Showcase" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full mb-4 border border-green-100">
            <Lightbulb className="w-4 h-4 fill-green-600/10" />
            <span className="text-sm font-medium">Solutions complètes</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-2 leading-tight tracking-tight">
            Le terrain de jeu digital de votre marque
          </h2>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed">
            Youcanwin transforme vos produits en expériences interactives. 
            Chaque achat devient une opportunité d'engagement avec vos consommateurs.
          </p>
          
          <div className="grid grid-cols-1 gap-3 mb-10">
            {points.map((point, i) => (
              <div key={i} className="flex gap-2 items-start">
                <div className="shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <point.Icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-base">{point.title}</div>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-primary-gradient text-white px-5 py-3 text-sm font-medium rounded-md hover:opacity-90 transition-all flex items-center gap-3">
            Planifier une démo
            <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
