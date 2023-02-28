import React from 'react';

import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const data = [
  // Examples
  // { number: 20, text: 'Open Source Projects'},
  // { number: 1000, text: 'Students', },
  // { number: 1900, text: 'Github Followers', },
  { number: 20, text: 'Github Proyects', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Acomplishments
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
