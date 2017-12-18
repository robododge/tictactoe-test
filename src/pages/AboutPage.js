import React from 'react';


export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      	<div className="row">
      	  <div className="col-xs-12">
      	     <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
      	     Simple TicTacToe User interface deployed from Docker image
      	  </div>
      	</div>
      </div>
    )
  }
}