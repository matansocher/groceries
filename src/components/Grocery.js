import React, { Component } from 'react';
// import { Button } from 'mdbootstrap';

export default class Grocery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.grocery.title,
      amount: props.grocery.amount,
      dateAdded: props.grocery.dateAdded,
      editing: false
    };
  }

  saveClick = () => {
    this.props.editGrocery({
      id: this.props.grocery.id,
      title: this.state.title,
      dateAdded: new Date().toJSON().slice(0,10),
      amount: this.state.amount
    });
    this.setState({ editing: false });
  }

  handleDeleteClick = () => {
    this.props.deleteGrocery(this.props.grocery);
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleCancelEditClick = () => {
    this.setState({ editing: false });
  }

  onTitleChange = (title) => {
    this.setState({title});
  }

  onAmountChange = (amount) => {
    this.setState({amount});
  }

  renderEdit() {
    return(
      <li className="col-sm-12 col-md-12 list-group-item">
        <h3>מוצר:</h3>
        <textarea className="form-control" ref="newText" value={this.state.title} onChange={event => this.onTitleChange(event.target.value)}></textarea>
        <h3>כמות:</h3>
        <textarea className="form-control" ref="newAmount" value={this.state.amount} onChange={event => this.onAmountChange(event.target.value)}></textarea>
        <button onClick={this.saveClick} className="btn btn-success regular-button"><i className="fa fa-floppy-o" aria-hidden="true"></i> שמרי</button>
        <button onClick={this.handleCancelEditClick} className="btn btn-primary regular-button"><i className="fa fa-times" aria-hidden="true"></i> בטלי</button>
      </li>
    );
  }

  renderRegular() {
    return(
      <li className="col-sm-12 col-md-12 list-group-item">
        <img className="mom-image img-rounded" src={this.props.image} alt="mom" />
        <h3 className="grocery-data">{this.state.title}</h3>
        <p className="grocery-data">כמות: {this.state.amount}</p>
        <p className="grocery-data">תאריך הוספה: {this.state.dateAdded}</p>
        <button className="btn btn-warning regular-button" onClick={this.handleEditClick}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> עריכה</button>
        <button className="btn btn-danger regular-button" onClick={this.handleDeleteClick}><i className="fa fa-trash-o" aria-hidden="true"></i> מחקי</button>
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
