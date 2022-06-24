import React, {Component} from 'react';
import {connect} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import styles from './Summary.module.scss';

class Summary extends Component {
  render() {
    const {items} = this.props.summary;
    return (
      <div id="summary">
        {items && items.map(item => (
          <ul key={uuidv4()}>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    summary: state.cv.summary
  };
};

export default connect(mapStateToProp)(Summary);
