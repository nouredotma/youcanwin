import { QrCode, UserCheck, PlayCircle, Trophy, BarChart3 } from "lucide-react";

export function TimelineSection() {
  const steps = [
    { title: "Génération QR", desc: "Créez vos codes d'identification uniques", Icon: QrCode },
    { title: "Activation Client", desc: "Le client scanne et active son profil", Icon: UserCheck },
    { title: "Expérience Jeu", desc: "Accès instantané aux mini-jeux", Icon: PlayCircle },
    { title: "Récompenses", desc: "Gagnez des points et des cadeaux", Icon: Trophy },
    { title: "Statistiques", desc: "Suivez l'engagement en temps réel", Icon: BarChart3 },
  ];

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Un parcours client simple et engageant
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Découvrez comment You can win transforme l'interaction avec vos produits en quelques étapes simples.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-white p-8 rounded-2xl shadow-xl shadow-gray-100/50 flex flex-col items-center text-center group">
              {/* Badge Number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold text-sm">
                0{i + 1}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-white border-2 border-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <step.Icon className="w-8 h-8 text-green-600" />
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
