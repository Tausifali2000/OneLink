import React from 'react'
import './Games.css';
import SubCards from '../../components/subCards/SubCards'
import { gameAssets } from '../../assets/games/gamesAssets';



const Games = () => {
  return (
    <>
    <div className="game-container">
    <div className="recommended">
      <h1>Recommended</h1>
    </div>
    <div className="sub-cards-container">
    <SubCards
    name="FitGirl Repacks"
     url="https://fitgirl-repacks.site/" 
     external={true} 
     image= {gameAssets.fitgirl}/>
    
    
    <SubCards 
      name="Skidrow & Reloaded"
      url= " https://www.skidrowreloaded.com/" 
      external={true}
      image= {gameAssets.skidrow} />
    
   
    </div>
    <div className="sites">
      <h2>Sites</h2>
    </div>

    <div className="more-container">
    
    <SubCards
      name="RG Mechanics" 
      url="https://rgmechanics.com/" 
      external={true}
      image= {gameAssets.rgmechanics} />

    <SubCards 
      name="Steam Unlocked"
      url="https://steamunlocked.net/" 
      external={true}
      image={gameAssets.steamunlocked} />

    <SubCards 
      name="Any Game"
      url="https://anygame.net/en/?id=293518800000" 
      external={true} 
      image={gameAssets.anygame}/>

    <SubCards 
      name="Online Fix"
      url="https://online-fix.me/" 
      external={true} 
      image={gameAssets.anygame}/>
    
    
    </div>
    </div>
    
    </>
  )
}

export default Games