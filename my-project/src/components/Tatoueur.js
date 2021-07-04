import React from "react";
import ReactPlayer from "react-player";
import "../App.css";


const Tatoueur = () => {
  return (
    <div className="flex-col md:flex md:flex-row space-between mx-auto p-10 bg-gray-600">
      <div className="hidden sm:flex sm:items-center ytb-resp  lg:w-2/4">
        <ReactPlayer 
        
          playing={true}
          muted={true}
          url="https://www.youtube.com/watch?v=cX5uS2TrCI4"
        />
      </div>
      <div className="md:mx-auto md:w-2/4 text-white">
        <h2 className="zenloop  font-sans text-6xl text-center p-10">Un peu plus sur le tatouage</h2>
        <p className="zenloop font-sans text-4xl text-justify sm:p-5">
          Un tatouage est un dessin décoratif et/ou symbolique permanent
          effectué sur la peau dont la pratique est attestée dans la société
          humaine depuis le Néolithique. À l'origine, il était le plus souvent
          effectué avec de l'encre de Chine ou des encres à base de charbon ou
          de suif.
        </p>
      </div>
    </div>
  );
};

export default Tatoueur;
