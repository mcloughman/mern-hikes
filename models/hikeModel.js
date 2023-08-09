import mongoose from "mongoose"
const Schema = mongoose.Schema

const hikeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [],
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

const Hike = mongoose.model("Trail", hikeSchema)
export default Hike
