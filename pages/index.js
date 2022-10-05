import { Fragment } from 'react';
import Opening from '../components/Opening/Opening';
import About from '../components/Sections/About/About';
import Experience from '../components/Sections/Experience';
import Skills from '../components/Sections/Languajes/Skills';
import Projects from '../components/Sections/Projects';
import Connect from '../components/Contact/Connect';
import Header from '../components/SEO/Header';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Opening />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Connect />
    </Fragment>
  );
};

export default Home;
