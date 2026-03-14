import { Rocket, Zap, Globe, ShieldCheck, Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      title: "Starter",
      subtitle: "Idéal pour débuter",
      tagline: "Campagne locale",
      price: "Tarification sur mesure selon vos volumes",
      desc: "Parfait pour tester sur un marché spécifique",
      features: [
        "Jusqu'à 10,000 utilisateurs",
        "1 marque active",
        "Analytics basiques",
        "Support par email",
        "Accès aux jeux standards",
        "Rapports hebdomadaires"
      ],
      Icon: Rocket,
    },
    {
      title: "Scale",
      subtitle: "Pour les entreprises",
      tagline: "Expansion",
      price: "Tarification sur mesure selon vos volumes",
      desc: "Pour les marques en forte croissance",
      features: [
        "Jusqu'à 100,000 utilisateurs",
        "5 marques actives",
        "Analytics avancées",
        "Support prioritaire",
        "Accès à tous les jeux",
        "Rapports personnalisés",
        "Formation de l'équipe"
      ],
      Icon: Zap,
      popular: true,
    },
    {
      title: "Enterprise",
      subtitle: "Grandes organisations",
      tagline: "Solution Globale",
      price: "Tarification sur mesure selon vos volumes",
      desc: "Pour les besoins complexes et mondiaux",
      features: [
        "Utilisateurs illimités",
        "Marques illimitées",
        "Analytics complètes",
        "Support dédié 24/7",
        "Développements sur mesure",
        "Intégrations API",
        "Gestion de projet dédiée"
      ],
      Icon: Globe,
    },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-24 border-y border-gray-100">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Des formules adaptées à votre échelle
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Choisissez le plan qui correspond le mieux à vos objectifs marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white p-8 rounded-xl border transition-all duration-300 ${
                plan.popular
                  ? 'border-red-600 shadow-xl shadow-gray-200/50'
                  : 'border-gray-200 hover:shadow-lg'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-medium uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Populaire
                </div>
              )}

              <div className="flex flex-col items-start gap-4 mb-6">
                <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${plan.popular ? 'bg-red-50' : 'bg-primary/10'}`}>
                  <plan.Icon className={`w-7 h-7 ${plan.popular ? 'text-red-600' : 'text-primary'}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black leading-none mb-1">{plan.title}</h3>
                  <p className="text-primary text-sm font-medium">{plan.tagline}</p>
                </div>
              </div>

              <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed">
                {plan.desc}
              </p>

              <div className="h-px bg-gray-300 mb-3"></div>

              <div className="mb-3">
                <p className="text-neutral-500 text-sm font-medium">
                  {plan.price}
                </p>
              </div>

              <div className="h-px bg-gray-300 mb-3"></div>

              <ul className="space-y-4 mb-10 grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm font-medium text-neutral-500">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-red-600' : 'text-primary'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 font-medium rounded-xl transition-all ${
                  plan.popular
                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-200/30'
                    : 'border-2 border-gray-100 text-gray-950 hover:border-primary hover:text-primary hover:bg-primary/10'
                }`}
              >
                {plan.popular ? 'Planifier un démo gratuit' : 'Nous contacter'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
