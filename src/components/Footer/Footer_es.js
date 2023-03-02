import React from "react";

import { SocialIcons } from "../Header/HeaderStyles";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      {/* Data */}
      <LinkList>
        <LinkColumn>
          {/* Mail */}
          <LinkTitle>Correo Electronico</LinkTitle>
          <LinkItem href="mailto:santamaria.ortiz.tamara@gmail.com">
            santamaria.ortiz.tamara@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovar un proyecto a la vez</Slogan>
        </CompanyContainer>
        {/* Social Icons Links */}
        <SocialContainer>
          <SocialIcons href="https://github.com/marasortiz">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="https://linkedin.com">
                <AiFillLinkedin size="3rem" />
              </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
