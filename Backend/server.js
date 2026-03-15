import express from 'express';
const app = express()
import userRoutes from './routes/userRoutes.js'
import connectDB from './Database/db.js';
import cors from 'cors'
import session from 'express-session';
const PORT = 3000;
// import mongostore from 'connect-mongo'
connectDB()



app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
 
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false
    }
}));

app.use('/api', userRoutes)

app.listen(PORT, () => console.log(`Running on http${PORT}`));  