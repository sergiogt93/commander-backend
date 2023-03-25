import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import { Server } from 'http'
import cors from 'cors'
import { loadingRoutes } from './loadingRoutes'
import MongoClient from './boundedContext/Shared/infraestructure/MongoClient'

// Configuration the .env file
dotenv.config()

// Create Express APP
const app: Express = express()

// Server congifuration
app.use(cors())

// Content type
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json({ limit: '50mb' }))

// Routes the app
app.get('/', (_req: Request, res: Response) => res.redirect('/api'))
app.get('/api', (_req: Request, res: Response) => res.send({ message: 'Welcome' } ))
app.use('/api',loadingRoutes())
app.use((err: Error, _req: Request, res: Response, _next: Function) => {
  res.status(500).send(err.message)
})

const port: string | number = process.env.PORT || 8000

// Execute SERVER
const server: Server = app.listen(port, () => {
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
  new MongoClient().connection()
})

// Control SERVER ERROR
server.on('error', (error) => {
  console.log(`SERVER ERROR: ${error}`)
})

export default server