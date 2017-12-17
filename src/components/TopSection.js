import React, { Component } from 'react';

export default class TopSection extends Component {
  render() {
    return(
      <div className="container">
        <div className="jumbotron jumbotronBackground hebrew">
          <h1 className="jumbotronTextHeader">אתר הקניות של אתי וגילה</h1>
          <hr />
          <p className="jumbotronText">כניסה לאימהות בלבד - אין כניסה לחיימים ויעקבים למיניהם</p>
          <p className="jumbotronText">אנו מקבלים רק 100%</p>
        </div>
      </div>
    );
  }
}
