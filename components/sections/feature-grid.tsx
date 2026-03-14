import { 
  Settings, 
  LayoutDashboard, 
  Bell, 
  Users2, 
  BarChart3, 
  QrCode,
  Gift,
  Gamepad2,
  Download,
  Layers,
  ChevronRight
} from "lucide-react";

export function FeatureGrid() {
  const features = [
    { title: 'Générateur QR Codes', desc: 'Créez et téléchargez vos QR codes uniques en masse', Icon: QrCode },
    { title: 'Gestion des lots', desc: 'Définissez vos récompenses et gérez les tirages au sort', Icon: Gift },
    { title: 'CRM Participants', desc: 'Collectez et gérez vos participants avec segmentation avancée', Icon: Users2 },
    { title: 'Notifications', desc: 'Envoyez des push, emails et SMS à vos participants', Icon: Bell },
    { title: 'Configuration jeux', desc: 'Paramétrez entièrement vos jeux : règles, lots, durée, visuels', Icon: Gamepad2 },
    { title: 'Export données', desc: 'Téléchargez vos données en CSV, Excel ou via API', Icon: Download },
    { title: 'Analytics temps réel', desc: 'Suivez vos KPIs : scans, conversions, engagement, ROI', Icon: BarChart3 },
    { title: 'Multi-campagnes', desc: 'Gérez plusieurs campagnes simultanément', Icon: Layers },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full mb-6 border border-green-100">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Backoffice tout-en-un</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Gérez tout depuis une interface unique
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Notre backoffice intuitif vous permet de créer, configurer et piloter vos campagnes en toute autonomie
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-300 hover:border-green-200 transition-all hover:shadow-lg hover:shadow-gray-100/50 group">
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
          <button className="bg-primary-gradient text-white px-10 py-4 font-bold rounded-md hover:opacity-90 transition-all flex items-center gap-3 mx-auto shadow-lg shadow-green-100">
            Demander un accès au backoffice
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
