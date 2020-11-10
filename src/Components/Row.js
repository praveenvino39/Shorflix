import React, { useEffect, useState } from "react";
import Requests from "../Services/requests";
import Axios from "axios";
import "../Styles/Row.css";
import "../Services/requests";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "animate.css/animate.css";
import { Link } from "react-router-dom";

function Row(props) {
  useEffect(() => {
    const requestUrl = Requests[props.request];
    Axios.get(requestUrl).then((response) => {
      setmovies([...response.data["results"]]);
    });
    setTimeout(() => setIsLoading(false), 500);
  }, [props.request]);
  const [movies, setmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
              <Link
                to={{
                  pathname: `/detail/${movie.id}`,
                  type: props.type,
                }}
                key={movie.id}
              >
                <div
                  key={movie.id}
                  className="item animate__animated animate__fadeIn"
                >
                  <div
                    className="poster-img"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                    }}
                  ></div>
                </div>
              </Link>
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
    </div>
  );
}

export default Row;
