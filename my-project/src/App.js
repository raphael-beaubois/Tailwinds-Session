import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import TattooCaroussel from "./components/TattooCaroussel";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import Tatoueur from "./components/Tatoueur";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Staff from "./components/Staff";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Header />
          <Home />
          <TattooCaroussel />
          <Tatoueur />
          <Footer />
        </Route>

        <Route exact path="/gallery">
          <Navbar />
          <Gallery />
          <Footer />
        </Route>
        
        <Route exact path="/about">
          <Navbar />
          <Staff />
          <Footer />
        </Route>
        
        <Route exact path="/contact">
          <Navbar />
          <Contact />
          <Footer />
        </Route>
        
      </Switch>
    </>
  );
}

export default App;
