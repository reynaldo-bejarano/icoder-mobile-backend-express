const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const sportSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    modality: {
      type: Array,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Sport = models.Sport || model("Sport", sportSchema);
module.exports = Sport;
