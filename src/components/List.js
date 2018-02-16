import React, { Component } from 'react';
import fire from '../config';
import _ from 'lodash';
import Grocery from './Grocery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import CircularProgress from 'material-ui/CircularProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header: "רשימת קניות",
      list: "groceriesEti",
      add: false,
      groceries: [],
      gesture: false,
      gestureText: '',
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      const groceries_ref = fire.database().ref(this.state.list);
      let groceriesArray = [];

      // var ref = firebase.database().ref("dinosaurs");
      // ref.orderByChild("title").on("child_added", function(snapshot) {
      //   console.log(snapshot.key);
      // });

      groceries_ref.orderByChild("title").on('value', snap => {
        groceriesArray = snap.val();
        const arr = Object.keys(groceriesArray).map(function (key) { return groceriesArray[key]; });
        this.setState({ groceries: arr });
      }); // sort the data by the title
    });
    this.setState({ loading: false });
  }

  // componentWillUpdate(nextProps, nextState) {
  //   this.setState({ loading: true });
  //   // console.log(this.state.groceries);
  //   // console.log(nextState.groceries);
  //   if ((this.state.groceries !== nextState.groceries)) { // check if array has changed
  //     const tempGroceries = _.sortBy(this.state.groceries, [(item) => { return item.title; }]);
  //     console.log(tempGroceries);
  //     this.setState({ groceries: tempGroceries });
  //     this.sortGroceries();
  //   }
  //   this.setState({ loading: false });
  // }
  editGrocery = (grocery) => {
    this.setState({ loading: true }, () => {
      fire.database().ref(this.state.list + "/" + grocery.id).set({
        id: grocery.id,
        title: grocery.title,
        dateAdded: grocery.dateAdded,
        amount: grocery.amount
      }).then(() => {
        setTimeout(() => {
          this.setState({ loading: false, gestureText: "מוצר עודכן בהצלחה", gesture: true });
        }, 1000);
      });
    });
  }

  deleteGrocery = (grocery) => {
    this.setState({ loading: true }, () => {
      fire.database().ref(this.state.list + "/" + grocery.id).remove().then(() => {
        setTimeout(() => {
          this.setState({ loading: false, gestureText: "המוצר נמחק, תודה אמא", gesture: true });
        }, 1000);
      });
    });
  }

  handleAddClick = () => {
    this.props.history.push('/addGrocery');
  }

  handleRequestClose = () => {
    this.setState({ gesture: false });
  };

  render() {
    return(
      <div>
        <h1>{this.state.header}</h1>
        <MuiThemeProvider>
          <div>
            {this.state.loading ? <CircularProgress className="spinner" size={80} thickness={8} /> : <span />}
            <Snackbar open={this.state.gesture} message={this.state.gestureText}
              autoHideDuration={4000} onRequestClose={this.handleRequestClose} />

              <FloatingActionButton className="float" onClick={this.handleAddClick}>
                <ContentAdd />
              </FloatingActionButton>

          </div>
        </MuiThemeProvider>

        {
          this.state.groceries.map(grocery => {
          if (grocery.id !== 0)
            return <Grocery
              key={grocery.id}
              grocery={grocery}
              editGrocery={this.editGrocery}
              deleteGrocery={this.deleteGrocery} />
          })
        }
      </div>
    );
  }
}
