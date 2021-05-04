import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
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

const Logo = styled.div`
  color: white;
  padding: 10px;
  ${SLink} {
    font-size: 20px;
    font-weight: 700;
  }
`;

const Btn = styled.div`
  display: none;
`;

const Menus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  width: 80px;
  height: 50px;
  text-align: center;
  color: ${(props) => (props.current ? "gold" : "white")};
  transition: background-color 0.5s ease-in-out;
  &:hover {
    color: gold;
    border-bottom: 5px solid gold;
    ${Dropdown} {
      color: black;
      display: block;
    }
  }
`;

const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${Logo} {
      display: flex;
    }
    ${Btn} {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: white;
      padding: 10px;
      i:nth-child(1) {
        display: ${(props) => (props.className ? "block" : "none")};
      }
      i:nth-child(2) {
        display: ${(props) => (props.className ? "none" : "block")};
      }
    }
    ${Menus} {
      display: ${(props) => (props.className ? "none" : "block")};
      background-color: rgba(255, 255, 255, 0.9);
      grid-column: span 2;
      ${Item} {
        width: 100%;
        color: black;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        &:hover {
          background-color: lightgray;
          border-bottom: none;
          transition: background-color 0.1s ease-in-out;
        }
        ${Dropdown} {
          display: none;
        }
      }
    }
  }
`;

export default withRouter(({ location: { pathname } }) => {
  const a = "haha";
  const menus = [
    { name: "소개", path: "/about" },
    { name: "2년제", path: "/college" },
    { name: "4년제", path: "/university" },
    { name: "2년제", path: "/master" },
    { name: "유학 후 이민", path: "/immigration" },
    { name: "후기", path: "/review", dropdown: "유학, 이민" },
    { name: "연락처", path: "/contatc", dropdown: "예약, 오시는길" },
  ];

  const [btn, setBtn] = useState(false);

  const handleToggle = (e) => {
    if (btn === true) {
      setBtn(false);
      console.log("fasled");
    } else if (btn === false) {
      setBtn(true);
      console.log("trued");
    }
  };

  return (
    <Header className={btn}>
      <List className={btn}>
        <Logo>
          <SLink to="/">밴쿠버 컬리지 센터</SLink>
        </Logo>
        <Btn onClick={handleToggle}>
          <i class="fas fa-bars fa-2x"></i>
          <i class="fas fa-times fa-2x"></i>
        </Btn>
        <Menus>
          {menus.map((menu, index) => (
            <Item key={index} current={pathname === menu.path}>
              <SLink to={menu.path}>{menu.name}</SLink>
              {menu.dropdown ? <Dropdown>{menu.dropdown}</Dropdown> : null}
            </Item>
          ))}
        </Menus>
      </List>
    </Header>
  );
});
