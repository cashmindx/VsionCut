import { Film, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PaymentForm from './PaymentForm';

const genres = ['Drama', 'Sci-Fi', 'Thriller', 'Fantasy'];

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="text-center py-16">
        <Film className="mx-auto w-12 h-12 text-red-500" />
        <h1 className="text-5xl font-bold mt-4">VisionCut</h1>
        <p className="mt-2 text-lg text-gray-400">Cinematic storytelling powered by AI</p>
      </header>

      {/* Genre Gallery */}
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
            <Link to={`/genre/${genre.toLowerCase()}`} className="absolute inset-0 z-10" />
          </div>
        ))}
      </section>

      {/* Scene Packs / Payment Options */}
      <section className="mt-16 px-10">
        <h2 className="text-2xl font-bold mb-4">Buy Scene Packs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Starter Pack</h3>
            <p className="text-gray-400 mb-4">Includes 5 AI-generated scenes</p>
            <PaymentForm amount={5000} description="Starter Pack" />
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Pro Pack</h3>
            <p className="text-gray-400 mb-4">Includes 20 AI-generated scenes</p>
            <PaymentForm amount={15000} description="Pro Pack" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-6 text-center text-sm text-gray-500 border-t border-gray-700">
        &copy; {new Date().getFullYear()} VisionCut. All rights reserved.
      </footer>
    </div>
  );
}
