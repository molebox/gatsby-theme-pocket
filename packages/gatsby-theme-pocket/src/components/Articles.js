/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
// import Img from "gatsby-image";

const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1.5em;
    width: 50em;
    margin: 1em;

    & > h1 {
        margin: 1em;
        align-self: center;
    }

    // box-shadow: 1px 6px 8px 0px hsla(0, 10%, 10%, 0.09)

    -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
    animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
  
    -webkit-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
`;
const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;

    // grid-template-columns: repeat(2, 1fr);
    // grid-gap: 2em;
`;

const OuterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1240px;
    margin: 2em;
`;

const Image = styled.img`

    height: 300px;
    margin: 1em;
`;

const Articles = () => {
    const articlesInfo = useStaticQuery(query);
    const articles = articlesInfo.allPocketArticle.edges;

    return (
        <OuterContainer>
        <Container>
           {articles.map(({node}) => (
               <Card>
                <h1 sx={{
                    fontFamily: 'heading'
                }}>{node.title}</h1>
                {node.has_image ? (
                    <Image src={node.image.src}/>
                ) : null}
                <h3 sx={{
                    fontFamily: 'body'
                }}>{node.excerpt}</h3>
                </Card>
            ))}
        </Container>
        </OuterContainer>
    )
}

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