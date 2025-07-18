import { Film, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import PaymentForm from './PaymentForm';

const genres = ['Drama', 'Sci-Fi', 'Thriller', 'Fantasy'];

const genreStyles = {
  drama: 'bg-red-900 border-red-700 text-white',
  sciFi: 'bg-indigo-900 border-indigo-600 text-white',
  thriller: 'bg-black border-red-700 text-red-500',
  fantasy: 'bg-purple-800 border-purple-500 text-white',
};

const moodClasses = {
  warm: 'bg-gradient-to-br from-yellow-300 via-red-400 to-purple-600',
  cold: 'bg-gradient-to-r from-blue-800 via-cyan-600 to-indigo-900',
  eerie: 'bg-gradient-to-r from-gray-900 via-zinc-700 to-black',
  epic: 'bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500',
};

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      {/* Dark Mode Toggle */}
      <ThemeToggle />

      {/* Header */}
      <header className="text-center py-10 animate-fade-in">
        <Film className="mx-auto w-12 h-12 text-red-500" />
        <h1 className="text-5xl font-bold mt-4">VisionCut</h1>
        <p className="mt-2 text-lg text-gray-400">Cinematic storytelling powered by AI</p>
      </header>

      {/* Welcome Video Section */}
      <section className="relative h-[500px] overflow-hidden mb-16 animate-pan-blur">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="/videos/welcome.mp4"
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="bg-black bg-opacity-60 backdrop-blur-md px-6 py-4 rounded">
            <h2 className="text-white text-4xl font-bold">Welcome to VisionCut</h2>
            <p className="text-gray-300 mt-2 text-lg">
              Create and explore cinematic scenes with the power of AI.
            </p>
            <button className="mt-4 glow-button bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full shadow-md transition hover:scale-105">
              Skip Intro
            </button>
          </div>
        </div>
      </section>

      {/* Genre Gallery */}
      <section className="px-10 mb-10 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-6 animate-credits tracking-wider uppercase">Genres</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {genres.map((genre) => (
            <div
              key={genre}
              className={`relative group rounded-lg overflow-hidden shadow-xl border ${genreStyles[genre.toLowerCase()]}`}
            >
              <img
                src={`/images/${genre.toLowerCase()}.jpg`}
                alt={genre}
                className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition duration-300"
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
        </div>
      </section>

      {/* Mood Filter Showcase */}
      <section className={`px-10 py-6 rounded-lg text-white mb-10 ${moodClasses['epic']} animate-fade-in`}>
        <h2 className="text-2xl font-bold mb-2">Epic Mood Activated</h2>
        <p className="text-gray-200">Experience cinematic drama with enhanced visuals and scoring.</p>
      </section>

      {/* Scene Packs / Payment Options */}
      <section className="px-10 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">Buy Scene Packs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Starter Pack</h3>
            <p className="text-gray-400 mb-4">Includes 5 AI-generated scenes</p>
            <PaymentForm amount={5000} description="Starter Pack" />
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
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
