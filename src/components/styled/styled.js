import styled from "styled-components";

export const Heading = styled.div`
  background-color: rgb(180, 100, 240);
  color: #fff;
  font-size: 24px
  height: 60px;
  width: max-content;
  padding: 10px 30px;
`;
export const In = styled.input`
  background-color: orange;
  color: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
