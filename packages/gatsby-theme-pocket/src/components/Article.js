/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import moment from "moment";

export const Card = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1em;

  margin: 1em;
  cursor: pointer;
  border-radius: 0.5em;
  text-decoration: none;

  & > h2 {
    margin-top: 1em;
    margin-bottom: 1em;
    align-self: center;
    font-size: 0.9em;
  }

  & > h3 {
    font-size: 0.9em;
  }

  /* 48em = 768px DESKTOP */
  @media (min-width: 48em) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1.5em;
  
    margin: 1em;
    cursor: pointer;
    border-radius: 0.5em;
    text-decoration: none;
    width: 100%;

    & > h2 {
      margin-top: 1em;
      margin-bottom: 1em;
      align-self: center;
      font-size: 1.4em;
    }
  
    & > h3 {
      font-size: 1.2em;
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

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    align-self: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;

  margin: 0 auto;
  border-radius: 1em;
  padding: 1em;
`;

export const Info = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    font-size: 0.7em;
  }

  /* 48em = 768px DESKTOP */
  @media (min-width: 48em) {
    margin: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  
    & > p {
      font-size: 0.7em;
    }
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
  shadow,
  time_added
}) => {
  const dateAdded = moment.unix(time_added).format("DD MMM YYYY");

  return (
    <Card
      href={url}
      shadow={shadow}
      sx={{
        backgroundColor: "white",
        border: "1px solid",
        borderColor: "black"
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
          padding: "0.5em",
        }}
      >
        {title}
      </h2>
      {has_image ? (
        <ImageContainer>
          <Image src={imageSrc} alt={`${title}-image`} />
        </ImageContainer>
      ) : null}
      <h3
        sx={{
          fontFamily: "body",
          fontWeight: "body",
          color: "black"
        }}
      >
        {excerpt}
      </h3>
      <Info
        sx={{
          borderTop: "1px solid",
          borderColor: "#9e9d9d",
          paddingTop: "1em"
        }}
      >
        <p
          sx={{
            fontFamily: "heading",
            color: "lightGrey"
          }}
        >
          Date Added: {dateAdded}
        </p>
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
