import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          banner
          siteUrl
          logo
        }
      }
    }
  `)

  return data.site.siteMetadata
}