import { ArrowLeft, PlayCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function GenrePage() {
  const { genre } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen px-6 py-10 font-sans">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-400 hover:text-white mb-6 transition duration-200"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      {/* Genre Header */}
      <div className="text-center mb-10 animate-fade-in">
        <h1 className="text-4xl font-extrabold uppercase tracking-wide">{genre} Scenes</h1>
        <p className="text-gray-400 mt-2 text-lg">
          Explore cinematic scenes inspired by the {genre} genre.
        </p>
      </div>

      {/* Scene Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3].map((scene) => (
          <div
            key={scene}
            className="rounded-xl overflow-hidden shadow-xl bg-gray-900 border border-gray-700 relative group transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="overflow-hidden">
              <img
                src={`/images/${genre.toLowerCase()}-${scene}.jpg`}
                alt={`Scene ${scene}`}
                className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Glass Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 backdrop-blur-sm p-4 flex flex-col items-start">
              <h3 className="text-xl font-bold">{genre} Scene {scene}</h3>
              <p className="text-sm text-gray-300 mb-4">
                A dramatic AI-crafted moment from the VisionCut archive.
              </p>
              <button className="flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transition">
                <PlayCircle className="w-5 h-5 mr-2" />
                Buy Scene
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
