import { 
  Settings, 
  LayoutDashboard, 
  Bell, 
  Users2, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Server,
  ArrowRight
} from "lucide-react";

export function FeatureGrid() {
  const features = [
    { title: 'Tableaux de bord', desc: 'Suivi en temps réel', Icon: LayoutDashboard },
    { title: 'Notifications', desc: 'Alertes personnalisées', Icon: Bell },
    { title: 'Audiences', desc: 'Segmentation avancée', Icon: Users2 },
    { title: 'Segments', desc: 'Ciblage précis', Icon: Users2 },
    { title: 'Statistiques', desc: 'Reportages détaillés', Icon: BarChart3 },
    { title: 'Collaborations', desc: 'Travail en équipe', Icon: Users },
    { title: 'Messaging par SMS', desc: 'Communications directes', Icon: MessageSquare },
    { title: 'Infrastructure', desc: 'Disponibilité assurée', Icon: Server },
  ];

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full mb-6 border border-green-100">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Back-office 2 en 1</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Gérez tout depuis une interface unique
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Maîtrise complète de vos campagnes et optimisation intuitive pour un engagement maximal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-green-200 transition-all hover:shadow-lg hover:shadow-gray-100/50 group">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.Icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-green-600 text-white px-10 py-4 font-bold rounded-md hover:bg-green-700 transition-all flex items-center gap-3 mx-auto shadow-lg shadow-green-100">
            Discover all the features
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
