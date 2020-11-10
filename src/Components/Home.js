import React from "react";
import Banner from "./Banner";
import Row from "./Row";

function Home() {
  return (
    <div>
      <Banner showInfo={true} />
      <Row type="movie" request="trending" section="Trending Now" />
      <Row type="movie" request="ratedMovies" section="Top Rated Movies" />
      <Row type="tv" request="ratedTvShows" section="Top Rated TV Shows" />
    </div>
  );
}

export default Home;
