
import styles from './MovieCard.module.css';

function MovieCard({ movie }) {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden w-72 ${styles.card}`}>
      <img src={movie.image} alt={movie.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-500">{movie.subtitle}</p>
        <p className="text-sm mt-2 text-gray-700">{movie.description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
          <span className="text-blue-500 font-bold">{movie.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
