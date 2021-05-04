import React from "react";
import styled from "styled-components";
import Top from "../Components/Top";

const Div = styled.div`
  background-color: skyblue;
  padding: 60px;
`;

export default class extends React.Component {
  render() {
    return (
      <>
        <Top url="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg" />
        <Div>아직 준비 중🤗</Div>
      </>
    );
  }
}
