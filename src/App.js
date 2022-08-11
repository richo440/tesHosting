import {Routes, Route} from "react-router-dom";
import Beranda from "./Beranda";
import Isiberita from "./pages/Isiberita";
import BeritaFull from './pages/Detailberita';
import Isiartikel from "./pages/Isiartikel";
import ArtikelFull from './pages/Detailartikel';
import Isifoto from "./pages/Isifoto";
import Isivideo from "./pages/Isivideo";

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Beranda/>} />
      <Route path="Isiberita" element={<Isiberita/>} />
      <Route path='/BeritaFull/:id' exact element={<BeritaFull />} />
      <Route path='/ArtikelFull/:id' exact element={<ArtikelFull />} />
      <Route path="Isiartikel" element={<Isiartikel/>} />
      <Route path="Isifoto" element={<Isifoto/>} />
      <Route path="Isivideo" element={<Isivideo/>} />
    </Routes>
    </> 
  );
}

export default App;