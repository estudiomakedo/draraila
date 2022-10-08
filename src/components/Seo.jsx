import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, banner, siteUrl, logo } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    banner: `${siteUrl}${banner}`,
    logo: `${siteUrl}${logo}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>

      {/*--  Essential META Tags -->*/}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="business.business" />
      <meta property="og:image" content={seo.banner}  />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:card" content={seo.banner} />

        {/*--  Non-Essential, But Recommended -->*/}
        <meta property="og:description" content={seo.description}/>
        <meta property="og:site_name" content="Website Dra. Raila Teixeira"/>
        <meta name="twitter:image:alt" content="Identidade Visual de Dra. Raila"/>

        {/*--  Non-Essential, But Required for Analytics -->
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@website-username">*/}



      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.banner} />
      
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.banner} />

      {children}
    </>
  )
}