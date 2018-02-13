import React, { Component } from 'react';

export default class TopSection extends Component {
  render() {
    return(
      <div className="container">
        <div className="jumbotron hebrew jumbotronBackground">
          <h1 className="jumbotronTextHeader">אתר הקניות של אתי</h1>
          <hr />
          <p className="jumbotronText">אמא תודה מראש אוהב אותך!</p>
        </div>
      </div>
    );
  }
}
