import Header from "./components/header/Header"
import Games from "./pages/games/Games"
import Home from "./pages/home/home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Anime from "./pages/anime/Anime"
import Entertainment from "./pages/movies/Entertainment"

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
