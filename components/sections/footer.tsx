export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Transformez</h3>
            <p className="text-sm">Créez des expériences de jeu inoubliables.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Produit</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400">Features</a></li>
              <li><a href="#" className="text-gray-400">Pricing</a></li>
              <li><a href="#" className="text-gray-400">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400">About</a></li>
              <li><a href="#" className="text-gray-400">Blog</a></li>
              <li><a href="#" className="text-gray-400">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400">Privacy</a></li>
              <li><a href="#" className="text-gray-400">Terms</a></li>
              <li><a href="#" className="text-gray-400">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2024 Transformez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
