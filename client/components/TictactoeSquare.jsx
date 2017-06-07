import React from 'react';

class TictactoeSquare extends React.Component {

  constructor(props) {
    super(props)
    // this.state={ buttonSymbol: this.props.position}
  }


  render () {
    return (
      <div>
      <button onClick={ () => { this.handleClick() } }>{this.props.squareValue}</button>
      </div>
      );

    //      <button onClick={ () => { this.props.handleClick(this.props.buttonSymbol) } }>{this.state.buttonSymbol}</button>
  }

  handleClick () {
  // console.log("HandleClick", this.props.position)

  if (this.props.squareValue !== "X" && this.props.squareValue !== "O" && this.props.winner === "Not Yet"){

    this.props.squareClicked(this.props.position);
    // console.log("HandleClick", this.props.position)


    // if (this.props.crossesTurn) {
    //   this.setState({buttonSymbol: "X"})
    // }

    // else {
    //   this.setState({buttonSymbol: "O"})
    // }
    // this.props.recordMove(this.props.position);
    // this.props.changeTurn();

    // console.log(this.onClick)
  }
}


}


export default TictactoeSquare;