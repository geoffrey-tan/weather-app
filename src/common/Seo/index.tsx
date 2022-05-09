/**
 * @docs https://www.gatsbyjs.com/docs/add-seo-component/
 * @ref https://ogp.me/
 */

/** @issue Warning: Using UNSAFE_componentWillMount: https://github.com/nfl/react-helmet/issues/548 */
import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

type SeoProps = {
  title?: string
  description?: string
  image?: string
  type?: string
  lang?: string
  index?: boolean
}

function SEO({ title, description, image, type, lang, index }: SeoProps) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl
            defaultImage: image
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      /** @defer workaround: https://github.com/nfl/react-helmet/issues/315 */
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={title && titleTemplate}
      meta={[
        {
          name: 'robots',
          content: `${index ? 'index' : 'noindex'}, ${
            index ? 'follow' : 'nofollow'
          }`,
        },
        {
          name: 'description',
          content: seo.description,
        },
        //  Basic
        {
          property: 'og:title',
          content: seo.title,
        },
        {
          property: 'og:type',
          content: type,
        },
        {
          property: 'og:url',
          content: seo.url,
        },
        {
          property: 'og:image',
          content: seo.image,
        },
        // Optional
        {
          property: 'og:description',
          content: seo.description,
        },
        // Third Party
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: seo.title,
        },
        {
          name: 'twitter:description',
          content: seo.description,
        },
        {
          name: 'twitter:image',
          content: seo.image,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  type: 'website',
  lang: 'en',
  index: true,
}

export default SEO
