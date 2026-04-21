import styles from './SkillsAndTools.module.scss';
import { useResume } from '../../hooks';

function SkillsAndTools() {
  const { skillsAndTools } = useResume();
  const { skillSet } = skillsAndTools;

  return (
    <div id="skills-and-tools" className={styles.skillSet}>
      {skillSet && skillSet.map((skill, index) => (
        <ul key={index}>
          <li>{skill}</li>
        </ul>
      ))}
    </div>
  );
}

export default SkillsAndTools;
