import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: 100vw;
  background-color: skyblue;
`;

const Slide = styled.div`
  height: 50vw;
  background-image: url("https://cdn.pixabay.com/photo/2015/05/05/17/56/vancouver-754204_1280.jpg");
`;

const SlideFrame = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  div:nth-child(1) {
    font-size: 30px;
    font-weight: 600;
    padding-top: 50px;
    padding-bottom: 10px;
  }
  div:nth-child(2) {
    font-size: 20px;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  height: 50%;
  padding: 10px;
  border: 2px solid red;
`;

export default class extends React.Component {
  render() {
    return (
      <>
        <Main>
          <Slide>
            <SlideFrame>
              <div>밴쿠버 컬리지 센터</div>
              <div>밴쿠버 컬리지의 모든 정보를 제공합니다.</div>
            </SlideFrame>
          </Slide>

          <Section>Service</Section>
        </Main>
      </>
    );
  }
}
