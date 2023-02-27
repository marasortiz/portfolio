import React from "react";
import { LeftSection } from "./HeroStyles";
import Button from "../../styles/GlobalComponents/Button";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, This Is <br />
        My Personal Porfolio
      </SectionTitle>
      <SectionText>I'm a Frontend Developer</SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/marasortiz")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
