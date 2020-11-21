const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("./models/model")
const Model = mongoose.model("model")
const accessSheet = require("./data")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

mongoose.connect("mongodburi", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoBD realizada com sucesso!")
}).catch((err) => {
    console.log(err, "Erro: conexão não realizada!")
})

app.get("/", function(req, res){
    accessSheet()
    res.sendFile("public/index.html", {root: __dirname})
})

app.put("/api", function(req, res){
    Model.updateOne({ _id: "5fa09dd83c2c4a035c10a716"}, req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Dados não foram editados com sucesso!"
        })
        return res.status(200).json({
            error: false,
            message: "Dados foram editados com sucesso!",
            content: req.body
        })
    })
})

app.get("/apiGet", function(req, res){
    Model.find({}).then((model) => {
        return res.json(model)
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum dado encontrado!"
        })
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
