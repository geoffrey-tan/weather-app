import { Chart as ChartJS, registerables } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import * as React from 'react'
import { ChartProps, Line } from 'react-chartjs-2'

ChartJS.register(...registerables, ChartDataLabels)

const data: ChartProps<'line'>['data'] = {
  labels: [15, 21, 18, 24, 26, 19, 17, 20, 15, 0],
  datasets: [
    {
      label: 'My First dataset',
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
        stepSize: 10,
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

function Chart() {
  return <Line data={data} options={options} />
}

export default Chart
