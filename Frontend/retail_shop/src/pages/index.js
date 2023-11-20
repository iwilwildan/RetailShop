import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';

import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    // <Provider store={store}>
    <>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      {/* <Acomplishments /> */}
    </>
    // </Provider>
  );
};

export default Home;
