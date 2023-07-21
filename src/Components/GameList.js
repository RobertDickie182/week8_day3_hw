import React from "react";
import Game from "./Game";

const GameList = ({games, addItem}) => {

    
    const gameItems = games.map((game, index) => {
        return <Game game={game} key={index} addItem={addItem}/>
    });
    
    
    
        return (

        <div>
            <ul>
                {gameItems}
            </ul> 
        </div>
)
        }

export default GameList;


