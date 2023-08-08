import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
  res.json({ msg: "GET all hikes" })
})
router.get("/:id", (req, res) => {
  res.json({ msg: "GET specific hike" })
})
router.post("/", (req, res) => {
  res.json({ msg: "POST new hike" })
})
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE specific hike" })
})
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a specific hike" })
})

export { router }
