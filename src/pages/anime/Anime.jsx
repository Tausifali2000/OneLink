import React from 'react'
import '../games/Games.css';
import SubCards from '../../components/subCards/SubCards';


const Anime = () => {
  return (
   <>
   <div className="game-container">
    <div className="recommended">
      <h1>Recommended</h1>
    </div>
    <div className="sub-cards-container">
    <SubCards
    name="Hianime"
     url="https://hianime.to/home" 
     external={true} 
     />
    
    
    <SubCards 
      name="AniWatch"
      url= "https://aniwatchtv.to/home" 
      external={true}
       />
    
   
    </div>
    <div className="sites">
      <h2>Sites</h2>
    </div>

    <div className="more-container">
    
    <SubCards
      name="Gogo Anime " 
      url="https://gogoanime3.cc/" 
      external={true}
       />

    <SubCards 
      name="YukiWatch"
      url="https://yukiwatch.su/home" 
      external={true} />

    <SubCards 
      name="Kaido"
      url="https://kaido.to/home" 
      external={true} />

    <SubCards 
      name="Anicrush"
      url="https://anicrush.to/home" 
      external={true} />
      
    
    
    
    </div>
    </div>
   </>
  )
}

export default Anime