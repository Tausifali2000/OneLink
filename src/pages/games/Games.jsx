import React from 'react'
import './Games.css';
import SubCards from '../../components/subCards/SubCards'
import { assets } from '../../assets/assets'


const Games = () => {
  return (
    <>
    <div className="game-container">
    <div className="recommended">
      <h1>Recommended</h1>
    </div>
    <div className="sub-cards-container">
    <SubCards
    name="FitGirl-Repacks"
     url="https://fitgirl-repacks.site/" 
     external={true} 
     image= {assets.fitgirl}/>
    
    <SubCards
      name="RG-Mechanics" 
      url="https://rgmechanics.com/" 
      external={true}
      image= {assets.rgmechanics} />
    
    <SubCards 
      name="Skidrow-Reloaded"
      url= " https://www.skidrowreloaded.com/" 
      external={true}
      image= {assets.skidrow} />
    
    <SubCards 
      name="Steam-Unlocked"
      url="https://steamunlocked.net/" 
      external={true} />
    </div>
    </div>
    
    </>
  )
}

export default Games