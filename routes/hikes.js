import express from "express"
import Hike from "../models/hikeModel.js"
import authorize from "../authorize.js"
import { hikeControllers } from "../controllers/hikeControllers.js"
const { createHike, getHikes, getHike, deleteHike, updateHike } =
  hikeControllers
const router = express.Router()

router.get("/", getHikes)
router.get("/:id", getHike)
router.post("/", authorize, createHike)

router.delete("/:id", authorize, deleteHike)
router.patch("/:id", authorize, updateHike)

export { router }
