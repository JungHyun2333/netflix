import { Diversity1 } from "@mui/icons-material";
import { getMovie } from "actions/movie-action";

export async function generateMetadata({ params, searchParams }) {
  const movie = await getMovie(params.id);
  console.log(searchParams);

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [movie.image_url],
    },
  };
}

export default async function Detail({ params }) {
  const movie = await getMovie(params.id);

  return (
    <div>
      {!movie ? (
        <div>Movie does not exists</div>
      ) : (
        <main className="max-w-lg flex flex-col items-center mt-5">
          <img src={movie.image_url} alt="" className="max-w-64 mb-3" />
          <h2 className="mb-3">{movie.title}</h2>
          <h4 className="border-b w-full border-gray-400 pb-1 mb-3">overview</h4>
          <p className="w-full mb-5">{movie.overview}</p>
          <h4 className="border-b w-full border-gray-400 pb-1 mb-3">vote_average</h4>
          <p className="w-full mb-4">{movie.vote_average}</p>
          <h4 className="border-b w-full border-gray-400 pb-1 mb-3">popularity</h4>
          <p className="w-full mb-4">{movie.popularity}</p>
          <h4 className="border-b w-full border-gray-400 pb-1 mb-3">release date</h4>
          <p className="w-full mb-4">{movie.release_date}</p>
        </main>
      )}
    </div>
  );
}
