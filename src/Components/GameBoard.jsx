import { useState } from "react"


export default function GameBoard({handleSquareClick,activePlayerSymbol,gameBoard}){

return <ol id="game-board">
    {gameBoard.map((row,rowInd)=>{  

        return <li key={rowInd}><ol>
             {row.map((playerSymbol,colInd)=><li key={colInd}><button disabled={playerSymbol!==null} onClick={()=>handleSquareClick(rowInd,colInd)}>{playerSymbol}</button></li>)}
           
             </ol></li>
    })}
</ol>
}