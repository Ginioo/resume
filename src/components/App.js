import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from './Navbar';
import Container from './Container';
import Section from './Section';
import Name from './Name';
import Summary from './Summary';
import EmploymentHistory from './EmploymentHistory';
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
          <Section name={cv.employmentHistory.title}><EmploymentHistory/></Section>
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