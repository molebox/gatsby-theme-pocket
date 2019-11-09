/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import ResetDefaults from "../components/ResetDefaults";
import Articles from "../components/Articles";
import { useSiteMetadata } from "../useSiteMetadata";
import SEO from "gatsby-theme-seo/src/components/seo";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
      font-size: 1.5em;
    }

    & > h2 {
      font-size: 1em;
      align-self: center;
      padding: 1em;
    }

    /* 48em = 768px DESKTOP */
    @media (min-width: 48em) {
      display: flex;
      flex-direction: column;
      justufy-content: center;
      align-items: center;
      margin: 1.5em;

      & > h1 {
        font-size: 2em;
      }
  
      & > h2 {
        font-size: 1.2em;
        align-self: center;
        padding: 1em;
      }
    }
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
    seoKeywords,
  } = useSiteMetadata();
  return (
    <ResetDefaults>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
      />
      <Container>
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
      </Container>
    </ResetDefaults>
  );
};

export default ArticleIndex;
