import React from 'react'
import "./Home.css";
import Cards from '../../components/cards/Cards'
import { homeAssets } from '../../assets/home/homeAssets';




const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="title"><h1>Categories</h1></div>
        <div className="cards-container">
          <Cards name="Games" image={homeAssets.games}/>
          <Cards name="Entertainment" image={homeAssets.entertainment}/>
          <Cards name="Softwares" image={homeAssets.softwares}/>
          <Cards name="Anim" image={homeAssets.anime}/>
        </div>
    </div>
   
      
    </>
  )
}

export default Home