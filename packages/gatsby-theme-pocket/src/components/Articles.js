/** @jsx jsx */
import { jsx } from "../context";
import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Article from "./Article";
import Filter from "./Filter";

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 2em;
  margin: 0 auto;

  /* 48em = 768px DESKTOP */
  @media (min-width: 48em) {
    max-width: 1080px;
    width: 800px;
    margin: 0 auto;
  }
`;

const Articles = () => {
  const articlesInfo = useStaticQuery(query);
  const articles = articlesInfo.allPocketArticle.edges;
  const articleTags = articles.map(({ node }) => node.tags).flat();

  const tags = [...new Set(articleTags)];
  const [selectedTags, setSelectedTags] = React.useState([]);

  const getSelectedTags = (selections) => {
    const tags = selections.map((tag) => tag.value);
    setSelectedTags(tags);
    return;
  };

  return (
    <Container>
      <Filter
        getSelectedTags={getSelectedTags}
        sx={{
          margin: "2em",
        }}
        tags={tags}
      />
      {articles.map(({ node }) => {
        if (node.url == null && node.title == null && node.word_count == null) {
          // If these fields are all null, it's very likely this is a deleted article.
          // Don't render it.
          return null;
        }
        const matchedTag = node.tags.some((tag) => selectedTags.includes(tag));
        if (matchedTag) {
          return (
            <Article
              key={node.title}
              shadow
              domainFavicon={node.domainFavicon}
              title={node.title}
              has_image={node.has_image}
              imageSrc={node.has_image ? node.image.src : null}
              excerpt={node.excerpt}
              word_count={node.word_count}
              articleDomain={node.articleDomain}
              url={node.url}
              time_added={node.time_added}
            />
          );
        } else if (selectedTags.length === 0) {
          return (
            <Article
              key={node.title}
              shadow
              domainFavicon={node.domainFavicon}
              title={node.title}
              has_image={node.has_image}
              imageSrc={node.has_image ? node.image.src : null}
              excerpt={node.excerpt}
              word_count={node.word_count}
              articleDomain={node.articleDomain}
              url={node.url}
              time_added={node.time_added}
            />
          );
        } else return null;
      })}
    </Container>
  );
};

export default Articles;

export const query = graphql`
  query AllPocketArticlesQuery {
    allPocketArticle {
      edges {
        node {
          tags
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
          time_added
        }
      }
    }
  }
`;
