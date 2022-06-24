import React, {Component} from 'react';
import {connect} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './SkillsAndTools.module.scss';

class SkillsAndTools extends Component {
  render() {
    const {skillSet} = this.props;
    return (
      <div id="skills-and-tools" className={styles.skillSet}>
        {skillSet && skillSet.map(skill => (
          <ul key={uuidv4()}>
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
