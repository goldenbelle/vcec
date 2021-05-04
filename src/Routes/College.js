import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Top from "../Components/Top";
import CollegeDetail from "./CollegeDetail";

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
          <Title>
            <Link to="/college/bcit">
              British Columbia Instituition of Technology
            </Link>
          </Title>
          <Public>공립</Public>
          <Address>
            <a href="https://bcit.ca">bcit.ca</a>
          </Address>
          <Detail>BCIT는 어쩌고</Detail>
        </Content>
      </Div>

      <Div>
        <Logo bgUrl="https://gostudycanada.net/wp-content/uploads/2019/01/Untitled-1-1.jpg"></Logo>
        <Content>
          <Link to="/college/bcit">
            <Title>Douglas College</Title>
          </Link>
          <Public>공립</Public>
          <Address>
            <a href="https://douglascollege.ca">douglascollege.ca</a>
          </Address>
          <Detail>Douglas College는 어쩌고</Detail>
        </Content>
      </Div>

      <Div>
        <Logo bgUrl="https://www.animationcareerreview.com/files/images/articles/7441_3a4954f1742a70e30b9cff3cf4f1d1dc.jpg"></Logo>
        <Content>
          <Title>
            <Link to="/college/bcit">Langara College</Link>
          </Title>
          <Public>공립</Public>
          <Address>
            <a href="https://langara.ca">langara.ca</a>
          </Address>
          <Detail>Langara College는 어쩌고</Detail>
        </Content>
      </Div>

      <Div>
        <Logo bgUrl="https://www.collegesinstitutes.ca/wp-content/uploads/2015/11/VCC-LOGO_PANTONE-376-C_Cool-Gray-9-C_WHT_OUT_300.png"></Logo>
        <Content>
          <Link to="/college/bcit">
            <Title>Vancouver Community College</Title>
          </Link>
          <Public>공립</Public>
          <Address>
            <a href="https://vcc.ca">vcc.ca</a>
          </Address>
          <Detail>Langara College는 어쩌고</Detail>
        </Content>
      </Div>
    </>
  );
};
