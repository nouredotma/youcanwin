import { ShoppingCart, QrCode, Smartphone, Puzzle, Gift } from "lucide-react";

export function TimelineSection() {
  const steps = [
    { title: "Achat produit", desc: "Le client achète votre produit en magasin", Icon: ShoppingCart },
    { title: "Scan QR Code", desc: "Il scanne le code sur l'emballage", Icon: QrCode },
    { title: "Déblocage carte", desc: "Une carte digitale est débloquée", Icon: Smartphone },
    { title: "Collection", desc: "Il complète sa collection", Icon: Puzzle },
    { title: "Récompense", desc: "Participe au tirage", Icon: Gift },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Un parcours client simple et engageant
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            De rachat du produit à la récompense, en 5 étapes
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => {
            const isRed = i >= 3; // Steps 4 and 5 are red
            return (
              <div key={i} className="relative flex flex-col items-center text-center group">
                {/* Badge Number */}
                <div className={`absolute top-0 right-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-sm ${isRed ? 'bg-red-600' : 'bg-green-600'}`}>
                  {i + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-white border-2 rounded-xl flex items-center shadow-xl justify-center mb-6 group-hover:scale-110 transition-transform ${isRed ? 'border-red-100' : 'border-green-100'}`}>
                  <step.Icon className={`w-8 h-8 ${isRed ? 'text-red-600' : 'text-green-600'}`} />
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
