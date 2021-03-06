import React, { useEffect, useState } from "react";
import "../Styles/AppBar.css";
import LOGO from "../Images/Logo/LOGO.png";
import { Link } from "react-router-dom";

function AppBar() {
  const [scrollOpaticity, setScrollOpaticity] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollOpaticity < 1) {
        const divScroll = window.scrollY / 100;
        setScrollOpaticity(divScroll);
      }
    });
  }, [window.screenY]);
  return (
    <div>
      <div
        className="appBar"
        style={{ backgroundColor: `rgba(20, 20, 20,${scrollOpaticity})` }}
      >
        <Link to="/">
          <img id="appLogo" alt="logo" src={LOGO} width="200" />
        </Link>

        <div className="avatar">
          <h2 style={{ margin: "0px" }}></h2>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
