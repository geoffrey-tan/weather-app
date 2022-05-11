import {
  Box,
  BoxProps,
  HStack,
  SimpleGrid,
  SimpleGridProps,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import { BiMoon } from 'react-icons/bi'

function Container(props: SimpleGridProps) {
  return <SimpleGrid paddingTop="75vh" p="2.5em" w="100%" {...props} />
}

function NumberDisplay(props: BoxProps) {
  return <Box lineHeight="normal" fontSize={48} {...props} />
}

function WeatherDisplay(props: StackProps) {
  return <VStack alignItems="end" justifyContent="end" {...props} />
}

function WeatherNow() {
  return (
    <Container columns={2}>
      <Box>
        <Box>Yanshuo, China</Box>
        <HStack>
          <NumberDisplay>24</NumberDisplay>
          <HStack>
            <Box>°C</Box>
            <Box>|</Box>
            <Box>°F</Box>
          </HStack>
        </HStack>
      </Box>

      <WeatherDisplay>
        <BiMoon size={24} />
        <Text>Clear</Text>
      </WeatherDisplay>
    </Container>
  )
}

export default WeatherNow
