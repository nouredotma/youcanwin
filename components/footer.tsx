"use client";

import { useLanguage } from "@/components/language-provider";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/", label: t.header.home },
    { href: "/about", label: t.header.about },
    { href: "/contact", label: t.header.contact },
  ];

  return (
    <footer className="w-full bg-zinc-900 text-white rounded-t-3xl">
      <div className="max-w-full mx-auto px-4 md:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="font-bold text-2xl tracking-tighter flex items-center gap-1">
                <span className="text-red-500">You</span>
                <span className="text-white">Can</span>
                <span className="text-green-500">Win</span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Believe in your potential. With the right tools and mindset, you can achieve anything. You Can Win.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 hover:text-red-500 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <div className="space-y-4">
              <a href="tel:0666166945" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 text-red-500" />
                <span>0666-166945</span>
              </a>
              <a href="mailto:contact@youcanwin.com" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4 text-red-500" />
                <span>contact@youcanwin.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© 2026 You Can Win. All rights reserved.</p>
          <p>
            Developed with excellence by{" "}
            <a href="#" className="text-zinc-300 hover:text-white transition-colors">You Can Win Team</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
