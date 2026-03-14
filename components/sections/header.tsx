export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-[90%] mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-green-600">Youcanwin</div>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#" className="text-gray-600">Our offer</a>
          <a href="#" className="text-gray-600">Offer more</a>
          <a href="#" className="text-gray-600">About us</a>
        </nav>
        <button className="bg-green-600 text-white px-4 py-2 text-sm font-medium">
          Request a demo
        </button>
      </div>
    </header>
  );
}
