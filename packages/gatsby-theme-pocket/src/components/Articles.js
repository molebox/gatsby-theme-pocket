/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.5em;
  max-width: 800px;
  margin: 1em;
  cursor: pointer;
  border-radius: 0.2em;

  & > h2 {
    margin: 1em;
    align-self: center;
  }

  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

  ${props =>
    props.shadow
      ? `
    -webkit-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
    `
      : null}
`;
const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  // justify-items: center;
  margin: 2em;

  // grid-template-columns: repeat(2, 1fr);
  // grid-gap: 2em;
`;

const Image = styled.img`
  max-height: 300px;
  margin: 1em;
  border-radius: 1em;
  padding: 1em;
  margin: 1em;
`;

const Info = styled.div`
  // word count and domain
`;

const Articles = () => {
  const articlesInfo = useStaticQuery(query);
  const articles = articlesInfo.allPocketArticle.edges;

  return (
    <Container>
      {articles.map(({ node }) => (
        <Card
          shadow
          sx={{
            backgroundColor: "white"
          }}
        >
          <h2
            sx={{
              fontFamily: "heading",
              fontWeight: "body",
              borderTop: "1px solid",
              borderTopColor: "black",
              borderBottom: "1px solid",
              borderBottomColor: "black",
              padding: "0.5em"
            }}
          >
            {node.title}
          </h2>
          {node.has_image ? <Image src={node.image.src} /> : null}
          <h3
            sx={{
              fontFamily: "body",
              fontWeight: "body"
            }}
          >
            {node.excerpt}
          </h3>
        </Card>
      ))}
    </Container>
  );
};

export default Articles;

export const query = graphql`
  query MyQuery {
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
