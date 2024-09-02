const express = require("express");
const Morphological = require("../models/morphological"); // Asegúrate de que esta ruta es correcta

const router = express.Router();

router.post("/profile/morphological", async (req, res) => {
  const { id } = req.body;
  const IDNumber = parseInt(id);

  try {
    const morphologicalAthleteData = await Morphological.find({
      athlete_id: IDNumber,
      active: true,
    });

    if (!morphologicalAthleteData) {
      return res.status(401).send("La información morfologíca no existe.");
    }

    res.json({ morphologicalAthleteData });
  } catch (err) {
    console.error("Error in login route:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
