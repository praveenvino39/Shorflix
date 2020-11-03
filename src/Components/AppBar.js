import React, { useEffect, useState } from "react";
import "../Styles/AppBar.css";

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
        <img
          id="appLogo"
          alt="logo"
          src="https://fontmeme.com/temporary/7be5e9da7245da203f6e2a92390ad3e2.png"
        />
        <div className="avatar">
          <h2 style={{ margin: "0px" }}></h2>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
