import { v4 as uuidv4 } from 'uuid';
import Job from './../Job';
import { useResume } from '../../hooks';

function WorkExperience() {
  const { workExperience } = useResume();
  const { jobs } = workExperience;

  return (
    <div id="employment-history">
      {jobs && jobs.map(job => (
        <Job key={uuidv4()} job={job} />
      ))}
    </div>
  );
}

export default WorkExperience;
