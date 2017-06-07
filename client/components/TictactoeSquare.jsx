import React from 'react';

class TictactoeSquare extends React.Component {

  constructor(props) {
    super(props)  
  }


  render () {
    return (
      <div>
      <button onClick={ () => { this.handleClick() } }>{this.props.squareValue}</button>
      </div>
      );
  }

  handleClick () {
    if (this.props.squareValue !== "X" && this.props.squareValue !== "O" && this.props.winner === "Not Yet"){

      this.props.squareClicked(this.props.position);
    }
  }


}


export default TictactoeSquare;