import React, { Component } from 'react';
import fire from '../config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import SaveIcon from 'material-ui/svg-icons/action/done';

export default class Grocery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: "groceriesEti",
      title: '',
      amount: ''
    };
  }

  addGrocery = () => {
    const randomNumber = Math.floor((Math.random() * 100000) + 1);
    fire.database().ref(this.state.list + "/" + randomNumber).set({
      id: randomNumber,
      title: this.refs.title.value,
      dateAdded: new Date().toJSON().slice(0,10),
      amount: this.refs.amount.value
    }).then(() => {
      this.props.history.push('/');
    });
  }

  handleCancelClick = () => {
    this.props.history.push('/');
  }

  onTitleChange = (title) => {
    this.setState({title});
  }

  onAmountChange = (amount) => {
    this.setState({amount});
  }

  handleChange = (e) => {
    var change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  render() {
    const styles = {
      largeIcon: {
        width: 50,
        height: 50,
        color: '#031b42'
      }
    };
    return (
      <li className="col-sm-12 col-md-12 list-group-item">

        <MuiThemeProvider>
          <div>
            <ClearIcon style={styles.largeIcon} className="pull-left icon" onClick={this.handleCancelClick} />
            <SaveIcon style={styles.largeIcon} className="pull-right" onClick={this.addGrocery} />
          </div>
        </MuiThemeProvider>
        <br />
        <br />
        <h3>מוצר:</h3>
        <textarea className="form-control" ref="title"
          name="title" value={this.state.title}
          onChange={this.handleChange}>
        </textarea>

        <h3>כמות:</h3>
        <textarea className="form-control" ref="amount"
          name="amount" value={this.state.amount}
          onChange={this.handleChange}>
        </textarea>
      </li>
    );
  }
}
