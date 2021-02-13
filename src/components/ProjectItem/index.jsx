import React from "react";
import styled from "styled-components";

const Container = styled.figure`
  max-width: 250px;
  width: 250px;
  margin: 0px;
  margin-right: 48px;

  & > figcaption {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Preview = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${(props) => props.src});
  background-size: cover;
`;

function Figure(props) {
  return (
    <Container>
      <Preview src={props.image} />
      <figcaption>{props.caption}</figcaption>
    </Container>
  );
}

export default Figure;
