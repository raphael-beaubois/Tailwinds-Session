import React from "react";
import FadeIn from "react-fade-in";

import "../App.css";

// import inkHeader from "../assets/inkHeader2.jpeg";

function Header() {
  return (
    <div className="bg-black">
      <FadeIn transitionDuration={4300}>
        <div className="bg-black bg-red bacground-url-cell md:bacground-url zenloop ">
          <h1
            className="text-center md:text-right text-white shadow-2xl text-8xl h1-header"
          >
            Tattoo Master Montréal{" "}
          </h1>
          <div className="h-screen "></div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Header;
