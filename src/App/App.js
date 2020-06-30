import React, { useReducer } from 'react';

import NavBar from '../components/Navbar';
import Container from '../components/Container';
import Section from '../components/Section';
import Name from '../components/Name';
import Summary from '../components/Summary';
import EmploymentHistory from '../components/EmploymentHistory';
import Education from '../components/Education';
import SkillsAndTools from '../components/SkillsAndTools';

import cvreducer from '../reducers';
import initState from '../cv';

const App = () => {
  const [cv] = useReducer(cvreducer, initState);

  return (
    <div id="app">
      <NavBar personalInfo={cv.personalInfo} />
      <Container>
        <Name name={cv.name} />
        <Section name={cv.summary.title}>
          <Summary summary={cv.summary} />
        </Section>
        <Section name={cv.employmentHistory.title}>
          <EmploymentHistory employmentHistory={cv.employmentHistory} />
        </Section>
        <Section name={cv.education.title}>
          <Education education={cv.education} />
        </Section>
        <Section name={cv.skillsAndTools.title}>
          <SkillsAndTools skillSet={cv.skillsAndTools.skillSet} />
        </Section>
      </Container>
    </div>
  );
};

export default App;
