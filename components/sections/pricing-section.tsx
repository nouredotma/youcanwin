import { Rocket, Zap, Globe, ShieldCheck, Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      title: "Starter",
      subtitle: "Idéal pour débuter",
      tagline: "Campagne locale",
      price: "Sur mesure",
      desc: "Parfait pour tester sur un marché spécifique",
      features: ["Jusqu'à 10,000 utilisateurs", "1 marque active", "Analytics basiques", "Support par email"],
      Icon: Rocket,
    },
    {
      title: "Scale",
      subtitle: "Pour les entreprises",
      tagline: "Expansion",
      price: "Sur mesure",
      desc: "Pour les marques en forte croissance",
      features: ["Jusqu'à 100,000 utilisateurs", "5 marques actives", "Analytics avancées", "Support prioritaire"],
      Icon: Zap,
      popular: true,
    },
    {
      title: "Pro",
      subtitle: "Performance maximale",
      tagline: "Performance Plus",
      price: "Sur mesure",
      desc: "Optimisez vos campagnes à grande échelle",
      features: ["Jusqu'à 1,000,000 utilisateurs", "10 marques actives", "Analytics prédictives", "Account Manager"],
      Icon: ShieldCheck,
    },
    {
      title: "Enterprise",
      subtitle: "Grandes organisations",
      tagline: "Solution Globale",
      price: "Sur mesure",
      desc: "Pour les besoins complexes et mondiaux",
      features: ["Utilisateurs illimités", "Marques illimitées", "Analytics complètes", "Support dédié 24/7"],
      Icon: Globe,
    },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Des formules adaptées à votre échelle
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Choisissez le plan qui correspond le mieux à vos objectifs marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative bg-white p-8 rounded-2xl border ${plan.popular ? 'border-red-600 shadow-2xl shadow-red-100' : 'border-gray-200'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Populaire
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${plan.popular ? 'bg-red-50' : 'bg-green-50'}`}>
                  <plan.Icon className={`w-6 h-6 ${plan.popular ? 'text-red-600' : 'text-green-600'}`} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 leading-none">{plan.title}</h3>
                  <p className="text-green-600 text-xs font-bold uppercase tracking-wider mt-1">{plan.tagline}</p>
                </div>
              </div>

              <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed">
                {plan.desc}
              </p>

              <div className="h-px bg-gray-100 mb-6"></div>

              <div className="mb-6">
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Tarification</p>
                <div className="text-2xl font-black text-gray-900">{plan.price}</div>
                <p className="text-[10px] text-gray-500 font-medium">Selon vos volumes</p>
              </div>

              <div className="h-px bg-gray-100 mb-6"></div>

              <ul className="space-y-4 mb-10 grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm font-bold text-gray-700">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-red-600' : 'text-green-600'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 font-black rounded-xl transition-all ${
                  plan.popular 
                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-200' 
                    : 'border-2 border-gray-100 text-gray-900 hover:border-green-600 hover:text-green-600'
                }`}
              >
                {plan.popular ? 'Request a demo' : 'Contact sales'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
