import React from 'react'
import "./Home.css";
import Cards from '../../components/cards/Cards'
import { assets } from '../../assets/assets';



const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="title"><h1>Categories</h1></div>
        <div className="cards-container">
          <Cards name="Games" image={assets.games}/>
          <Cards name="Entertainment" image={assets.entertainment}/>
          <Cards name="Softwares" image={assets.softwares}/>
          <Cards name="Anime" image={assets.anime}/>
        </div>
    </div>
   
      
    </>
  )
}

export default Home