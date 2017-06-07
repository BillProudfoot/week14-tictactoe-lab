import React from 'react';

class TictactoeSquare extends React.Component {

constructor(props) {
  super(props)

}

  render () {
    return (
      <div>
        <button>{this.props.position}</button>
      </div>
    );
  }

}


export default TictactoeSquare;