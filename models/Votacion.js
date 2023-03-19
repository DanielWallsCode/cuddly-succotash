import { Schema, model } from "mongoose";

const votacionSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },

    apellido: {
        type: String,
        required: true
    },

    candidato: {
        type: String,
        required: true
    },

    correo: {
        type: String,
        unique: true
    }
});

export default model('Votacion', votacionSchema);