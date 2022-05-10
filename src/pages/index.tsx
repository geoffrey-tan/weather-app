import styled from '@emotion/styled'

import SEO from '../common/Seo'
import Chart from '../components/Chart'
import WeatherNow from '../components/WeatherNow'
import backgroundChina from '../images/backgrounds/china.jpg'

const Container = styled.main`
  color: #fff;
  background: url(${backgroundChina});
  background-size: contain;
`

const ChartContainer = styled.div`
  padding-top: 75vh;
`

const Content = styled.div`
  background: #fff;
  min-height: 50vh;
`

function IndexPage() {
  return (
    <Container>
      <SEO title="Weather App" index={false} />
      <WeatherNow />
      <ChartContainer>
        <Chart />
      </ChartContainer>
      <Content />
    </Container>
  )
}

export default IndexPage
