import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';

import NavBar from './Navbar';
import Container from './Container';
import Section from './Section';
import Name from './Name';
import Job from './Job';
import Summary from './Summary';
import Education from './Education';
import SkillsAndTools from './SkillsAndTools';

class App extends Component {
  render() {
    const {cv} = this.props;
    return (
      <div id="app">
        <NavBar/>
        <Container>
          <Name name={cv.name}/>

          <Section name={cv.summary.title}><Summary/></Section>

          <Section name={cv.employmentHistory.title}>
            {cv.employmentHistory.jobs && cv.employmentHistory.jobs.map(job => (
              <Job key={uuid.v4()} job={job}/>
            ))}
          </Section>

          <Section name={cv.education.title}><Education/></Section>

          <Section name={cv.skillsAndTools.title}><SkillsAndTools/></Section>
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