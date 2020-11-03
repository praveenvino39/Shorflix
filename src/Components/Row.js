import React, { useEffect, useState } from "react";
import Requests from "../Services/requests";
import Axios from "axios";
import "../Styles/Row.css";
import "../Services/requests";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import MovieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import "animate.css/animate.css";

function Row(props) {
  useEffect(() => {
    const requestUrl = Requests[props.request];
    Axios.get(requestUrl).then((response) => {
      setmovies([...response.data["results"]]);
    });
    setTimeout(() => setIsLoading(false), 2000);
  }, [props.request]);
  const [movies, setmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toggleTrailer, setToggleTrailer] = useState(false);
  const [youtubeOptions, setYoutubeOptions] = useState({
    width: "100%",
  });
  const [videoId, setVideoId] = useState("");

  const getTrailerUrl = (title) => {
    MovieTrailer(title)
      .then((response) => {
        const urlLength = response.length;
        setVideoId(response.substring(urlLength - 11, urlLength));
        setToggleTrailer(!toggleTrailer);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <span style={{ marginTop: "50px" }} className="row-name">
        {props.section}
      </span>
      <br />
      <div className="wrap">
        {!isLoading ? (
          <div className="row">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="item animate__animated animate__fadeIn"
              >
                <img
                  onClick={() => {
                    getTrailerUrl(movie.title || movie.name);
                  }}
                  className="poster-img"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                ></img>
              </div>
            ))}
            )
          </div>
        ) : (
          <>
            <div className="row-loader">
              <Loader
                type="TailSpin"
                color="rgb(107, 107, 107)"
                height={50}
                width={50} //3 secs
              />
            </div>
          </>
        )}
      </div>
      {toggleTrailer ? (
        <div
          // className="animate__animated animate__fadeIn"
          style={{ width: "100%" }}
        >
          <YouTube videoId={videoId} opts={youtubeOptions} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Row;
