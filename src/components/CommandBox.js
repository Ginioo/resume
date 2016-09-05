import React, {Component} from 'react';
import {connect} from 'react-redux';

import WhoIsThis from './WhoIsThis';

import * as actions from '../actions';

class CommandBox extends Component
{
  constructor(props) {
    super(props);
    this.state = {command: ''};
  }

  handleChange(event) {
    this.setState({command: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.execute(this.state.command);
    this.setState({command: ''});
  }

  render() {
    return (
      <div className="command-box">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <WhoIsThis />
          <input
            value={this.state.command}
            onChange={this.handleChange.bind(this)}/>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {commandBox: state.commandBoxState};
}

export default connect(mapStateToProps, actions)(CommandBox);