import { Box, BoxProps } from '@chakra-ui/react'

import Chart from './Chart'

function ChartContainer(props: BoxProps) {
  return <Box paddingTop="75vh" {...props} />
}

function Content(props: BoxProps) {
  return <Box bg="#fff" minH="50vh" {...props} />
}

function Tab() {
  return (
    <>
      <ChartContainer>
        <Chart />
      </ChartContainer>
      <Content />
    </>
  )
}

export default Tab
