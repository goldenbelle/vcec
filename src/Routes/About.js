import React from "react";
import styled from "styled-components";
import Gallery from "../Components/Gallery";
import Top from "../Components/Top";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  padding: 50px 0px 30px 0px;
  width: 800px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  &:nth-child(1) {
    border-top: none;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  line-height: 30px;
  font-size: 20px;
  padding-bottom: 50px;
`;

const Main = styled.div`
  @media screen and (max-width: 800px) {
    ${Content} {
      width: 100%;
      font-size: 17px;
      line-height: 30px;
    }
  }
`;

export default () => {
  return (
    <>
      <Main>
        <Top url="https://cdn.pixabay.com/photo/2019/11/12/18/41/buildings-4621816_1280.jpg" />
        <Div>
          <Title>밴쿠버 컬리지 센터 소개</Title>
          <Content>
            캐나다 밴쿠버에서만 14년째 유학원 업무를 보고 있고, 캐나다 밴쿠버에
            있는 유학원의 장점을 살려서 여러분들에게 실질적인 도움이 될 수
            있도록 노력하고 있습니다. 캐나다 유학을 결심하는 많은 학생들의 최종
            목적은 이민입니다. 그 이민의 목표 달성을 위해서 컬리지, 대학교,
            대학원 진학을 결심하고, 공부를 하는 학생들을 밴쿠버 현지에서
            바로바로 도움을 줄 수 있는 확실한 장점이 있는 유학원입니다. 학교
            수속만 하고 끝나는 유학원이 아니라, 졸업 후 취업과 이민까지 학생들과
            함께 고민하고 노력하는 진정한 유학원이 될 수 있도록 하겠습니다.{" "}
          </Content>
          <Title>제공하는 서비스 및 혜택</Title>
          <Content>
            <Gallery /> <Gallery /> <Gallery />
          </Content>
          <Title>사무실 내부 전경</Title>
          <Content>
            <Gallery /> <Gallery /> <Gallery />
          </Content>
          <Title>세미나: 줌세미나, 한국 출장 세미나</Title>
          <Content>
            <Gallery /> <Gallery /> <Gallery />
          </Content>
        </Div>
      </Main>
    </>
  );
};
