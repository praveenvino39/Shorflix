import "./App.css";
import AppBar from "./Components/AppBar";
import Detail from "./Components/Detail";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />
        <Route exact path="/" component={Home}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
      </Router>
      {/* <Detail /> */}
    </div>
  );
}

export default App;
