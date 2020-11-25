import React from 'react';

import './styles.css';

const Sidebar = (props) => {
    return (
        <div className="t-sidebar">
             <img className="pokeIcon" src='https://icon-library.com/images/pokedex-icon/pokedex-icon-19.jpg' alt="profile"  onClick={props.clickPoke}/>
            <div className="t-icon-container">
                
                      <img className="iconP home" src="/img/icons/honor.png" alt="home" ></img>  
                     
                      <img className="iconP about" src="/img/icons/about.png" alt="about"onClick={props.clickAbout}></img>
                      
                      
                  
            </div>
            <img className="pokeIcon" src="/img/icons/poke3d.png" alt="poke3d"></img>
        </div>
    )
}

export default Sidebar;