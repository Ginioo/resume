import { useResume } from '../../hooks';

function Education() {
  const { education } = useResume();
  const { schools } = education;

  return (
    <div id="education">
      {schools && schools.map((school, index) => (
        <ul key={index}>
          <li>{school}</li>
        </ul>
      ))}
    </div>
  );
}

export default Education;
