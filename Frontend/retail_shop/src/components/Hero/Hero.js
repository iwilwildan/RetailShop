import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { LeftSection, ProfileContainer } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>Fresher, Cheaper, Closer!</SectionTitle>
      <SectionText>A better place to shop every day.</SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
