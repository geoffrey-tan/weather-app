import styled from '@emotion/styled'
import { Chart as ChartJS, registerables } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import * as React from 'react'
import { ChartProps, Line } from 'react-chartjs-2'

import img from '../images/sunrise-illustration-wallpaper-2560x1080_14.jpg'

ChartJS.register(...registerables, ChartDataLabels)

const data: ChartProps<'line'>['data'] = {
  labels: [15, 21, 18, 24, 26, 19, 17, 20, 15, 0],
  datasets: [
    {
      // label: "My First dataset",
      backgroundColor: '#fff',
      borderColor: '#fff',
      fill: true,
      data: [15, 21, 18, 24, 26, 19, 17, 20, 15, 12],
    },
  ],
}

const options: ChartProps<'line'>['options'] = {
  layout: {
    autoPadding: false,
    padding: 0,
  },
  scales: {
    x: {
      display: false,
      ticks: {
        autoSkip: false,
      },
    },
    y: {
      display: false,
      ticks: {
        padding: 0,
        // autoSkipPadding: 20
        stepSize: 10, // remove this line to get autoscalling
      },
    },
  },
  elements: {
    line: {
      tension: 0.5,
    },
    point: {
      radius: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: 'end',
      align: 'end',
      color: '#fff',
      font: {
        weight: 'bold',
      },
    },
  },
}

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

const WeatherNow = styled.div`
  position: fixed;
  padding: 1em;
`

function IndexPage() {
  return (
    <Container>
      <WeatherNow>24C</WeatherNow>
      <ChartContainer>
        <Line data={data} options={options} />
      </ChartContainer>
      <Content>Content</Content>
    </Container>
  )
}

export default IndexPage
