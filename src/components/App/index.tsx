import { Box } from '@chakra-ui/react'

type AppProps = {
  children: React.ReactNode
}

function App(props: AppProps) {
  return (
    /** @issue see react-helmet */
    // <React.StrictMode>
    <Box as="main" {...props} />
    // </React.StrictMode>
  )
}

export default App
