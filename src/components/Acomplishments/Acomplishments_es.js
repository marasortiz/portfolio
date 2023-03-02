import React from 'react';

import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const data = [
  { number: 20, text: 'Proyectos en GitHub', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Logros Personales
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            {card.number}+
          </BoxNum>
          <BoxText>
            {card.text}
          </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
