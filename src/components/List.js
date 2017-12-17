import React, { Component } from 'react';
import fire from '../config';
import Grocery from './Grocery';

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header: props.header,
      list: props.list,
      image: props.img,
      add: false,
      groceries: []
    };
  }

  componentDidMount() {
    const groceries_ref = fire.database().ref(this.state.list);
    let groceriesArray = [];
    groceries_ref.on('value', snap => {
        groceriesArray = snap.val();
        const arr = Object.keys(groceriesArray).map(function (key) { return groceriesArray[key]; });
        this.setState({ groceries: arr });
    }); // sort the data by the title
  }

  addGrocery(grocery) {
    const randomNumber = Math.floor((Math.random() * 100000) + 1);
    fire.database().ref(this.state.list + "/" + randomNumber).set({
      id: randomNumber,
      title: this.refs.newText.value,
      dateAdded: new Date().toJSON().slice(0,10),
      amount: this.refs.newAmount.value
    });
    this.setState({ add: false });
  }

  editGrocery(grocery) {
    fire.database().ref(this.state.list + "/" + grocery.id).set({
      id: grocery.id,
      title: grocery.title,
      dateAdded: grocery.dateAdded,
      amount: grocery.amount
    });
  }

  deleteGrocery(grocery) {
    fire.database().ref(this.state.list + "/" + grocery.id).remove();
  }

  handleCancelAddClick = () => {
    this.setState({ add: false })
  }

  handleAddClick = () => {
    this.setState({ add: true })
  }

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
        {this.renderAdd()}
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
