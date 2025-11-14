import express from 'express'
import cors from 'cors'
import env from 'dotenv'
import connectDB from './config/mongodb.js'
import authRouter from './routes/authRoutes.js'
import projectRouter from './routes/projectRoute.js'

const app = express()
env.config()
const port = process.env.PORT || 8000
connectDB()


app.use(cors())
app.use(express.json())




// API Endpoints
app.use('/api/auth',authRouter)
app.use('/api/projects', projectRouter);


app.get('/',(req,res)=>res.send("Api Working..."))

app.listen(port,()=>console.log(`Server started on PORT: ${port}`))