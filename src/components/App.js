import React, { Component } from 'react';
import TopSection from './TopSection';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TopSection />
        <div className="row hebrew">
          <div className="col-sm-12 list-group-item">
            <List header="רשימת קניות" list="groceriesEti" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
