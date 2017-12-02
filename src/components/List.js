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
    const groceries_ref = fire.database().ref().child(this.state.list);
    groceries_ref.on('value', snap => {
      const groceriesArray = snap.val();
      const arr = Object.keys(groceriesArray).map(function (key) { return groceriesArray[key]; });
      this.setState({groceries: arr});
    });
    console.log("groceries: " + this.state.groceries);
    console.log('length: ' + this.state.groceries.length);
  }

  addGrocery(grocery) {
    const idOfLastGrocery = this.state.groceries[this.state.groceries.length - 1].id;
    const groceryRef = fire.database().ref().child(this.state.list + '/grocery' + (idOfLastGrocery + 1));
    groceryRef.set({
      id: idOfLastGrocery,
      title: this.refs.newText,
      amount: this.refs.newAmount
    });
  }

  editGrocery(grocery) {
    const groceryRef = fire.database().ref().child(this.state.list + '/grocery' + grocery.id);
    groceryRef.set({
      id: grocery.id,
      title: grocery.title,
      amount: grocery.amount
    });
  }

  deleteGrocery(grocery) {
    console.log('**********' + this.state.list + '/grocery' + grocery.id);
    fire.database().ref().child(this.state.list + '/grocery' + grocery.id).remove();
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
        <textarea className="form-control" ref="newText" defaultValue=''></textarea>
        <textarea className="form-control" ref="newAmount" defaultValue=''></textarea>
        <button onClick={this.addGrocery} className="btn btn-success">Save</button>
        <button onClick={this.handleCancelAddClick} className="btn btn-primary">Cancel</button>
      </li>
      );
    } else {
      return(
        <li className="col-sm-12 col-md-12 list-group-item">
          <button className="btn btn-info" onClick={this.handleAddClick}>Add</button>
        </li>
      );
    }
  }

  render() {
    return(
      <div>
        <h1>{this.state.header}</h1>
        <ul className="list-group">
          {this.renderAdd()}
          {this.state.groceries.map(grocery => {
            return <Grocery
              key={grocery.id}
              grocery={grocery}
              image={this.state.image}
              editGrocery={this.editGrocery}
              deleteGrocery={this.deleteGrocery} />
          })}
        </ul>
      </div>
    );
  }
}
