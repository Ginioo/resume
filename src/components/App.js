import { useResume } from '../hooks/';

import NavBar from './Navbar';
import Container from './Container';
import Section from './Section';
import Name from './Name';
import Summary from './Summary';
import WorkExperience from './WorkExperience';
import Education from './Education';
import SkillsAndTools from './SkillsAndTools';

function App() {
  const { name, summary, workExperience, education, skillsAndTools } = useResume();

  return (
    <div id="app">
      <NavBar />
      <Container>
        <Name name={name} />
        <Section name={summary.title}><Summary /></Section>
        <Section name={workExperience.title}><WorkExperience /></Section>
        <Section name={education.title}><Education /></Section>
        <Section name={skillsAndTools.title}><SkillsAndTools /></Section>
      </Container>
    </div>
  );
}

export default App;
