const express = require("express");
const Medical = require("../models/medical");

const router = express.Router();

router.post("/medical", async (req, res) => {
  const { id } = req.body;
  const IDNumber = parseInt(id);

  try {
    const medicalDataActive = await Medical.find({
      "athlete.identification": IDNumber,
      active: true,
    });
    const medicalDataNoActive = await Medical.find({
      "athlete.identification": IDNumber,
      active: false,
    });

    res.json({
      medicalDataActive,
      medicalDataNoActive,
    });
  } catch (err) {
    console.error("Error in login route:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
