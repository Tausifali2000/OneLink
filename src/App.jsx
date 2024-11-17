import Header from "./components/header/Header"
import Games from "./pages/games/Games"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Anime from "./pages/anime/Anime"
import Entertainment from "./pages/entertainment/Entertainment"
import Softwares from "./pages/softwares/Softwares"
import Home from "./pages/home/home"

const router = createBrowserRouter(
  [
    {path:"/",
      element: 
      <div>
        <Header />
        <Home />
      </div>
      
    },
    {
      path: "/games",
      element: 
      <div>
        <Header />
        <Games />
      </div>
    },
    {
      path: "/entertainment",
      element: 
      <div>
        <Header />
        <Entertainment/>
      </div>
    },
    {
      path: "/softwares",
      element: 
      <div>
        <Header />
        <Softwares />
      </div>
    },
    
    
    {
      path: "/anime",
      element: 
      <div>
        <Header />
        <Anime />
      </div>
    }
   
  ]
)

function App() {


  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
