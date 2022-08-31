import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import { SocialIcons } from "../Header/HeaderStyles";
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
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:470-698-7114">{"(470) 698-7114"}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:levdanneman@gmail.com">
            levdanneman@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan>Innovating one project at a tyime</Slogan> */}
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/ldanneman">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="hhttps://www.linkedin.com/in/levdanneman/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto:levdanneman@gmail.com">
            <SiGmail size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
