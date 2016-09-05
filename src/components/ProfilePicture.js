import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProfilePicture extends Component {
  render() {
    return (
      <div className="profile">
        <img
          src="https://avatars0.githubusercontent.com/u/9994905?v=3&s=460"
          style={ {display: this.props.show}} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {show: state.commandBoxState.show};
}

export default connect(mapStateToProps)(ProfilePicture);