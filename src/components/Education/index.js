import React from 'react';
import uuid from 'uuid';

const Education = ({ education }) => {
  const { schools } = education;
  return (
    <div id="education">
      {schools &&
        schools.map(school => (
          <ul key={uuid.v4()}>
            <li>{school}</li>
          </ul>
        ))}
    </div>
  );
};
export default Education;
