import Hike from "../models/hikeModel.js"
import mongoose from "mongoose"

const hikeControllers = {
  // get hikes
  getHikes: async (req, res) => {
    try {
      const hikes = await Hike.find({}).sort({ createdAt: -1 })
      res.status(200).json(hikes)
    } catch (err) {
      res.status(400).json({ err: err.message })
    }
  },

  // get a specific hike
  getHike: async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such hike" })
    }
    const hike = await Hike.findById(id)
    if (!hike) {
      return res.status(404).json({ error: "No such hike!" })
    }
    res.status(200).json(hike)
  },

  // create new hike
  createHike: async (req, res) => {
    const { title, description, images, rating } = req.body
    try {
      const hike = await Hike.create({ title, description, images, rating })
      res.status(200).json(hike)
    } catch (err) {
      res.status(404).json({ error: err.message })
    }
  },

  // delete a hike

  deleteHike: async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such hike" })
    }
    const deletedHike = await Hike.findOneAndDelete({ _id: id })
    if (!deletedHike) {
      return res.status(404).json({ error: "No such hike!" })
    }
    res.status(200).json(deletedHike)
  },

  // update a hike
  updateHike: async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such hike" })
    }
    const updatedHike = await Hike.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    )
    if (!updatedHike) {
      return response.status(404).json({ error: "No such hike" })
    }
    res.status(200).json(updatedHike)
  },
}

export { hikeControllers }
