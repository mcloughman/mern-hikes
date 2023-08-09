import express from "express"
import Hike from "../models/hikeModel.js"

const router = express.Router()

router.get("/", (req, res) => {
  res.json({ msg: "GET all hikes" })
})
router.get("/:id", (req, res) => {
  res.json({ msg: "GET specific hike" })
})
router.post("/", async (req, res) => {
  const { title, description, images, rating } = req.body
  try {
    const hike = await Hike.create({ title, description, images, rating })
    res.status(200).json(hike)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE specific hike" })
})
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a specific hike" })
})

export { router }
