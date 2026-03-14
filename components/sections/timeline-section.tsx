export function TimelineSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[90%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Un parcours client simple et engageant
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="text-center max-w-xs">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mb-3 mx-auto ${i % 2 === 0 ? 'bg-red-600' : 'bg-green-600'}`}>
                {i}
              </div>
              <p className="text-gray-600 text-sm">Étape du parcours</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
