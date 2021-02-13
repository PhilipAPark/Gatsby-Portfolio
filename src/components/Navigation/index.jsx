import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  & > ul {
    margin: 0px;
    padding: 48px 60px 0px 60px;
    display: flex;
    list-style-type: none;

    & > li {
      margin-right: 24px;

      & > a {
        color: #1a1a1a;
        text-decoration: none;

        &:hover {
          color: black;
          text-decoration: underline;
        }
      }

      &:last-of-type {
        margin-right: 0px;
      }
    }
  }
`;

function Navigation() {
  return (
    <Container>
      <ul>
        <li>
          <a href="#graphic-design">Graphic design</a>
        </li>
        <li>
          <a href="#photography">Photography</a>
        </li>
        <li>
          <a href="#web-development">Web development</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </Container>
  );
}

export default Navigation;
