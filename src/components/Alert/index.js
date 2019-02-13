import React from 'react';

// import { alertActions } from '../../actions';

import { connect } from 'react-redux';

class Alert extends React.Component {
  render() {
    if(this.props.message) {
      console.log(this.props.type);
      return (
        <div className={`alert ${this.props.type}`}>{this.props.message}</div>
      );
    }
    else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return state.alert;
}

const connectedAlert = connect(mapStateToProps)(Alert);
export default connectedAlert;
