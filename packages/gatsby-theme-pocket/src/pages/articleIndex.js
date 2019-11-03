/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import DefaultValues from "../components/DefaultValues";
import Articles from "../components/Articles";

// IDEAS: maybe give an option to show as grid or one column in center of page?

/**
 * An article index page that shows all of your saved pocket articles
 */
const ArticleIndex = () => {
  return (
    <DefaultValues>
      <Articles />
    </DefaultValues>
  );
};

export default ArticleIndex;
