import React from "react";

import bigmike from "../assets/bigmike.jpeg";
import spoutnik from "../assets/spoutnik.jpeg";
import colvert from "../assets/colvert.jpeg";


const Staff = () => {
  return (
    <div className="sm:p-16 sm:pt-32 bg-gradient-to-b text-white from-gray-900 to-gray-700 py-32 ">
      <div
        id="container"
        class="container  mx-auto px-4 md:px-12"
      >
        <div class="flex  flex-wrap">
          <div class="mt-5  group p-2 shadow lg:p-4 flex-grow lg:flex-grow-0 md:1/2 lg:w-1/3  cursor-pointer">
            <div class="bg-purple-800 text-white rounded-lg overflow-hidden">
              <img
                  class="relative bottom-0 transform hover:scale-110 transition duration-200 ease w-full h-80 object-cover"
                src={bigmike}
              ></img>
              <div class="flex items-center justify-between p-2 md:p-4 ">
                <h2 class="text-2xl font-semibold">Big Mike</h2>
                <p class="text-gray-400">11 ans d'expérience</p>
              </div>
              <p class="p-2 md:p-4 flex-grow  text-white text-opacity-70 group-hover:text-opacity-100">
                {" "}
                Some text lorem ipsoum text real fake test textSome text lorem
                ipsoum text real fake test textSome text lorem ipsoum text real
                fake test text
              </p>
              <div class="p-2 md:p-4 flex justify-between items-center">
                <h3 class="font-bold">Author</h3>
                <a
                  class="no-underline text-gray-400 hover:text-gray-800"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </div>
            </div>
          </div>{" "}
          <div class=" mt-5 group p-2 shadow lg:p-4 flex-grow lg:flex-grow-0 md:1/2 lg:w-1/3  cursor-pointer">
            <div class="bg-purple-800 rounded-lg overflow-hidden">
              <img
                  class="relative bottom-0 transform hover:scale-110 transition duration-200 ease w-full h-80 object-cover"
                  src={spoutnik}
              ></img>
              <div class="flex items-center justify-between p-2 md:p-4 ">
                <h2 class="text-2xl font-semibold">Spoutnik</h2>
                <p class="text-gray-400">4 ans d'expérience</p>
              </div>
              <p class="p-2 md:p-4 flex-grow  text-white text-opacity-70 group-hover:text-opacity-100">
                {" "}
                Some text lorem ipsoum text real fake test textSome text lorem
                ipsoum text real fake test textSome text lorem ipsoum text real
                fake test text
              </p>
              <div class="p-2 md:p-4 flex justify-between items-center">
                <h3 class="font-bold">Author</h3>
                <a
                  class="no-underline text-gray-400 hover:text-gray-800"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </div>
            </div>
          </div>{" "}
          <div class=" mt-5 group p-2 shadow lg:p-4 flex-grow lg:flex-grow-0 md:1/2 lg:w-1/3 cursor-pointer">
            <div class="bg-purple-800 rounded-lg overflow-hidden">
              <div class="overflow-hidden ">
                <img
                  class="relative bottom-0 transform hover:scale-110 transition duration-200 ease w-full h-80 object-cover"
                  src={colvert}
                ></img>
              </div>
              <div class="flex items-center justify-between p-2 md:p-4">
                <h2 class="text-2xl font-semibold">Colvert</h2>
                <p class="text-gray-400">6 ans d'expérience</p>
              </div>
              <p class="p-2 md:p-4 flex-grow  text-white text-opacity-70 group-hover:text-opacity-100">
                {" "}
                Some text lorem ipsoum text real fake test textSome text lorem
                ipsoum text real fake test textSome text lorem ipsoum text real
                fake test text
              </p>
              <div class="p-2 md:p-4 flex justify-between items-center">
                <h3 class="font-bold">Author</h3>
                <a
                  class="no-underline text-gray-400 hover:text-gray-800"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
