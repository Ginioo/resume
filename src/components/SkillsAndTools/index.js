import React from 'react';
import uuid from 'uuid';

import styles from './SkillsAndTools.module.scss';

const SkillsAndTools = ({ skillSet }) => {
  return (
    <div id="skills-and-tools" className={styles.skillSet}>
      {skillSet &&
        skillSet.map(skill => (
          <ul key={uuid.v4()}>
            <li>{skill}</li>
          </ul>
        ))}
    </div>
  );
};

export default SkillsAndTools;
