"use client";

import { Trophy, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 px-4",
        isScrolled 
          ? "bg-white backdrop-blur-md border-b border-gray-100 py-3" 
          : "bg-gray-50 border-b border-transparent py-5"
      )}
    >
      <div className="max-w-[90%] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary-gradient p-2 rounded-md">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <div className="text-2xl font-extrabold flex items-center">
            <span className="text-red-600">You</span>
            <span className="text-black">can</span>
            <span className="text-gradient">win</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#" className="text-gray-600 font-medium hover:text-green-600 transition-colors">Nos offres</a>
            <a href="#" className="text-gray-600 font-medium hover:text-green-600 transition-colors">Nos jeux</a>
            <a href="#" className="text-gray-600 font-medium hover:text-green-600 transition-colors">Album 2025</a>
            <a href="#" className="text-gray-600 font-medium hover:text-green-600 transition-colors">À propos</a>
          </nav>
          <button className="bg-primary-gradient text-white px-5 py-2.5 text-sm font-semibold rounded-md hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm">
            Demander une démo
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
