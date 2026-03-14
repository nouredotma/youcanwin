import { Users, QrCode, Globe, Layout, Cloud } from "lucide-react";

export function InfraStatsSection() {
  const items = [
    { title: "Utilisateurs", sub: "De 1K à illimité", Icon: Users },
    { title: "QR Codes", sub: "Volume adapté", Icon: QrCode },
    { title: "Convertisseur", sub: "Local à mondial", Icon: Globe },
    { title: "Albums", sub: "Standard ou custom", Icon: Layout },
    { title: "Infrastructure", sub: "Cloud ou On-premise", Icon: Cloud },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-[90%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="bg-green-50 p-4 rounded-xl mb-4">
              <item.Icon className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-1">{item.title}</div>
            <p className="text-gray-500 text-sm font-medium">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
