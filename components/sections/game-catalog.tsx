import { ArrowUpRight } from "lucide-react";

export function GameCatalog() {
  const games = [
    { name: 'Alfred Digital 2024', category: 'Quiz interactif', desc: 'Une expérience immersive en temps réel' },
    { name: 'Quick Realtime', category: 'Quiz Rapide', desc: 'Testez vos connaissances en un record' },
    { name: 'Treasure digitales', category: 'Chasse au trésor', desc: 'Parcours ludiques et récompenses' },
    { name: 'Probabilités', category: 'Jeux de Chance', desc: 'Des mécaniques de gain immédiat' },
  ];

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Catalogue des jeux
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Découvrez notre large éventail de mécaniques de jeu pour engager votre audience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
              {/* Image Placeholder */}
              <div className="bg-gray-100 aspect-4/3 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest group-hover:bg-gray-200 transition-colors">
                [ Game Image ]
              </div>
              <div className="p-6">
                <p className="text-green-600 text-xs font-black uppercase tracking-widest mb-2">{game.category}</p>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{game.name}</h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">{game.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-green-600 font-bold text-sm hover:translate-x-1 transition-transform">
                  Découvrir le jeu
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
