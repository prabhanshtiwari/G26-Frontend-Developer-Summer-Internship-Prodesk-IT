
import MovieCard from './components/MovieCard';
import { movies } from './data/movies';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 React Movie Cards</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
