// src/App.jsx
import { Film, PlayCircle } from 'lucide-react';

const genres = ['Drama', 'Sci-Fi', 'Thriller', 'Fantasy'];

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="text-center py-16">
        <Film className="mx-auto w-12 h-12 text-red-500" />
        <h1 className="text-5xl font-bold mt-4">VisionCut</h1>
        <p className="mt-2 text-lg text-gray-400">Cinematic storytelling powered by AI</p>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10">
        {genres.map((genre) => (
          <div key={genre} className="relative group bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={`/images/${genre.toLowerCase()}.jpg`}
              alt={genre}
              className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center py-2 text-lg font-semibold">
              {genre}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
