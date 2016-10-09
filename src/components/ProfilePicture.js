import React, {Component} from 'react';
import {connect} from 'react-redux';

export class ProfilePicture extends Component {
  render() {
    return (
      <div>
        <img />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {show: state.commandBoxState.show};
}

export default connect(mapStateToProps)(ProfilePicture);