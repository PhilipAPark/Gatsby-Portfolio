import React from "react";
import styled from "styled-components";
import ProjectItem from "../ProjectItem";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 48px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

function Showcase(props) {
  return (
    <Container>
      {props.projects.map((project) => {
        return <ProjectItem image={project.image} caption={project.caption} />;
      })}
    </Container>
  );
}

export default Showcase;
