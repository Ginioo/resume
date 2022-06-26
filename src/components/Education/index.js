import { v4 as uuidv4 } from 'uuid';
import { useResume } from '../../hooks';

function Education() {
  const { education } = useResume();
  const { schools } = education;
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

export default Education;
