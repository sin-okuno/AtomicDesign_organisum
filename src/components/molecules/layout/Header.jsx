import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/users">Users</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: white;
  text-align: center;
  padding: 8px, 0px;
`;

const SLink = styled(Link)`
  margin: 0px 8px;
`;
