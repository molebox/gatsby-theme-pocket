/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

export const Card = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.5em;
  max-width: 800px;
  margin: 1em;
  cursor: pointer;
  border-radius: 0.2em;
  text-decoration: none;
  width: 100%;

  & > h2 {
    margin-top: 1em;
    margin-bottom: 1em;
    align-self: center;
    font-size: 1.2em;
  }

  & > h3 {
    font-size: 1em;
  }

  /* 48em = 768px DESKTOP */
  @media (min-width: 48em) {
    & > h2 {
      margin-bottom: 1em;
      align-self: center;
    }
  }

  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

  ${props =>
    props.shadow
      ? `
      -webkit-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.50);
      -moz-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.50);
      box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.50);
      &:hover {
        -webkit-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
        box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
      }
    `
      : null}
`;

export const Image = styled.img`
  max-height: 300px;
  margin: 1em;
  border-radius: 1em;
  padding: 1em;
  margin: 1em;
`;

export const Info = styled.div`
  margin: 1em;
  display: flex;
  justify-content: space-evenly;

  & > p {
    font-size: 0.7em;
  }
`;

export const Favicon = styled.img`
  width: 1em;
  height: 1em;
`;

const Article = ({
  url,
  domainFavicon,
  title,
  has_image,
  imageSrc,
  excerpt,
  word_count,
  articleDomain,
  shadow
}) => {
  return (
    <Card
      href={url}
      shadow={shadow}
      sx={{
        backgroundColor: "white"
      }}
    >
      <Favicon src={domainFavicon} />
      <h2
        sx={{
          fontFamily: "heading",
          fontWeight: "body",
          color: "black",
          borderTop: "1px solid",
          borderTopColor: "black",
          borderBottom: "1px solid",
          borderBottomColor: "black",
          padding: "0.5em"
        }}
      >
        {title}
      </h2>
      {has_image ? <Image src={imageSrc} /> : null}
      <h3
        sx={{
          fontFamily: "body",
          fontWeight: "body",
          color: "black"
        }}
      >
        {excerpt}
      </h3>
      <Info>
        <p
          sx={{
            fontFamily: "heading",
            color: "lightGrey"
          }}
        >
          Words: {word_count}
        </p>
        <p
          sx={{
            fontFamily: "heading",
            color: "lightGrey"
          }}
        >
          Source: {articleDomain}
        </p>
      </Info>
    </Card>
  );
};

export default Article;