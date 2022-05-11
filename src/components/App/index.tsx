import { Box, BoxProps } from '@chakra-ui/react'
import { PageProps } from 'gatsby'

import backgroundChina from '../../images/backgrounds/china.jpg'

function Main(props: BoxProps) {
  return (
    <Box
      as="main"
      color="#fff"
      bg={`url(${backgroundChina})`}
      backgroundSize="contain"
      {...props}
    />
  )
}

function App({ children }: PageProps) {
  return (
    /** @issue see react-helmet */
    // <React.StrictMode>
    <Main>{children}</Main>
    // </React.StrictMode>
  )
}

export default App
