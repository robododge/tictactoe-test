import React from 'react'
import Board from './TTTBoard'
import Resetter from './TTTReset'

import  './ttt.css'

export default class Game extends React.Component {

  constructor() {
    super();
    this.state = this.initGame()
  }

  initGame(){
  	console.log('Init Game!')
    return {
      history: [ {
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber:0
    }
  }

  resetGame() {
    //console.log("CLEARING STATE BACK TO START");
    this.setState(this.initGame())
  }

  handleClick(i) {
    let {history,stepNumber} = this.state;

    //console.log('HandleClick stepNumber|history:',stepNumber,history);
    //console.log('Who is this object: ',this);
    const current = history[history.length-1];

    //console.log("about to read squares from current hist", current);
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
}

  jumpTo(step) {
    let {history,stepNumber} = this.state;
    history = history.slice(0,step+1)
    //console.log('jumpTo stepNumber|history:',stepNumber,history)
    this.setState({
        stepNumber: step,
        xIsNext: (step % 2) ? false : true,
        history: history
        });
   }

  render() {
    //console.log("State in render: ",this.state);
    const {history,xIsNext,stepNumber} = this.state;

    const current = history[stepNumber];
    //console.log("Render current hist object:" , current);
    const winner = calculateWinner(current.squares);

    let status = (winner)? `Winner is ${winner}!`:`Next player: ${ xIsNext?'X':'O'}`;

    //New history handler
    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
        return (
          <li key={move}>
            <button className="btn btn-link"  onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        )
    })

    return (
      <div className="game row">
        <div className="game-board col-xs-8 col-sm-5 col-md-4">
          <Board squares={current.squares} clicker={this.handleClick.bind(this)}/>
        </div>
        <div className="col-xs-4 col-sm-3 col-md-4">
         {winner && <Resetter resetFunc={this.resetGame.bind(this)}/>}
        </div>
        <div className="game-info col-xs-12 col-sm-4 col-md-4">
          <div><h2>{status}</h2></div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
