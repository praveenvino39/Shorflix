import "./App.css";
import AppBar from "./Components/AppBar";
import Banner from "./Components/Banner";
import Row from "./Components/Row";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Banner />
      <Row request="trending" section="Trending Now" />
      <Row request="ratedMovies" section="Top Rated Movies" />
      <Row request="ratedTvShows" section="Top Rated TV Shows" />
    </div>
  );
}

export default App;
