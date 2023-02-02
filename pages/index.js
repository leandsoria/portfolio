import { Fragment } from 'react';
import Opening from '../components/Sections/Opening/Opening';
import About from '../components/Sections/About/About';
import Experience from '../components/Sections/Experience';
import Skills from '../components/Sections/Languajes/Skills';
import Projects from '../components/Sections/Projects';
import Connect from '../components/Sections/Contact/Connect';
import Header from '../components/SEO/Header';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Flip';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Opening />
      <About />
      <Fade bottom>
        <Skills />
      </Fade>
      <Projects />
      <Fade bottom>
        <Experience />
      </Fade>
      <Connect />
    </Fragment>
  );
};

export default Home;
