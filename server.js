import express from "express"
import mongoose from "mongoose"

import "dotenv/config"

const app = express()
import { router as hikeRoutes } from "./routes/hikes.js"

// middleware

// will look for data attached to the body of request and will parse it
app.use(express.json())
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
