import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  margin-top: 96px;
  padding: 12px 60px;
  text-align: center;

  & p {
    margin: 0px;
  }
`;

function Footer() {
  return (
    <Container>
      <p>&copy; Copyright Philip Park</p>
    </Container>
  );
}

export default Footer;
