export function GreenFeatureSection() {
  return (
    <section className="bg-green-600 py-12 md:py-20">
      <div className="max-w-[90%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Transformez vos ventes en expérience mémorable
        </h2>
        <p className="text-center text-green-50 mb-12">
          Des solutions digitales qui offrent à vos clients une expérience inoubliable.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-white">
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="font-bold mb-2">Engagements immédiat</h3>
            <p className="text-sm text-green-50">Créez une connexion directe avec vos clients grâce à des expériences interactives.</p>
          </div>
          <div className="text-white">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-bold mb-2">Plateforme robuste</h3>
            <p className="text-sm text-green-50">Nos solutions sont conçues pour supporter les plus grandes campagnes marketing.</p>
          </div>
          <div className="text-white">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold mb-2">Études approfondies</h3>
            <p className="text-sm text-green-50">Accédez à des données détaillées sur le comportement et les préférences de vos clients.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
