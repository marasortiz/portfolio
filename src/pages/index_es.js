import Acomplishments from '../components/Acomplishments/Acomplishments_es';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero_es';
import Projects from '../components/Projects/Projects_es';
import Technologies from '../components/Technologies/Technologies_es';
import Timeline from '../components/TimeLine/TimeLine_es';
import { Layout } from '../layout/Layout_es';
import { Section } from '../styles/GlobalComponents';

import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
