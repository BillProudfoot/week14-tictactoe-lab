import React from 'react';

class SquareSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    const index = event.target.value;
    this.setState({ selectedIndex: index });

    const square = this.props.countries[index];
    this.props.onSelectCountry(country);
  }
}

export default SquareSelector;