import { Link } from "react-router-dom";
import styled from "styled-components";

export const Fotter = () => {
  return (
    <SFotter>
      &copy; 2021 Created with reference to Jake-san's lecture.{" "}
    </SFotter>
  );
};

const SFotter = styled.footer`
  background-color: #11999e;
  color: white;
  text-align: center;
  padding: 8px, 0px;
  position: fixed;
  bottom: 0px;
  width: 100%;
`;
