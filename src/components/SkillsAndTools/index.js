import { v4 as uuidv4 } from 'uuid';
import styles from './SkillsAndTools.module.scss';
import { useResume } from '../../hooks';

function SkillsAndTools() {
  const { skillsAndTools } = useResume();
  const { skillSet } = skillsAndTools;

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

export default SkillsAndTools;
