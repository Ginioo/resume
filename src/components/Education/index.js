import React, {Component} from 'react';
import {connect} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import styles from './Education.module.scss';

class Education extends Component {
  render() {
    const {schools} = this.props.education;
    return (
      <div id="education">
        {schools && schools.map(school => (
          <ul key={uuidv4()}>
            <li>{school}</li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    education: state.cv.education
  };
};

export default connect(mapStateToProp)(Education);
