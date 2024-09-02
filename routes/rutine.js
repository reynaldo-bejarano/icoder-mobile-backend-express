const express = require("express");
const Rutine = require("../models/rutine");

const router = express.Router();

router.post("/rutine", async (req, res) => {
  const { id } = req.body;
  const IDNumber = parseInt(id);

  try {
    const rutineData = await Rutine.find({
      athlete_id: IDNumber,
    });

    if (!rutineData) {
      return res.status(401).send("El deportista no existe.");
    }

    res.json({
      rutineData,
    });
  } catch (err) {
    console.error("Error in login route:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
