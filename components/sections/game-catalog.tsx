export function GameCatalog() {
  const games = [
    { name: 'Alfred Digital 2024', category: 'Quiz' },
    { name: 'Quick Realtime', category: 'Quiz' },
    { name: 'Treasure digitales', category: 'Quiz' },
    { name: 'Probabilités', category: 'Games' },
  ];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[90%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Catalogue des jeux
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {games.map((game, i) => (
            <div key={i} className="bg-gray-100 aspect-square flex items-end p-4">
              <div>
                <p className="text-green-600 text-xs font-medium">{game.category}</p>
                <h3 className="font-bold text-gray-900">{game.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
