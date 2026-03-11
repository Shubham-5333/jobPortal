import express from 'express';
const app = express()
import userRoutes from './routes/userRoutes.js'
import connectDB from './Database/db.js';
import cors from 'cors'
const PORT = 3000;
connectDB()

app.use(cors())
app.use(express.json())

app.use('/api',userRoutes)

app.listen(PORT, () => console.log(`Running on http${PORT}`));  