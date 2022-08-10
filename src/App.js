import {Routes, Route} from "react-router-dom";
import Beranda from "./Beranda";
import Isiberita from "./Isiberita";
import Isiartikel from "./Isiartikel";
import Isifoto from "./Isifoto";
import Isivideo from "./Isivideo";

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Beranda/>} />
      <Route path="Isiberita" element={<Isiberita/>} />
      <Route path="Isiartikel" element={<Isiartikel/>} />
      <Route path="Isifoto" element={<Isifoto/>} />
      <Route path="Isivideo" element={<Isivideo/>} />
    </Routes>
    </> 
  );
}

export default App;