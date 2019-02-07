import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';

import NavBar from './Navbar';
import Container from './Container';
import Section from './Section';
import Name from './Name';
import Job from './Job';
import SkillsAndTools from './SkillsAndTools';

class App extends Component {
  render() {
    const {cv} = this.props;
    return (
      <div id="app">
        <NavBar mobile={cv.personalInfo.mobile}
                email={cv.personalInfo.email}
                linkedin={cv.personalInfo.linkedin}
                github={cv.personalInfo.github}/>
        <Container>
          <Name name={cv.name}/>
          <Section name={cv.summary.title}>
            {cv.summary.items && cv.summary.items.map(item => (
              <ul key={uuid.v4()}>
                <li>{item}</li>
              </ul>
            ))}
          </Section>
          <Section name={cv.employmentHistory.title}>
            {cv.employmentHistory.jobs && cv.employmentHistory.jobs.map(job => (
              <Job key={uuid.v4()} job={job}/>
            ))}
          </Section>
          <Section name={cv.education.title}>
            {cv.education.schools && cv.education.schools.map(school => (
              <div key={uuid.v4()}>{school}</div>
            ))}
          </Section>
          <Section name={cv.skillsAndTools.title}>
            <SkillsAndTools/>
          </Section>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cv: state.cv
  };
};

export default connect(mapStateToProps)(App);