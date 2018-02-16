import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Delete from 'material-ui/svg-icons/action/delete';

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

  handleDeleteClick = () => {
    this.props.deleteGrocery(this.props.grocery);
  }

  render() {
    return(
      <li className="col-sm-12 col-md-12 list-group-item">
        <MuiThemeProvider>
          <IconMenu className="pull-left"
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}>
            <MenuItem primaryText="מחיקה" leftIcon={<Delete />}
               onClick={this.handleDeleteClick} />
          </IconMenu>
        </MuiThemeProvider>
        <h2 className="grocery-data">{this.state.title}</h2>
        <h4 className="grocery-data">כמות: {this.state.amount}</h4>
        <p className="grocery-data">תאריך הוספה: {this.state.dateAdded}</p>
      </li>
    );
  }
}
