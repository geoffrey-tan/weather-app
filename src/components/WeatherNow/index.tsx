import { Box, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { BiMoon } from 'react-icons/bi'

const Container = styled(SimpleGrid)`
  position: fixed;
  padding: 2.5em;
  width: 100%;
`

function WeatherNow() {
  return (
    <Container columns={2}>
      <div>
        <div>Yanshuo, China</div>
        <HStack>
          <Box lineHeight="normal" fontSize={48}>
            24
          </Box>
          <HStack>
            <div>°C</div>
            <div>|</div>
            <div>°F</div>
          </HStack>
        </HStack>
      </div>

      <VStack alignItems="end" justifyContent="end">
        <BiMoon size={24} />
        <Text>Clear</Text>
      </VStack>
    </Container>
  )
}

export default WeatherNow
