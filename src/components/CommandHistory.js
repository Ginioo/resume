import React, {Component} from 'react';
import {connect} from 'react-redux';

import WhoIsThis from './WhoIsThis';

class CommandHistory extends Component {
  render() {
    const list = this.props.commands.map((command, index) => (
      <div key={index}>
        <WhoIsThis />{command}
      </div>
    ));
    return (
      <div className="command-history">
        <span>{list}</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {commands: state.commandBoxState.commands};
}

export default connect(mapStateToProps)(CommandHistory);