import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)

dotenv.config()

const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log("server is listening on port: " + PORT)
    connectDB()
})