import { ArrowLeft, PlayCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function GenrePage() {
  const { genre } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-400 hover:text-white mb-6">
        <ArrowLeft className="w-5 h-5 mr-2" /> Back
      </button>

      <h1 className="text-4xl font-bold mb-4">{genre} Scenes</h1>
      <p className="text-gray-400 mb-6">Explore AI-generated cinematic scenes in the {genre} genre.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3].map((scene) => (
          <div key={scene} className="bg-gray-900 rounded-lg overflow-hidden">
            <img
              src={`/images/${genre.toLowerCase()}-${scene}.jpg`}
              alt={`Scene ${scene}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Scene {scene}</h3>
              <p className="text-gray-400 mb-4">A dramatic moment unfolds...</p>
              <button className="flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <PlayCircle className="w-5 h-5 mr-2" /> Buy Scene
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
