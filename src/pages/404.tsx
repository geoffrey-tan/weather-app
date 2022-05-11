import { Heading } from '@chakra-ui/react'

import SEO from '../common/Seo'

function NotFoundPage() {
  return (
    <>
      <SEO title="404 | Not Found" index={false} />
      <Heading as="h1">404</Heading>
    </>
  )
}

export default NotFoundPage
