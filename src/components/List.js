import React, { Component } from 'react';
import fire from '../config';
import Grocery from './Grocery';
import MDSpinner from 'react-md-spinner';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header: props.header,
      list: props.list,
      image: props.img,
      add: false,
      groceries: [],
      gesture: false,
      gestureText: '',
      loading: true
    };
  }

  componentDidMount() {
    this.setState({}, ( loading: true ) => {
      const groceries_ref = fire.database().ref(this.state.list);
      let groceriesArray = [];
      groceries_ref.on('value', snap => {
          groceriesArray = snap.val();
          const arr = Object.keys(groceriesArray).map(function (key) { return groceriesArray[key]; });
          this.setState({ groceries: arr });
      }); // sort the data by the title
    });
    this.setState({ loading: false });
  }

  addGrocery(grocery) {
    this.setState({}, ( loading: true ) => {
      const randomNumber = Math.floor((Math.random() * 100000) + 1);
      fire.database().ref(this.state.list + "/" + randomNumber).set({
        id: randomNumber,
        title: this.refs.newText.value,
        dateAdded: new Date().toJSON().slice(0,10),
        amount: this.refs.newAmount.value
      }).then(() => {
        setTimeout(() => {
          this.setState({ add: false, loading: false, gestureText: "מוצר נוסף בהצלחה", gesture: true });
        }, 1000);
      });
    });
    this.setState({ loading: false });
  }

  editGrocery(grocery) {
    this.setState({}, ( loading: true ) => {
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

  deleteGrocery(grocery) {
    this.setState({}, ( loading: true ) => {
      fire.database().ref(this.state.list + "/" + grocery.id).remove().then(() => {
        setTimeout(() => {
          this.setState({ loading: false, gestureText: "המוצר נמחק, תודה אמא", gesture: true });
        }, 1000);
      });
    });
  }

  handleCancelAddClick = () => {
    this.setState({ add: false })
  }

  handleAddClick = () => {
    this.setState({ add: true })
  }

  handleRequestClose = () => {
    this.setState({ gesture: false });
  };

  renderAdd() {
    if(this.state.add) {
      return (
        <li className="col-sm-12 col-md-12 list-group-item">
        <h3>מוצר:</h3>
        <textarea className="form-control" ref="newText" defaultValue=''></textarea>
        <h3>כמות:</h3>
        <textarea className="form-control" ref="newAmount" defaultValue=''></textarea>
        <button onClick={this.addGrocery.bind(this)} className="btn btn-success regular-button"><i className="fa fa-floppy-o" aria-hidden="true"></i> שמרי</button>
        <button onClick={this.handleCancelAddClick} className="btn btn-primary regular-button"><i className="fa fa-times" aria-hidden="true"></i> בטלי</button>
      </li>
      );
    } else {
      return(
        <li className="col-sm-12 col-md-12 list-group-item">
          <button className="btn btn-info add-button" onClick={this.handleAddClick}><i className="fa fa-plus" aria-hidden="true"></i> הוסיפי</button>
        </li>
      );
    }
  }

  render() {
    return(
      <div>
        <h1>{this.state.header}</h1>
        {this.state.loading ? <MDSpinner className="spinner" size={100} /> : <span />}

        {this.renderAdd()}

        <MuiThemeProvider>
          <Snackbar open={this.state.gesture} message={this.state.gestureText}
            autoHideDuration={4000} onRequestClose={this.handleRequestClose} />
        </MuiThemeProvider>

        {this.state.groceries.map(grocery => {
          if (grocery.id !== 0)
            return <Grocery
              key={grocery.id}
              grocery={grocery}
              image={this.state.image}
              editGrocery={this.editGrocery.bind(this)}
              deleteGrocery={this.deleteGrocery.bind(this)} />
          })
        }
      </div>
    );
  }
}
