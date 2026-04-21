import Job from './../Job';
import { useResume } from '../../hooks';

function WorkExperience() {
  const { workExperience } = useResume();
  const { jobs } = workExperience;

  return (
    <div id="employment-history">
      {jobs && jobs.map((job, index) => (
        <Job key={index} job={job} />
      ))}
    </div>
  );
}

export default WorkExperience;
