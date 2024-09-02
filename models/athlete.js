const mongoose = require('mongoose');
const { Schema, model, models } = mongoose;

const athleteSchema = new Schema({
    identification: {
        type: Number,
        unique: true,
        required: [true, "La identificación es requerida"],
        minlength: [9, "Mínimo 9 caracteres"],
    },
    name: {
        type: String,
        required: [true, "El nombre es requerido"],
        minlength: [3, "Mínimo 3 caracteres"],
        trim: true,
    },
    lastname1: {
        type: String,
        required: [true, "El primer apellido es requerido"],
        minlength: [3, "Mínimo 3 caracteres"],
        trim: true,
    },
    lastname2: {
        type: String,
        required: [true, "El segundo apellido es requerido"],
        minlength: [3, "Mínimo 3 caracteres"],
        trim: true,
    },
    email: {
        type: String,
        unique: [true, "El correo ya existe"],
        required: [true, "El email es requerido"],
        match: [/^\S+@\S+\.\S+$/, "El correo debe tener un formato válido"],
    },
    password: {
        type: String,
        required: [true, "La contraseña es requerida"],
        select: false,
        minlength: [6, "Mínimo 6 caracteres"],
        trim: true,
    },
    role: {
        type: String,
        required: [true, "El rol es requerido"],
    },
    birth: {
        type: Date,
        required: [true, "La fecha de nacimiento es requerida"],
    },
    genre: {
        type: String,
        required: [true, "El género es requerido"],
    },
    phone: {
        type: String,
        required: [true, "El teléfono es requerido"],
    },
    address: {
        provincia_id: {
            type: String,
            required: [true, "La provincia es requerida"],
        },
        canton_id: {
            type: Number,
            required: [true, "El cantón es requerido"],
        },
        distrito_id: {
            type: Number,
            required: [true, "El distrito es requerido"],
        },
    },
    activity: {
        sport_id: {
            type: Number,
            required: [true, "El ID del deporte es requerido"],
        },
        modality_id: {
            type: Number,
            required: [true, "El ID de la modalidad es requerido"],
        },
        intensity: {
            type: Number,
            required: [true, "La intensidad es requerida"],
        },
    },
    active: {
        type: Boolean,
        required: [true, "El estado de actividad es requerido"],
    }
}, {
    timestamps: true,
});

const Athlete = models.Athlete || model('Athlete', athleteSchema);
module.exports = Athlete;

