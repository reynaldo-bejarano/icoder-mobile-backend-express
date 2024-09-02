const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const cantoneSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cantone = models.Cantone || model("Cantone", cantoneSchema);
module.exports = Cantone;
