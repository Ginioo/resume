import React from 'react';
import uuid from 'uuid';

const Summary = ({ summary }) => {
  const { items } = summary;
  return (
    <div id="summary">
      {items &&
        items.map(item => (
          <ul key={uuid.v4()}>
            <li>{item}</li>
          </ul>
        ))}
    </div>
  );
};

export default Summary;
