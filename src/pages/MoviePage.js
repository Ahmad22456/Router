import { useParams } from "react-router-dom";
import Movies from "../components/Movies";
import YouTube from "react-youtube";

function MoviePage() {
  const { id } = useParams();

  const movieSelected = Movies.find((x) => x.id === Number(id));

  return (
    <section className="videoSection" >

      <div className="imageBackground" style={{backgroundImage: `url(${movieSelected.background})`}}></div>
      <YouTube className="youtubeVideo" videoId={movieSelected.trailer}/>
      <p>{movieSelected.description}</p>
    </section>
  );
}

export default MoviePage;
