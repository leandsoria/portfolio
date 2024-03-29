import { Fragment } from 'react';
import Opening from '../components/Sections/Opening/Opening';
import About from '../components/Sections/About/About';

import Header from '../components/SEO/Header';
import dynamic from 'next/dynamic';

const Experience = dynamic(() => import('../components/Sections/Experience'), {
  loading: () => 'Loading...',
  ssr: false,
});

const Skills = dynamic(
  () => import('../components/Sections/Languajes/Skills'),
  {
    loading: () => 'Loading...',
    ssr: false,
  }
);

const Projects = dynamic(() => import('../components/Sections/Projects'), {
  loading: () => 'Loading...',
  ssr: false,
});

const Connect = dynamic(
  () => import('../components/Sections/Contact/Connect'),
  {
    loading: () => 'Loading...',
    ssr: false,
  }
);

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Opening />
      <About />
      <Skills />
      <Projects />
      <Connect />
      {/* <Experience /> */}
    </Fragment>
  );
};

export default Home;
