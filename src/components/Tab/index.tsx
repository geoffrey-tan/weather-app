import styled from '@emotion/styled'

import Chart from './Chart'

const ChartContainer = styled.div`
  padding-top: 75vh;
`

const Content = styled.div`
  background: #fff;
  min-height: 50vh;
`

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
