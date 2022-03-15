import { Head } from "../atoms/layout/Head";
import styled from "styled-components";

export const Header = (props) => {
  const { children } = props;
  return (
    <>
      <Head />
      {children}
    </>
  );
};
