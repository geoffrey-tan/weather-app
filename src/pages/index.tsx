import styled from '@emotion/styled'
import * as React from 'react'

import Chart from '../components/Chart'
import WeatherNow from '../components/WeatherNow'
import img from '../images/sunrise-illustration-wallpaper-2560x1080_14.jpg'

const Container = styled.main`
  font-family: '-apple-system, Roboto, sans-serif, serif';
  color: #fff;
  background: url(${img});
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
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
      <WeatherNow />
      <ChartContainer>
        <Chart />
      </ChartContainer>
      <Content />
    </Container>
  )
}

export default IndexPage
