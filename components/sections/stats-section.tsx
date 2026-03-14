export function StatsSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-[90%] mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-green-600 mb-2">500K+</div>
          <p className="text-gray-600">Utilisateurs activés</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
          <p className="text-gray-600">Marques et partenaires</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
          <p className="text-gray-600">Taux de satisfaction</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
          <p className="text-gray-600">Support disponible</p>
        </div>
      </div>
    </section>
  );
}
