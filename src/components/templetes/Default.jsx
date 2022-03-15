import { Head } from "../atoms/layout/Head";
import styled from "styled-components";
import { Foot } from "../atoms/layout/Foot";

export const Default = (props) => {
  const { children } = props;
  return (
    <>
      <Head />
      {children}
      <Foot />
    </>
  );
};
