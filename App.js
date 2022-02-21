import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
   
  const [turn,setturn]=useState('x');
  const [cells,setcell]=useState(Array(9).fill(''));
  const [winner,setwinner]=useState();
  const Cell = ({num}) => {
     
      
    return <td  onClick={() => handleclick(num)}>{cells[num]}</td>;
     
     
  };
  const checkforwinners=(squares)=>{
     
    let combos={
      across : [
        [0,1,2],
        [3,4,5],
        [6,7,8],
      ],
      down : [
        [0,3,6],
        [1,4,7],
        [2,5,8],
      ],
      diagonal : [
        [0,4,8],
        [2,4,6],
      ]
    };
    for(let combo in combos){
      combos[combo].forEach((pattern)=>{
        if(
          squares[pattern[0]]==''||
          squares[pattern[1]]==''||
          squares[pattern[2]]==''
        ){

        }
        else if(
          squares[pattern[0]]==squares[pattern[1]]&&
          squares[pattern[1]]==squares[pattern[2]]
        ){
          setwinner(squares[pattern[0]]);
           
           
           
           
        }
      });
    }
  };
   
  const handleclick = (num) => {
    if(cells[num]!=''){
      alert("already done");
      return;
    }
    let squares=[...cells];
    if(turn=='x'){
      squares[num]='x';
      setturn('o');
    }
    else{
      squares[num]='o';
      setturn('x');
    }
    checkforwinners(squares);
    
    setcell(squares);
     
  };
  const handleRestart=()=>{
    setwinner(null);
    setcell(Array(9).fill(''));
    setturn('x');
  };
  return (
    <div className="App">
       <h1>Tic-Tac-Toe</h1>
       
       <table>
         <tbody>
           <tr>
             <Cell num={0} />
             <Cell num={1} />
             <Cell num={2} />
           </tr>
           <tr>
             <Cell num={3} />
             <Cell num={4} />
             <Cell num={5} />
           </tr>
           <tr>
             <Cell num={6} />
             <Cell num={7} />
             <Cell num={8} />
           </tr>
         </tbody>
          
       </table>
       {winner && (
           <>
           <h1>{winner} is the winner</h1>
           
            
           </>
         )} 
         <button onClick={() => handleRestart()}>Play Again</button>
    </div>
  );
}

export default App;
