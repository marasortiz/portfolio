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
        Hola, Soy Tamara, Este Es <br />
        Mi Portfolio Personal
      </SectionTitle>
      <SectionText>Soy desarrollador frontend</SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/marasortiz")}
      >
        Más Información
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
