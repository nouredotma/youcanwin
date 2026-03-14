export function HeroSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[90%] mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transformez chaque produit en expérience de jeu
          </h1>
          <p className="text-gray-600 text-base mb-6">
            Convertissez vos marques en marques sur tous les canaux numériques. Codifiez QR codes d'identification, avec géolocage, statistiques d'engagement et micro-moments.
          </p>
          <div className="flex gap-4 mb-8">
            <div>
              <div className="text-green-600 font-bold text-2xl">500K+</div>
              <p className="text-gray-600 text-sm">Users activated</p>
            </div>
            <div>
              <div className="text-green-600 font-bold text-2xl">50+</div>
              <p className="text-gray-600 text-sm">Brands & merch.</p>
            </div>
            <div>
              <div className="text-green-600 font-bold text-2xl">x3.5</div>
              <p className="text-gray-600 text-sm">Engagement up</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-6 py-3 font-medium">
              Try it now
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 font-medium">
              Contact our sales
            </button>
          </div>
        </div>
        <div className="bg-green-600 rounded p-8 min-h-96 flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-sm font-medium mb-4">Quiz Quiz</div>
            <div className="text-3xl font-bold mb-2">Ma Collection</div>
            <div className="text-sm">10x 20k 60k</div>
          </div>
        </div>
      </div>
    </section>
  );
}
