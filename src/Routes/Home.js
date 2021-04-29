import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: 100vw;
  background-color: skyblue;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  height: 50%;
  padding: 10px;
`;

export default class extends React.Component {
  render() {
    return (
      <>
        <Main>
          <Section>Slide</Section>
          <Section>Service</Section>
        </Main>
      </>
    );
  }
}
