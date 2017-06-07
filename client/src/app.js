import React from 'react';
import ReactDOM from 'react-dom';
import TictactoeBoard from '../containers/TictactoeBoard.jsx';

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app');
  ReactDOM.render( <TictactoeBoard/>, targetDiv);
});
