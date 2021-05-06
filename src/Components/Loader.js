import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  background-color: pink;
`;

export default () => {
  return (
    <>
      <Div>Loading!</Div>
    </>
  );
};
