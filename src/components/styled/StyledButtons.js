import React from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";
import styledProps from "styled-props";

const background = {
  primary: "#006f9a",
  danger: "#e35b40",
  success: "#78c043",
  info: "#49b0d3",
};

const color = {
  primary: "#ffcf01",
  danger: "#fff",
  success: "#333",
  info: "#f5f5f5",
};

const styles = {
  fontFamily: "Verdana",
  textAlign: "center",
};

const Button = styled.button`  
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.33rem;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 5px;
  background: ${styledProps(background)};
  border: 4px solid ${styledProps(background)};
  color: ${styledProps(color)};
  &:hover, &:focus {
    background: ${(props) => lighten(0.1, styledProps(background)(props))};
    border: solid 4px ${(props) => darken(0.1, styledProps(background)(props))};
  }

  }
`;

export const StyledButtons = () => (
  <div style={styles}>
    <Button primary>Primary Button</Button>
    <Button danger>Danger Button</Button>
    <Button success>Success Button</Button>
    <Button info>Info Button</Button>
    <button className="button-with-a">Button with A</button>
  </div>
);
