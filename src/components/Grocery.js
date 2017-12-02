import React, { Component } from 'react';
// import { Button } from 'mdbootstrap';

export default class Grocery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.grocery.title,
      amount: props.grocery.amount,
      editing: false
    };
  }

  saveClick = () => {
    this.props.editGrocery(this.props.grocery);
  }

  handleDeleteClick = () => {
    this.props.deleteGrocery(this.props.grocery);
  }

  handleEditClick = () => {
    this.setState({ editing: true })
  }

  handleCancelEditClick = () => {
    this.setState({ editing: false })
  }

  renderEdit() {
    return(
      <li className="col-sm-12 col-md-12 list-group-item">
        <textarea className="form-control" ref="newText" defaultValue={this.state.title}></textarea>
        <textarea className="form-control" ref="newAmount" defaultValue={this.state.amount}></textarea>
        <button onClick={this.saveClick} className="btn btn-success">Save</button>
        <button onClick={this.handleCancelEditClick} className="btn btn-primary">Cancel</button>
      </li>
    );
  }

  renderRegular() {
    return(
      <li className="col-sm-12 col-md-12 list-group-item">
        <img className="mom-image img-rounded" src={this.props.image} alt="mom" />
        <h2 className="grocery-data">{this.state.title}</h2>
        <h3 className="grocery-data">כמות: {this.state.amount}</h3>
        <button className="btn btn-warning" onClick={this.handleEditClick}>Edit</button>
        <button className="btn btn-danger" onClick={this.handleDeleteClick}>Delete</button>
      </li>
    );
  }

  render() {
    if(this.state.editing) {
      return this.renderEdit();
    }
    else {
      return this.renderRegular();
    }
  }
}
