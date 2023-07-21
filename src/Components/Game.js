import React from 'react';


const Game = ({ game, addItem}) => {

const handleClick = () => {
addItem(game)
}

    return (
        
        <div>
        <li>{game.Title}</li>
        <li>{game.Genre}</li>
        <li>{game.Price}</li>
        <button onClick={handleClick}>Add to basket</button>
        </div>
    )

}

export default Game;