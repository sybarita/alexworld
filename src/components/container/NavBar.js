import React from "react";
import Link from "../display/Link";
import styled from "styled-components";
import Burger from "../display/Burger";

function NavBar(props) {
  const NavBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-area: 1 / 1 / 3 / 1;
    align-items: center;
    background-color: rgba(250, 250, 250, 1);
    border-radius: 12px;
    height: 210px;
    position: relative;
    z-index: 10;
    box-shadow: 0rem 0rem 10rem #e5e5e5;

    @media (min-width: 830px) {
      margin-top: 87px;
      margin-left: 36px;
      height: 210px;
      width: 140px;
    }

    @media (max-width: 830px) {
      grid-area: 1 / 3 / 1 / 6;
      justify-content: flex-start;
      align-items: center;
      margin: auto;
      margin-top: 20px;
      margin-right: 11.5%;
      width: 140px;
      height: 48px;
      height: ${props.height};
    }
  `;

  const LeftBox = styled.div`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    z-index: 10;
    width: 130px;
    height: 200px;
    overflow: hidden;

    @media (max-width: 830px) {
      display: flex;
      height: ${props.menuState};
    }
  `;

  return (
    <NavBarWrapper id="NavBar">
      <Burger toggleMenu={props.toggleMenu} />
      <LeftBox id="leftBox" className="page">
        <Link changeDisplay={props.changeDisplay} linkName="home" />
        <Link changeDisplay={props.changeDisplay} linkName="portfolio" />
        <Link changeDisplay={props.changeDisplay} linkName="services" />
        <Link changeDisplay={props.changeDisplay} linkName="contact" />
        <Link changeDisplay={props.changeDisplay} linkName="extras" />
      </LeftBox>
    </NavBarWrapper>
  );
}

export default NavBar;
