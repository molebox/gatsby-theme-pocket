/** @jsx jsx */
import { jsx } from "theme-ui";

import ResetDefaults from "../components/ResetDefaults";
import Articles from "../components/Articles";

/**
 * An article index page that shows all of your saved pocket articles
 */
const ArticleIndex = () => {
  return (
    <ResetDefaults>
      <Articles />
    </ResetDefaults>
  );
};

export default ArticleIndex;
