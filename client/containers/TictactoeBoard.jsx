import React from 'react';
import TictactoeSquare from '../components/TictactoeSquare.jsx'

class TictactoeBoard extends React.Component {

  constructor(props) {
    super(props)
    let squares = []
    for (let i=0; i <9; i++){
      squares.push("")
    }
    this.state = { 
      squares: squares,
      crossesTurn: true,
      winner: "Not Yet"
    };
    this.changeTurn = this.changeTurn.bind(this);
    this.recordMove = this.recordMove.bind(this);
    this.squareClicked = this.squareClicked.bind(this);
  }

  changeTurn () {


    this.setState((prevState) => { return { crossesTurn: !prevState.crossesTurn} })
  }

  recordMove (position) {
    var squares = this.state.squares 
    squares[position - 1 ] = this.state.crossesTurn? "X":"O" 
    this.setState((prevState) => { return { squares: squares} })
    this.winnerCheck()
  }

  winnerCheck() {
    // Check rows for winners
    for (let i=0; i < 9; i+=3) {
      if (this.state.squares[i+0] !== "" && this.state.squares[i+0]===this.state.squares[i+1] && this.state.squares[i+1]===this.state.squares[i+2]) {
        this.setState((prevState) => {return {winner: this.state.squares[i+0]}})
      }
    }
    // Check columns for winners
    for (let i=0; i < 3; i++) {
      if (this.state.squares[i+0] !== "" && this.state.squares[0+i]===this.state.squares[3+i] && this.state.squares[3+i]===this.state.squares[6+i]) {
        this.setState((prevState) => {return {winner: this.state.squares[0+i]}})
      }
    }
    // Check diagonals for winners
    if (this.state.squares[4] !== "" && this.state.squares[0]===this.state.squares[4] && this.state.squares[4]===this.state.squares[8]) {
      this.setState((prevState) => {return {winner: this.state.squares[4]}})
    }
    if (this.state.squares[4] !== "" && this.state.squares[2]===this.state.squares[4] && this.state.squares[4]===this.state.squares[6]) {
      this.setState((prevState) => {return {winner: this.state.squares[4]}})
    }
  }

  squareClicked(position) {
    this.recordMove(position);
    this.changeTurn();
  }


  render () {

    var table = []
    for (let i = 1; i < 10; i += 3 ){

      var squares = [];
      for (let k = 0; k < 3; k++ ){
        squares.push(<td key={ k+ i}><TictactoeSquare position={ k + i } squareClicked={this.squareClicked} squareValue={this.state.squares[(k+i)-1]} winner={this.state.winner}/></td>);
        //  table.push(square)
      }
      table.push( <tr key={ i }>{squares}</tr> );
    }

    var crossesTurnText = ""
    if (this.state.crossesTurn) {
      crossesTurnText = " Yes "
    }
    else { crossesTurnText = " No "}

      return (
        <div>
        <h1> This is a Tic Tac Toe Board </h1>

        <h3> Crosses Turn: {crossesTurnText} </h3>

        <h3> Winner is: { this.state.winner}</h3>

        <div className="center">
        <table> 
        <tbody>
        { table }
        </tbody>
        </table>
        </div>
        </div>
        );
  }

}


export default TictactoeBoard;