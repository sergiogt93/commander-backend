import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import { Server } from 'http'
import cors from 'cors'
import loadingRoutes from './loadingRoutes'

// Configuration the .env file
dotenv.config()

// Create Express APP
const app: Express = express()

// Static server
app.use(express.static('public'))

// Server congifuration
app.use(cors())

// Content type
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json({ limit: '50mb' }))

// Routes the app
app.get('/', (_req: Request, res: Response) => res.redirect('/api'))
app.get('/api', (_req: Request, res: Response) => res.send({ message: 'Welcome' } ))
app.use('/api',loadingRoutes())

const port: string | number = process.env.PORT || 8000

// Execute SERVER
const server: Server = app.listen(port, () => {
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})

// Control SERVER ERROR
server.on('error', (error) => {
  console.log(`SERVER ERROR: ${error}`)
})

export default server