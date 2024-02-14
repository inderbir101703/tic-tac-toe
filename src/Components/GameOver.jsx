export default function GameOver({winner,restartGame}){
    return <div id="game-over">
        <h1>Game Over</h1>
        {winner&&<p>{winner} won !!</p>}
        {!winner&& <p>It is a draw</p>}
        <p><button onClick={restartGame}>Rematch!</button></p>
    </div>
}