import React from "react";
import { Global, css } from "@emotion/core";

const DefaultValues = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}
    />
    {children}
  </>
);

export default DefaultValues;
