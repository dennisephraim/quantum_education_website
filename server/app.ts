import express from 'express'
import fs from 'fs'
import cors from 'cors'
import path from 'path'

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

const DATA_FILE = path.join(__dirname, 'data.json')

app.get('/getData', (_req, _res) => {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8')
    const data = JSON.parse(raw)
    _res.json(data)
  } catch (error) {
    console.error('Error reading data file:', error)
    _res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.listen(port, () => {
  console.log(`quantum server listening on port ${port}`)
})
