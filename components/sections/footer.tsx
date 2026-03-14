import { Trophy, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" }, // "X" icon often used as Twitter
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-white text-gray-600 py-12 border-t">
      <div className="max-w-[90%] mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Social Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-600 p-2 rounded-md">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold flex items-center">
                <span className="text-red-600">U</span>
                <span className="text-black">can</span>
                <span className="text-green-600">win</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Créez des expériences de jeu inoubliables et engagez vos clients comme jamais auparavant.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="bg-gray-100 aspect-square flex items-center justify-center p-2.5 rounded-md text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Empty column for spacing if needed, or just let the grid handle it */}
          <div></div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Liens rapides</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-green-600 transition-colors">Notre offre</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Catalogue de jeux</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Statistiques</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Témoignages</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Contact & Légal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-green-600 transition-colors">Contactez-nous</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Support technique</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Confidentialité</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar 1 */}
        <div className="border-t border-gray-100 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-500 gap-4">
          <p>&copy; 2025 Youcanwin tous droits réservés.</p>
          <p>Un service de l'agence Game Agency Africa</p>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="bg-green-50 border border-green-200 rounded-lg py-3 px-6 w-fit">
            <span className="text-green-700 text-sm font-bold tracking-wide">
              SITE CONFORME CNDP MAROC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
