import { Trophy } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-[90%] mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-green-600 p-2 rounded-md">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <div className="text-2xl font-bold flex items-center">
            <span className="text-red-600">U</span>
            <span className="text-black">can</span>
            <span className="text-green-600">win</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#" className="text-gray-600 font-medium">Our offer</a>
            <a href="#" className="text-gray-600 font-medium">Offer more</a>
            <a href="#" className="text-gray-600 font-medium">About us</a>
          </nav>
          <button className="bg-green-600 text-white px-5 py-2.5 text-sm font-semibold rounded-md hover:bg-green-700 transition-colors">
            Request a demo
          </button>
        </div>
      </div>
    </header>
  );
}
