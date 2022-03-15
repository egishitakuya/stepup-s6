import { Link } from "react-router-dom";
import styled from "styled-components";

export const Head = () => {
  return (
    <SHead>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHead>
  );
};

const SHead = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
