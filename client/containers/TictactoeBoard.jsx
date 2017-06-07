import React from 'react';
import TictactoeSquare from '../components/TictactoeSquare.jsx'

class TictactoeBoard extends React.Component {

  constructor(props) {
    super(props)
    this.state = { squares: [],
      crossesTurn: true
     }
  }

  render () {

     

      var table = []
      for (let i = 1; i < 10; i += 3 ){

        var squares = [];
        for (let k = 0; k < 3; k++ ){
          squares.push(<td key={ k+ i}><TictactoeSquare position={ k + i } /></td>);
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
     
      <table> 
      <tbody>
      { table }
      </tbody>
      </table>
      </div>
    );
  }

}


export default TictactoeBoard;