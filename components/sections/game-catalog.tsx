import { ChevronRight } from "lucide-react";

export function GameCatalog() {
  const games = [
    { 
      name: 'Alfred Digital 2024', 
      category: 'Quiz', 
      desc: 'Une expérience immersive en temps réel',
      image: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=800&auto=format&fit=crop'
    },
    { 
      name: 'Quick Realtime', 
      category: 'Speed', 
      desc: 'Testez vos connaissances en un record',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop'
    },
    { 
      name: 'Treasure digitales', 
      category: 'Adventure', 
      desc: 'Parcours ludiques et récompenses',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop'
    },
    { 
      name: 'Probabilités', 
      category: 'Luck', 
      desc: 'Des mécaniques de gain immédiat',
      image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=800&auto=format&fit=crop'
    },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="max-w-[90%] mx-auto px-4 text-gray-950">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Catalogue des jeux
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Des mécaniques éprouvées pour engager vos audiences
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, i) => (
            <div key={i} className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all group flex flex-col">
              {/* Image Section */}
              <div className="relative aspect-4/3 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-0 right-0 bg-primary-gradient px-4 py-1.5 rounded-bl-2xl font-black text-[10px] uppercase tracking-widest text-white shadow-sm">
                  {game.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <h3 className="font-bold text-gray-900 text-xl mb-3">{game.name}</h3>
                <p className="text-sm text-gray-500 mb-6 font-medium leading-relaxed grow">{game.desc}</p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center gap-1 text-primary font-extrabold text-sm hover:gap-2 transition-all">
                    Découvrir
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
