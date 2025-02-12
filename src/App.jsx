import Header from "./components/header/Header";

import Games from "./pages/games/Games";
import { HashRouter, Routes, Route } from "react-router-dom";
import Anime from "./pages/anime/Anime";
import Entertainment from "./pages/entertainment/Entertainment";
import Softwares from "./pages/softwares/Softwares";
import Home from "./pages/home/Home.jsx";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" 
        element={<Home />} />
        
        <Route path="/games" 
        element={<Games />} />
        
        <Route path="/entertainment" 
        element={<Entertainment />} />
        
        <Route path="/softwares" 
        element={<Softwares />} />
        
        <Route path="/anime" 
        element={<Anime />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
