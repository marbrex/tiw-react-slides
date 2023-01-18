import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  process.stdout.write(`Server started on port: ${port}\n`)
})

app.use('/', (request, response) => {
  response.send('Hello World !')
})
