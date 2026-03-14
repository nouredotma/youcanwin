export function RedCTASection() {
  return (
    <section className="bg-red-600 py-12 md:py-20">
      <div className="max-w-[90%] mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Prêt à transformer votre marketing ?
        </h2>
        <p className="text-red-100 mb-10 text-lg max-w-2xl mx-auto">
          Rejoignez les centaines de marques qui utilisent Transformez pour créer des expériences engageantes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-red-600 px-8 py-4 font-bold rounded-md hover:bg-red-50 transition-colors shadow-lg">
            Request a demo
          </button>
          <button className="border-2 border-white text-white px-8 py-4 font-bold rounded-md hover:bg-white/10 transition-colors">
            Contact sales
          </button>
        </div>
      </div>
    </section>
  );
}
