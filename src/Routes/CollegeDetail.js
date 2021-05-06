import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Api } from "../Components/Api";
import Axios from "../Components/Axios";
import Top from "../Components/Top";
import Loader from "../Components/Loader";

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  padding: 20px;
`;

const Container = styled.div`
  margin: auto;
  display: grid;
  width: 800px;
  border: 1px solid gray;
  border-left: none;
  border-right: none;
  padding-bottom: 20px;
`;

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const Name = styled.div`
  background-color: lightgray;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Value = styled.div`
  padding: 10px;
`;

export default withRouter(({ location: { pathname } }) => {
  const query = pathname.split("/");
  const { data, loading, error } = Axios(Api.detail(query[2]));
  console.log(data);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Top url="https://cdn.pixabay.com/photo/2014/05/02/23/52/castle-336498_1280.jpg" />
      <Title> {query[2]} </Title>
      {data.data !== null ? (
        data.data.map((detail) => {
          return (
            <>
              <Container>
                <Column>
                  <Name>프로그램</Name>
                  <Value>{detail.program}</Value>
                </Column>
                <Column>
                  <Name>시작일</Name>
                  <Value>{detail.start_date}</Value>
                </Column>
                <Column>
                  <Name>캠퍼스</Name>
                  <Value>{detail.campus}</Value>
                </Column>
                <Column>
                  <Name>입학조건</Name>
                  <Value>{detail.requirement}</Value>
                </Column>
                <Column>
                  <Name>학비</Name>
                  <Value>{detail.tuition}</Value>
                </Column>
              </Container>
            </>
          );
        })
      ) : (
        <Title> 페이지 준비중</Title>
      )}
    </>
  );
});
