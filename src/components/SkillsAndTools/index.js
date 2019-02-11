import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import styles from './SkillsAndTools.module.scss';

class SkillsAndTools extends Component {
  render() {
    const {skillSet} = this.props;
    return (
      <div id="skills-and-tools" className={styles.skillSet}>
        {skillSet && skillSet.map(skill => (
          <ul key={uuid.v4()}>
            <li>{skill}</li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    skillSet: state.cv.skillsAndTools.skillSet
  };
};

export default connect(mapStateToProp)(SkillsAndTools);