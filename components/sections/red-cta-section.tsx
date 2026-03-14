import { Calendar, Mail } from "lucide-react";

export function RedCTASection() {
  return (
    <section className="bg-red-600 py-12 md:py-20">
      <div className="max-w-[90%] mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Prêt à transformer votre marketing ?
        </h2>
        <p className="text-red-100 mb-5 text-lg max-w-2xl mx-auto font-medium">
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-white text-red-600 px-5 py-4 font-bold rounded-lg hover:bg-red-50 transition-all shadow-xl flex items-center justify-center gap-3">
            <Calendar className="w-5 h-5" />
            Planifier un démo gratuit
          </button>
          <button className="border-2 border-white/70 text-white/95 px-5 py-4 font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
            <Mail className="w-5 h-5" />
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}
