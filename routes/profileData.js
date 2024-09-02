const express = require("express");
const Athlete = require("../models/athlete"); // Asegúrate de que esta ruta es correcta
const Sport = require("../models/sport");
const Modality = require("../models/modality");
const Cantone = require("../models/cantone");
const Distrito = require("../models/distrito");

const router = express.Router();

router.post("/profile/data", async (req, res) => {
  const { id } = req.body;
  const IDNumber = parseInt(id);

  try {
    const athleteData = await Athlete.find({
      identification: IDNumber,
    });

    if (!athleteData) {
      return res.status(401).send("El deportista no existe.");
    }

    const athleteInfo = await Athlete.findOne({
      identification: IDNumber,
    });

    const sport_id = athleteInfo.activity.sport_id;
    const modality_id = athleteInfo.activity.modality_id;
    const canton_id = athleteInfo.address.canton_id;
    const distrito_id = athleteInfo.address.distrito_id;

    const sportData = await Sport.find({
      id: sport_id,
    });

    const modalityData = await Modality.find({
      id: modality_id,
    });

    const cantonData = await Cantone.find({
      id: canton_id,
    });

    const distritoData = await Distrito.find({
      id: distrito_id,
    });

    res.json({
      athleteData,
      sportData,
      modalityData,
      cantonData,
      distritoData,
    });
  } catch (err) {
    console.error("Error in login route:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
