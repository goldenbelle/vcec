import React from "react";
import styled from "styled-components";

const Top = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 300px;
  }
`;
const Black = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  position: absolute;
  color: white;
  font-weight: 700;
  font-size: 30px;
  background-color: black;
`;

export default ({ url }) => {
  return (
    <Top bgUrl={url}>
      <Black></Black>
      <Text>샘플이미지입니다.</Text>
    </Top>
  );
};
