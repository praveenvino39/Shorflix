import React, { useEffect, useState } from "react";
import requests from "../Services/requests";
import Axios from "axios";
import "../Styles/Banner.css";

function Banner() {
  const [currentMovie, setcurrentMovie] = useState({
    overview: "",
  });
  useEffect(() => {
    const categories = ["trending", "ratedMovies", "ratedTvShows"];
    const randomCategory = Math.trunc(Math.random() * 100) % 3;
    console.log(randomCategory);

    async function getBanner() {
      const randomNumber = Math.trunc((Math.random() * 100) % 10);
      const response = await Axios.get(requests[categories[randomCategory]]);
      setcurrentMovie(response.data.results[randomNumber]);
      return response;
    }
    getBanner();
  }, []);

  return (
    <div style={{ marginBottom: "10px" }}>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path})`,
          backgroundPosition: "10px 10px 10px 10px",
        }}
        id="banner"
      >
        <div id="info-container">
          <div className="movieTitle">
            <h2 style={{ marginBottom: "2px" }}>
              {currentMovie.title || currentMovie.name}
            </h2>
            <p>{currentMovie.overview.substring(0, 100)}...</p>
          </div>
          <button className="banner-btn">MORE</button>
          <button className="banner-btn">WATCH TRAILER</button>
        </div>
      </div>
      <div className="shadowmask"></div>
    </div>
  );
}

export default Banner;
