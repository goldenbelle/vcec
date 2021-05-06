import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Top from "../Components/Top";
import { Api } from "../Components/Api";
import Axios from "../Components/Axios";
import Loader from "../Components/Loader";

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
  width: 70px;
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

export default withRouter(({ location: { pathname } }) => {
  const { data, loading, error } = Axios(Api.random(pathname));

  return loading ? (
    <Loader />
  ) : (
    <>
      <Top url="https://cdn.pixabay.com/photo/2014/05/02/23/52/castle-336498_1280.jpg" />
      {data.data.map((college) => {
        return (
          <>
            <Div>
              <Logo bgUrl={college.logo_url}></Logo>
              <Content>
                <Title>
                  <Link to={`/college/${college.abb}`}>{college.name}</Link>
                </Title>
                <Public>{college.type}</Public>
                <Address>
                  <a href={college.webstie}>{college.website}</a>
                </Address>
                <Detail>{college.description}</Detail>
              </Content>
            </Div>
          </>
        );
      })}
    </>
  );
});
