import express from "express"
import "dotenv/config"

const app = express()

// middleware
app.use((req, res, nest) => {
  console.log(req.path, req.method)
})

app.get("/", (req, res) => {
  res.json({ msg: "llistening on 4000" })
})

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`)
})
