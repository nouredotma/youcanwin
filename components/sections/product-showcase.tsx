export function ProductShowcase() {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-[90%] mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-300 rounded-lg h-64 md:h-80"></div>
        <div>
          <p className="text-green-600 font-medium text-sm mb-2">Solutions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            La tendance du jeu digital de votre marque
          </h2>
          <p className="text-gray-600 mb-6">
            Une approche qui offre à votre marque une expérience immersive, interactive et engageante que vos clients vont adorer.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">Collectioner digitales</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">Gamification interactive</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">Analytics avancées</span>
            </li>
          </ul>
          <button className="bg-red-600 text-white px-6 py-3 font-medium">
            Discover more
          </button>
        </div>
      </div>
    </section>
  );
}
