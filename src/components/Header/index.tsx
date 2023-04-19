import { Smiley } from "@phosphor-icons/react";
import { Container, Content, ContentLogo, ContentNav } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <ContentLogo>
          <Smiley size={32} id="smiley"/>
        </ContentLogo>
        <ContentNav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Members</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </ContentNav>
      </Content>
    </Container>
  )
};
