import React from "react";
import styled from "styled-components";
import BurgerSrc from "../../img/burger.svg";

const BurgerBox = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: rgba(235, 235, 235, 0);

  @media (max-width: 830px) {
    display: flex;
  }
`;

const BurgerImg = styled.img`
  outline: none;
  width: 48px;
  height: 48px;
  position: relative;
  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  filter: invert(83%) sepia(5%) saturate(18%) hue-rotate(314deg)
    brightness(104%) contrast(97%);

  &:hover,
  &:active,
  &:focus {
    filter: invert(83%) sepia(5%) saturate(18%) hue-rotate(314deg)
      brightness(114%) contrast(97%);
  }
`;

class Burger extends React.Component {
  render() {
    return (
      <BurgerBox>
        <BurgerImg
          src={BurgerSrc}
          alt="burger"
          tabIndex="0"
          onClick={() => this.props.toggleMenu()}
        />
      </BurgerBox>
    );
  }
}

export default Burger;
