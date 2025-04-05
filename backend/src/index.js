import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import router from "./routes/auth.route.js"

const app = express()

app.use(express.json())

app.use("/api/auth",router)

dotenv.config()

const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log("server is listening on port: " + PORT)
    connectDB()
})