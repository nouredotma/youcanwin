import { Users, Gamepad2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-gray-50 min-h-[calc(100svh-80px)] flex items-center py-12 md:py-0">
      <div className="max-w-[90%] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="md:pt-10">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
            Transformez chaque <span className="text-green-600 underline underline-offset-8">produit</span> en expérience de jeu
          </h1>
          <p className="text-gray-600 text-lg mb-6 max-w-lg leading-relaxed">
            YouCanWin connecte vos marques aux fans de football à travers des mécaniques de gamification innovantes. <span className="font-bold text-gray-900">Codes QR, cartes digitales, défis et récompenses.</span>
          </p>
          <div className="flex flex-wrap gap-12 mb-6">
            <div>
              <div className="text-green-600 font-black text-3xl">500K+</div>
              <p className="text-gray-500 font-medium text-sm">Interactions/mois</p>
            </div>
            <div>
              <div className="text-red-500 font-black text-3xl">50+</div>
              <p className="text-gray-500 font-medium text-sm">Marques actives</p>
            </div>
            <div>
              <div className="text-green-600 font-black text-3xl">x3.5</div>
              <p className="text-gray-500 font-medium text-sm">ROI moyen</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="bg-green-600 text-white px-8 py-4 font-bold rounded-md hover:bg-green-700 transition-all shadow-lg flex items-center justify-center gap-2">
              Voir la démo
              <span className="text-xl leading-none">›</span>
            </button>
            <button className="border-2 border-gray-300 text-gray-500 px-8 py-4 font-bold rounded-md hover:bg-gray-50 transition-all flex items-center justify-center">
              Comment ça marche
            </button>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Ils nous font confiance</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 grayscale opacity-60">
              <span className="font-bold text-lg text-gray-600">Maroc Telecom</span>
              <span className="font-bold text-lg text-gray-600 underline decoration-purple-600 underline-offset-4">inwi</span>
              <span className="font-bold text-lg text-[#FF7900]">orange</span>
              <span className="font-bold text-lg text-blue-700 italic">Carrefour</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          {/* Mobile Device Mockup */}
          <div className="relative z-10 w-[300px] md:w-[350px] mx-auto h-[540px] md:h-[620px] border-[8px] border-gray-900 rounded-[50px] bg-white overflow-hidden shadow-xl flex flex-col">
            {/* Top Area (Header) - 22% */}
            <div className="h-[25%] bg-green-600 p-6 flex flex-col justify-end text-white shrink-0 relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-xl"></div>
              
              <div className="text-[10px] font-medium opacity-90 mb-1 tracking-wider">ALBUM DIGITAL 2025</div>
              <div className="text-xl font-extrabold mb-2 leading-none">MA COLLECTION</div>
              <div className="flex justify-start items-center gap-6 font-bold">
                <div className="flex flex-col items-start leading-none">
                  <span className="text-sm">127</span>
                  <span className="text-xs opacity-90">Cards</span>
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-sm">76%</span>
                  <span className="text-xs opacity-90">Complet</span>
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-sm">#12</span>
                  <span className="text-xs opacity-90">Rank</span>
                </div>
              </div>
            </div>

            {/* Content Area - White Background */}
            <div className="flex-1 bg-gray-50 p-4">
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="aspect-[3/4] bg-gray-200 rounded-lg shadow-sm border border-gray-100"></div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="h-16 border-t border-gray-100 bg-white px-2 flex items-center justify-between shrink-0">
              {['ACCUEIL', 'ECHANGER', 'SCANNER', 'PROFIL', 'MENU'].map((label, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                  <div className="w-6 h-6 bg-gray-200 rounded-md"></div>
                  <span className="text-[7px] font-bold text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute top-10 -right-4 md:-right-12 z-20 bg-white p-2 rounded-md shadow-lg flex items-center gap-4 border border-gray-100 animate-float">
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900 leading-tight">Activité Users</div>
              <div className="text-xs text-gray-500 font-medium">+24% ce mois-ci</div>
            </div>
          </div>

          <div className="absolute bottom-20 -left-4 md:-left-12 z-20 bg-white p-3 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100 animate-float-delayed">
            <div className="bg-red-100 p-3 rounded-lg">
              <Gamepad2 className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900 leading-tight">Jeux Live</div>
              <div className="text-xs text-gray-500 font-medium">12k joueurs actifs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
