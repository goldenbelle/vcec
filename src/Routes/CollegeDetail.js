import React from "react";
import styled from "styled-components";
import Top from "../Components/Top";

const Div = styled.div`
  width: 800px;
  margin: auto;
  padding: 50px 0px 50px 0px;
  font-size: 15px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  &:nth-child(1) {
    border-top: none;
  }
`;

const Logo = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  height: 200px;
  margin-right: 20px;
`;

const Content = styled.div``;

const Title = styled.div`
  font-size: 25px;
  padding-bottom: 10px;
`;

const Public = styled.div`
  background-color: lightgrey;
  width: 40px;
  text-align: center;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Address = styled.div`
  margin-bottom: 20px;
`;

const Detail = styled.div`
  font-size: 17px;
`;

export default () => {
  return (
    <>
      <Top url="https://cdn.pixabay.com/photo/2014/05/02/23/52/castle-336498_1280.jpg" />
      <Div>
        <Logo bgUrl="https://pbs.twimg.com/profile_images/1291056095440433152/fKpCeIld_400x400.png"></Logo>
        <Content>
          <Title>British Columbia Instituition of Technology</Title>
          <Public>공립</Public>
          <Address>
            <a href="https://bcit.ca">bcit.ca</a>
          </Address>
          <Detail>BCIT는 어쩌고</Detail>
        </Content>
      </Div>
    </>
  );
};
