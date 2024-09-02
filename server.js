require("dotenv").config();
const express = require("express");
const connectDB = require("./libs/mongodb");
const cors = require("cors");
const authRoutes = require("./routes/auth"); // Importa las rutas de autenticación
const profileRoutes = require("./routes/profileData");
const profileMorphologicalRoutes = require("./routes/profileMorphological"); // Importa las rutas de profile
const rutineRoutes = require("./routes/rutine");
const nutritionRoutes = require("./routes/nutrition");
const medicalRoutes = require("./routes/medical");
const citaRoutes = require("./routes/cita");

const app = express();
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// Usa las rutas de autenticación
app.use("/api", authRoutes);

app.use("/api", profileRoutes);

app.use("/api", profileMorphologicalRoutes);

app.use("/api", rutineRoutes);

app.use("/api", nutritionRoutes);

app.use("/api", medicalRoutes);

app.use("/api", citaRoutes);
