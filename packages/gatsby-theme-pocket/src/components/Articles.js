/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Article from "./Article";

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 2em;
`;

const Articles = () => {
  const articlesInfo = useStaticQuery(query);
  const articles = articlesInfo.allPocketArticle.edges;

  return (
    <Container>
      {articles.map(({ node }) => (
        <Article
          shadow
          domainFavicon={node.domainFavicon}
          title={node.title}
          has_image={node.has_image}
          imageSrc={node.has_image ? node.image.src : null}
          excerpt={node.excerpt}
          word_count={node.word_count}
          articleDomain={node.articleDomain}
          url={node.url}
        />
      ))}
    </Container>
  );
};

export default Articles;

export const query = graphql`
  query AllPocketArticlesQuery {
    allPocketArticle {
      edges {
        node {
          excerpt
          readWeek
          title
          url
          image {
            src
            height
            width
          }
          has_image
          readDay
          time_read
          word_count
          domainFavicon
          articleDomain
          id
        }
      }
    }
  }
`;
