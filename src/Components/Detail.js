import Axios from "axios";
import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import ApiKey from "../Services/apikey";
import "../Styles/Detail.css";
import Rating from "@material-ui/lab/Rating";
import Loader from "react-loader-spinner";

function Detail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [toggleYoutube, setToggleYoutube] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [rating, setRating] = useState(4);
  const [movie, setmovie] = useState({});
  const getTrailerUrl = (title) => {
    movieTrailer(title)
      .then((response) => {
        console.log(response);
        const urlLength = response.length;
        setVideoId(response.substring(urlLength - 11, urlLength));
      })
      .catch((error) => console.log(error));
  };

  async function getMovieDetail(id) {
    console.log(props);
    const response =
      props.location.type !== "movie"
        ? await Axios.get(
            `https://api.themoviedb.org/3/tv/${id}?api_key=${ApiKey}&language=en-US`
          )
        : await Axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`
          );
    console.log(response);
    setmovie(response.data);
    setRating(response.data.vote_average / 2);
    setIsLoading(false);
  }

  useEffect(() => {
    getMovieDetail(props.match.params.id);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="detail-loader">
          <Loader
            type="TailSpin"
            color="rgb(107, 107, 107)"
            height={50}
            width={50} //3 secs
          />
        </div>
      ) : (
        <div>
          {toggleYoutube ? (
            <div
              className="player-container"
              onClick={() => setToggleYoutube(false)}
            >
              <div className="player">
                <div onClick={() => setToggleYoutube(false)} className="close">
                  x
                </div>
                <YouTube
                  opts={{
                    width: "100%",
                    objectFit: "contain",
                  }}
                  videoId={videoId}
                />
              </div>
            </div>
          ) : null}

          <div className="detail-info">
            <div className="image-container">
              <img
                id="poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                className="poster"
              />
            </div>
            <div className="detail-container">
              <p id="title">{movie.title || movie.name}</p>
              <div className="rating">
                <Rating
                  name="hover-feedback"
                  max={5}
                  value={rating}
                  precision="0.5"
                  readOnly
                />
              </div>
              <p className="movie-detail-info">Rating: {rating}</p>
              <p className="movie-detail-info">
                Language: {movie.original_language}
              </p>
              <p id="release-date">{movie.release_date}</p>
              <p id="description">{movie.overview}</p>
              <button
                onClick={() => {
                  window.location.href = "#poster";
                  getTrailerUrl(movie.title || movie.name);
                  setToggleYoutube(true);
                }}
                id="action-btn"
              >
                Watch Trailer
              </button>
            </div>
            <div style={{ height: "100px" }}></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
