import { Heading } from '@chakra-ui/react'

import SEO from '../common/Seo'
import Tab from '../components/Tab'
import WeatherNow from '../components/WeatherNow'

function IndexPage() {
  return (
    <>
      <SEO title="Weather App" index={false} />
      <Heading as="h1" display="none">
        Weather App
      </Heading>
      <WeatherNow />
      <Tab />
    </>
  )
}

export default IndexPage
