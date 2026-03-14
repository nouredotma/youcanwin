export function PricingSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-[90%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Des formules adaptées à votre échelle
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-600 text-sm mb-4">Idéal pour débuter</p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>✓ Jusqu'à 10,000 utilisateurs</li>
              <li>✓ 1 marque active</li>
              <li>✓ Analytics basiques</li>
              <li>✓ Support par email</li>
            </ul>
            <button className="w-full bg-green-600 text-white py-2 font-medium">
              Get started
            </button>
          </div>
          <div className="bg-white p-8 border border-green-600">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Scale</h3>
            <p className="text-gray-600 text-sm mb-4">Pour les entreprises</p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>✓ Jusqu'à 100,000 utilisateurs</li>
              <li>✓ 5 marques actives</li>
              <li>✓ Analytics avancées</li>
              <li>✓ Support prioritaire</li>
            </ul>
            <button className="w-full bg-green-600 text-white py-2 font-medium">
              Get started
            </button>
          </div>
          <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Entreprise</h3>
            <p className="text-gray-600 text-sm mb-4">Pour les grandes organisations</p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>✓ Utilisateurs illimités</li>
              <li>✓ Marques illimitées</li>
              <li>✓ Analytics complètes</li>
              <li>✓ Support dédié</li>
            </ul>
            <button className="w-full border border-gray-300 text-gray-700 py-2 font-medium">
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
