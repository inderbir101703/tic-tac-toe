

import { useState } from "react"
import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import Log from "./Components/Log"
import GameOver from "./Components/GameOver"
import { WINNING_COMBINATIONS } from "./winning-combinations"

const INITIAL_PLAYERNAMES={X:"player 1", O:"player 2"}
const INITIAL_GAMEBOARD=[[null,null,null],[null,null,null],[null,null,null]]

function derivedPlayer(turns){
  let currentPlayer="X"
  if(turns.length>0&&turns[0].player==="X")
  {currentPlayer="O"
}
return currentPlayer
}

function derivedWinner(playerName,gameBoard){
  let winner=null
  
    for(const combination of WINNING_COMBINATIONS){
      const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column]
      const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column]
      const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column]
    
      if(firstSquareSymbol&&firstSquareSymbol==secondSquareSymbol&&thirdSquareSymbol===firstSquareSymbol){
        winner=playerName[firstSquareSymbol]
        }
    }
    return winner
    
}
function deriveGameBoard(gameTurns){
  let gameBoard=[...INITIAL_GAMEBOARD.map((ele)=>[...ele])]
  for(const turn of gameTurns){
    const {square,player}=turn
    const {row,col}=square
    gameBoard[row][col]=player
    }
    return gameBoard
}

function App() {
  const [gameTurns,setGameTurns]=useState([])
  const [playerName,setPlayerName]=useState(INITIAL_PLAYERNAMES)
const activePlayer=derivedPlayer(gameTurns)
const gameBoard=deriveGameBoard(gameTurns)
const winner =derivedWinner(playerName,gameBoard)
const hasDraw=gameTurns.length===9&&!winner


function handleSquareClick(rowInd,colInd){


  setGameTurns((PrevTurns)=>{
  const updatedArray=[{square:{row:rowInd,col:colInd},player:derivedPlayer(PrevTurns)},...PrevTurns]
  return updatedArray
  })
}
function restartGame(){
  setGameTurns([])
}
function updatePlayerName(symbol,name){
  setPlayerName((player)=>{
    return {
      ...player,
      [symbol]:name//[symbol] means this is accessing the symbol of current object
    }
  })
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
     <Player initialName={INITIAL_PLAYERNAMES.X}
     symbol="X" 
     isActive={activePlayer==="X"}
     onchangeName={updatePlayerName}
     />
     <Player initialName={INITIAL_PLAYERNAMES.O}
      symbol="O" 
      onchangeName={updatePlayerName}
      isActive={activePlayer==="O"}/>
        </ol>
        {(winner || hasDraw)&&<GameOver winner={winner} restartGame={restartGame}/>}
     <GameBoard handleSquareClick={handleSquareClick} activePlayerSymbol={activePlayer} turns={gameTurns} gameBoard={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
