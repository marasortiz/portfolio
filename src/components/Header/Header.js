import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  Span,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";


const Header = () => (
  <Container>
    {/**   Icon and Name **/}
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    {/* Links */}
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Proyects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      {/* Language links */}
      <li>
        <Link href="#">
          <NavLink>en</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/index_es">
          <NavLink>es</NavLink>
        </Link>
      </li>
      {/* Social Icons */}
      <SocialIcons href="https://github.com/marasortiz">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="www.linkedin.com/in/tamara-san-ort">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
