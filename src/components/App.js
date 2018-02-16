import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import List from './List';
import AddGrocery from './AddGrocery';
import NoMatch from './NoMatch'

class App extends Component {
  render() {
    return (
      <div className="container">
        <MuiThemeProvider>
          <AppBar
            className="hebrew"
            title="אמא תודה מראש אוהב אותך!"
          />
        </MuiThemeProvider>

        <div className="row hebrew">
          <Router>
            <div>
              <div className="col-sm-12 list-group-item text-color">
                <Switch>
                 <Route path="/AddGrocery" component={AddGrocery}/>
                 <Route path="/" component={List}/>
                 <Route path="*" component={NoMatch}/>
               </Switch>
              </div>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
