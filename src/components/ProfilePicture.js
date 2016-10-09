import React, {Component} from 'react';
import {connect} from 'react-redux';

export class ProfilePicture extends Component {
  render() {
    return (
      <div className="profile-picture">
          <img href="http:" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {show: state.commandBoxState.show};
}

export default connect(mapStateToProps)(ProfilePicture);