import React from 'react';
import uuid from 'uuid';

import Job from './../Job';

const EmploymentHistory = ({ employmentHistory }) => {
  const { jobs } = employmentHistory;
  return (
    <div id="employment-history">
      {jobs && jobs.map(job => <Job key={uuid.v4()} job={job} />)}
    </div>
  );
};

export default EmploymentHistory;
