import React from "react";
import FadeIn from "react-fade-in";

import inkHome from "../assets/home-img.jpeg";
import "../App.css";


function Home() {
  return (
    <div className="flex flex-col bg-gray-700 lg:flex-row ">

      <div className="sm:p-20 p-5 text-center text-gray-100 h-4/5	lg:w-2/4 sm:flex flex-col justify-center">
          <FadeIn transitionDuration={6300}>
        <h1 className="zenloop font-sans text-6xl text-center p-10">Tattoo Master Montréal</h1>
        <p className="zenloop font-sans text-4xl text-justify sm:p-5">
          O Studio est une équipe professionnelle qui vous accueille
          chaleureusement au cœur du vieux St-Montreal. Soucieux de sa
          clientèle, tout nos projets sont des créations uniques et
          personnalisées. Récipiendaire de prix, c’est en toute confiance que
          vous pouvez vous laissez conseiller, pour faire de votre expérience un
          moment des plus agréables
        </p>
        <button
          type="button"
          class=" w-3/4 sm:w-2/5  flex-end m-12 bg-purple-800 text-white px-6 py-3 rounded-lg font-medium mx-3 hover:shadow-lg hover:bg-gray-800 transition duration-200 each-in-out"
        >
          Prendre rendez-vous !
        </button>
      </FadeIn>
      </div>
      <div className="p-5 md:w-2/5	mx-auto  mg-auto my-auto flex justify-center item-center">
        <img
          className="sm:w-screen sm:h-full md:w-50 md:40 sm:w-25"
          src={inkHome}
          alt="1"
        />
        ,
      </div>
    </div>
  );
}

export default Home;
