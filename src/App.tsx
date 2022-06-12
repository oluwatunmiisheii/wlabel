import { Section } from 'components/section/Section';


function App() {
  return (
    <div className="main__wrapper">
      <Section theme="grey">
        hello world
      </Section>
      <Section theme="dark">
        hello world
      </Section>
      <Section theme="light">
        hello world
      </Section>
    </div>
  );
}

export default App;
