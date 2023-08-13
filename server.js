import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"
import { v2 as cloudinary } from "cloudinary"
import { router as hikeRoutes } from "./routes/hikes.js"

// Initialize Cloudinary with your API credentials from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Now you can use the cloudinary object to work with Cloudinary

const app = express()

// middleware

// will look for data attached to the body of request and will parse it
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use("/api/hikes", hikeRoutes)

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db and listening on ${process.env.PORT}`)
    })
  })
  .catch((e) => {
    console.log("Oh No Error", e)
  })
