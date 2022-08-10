import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import SuperHero from "./components/Superhero"
import Profil from "./components/Profil"
import Bawah from "./components/Bawah"
import Artikel from "./components/Artikel"
import "./style/landingPage.css"

function Beranda() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="artikel">
        <Artikel />
      </div>

      <div className="superhero">
        <SuperHero />
      </div>

      <div className="profil">
        <Profil />
      </div>

      <div className="bawah">
        <Bawah />
        
    </div>
    </div>
    
  )
}

export default Beranda;
