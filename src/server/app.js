import path from 'path'
import { fileURLToPath } from 'url'

import express from 'express'
import * as dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const DIST_DIR = path.join(dirname, '../../dist')
app.use(express.static(DIST_DIR))

app.all('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, '/index.html'))
})

app.listen(port, () => {
  process.stdout.write(`Server started on port: ${port}\n`)
})
