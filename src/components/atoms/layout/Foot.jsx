import { Link } from "react-router-dom";
import styled from "styled-components";

export const Foot = () => {
  return <SFoot>&copy; 2021 test inc</SFoot>;
};

const SFoot = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
