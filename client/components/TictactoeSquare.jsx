import React from 'react';

class TictactoeSquare extends React.Component {

  constructor(props) {
    super(props)
    this.state={ buttonSymbol: this.props.position}
  }


  render () {
    return (
      <div>
      <button onClick={ () => { this.handleClick() } }>{this.state.buttonSymbol}</button>
      </div>
      );
  }

  handleClick () {
  // console.log("HandleClick", this.props.position)

  if (this.state.buttonSymbol !== "X" && this.state.buttonSymbol !== "O"){

    console.log("HandleClick", this.props.position)


    if (this.props.crossesTurn) {
      this.setState({buttonSymbol: "X"})
    }

    else {
      this.setState({buttonSymbol: "O"})
    }
    this.props.recordMove(this.props.position);
    this.props.changeTurn();

    // console.log(this.onClick)
  }
}


}


export default TictactoeSquare;