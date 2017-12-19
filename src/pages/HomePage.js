import React from 'react';
import Game from '../components/ttt/TTTGame'


export default class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      		<Game />
      </div>
    );
  }
}
