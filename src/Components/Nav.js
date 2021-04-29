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
  background-color: gold;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
`;

const List = styled.div`
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  width: 80px;
  height: 50px;
  text-align: center;
  background-color: ${(props) => (props.current ? "grey" : "transparent")};
  transition: background-color 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
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
        <SLink to="/review">후기</SLink>{" "}
      </Item>
      <Item current={pathname === "/contact"}>
        <SLink to="/contact">연락처</SLink>{" "}
      </Item>
    </List>
  </Header>
));
