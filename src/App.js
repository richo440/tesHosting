import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import SuperHero from "./components/Superhero"
import Profil from "./components/Profil"
import Bawah from "./components/Bawah"
import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
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

export default App
