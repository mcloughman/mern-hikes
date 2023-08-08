import express from "express"

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

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`)
})
