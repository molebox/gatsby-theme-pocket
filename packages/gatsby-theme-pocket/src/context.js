/** @jsx jsx */
import React from "react";

import { jsxPragma, mdxPragma } from "isolated-theme-ui";
import theme from "./theme";

export const MyThemeContext = React.createContext({
  theme,
  components: {}
});

// our custom pragmas, bootstrapped with our context
export const jsx = jsxPragma(MyThemeContext);
export const mdx = mdxPragma(MyThemeContext);
