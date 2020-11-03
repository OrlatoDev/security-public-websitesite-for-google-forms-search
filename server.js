const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

require("./models/model")
const Model = mongoose.model("model")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

mongoose.connect("mongodb://localhost/public-security", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoBD realizada com sucesso!")
}).catch(() => {
    console.log("Erro: conexão não realizada com sucesso!")
})

app.get("/", function(req, res){
    res.sendFile("public/index.html", {root: __dirname})
})

app.post("/api", function(req, res){
    const model = Model.update(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Dados não foram cadastrados com sucesso!"
        })
        return res.status(200).json({
            error: false,
            message: "Dados foram cadastrados com sucesso!",
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

app.listen(8000, function(){
    console.log("Server listen at port 8000...")
})