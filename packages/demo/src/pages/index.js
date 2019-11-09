/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    padding: 1em;
    margin: 0 auto;

    & > h1 {
        font-size: 1.6em;
      }
  
      & > h2 {
        font-size: 1em;
        align-self: center;
        padding: 1em;
      }

      & .link {
          font-size: 1.2em;
      }

    /* 48em = 768px DESKTOP */
    @media (min-width: 48em) {

      & > h1 {
        font-size: 2em;
      }
  
      & > h2 {
        font-size: 1.2em;
        align-self: center;
        padding: 1em;
      }

      & .link {
        font-size: 1.5em;
    }
    }
`;

const Index = () => (
    <Container>
        <h1 sx={{
            fontFamily: 'heading',
            fontWeight: 'heading'
        }}>gatsby-theme-pocket</h1>
        <h2 sx={{
            fontFamily: 'body',
            fontWeight: 'body'
        }}>
        The idea behind this theme is to add a curated list of articles of interest to your website. These can be for your personal site where you want to keep a list of articles you read, your business site where you want to show your visitors articles that relate to your market or just a place to save stuff that interests you from the internet. You need to have the pocket app installed on your mobile or the browser extension, it is from there that you save your articles.
        </h2>
        <Link className="link" sx={{
            fontFamily: 'body',
            fontWeight: 'body',
            textDecorationColor: 'lightGrey',
            color: 'black'
        }} to="/articleIndex">Show me the articles already...</Link>
    </Container>
);

export default Index;