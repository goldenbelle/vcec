import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

const Keyf = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Ld = styled.div``;

const Div = styled.div`
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  ${Ld} {
    transform-origin: 40px 40px;
    animation: ${Keyf} 1.2s linear infinite;
    &:after {
      content: " ";
      display: block;
      position: absolute;
      top: 3px;
      left: 37px;
      width: 6px;
      height: 18px;
      border-radius: 20%;
      background: black;
    }
    &:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    &:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }
    &:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }
    &:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }
    &:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    &:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }
    &:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }
    &:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }
    &:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }
    &:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }
    &:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }
    &:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
  }
`;

export default () => (
  <Container>
    <Div class="lds-spinner">
      <Ld></Ld>
      <Ld></Ld>
      <Ld></Ld>
      <Ld></Ld>
      <Ld></Ld>
      <Ld></Ld>
      <Ld></Ld>
      <Ld></Ld>
      <Ld></Ld>
      <Ld></Ld>
      <Ld></Ld>
      <Ld></Ld>
    </Div>
  </Container>
);
