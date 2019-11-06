import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            pageTitle
            pageDescription
            seoTitle
            seoDescription
            seoKeywords
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
