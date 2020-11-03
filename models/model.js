const mongoose = require("mongoose")

const Model = new mongoose.Schema({
    pergunta1: {
        type: String,
        required: true
    },
    porcentSim1: {
        type: String,
        required: true
    },
    porcentNao1: {
        type: String,
        required: true
    },
    porcentMn1: {
        type: String,
        required: true
    },
    pergunta2: {
        type: String,
        required: true
    },
    porcentSim2: {
        type: String,
        required: true
    },
    porcentNao2: {
        type: String,
        required: true
    },
    porcentMn2: {
        type: String,
        required: true
    },
    pergunta3: {
        type: String,
        required: true
    },
    porcentSim3: {
        type: String,
        required: true
    },
    porcentNao3: {
        type: String,
        required: true
    },
    porcentMn3: {
        type: String,
        required: true
    },
    pergunta4: {
        type: String,
        required: true
    },
    porcentSim4: {
        type: String,
        required: true
    },
    porcentNao4: {
        type: String,
        required: true
    },
    porcentMn4: {
        type: String,
        required: true
    },
    pergunta5: {
        type: String,
        required: true
    },
    porcentSim5: {
        type: String,
        required: true
    },
    porcentNao5: {
        type: String,
        required: true
    },
    porcentMn5: {
        type: String,
        required: true
    },
    pergunta6: {
        type: String,
        required: true
    },
    porcentSim6: {
        type: String,
        required: true
    },
    porcentNao6: {
        type: String,
        required: true
    },
    porcentCf6: {
        type: String,
        required: true
    },
    obss: {
        type: Array,
        required: true
    }
},
{
    timestamps: true,
})

mongoose.model('model', Model)