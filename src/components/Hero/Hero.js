import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There! <br />
        Welcome To My Portfolio
      </SectionTitle>
      <SectionText>
        My name is Lev Danneman and I am a fullstack developer with a strong
        emphisis in React, React-Native, and NodeJS Development
      </SectionText>
      <Button onClick={() => (window.location = "/#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
