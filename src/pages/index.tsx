import styled from '@emotion/styled'

import SEO from '../common/Seo'
import Tab from '../components/Tab'
import WeatherNow from '../components/WeatherNow'
import backgroundChina from '../images/backgrounds/china.jpg'

const Container = styled.div`
  color: #fff;
  background: url(${backgroundChina});
  background-size: contain;
`

function IndexPage() {
  return (
    <Container>
      <SEO title="Weather App" index={false} />
      <WeatherNow />
      <Tab />
    </Container>
  )
}

export default IndexPage
