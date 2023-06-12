import React from 'react'; 
import './gameMenu.css'; 




const GameMenu = () => {

    return (
        <div className='gameMenuContainer'>
            <a href='https://eddiebaum.github.io/MiniMaxTicTacToe/'><div className='gameMenuBox' id='TTTbox'>Tic-Tac-Toe</div></a>
            <a href='https://eddiebaum.github.io/Rock_Paper_Scissors/'><div className='gameMenuBox' id='RPSbox'>Rock-Paper-Scissors</div></a>
        </div>
    )
}; 

export default GameMenu; 