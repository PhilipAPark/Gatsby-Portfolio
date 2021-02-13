import React from "react";
import styled from "styled-components";

const Container = styled.header`
  padding: 96px 0px;

  & > h1 {
    font-size: 120.34px;
    line-height: 120.34px;
    margin: 0px;
  }

  & > h2 {
    margin-top: 36px;
    margin-bottom: 0px;
  }
`;

function Header(props) {
  return (
    <Container>
      <h1>{props.name}</h1>
      <h2>{props.tagline}</h2>
    </Container>
  );
}

export default Header;
