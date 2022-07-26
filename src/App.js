import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Batasslide from "./components/Batasslide"
import Trending from "./components/Trending"
import SuperHero from "./components/Superhero"
import Bawah from "./components/Bawah"
import "./style/landingPage.css"
import "./style/Bawah.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div>
        <Batasslide />
      </div>
      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <SuperHero />
      </div>

      <div className="bawah">
        <Bawah />
      </div>
    </div>
  )
}

export default App
