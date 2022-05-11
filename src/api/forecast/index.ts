import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'

interface ContactBody {
  message: string
}
export default function handler(
  req: GatsbyFunctionRequest<ContactBody>,
  res: GatsbyFunctionResponse
) {
  res.send({ title: `Forecast`, message: req.body.message })
}
