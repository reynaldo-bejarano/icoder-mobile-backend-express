const express = require("express");
const Nutrition = require("../models/nutrition");

const router = express.Router();

router.post("/nutrition", async (req, res) => {
  const { id } = req.body;
  const IDNumber = parseInt(id);

  try {
    const nutritionData = await Nutrition.find({
      athlete_id: IDNumber,
      active: true,
    });

    if (!nutritionData) {
      return res.status(401).send("El deportista no existe.");
    }
    res.json({
      nutritionData,
    });
  } catch (err) {
    console.error("Error in login route:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
