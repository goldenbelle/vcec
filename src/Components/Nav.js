import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: white;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
`;

const List = styled.div`
  display: flex;
  justify-content: center;
`;

const SLink = styled(Link)`
  height: 50px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 130px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;

const Item = styled.div`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "gold" : "transparent")};
  transition: background-color 0.5s ease-in-out;
  &:hover {
    border-bottom: 5px solid gold;
    ${Dropdown} {
      display: block;
    }
  }
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Home</SLink>{" "}
      </Item>
      <Item current={pathname === "/about"}>
        <SLink to="/about">소개</SLink>{" "}
      </Item>
      <Item current={pathname === "/college"}>
        <SLink to="/college">2년제</SLink>{" "}
      </Item>
      <Item current={pathname === "/university"}>
        <SLink to="/university">4년제</SLink>{" "}
      </Item>
      <Item current={pathname === "/master"}>
        <SLink to="/master">석사</SLink>{" "}
      </Item>
      <Item current={pathname === "/immigration"}>
        <SLink to="/immigration">유학후이민</SLink>{" "}
      </Item>
      <Item current={pathname === "/review"}>
        <SLink to="/review">후기</SLink>
        <Dropdown>유학, 이민</Dropdown>
      </Item>
      <Item current={pathname === "/contact"}>
        <SLink to="/contact">연락처</SLink>{" "}
        <Dropdown>상담예약, 오시는길</Dropdown>
      </Item>
    </List>
  </Header>
));
