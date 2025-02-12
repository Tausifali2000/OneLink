import React from 'react'
import '../games/Games.css';
import SubCards from '../../components/subCards/SubCards';
import Subcards1 from '../../components/subCards1/Subcards1';
import { animeAssets } from '../../assets/anime/animeAssets';


const Anime = () => {
  return (
   <>
   <div className="game-container">
    <div className="recommended">
      <h1>Recommended</h1>
    </div>
    <div className="sub-cards-container">
    <Subcards1
    name="Hianime"
     url="https://hianime.to/home" 
     external={true}
     image = {animeAssets.hianime} 
     />
    
    
    <Subcards1
      name="AniWatch"
      url= "https://aniwatchtv.to/home" 
      external={true}
      image = {animeAssets.aniwatch}
       />
    
   
    </div>
    <div className="sites">
      <h2>Sites</h2>
    </div>

    <div className="more-container">
    
    <Subcards1
      name="Gogo Anime " 
      url="https://gogoanime3.cc/" 
      external={true}
      image={animeAssets.gogoanime}
       />

    <Subcards1
      name="YukiWatch"
      url="https://yukiwatch.su/home" 
      external={true}
      image={animeAssets.yukiwatch} />

    <Subcards1 
      name="Kaido"
      url="https://kaido.to/home" 
      external={true}
      image = {animeAssets.kaido} />

    <Subcards1
      name="Anicrush"
      url="https://anicrush.to/home" 
      external={true}
      image= {animeAssets.anicrush} />
      
    
    
    
    </div>
    </div>
   </>
  )
}

export default Anime