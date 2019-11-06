/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import ResetDefaults from "../components/ResetDefaults";
import Articles from "../components/Articles";
import { useSiteMetadata } from "../useSiteMetadata";
import SEO from "gatsby-theme-seo/src/components/seo";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justufy-content: center;
  align-items: center;
  margin: 1.5em;
`;

/**
 * An article index page that shows all of your saved pocket articles
 */
const ArticleIndex = () => {
  const {
    pageTitle,
    pageDescription,
    seoTitle,
    seoDescription,
    seoKeywords
  } = useSiteMetadata();
  return (
    <ResetDefaults>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        twitter="studio_hungry"
      />
      <Header>
        <h1
          sx={{
            fontFamily: "heading",
            fontWeight: "300"
          }}
        >
          {pageTitle}
        </h1>
        <h2
          sx={{
            fontFamily: "heading",
            fontWeight: "300"
          }}
        >
          {pageDescription}
        </h2>
      </Header>
      <Articles />
    </ResetDefaults>
  );
};

export default ArticleIndex;
