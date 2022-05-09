import styled from '@emotion/styled'
import * as React from 'react'

const Container = styled.div`
  position: fixed;
  padding: 1em;
`

function WeatherNow() {
  return <Container>24C</Container>
}

export default WeatherNow
