import React, {Component} from 'react';
import {connect} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Job from './../Job';
// import styles from './EmploymentHistory.module.scss';

class EmploymentHistory extends Component {
  render() {
    const {jobs} = this.props.employmentHistory;
    return (
      <div id="employment-history">
        {jobs && jobs.map(job => (
          <Job key={uuidv4()} job={job}/>
        ))}
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    employmentHistory: state.cv.employmentHistory
  };
};

export default connect(mapStateToProp)(EmploymentHistory);
