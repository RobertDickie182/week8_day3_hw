import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameList from "../Components/GameList";
import Basket from "../Components/Basket";


const GameShopContainer = () => {
    const [games, setGames] = useState ([
        {
            Title: "Super Metroid",
            Genre: "action/platformer",
            Price: "20.00"
        },
        {
            Title: "Zelda: A Link to The Past",
            Genre: "rpg",
            Price: "25.00"
        },
        {
            Title: "Castlevania",
            Genre: "action/platformer",
            Price: "20.00" 
        },
        {
            Title: "Earthbound",
            Genre: "rpg",
            Price: "35.00"
        },
        {
            Title: "Duck Hunt",
            Genre: "shooter/lightgun",
            Price: "50.00" 
        },
        {
            Title: "NHL 94",
            Genre: "sports/ice-hockey",
            Price: "25.00"
        },
        
    ]);

const [user, setUser] = useState({
    name: "Robert", basket: []
})

const addItem = (game) => {
    const updatedUser = {...user}
    updatedUser.basket.push(game)
    setUser(updatedUser)

}



return (
    <div>
       <h1>Robert's Retro Games</h1>
       <Router>
        <Routes>
            <Route path='/games' element={<GameList addItem={addItem} games={games}/>}/>
            <Route path='/basket' element={<Basket/>}/>
            {/* <Route path='/basket' element={<Basket/>}/> */}
        </Routes>
       </Router>
    </div>
)

}

export default GameShopContainer;