import { Users, Building2, Heart, Headphones } from "lucide-react";

export function StatsSection() {
  const stats = [
    { label: "Utilisateurs activés", value: "500K+", Icon: Users },
    { label: "Marques et partenaires", value: "50+", Icon: Building2 },
    { label: "Taux de satisfaction", value: "98%", Icon: Heart },
    { label: "Support disponible", value: "24/7", Icon: Headphones },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="max-w-[90%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-2xl mb-6">
              <stat.Icon className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
            <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
