import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import styled from '@emotion/styled';
import Theme from '../../config/theme';


const ArticleLimitedExcerpt = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  padding: 0 0.7rem;

`; 


const ArticleHeader = styled.header`
  padding: 0 0.7rem;
  color: ${Theme.colors.black.base};
`; 


const ArticleLimitedTitle = styled(Link)`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;

  font-size: 24px;
  font-family: Poppins;
  font-weight: 400;
  text-decoration: none !important;
  color: ${Theme.colors.black.base};
`; 

const ArticleDate = styled.span`
  font-size: 16px;
  font-family: Lato;
  font-weight: 400;
`; 

const ArticleBox = styled.article`
    background-color: ${Theme.colors.white.base};
    border-radius: 4px;
    position: relative;
    padding: 1rem 3px;
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgb(43 37 35 / 10%), 0 0px 0 1px rgb(43 37 35 / 2%);
    color: #4a4a4a;
`; 

const ArticleActionButton = styled(Link)`
  font-size: 20px;
  font-family: Lato;
  font-weight: 600;
  text-decoration: none !important;
  color: ${Theme.colors.primary.base};
  padding: 0 0.7rem 0;

  &:hover {
    color: ${Theme.colors.primary.light};
  }
`; 


class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-4" key={post.id}>
              <ArticleBox
                className={`blog-list-item tile is-child ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <ArticleHeader>
                  <p className="post-meta">
                    <ArticleLimitedTitle
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </ArticleLimitedTitle>
                    {/*<ArticleDate>
                      {post.frontmatter.date}
                    </ArticleDate>*/}
                  </p>
                </ArticleHeader>
                {post.frontmatter.featuredimage ? (
                  <PreviewCompatibleImage 
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `Imagem principal do post ${post.frontmatter.title}`
                    }}
                  />
                  ) : null}
                <p>
                  <ArticleLimitedExcerpt>{post.excerpt}</ArticleLimitedExcerpt>
                  <br/>
                  <ArticleActionButton to={post.fields.slug}>
                    VER MAIS
                  </ArticleActionButton>
                </p>
              </ArticleBox>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "DD/MM/YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
