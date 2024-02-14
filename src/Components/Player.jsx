import { useState } from "react"

function Player({initialName,symbol,isActive,onchangeName}){
const [name,setName]=useState(initialName)
const [editPhase,setEditPhase]=useState(true)
//setting a state based on previous value it is sttrong recommended  to pass a function like line 13....setEditPhase(!editPhase)..react does not update the state immediately ...it schdu
//schdules after sometime..so should use function in setstate... using in function it gets the latest state value and then sets...best pratice and recoomendation fron react team
function handleClick(event){
    setName(event.target.value)
    onchangeName(symbol,event.target.value)
 
}
    return  <li className={isActive?'active':undefined}> <span className="player">
        <input  disabled={editPhase} type="text" onChange={handleClick} value={name}/>
    <span className="player-symbol">{symbol}</span>
    <button onClick={()=>setEditPhase((edit)=>!edit)}>{editPhase ? 'edit ':'save'}</button>
     </span></li>
}
export default Player