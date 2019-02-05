import React, {Component} from 'react';
import NavBar from './Navbar';
import Container from './Container';
import Section from './Section';

class App extends Component {
  render() {
    return (
      <div id="app">
        <NavBar/>
        <Container>
          <Section name="Summary">s</Section>
          <Section name="Employment History">Employment History</Section>
          <Section name="Education">Education</Section>
          <Section name="Personal Info">Personal Info</Section>
        </Container>
      </div>
    );
  }
}

export default App;