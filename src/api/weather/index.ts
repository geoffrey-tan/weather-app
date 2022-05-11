import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const BASE_LOCATION = 'Amsterdam'

interface ContactBody {
  message: string
}

export default function handler(
  req: GatsbyFunctionRequest<ContactBody>,
  res: GatsbyFunctionResponse
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const url = `${BASE_URL}?APPID=${process.env.APPID}&q=${BASE_LOCATION}`

  res.send({ title: `Weather`, message: req.body.message })
}
