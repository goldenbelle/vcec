import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default class extends React.Component {
  render() {
    return (
      <>
        <Div>VCEC Education Consulting Ltd. Worked by Stella</Div>
      </>
    );
  }
}
