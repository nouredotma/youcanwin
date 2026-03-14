import { Users, Gamepad2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-white min-h-[calc(100svh-80px)] flex items-center py-12 md:py-0">
      <div className="max-w-[90%] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transformez chaque produit en expérience de jeu
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Convertissez vos marques en marques sur tous les canaux numériques. Codifiez QR codes d'identification, avec géolocage, statistiques d'engagement et micro-moments.
          </p>
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <div className="text-green-600 font-bold text-3xl">500K+</div>
              <p className="text-gray-500 font-medium">Users activated</p>
            </div>
            <div>
              <div className="text-green-600 font-bold text-3xl">50+</div>
              <p className="text-gray-500 font-medium">Brands & merch.</p>
            </div>
            <div>
              <div className="text-green-600 font-bold text-3xl">x3.5</div>
              <p className="text-gray-500 font-medium">Engagement up</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-8 py-4 font-bold rounded-md hover:bg-green-700 transition-all shadow-lg shadow-green-200">
              Try it now
            </button>
            <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 font-bold rounded-md hover:bg-gray-50 transition-all">
              Contact our sales
            </button>
          </div>
        </div>
        
        <div className="relative">
          {/* Mobile Device Mockup */}
          <div className="relative z-10 w-[280px] md:w-[320px] mx-auto h-[580px] md:h-[640px] border-[6px] border-black rounded-[45px] bg-white overflow-hidden shadow-2xl">
            {/* Top Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-2xl z-20"></div>
            
            {/* Inner Content Placeholder */}
            <div className="absolute inset-0 bg-green-600 p-8 flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <div className="text-sm font-medium mb-4 opacity-80 uppercase tracking-widest">Quiz Quiz</div>
                <div className="text-4xl font-black mb-4">Ma Collection</div>
                <div className="flex gap-2 text-sm font-bold bg-white/20 px-4 py-2 rounded-full">
                  <span>10x</span>
                  <span>20k</span>
                  <span>60k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute top-10 -right-4 md:-right-12 z-20 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100 animate-bounce-slow">
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900">Activité Users</div>
              <div className="text-xs text-gray-500 font-medium">+24% ce mois-ci</div>
            </div>
          </div>

          <div className="absolute bottom-20 -left-4 md:-left-12 z-20 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100 animate-float">
            <div className="bg-red-100 p-3 rounded-lg">
              <Gamepad2 className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900">Jeux Live</div>
              <div className="text-xs text-gray-500 font-medium">12k joueurs actifs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
