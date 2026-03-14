export function FeatureGrid() {
  const features = [
    { title: 'Tableaux de bord', desc: 'Suivi en temps réel' },
    { title: 'Notifications', desc: 'Alertes personnalisées' },
    { title: 'Audiences', desc: 'Segmentation avancée' },
    { title: 'Audiences', desc: 'Segmentation avancée' },
    { title: 'Statistiques', desc: 'Reportages détaillés' },
    { title: 'Collaborations', desc: 'Travail en équipe' },
    { title: 'Messaging par SMS', desc: 'Communications directes' },
    { title: 'Infrastructure', desc: 'Disponibilité assurée' },
  ];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[90%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Gérez tout depuis une interface unique
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Maîtrise complète de vos campagnes et optimisation chimère intuitive.
        </p>
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {features.map((feature, i) => (
            <div key={i} className="border border-gray-200 p-4">
              <div className="text-green-600 text-2xl mb-2">⚙️</div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-green-600 text-white px-6 py-3 font-medium">
            Discover all the features
          </button>
        </div>
      </div>
    </section>
  );
}
