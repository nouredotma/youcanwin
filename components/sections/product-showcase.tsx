import { Lightbulb, Check, Calendar } from "lucide-react";

export function ProductShowcase() {
  const points = [
    { title: "Collectioner digitales", desc: "Créez des albums de stickers numériques" },
    { title: "Gamification interactive", desc: "Engagez vos clients avec des mini-jeux" },
    { title: "Analytics avancées", desc: "Suivez les performances en temps réel" },
    { title: "Engagement direct", desc: "Communiquez directement avec vos fans" },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="max-w-[90%] mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-gray-200 rounded-3xl h-[400px] md:h-[500px] shadow-inner border border-gray-100 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest">
          Product Image / Demo
        </div>
        <div>
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full mb-6 border border-green-100">
            <Lightbulb className="w-4 h-4 fill-green-600/10" />
            <span className="text-sm font-bold uppercase tracking-wider">Solutions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            La tendance du jeu digital de votre marque
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            <span className="font-bold text-green-600">You can win</span> transformez vos produits en expériences interactives. 
            Chaque achat devient une opportunité d'engagement avec vos consommateurs.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {points.map((point, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center border border-green-100">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{point.title}</div>
                  <p className="text-xs text-gray-500 mt-1">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-red-600 text-white px-8 py-4 font-bold rounded-md hover:bg-red-700 transition-all flex items-center gap-3 shadow-lg shadow-red-100">
            Discover more
            <Calendar className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
