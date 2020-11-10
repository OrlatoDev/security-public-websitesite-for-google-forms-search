const accessSheet = async() => {
    const GoogleSpreadsheet = require("google-spreadsheet")
    const credentials = require("./credentials.json")
    const { promisify } = require("util")
    const request = require("request")
    const id = "1Vw5bN7iJnokyztywpaKpMjGEqeIDj5NQEr9sbjAE8zg"
    var porcentagemSimPergunta1, porcentagemNaoPergunta1, porcentagemMnPergunta1, porcentagemSimPergunta2, porcentagemNaoPergunta2, porcentagemMnPergunta2, porcentagemSimPergunta3, porcentagemNaoPergunta3, porcentagemMnPergunta3, porcentagemSimPergunta4, porcentagemNaoPergunta4, porcentagemMnPergunta4, porcentagemSimPergunta5, porcentagemNaoPergunta5, porcentagemMnPergunta5, porcentagemSimPergunta6, porcentagemNaoPergunta6, porcentagemCfPergunta6
    
    const doc = new GoogleSpreadsheet(id)
    await promisify(doc.useServiceAccountAuth)(credentials)
    const info = await promisify(doc.getInfo)()
    const worksheet = info.worksheets[0]
    const rows = await promisify(worksheet.getRows)({

    })

    var senteseguro = []
    rows.forEach(row => {
        senteseguro.push(row.vocêsesenteseguroaemseubairro)
    })
    //console.log(senteseguro)

    var leisrespeitadas = []
    rows.forEach(row => {
        leisrespeitadas.push(row.vocêachaqueasleissãorespeitadas)
    })
    //console.log(leisrespeitadas)

    var policiamento = []
    rows.forEach(row => {
        policiamento.push(row.seubairrotempoliciamento)
    })
    //console.log(policiamento)

    var luzeletrica = []
    rows.forEach(row => {
        luzeletrica.push(row.seubairrotemluzelétrica)
    })
    //console.log(luzeletrica)

    var taxaassaltoelevada = []
    rows.forEach(row => {
        taxaassaltoelevada.push(row.seubairrocostumaterumataxadeassaltoselevada)
    })
    //console.log(taxaassaltoelevada)

    var jafoiassaltado = []
    rows.forEach(row => {
        jafoiassaltado.push(row.vocêjáfoiassaltadaonobairroondemora)
    })
    //console.log(jafoiassaltado)

    var obss = []
    rows.forEach(row => {
        obss.push(row.sequiserdescrevaasegurançadoseubairronogeral)
    })
    //console.log(obss)

    //--------------------------------------------------------------
    //Contar quantas vezes aparece tais respostas

    var simPrimeiraPergunta = []
    var sim = "Sim"
    var simIdxPergunta1 = senteseguro.indexOf(sim)

    while (simIdxPergunta1 != -1){
        simPrimeiraPergunta.push(simIdxPergunta1)
        simIdxPergunta1 = senteseguro.indexOf(sim, simIdxPergunta1+1)
    }

    var naoPrimeiraPergunta = []
    var nao = "Não"
    var naoIdxPergunta1 = senteseguro.indexOf(nao)
    while (naoIdxPergunta1 != -1){
        naoPrimeiraPergunta.push(naoIdxPergunta1)
        naoIdxPergunta1 = senteseguro.indexOf(nao, naoIdxPergunta1+1)
    }

    var mnPrimeiraPergunta = []
    var mn = "Mais ou menos"
    var mnIdxPergunta1 = senteseguro.indexOf(mn)
    while (mnIdxPergunta1 != -1){
        mnPrimeiraPergunta.push(mnIdxPergunta1)
        mnIdxPergunta1 = senteseguro.indexOf(mn, mnIdxPergunta1+1)
    }



    var simSegundaPergunta = []
    var sim = "Sim"
    var simIdxPergunta2 = leisrespeitadas.indexOf(sim)
    while (simIdxPergunta2 != -1){
        simSegundaPergunta.push(simIdxPergunta2)
        simIdxPergunta2 = leisrespeitadas.indexOf(sim, simIdxPergunta2+1)
    }

    var naoSegundaPergunta = []
    var nao = "Não"
    var naoIdxPergunta2 = leisrespeitadas.indexOf(nao)
    while (naoIdxPergunta2 != -1){
        naoSegundaPergunta.push(naoIdxPergunta2)
        naoIdxPergunta2 = leisrespeitadas.indexOf(nao, naoIdxPergunta2+1)
    }

    var mnSegundaPergunta = []
    var mn = "Mais ou menos"
    var mnIdxPergunta2 = leisrespeitadas.indexOf(mn)
    while (mnIdxPergunta2 != -1){
        mnSegundaPergunta.push(mnIdxPergunta2)
        mnIdxPergunta2 = leisrespeitadas.indexOf(mn, mnIdxPergunta2+1)
    }



    var simTerceiraPergunta = []
    var sim = "Sim"
    var simIdxPergunta3 = policiamento.indexOf(sim)
    while (simIdxPergunta3 != -1){
        simTerceiraPergunta.push(simIdxPergunta3)
        simIdxPergunta3 = policiamento.indexOf(sim, simIdxPergunta3+1)
    }

    var naoTerceiraPergunta = []
    var nao = "Não"
    var naoIdxPergunta3 = policiamento.indexOf(nao)
    while (naoIdxPergunta3 != -1){
        naoTerceiraPergunta.push(naoIdxPergunta3)
        naoIdxPergunta3 = policiamento.indexOf(nao, naoIdxPergunta3+1)
    }

    var mnTerceiraPergunta = []
    var mn = "Mais ou menos"
    var mnIdxPergunta3 = policiamento.indexOf(mn)
    while (mnIdxPergunta3 != -1){
        mnTerceiraPergunta.push(mnIdxPergunta3)
        mnIdxPergunta3 = policiamento.indexOf(mn, mnIdxPergunta3+1)
    }



    var simQuartaPergunta = []
    var sim = "Sim"
    var simIdxPergunta4 = luzeletrica.indexOf(sim)
    while (simIdxPergunta4 != -1){
        simQuartaPergunta.push(simIdxPergunta4)
        simIdxPergunta4 = luzeletrica.indexOf(sim, simIdxPergunta4+1)
    }

    var naoQuartaPergunta = []
    var nao = "Não"
    var naoIdxPergunta4 = luzeletrica.indexOf(nao)
    while (naoIdxPergunta4 != -1){
        naoQuartaPergunta.push(naoIdxPergunta4)
        naoIdxPergunta4 = luzeletrica.indexOf(nao, naoIdxPergunta4+1)
    }

    var mnQuartaPergunta = []
    var mn = "Mais ou menos"
    var mnIdxPergunta4 = luzeletrica.indexOf(mn)
    while (mnIdxPergunta4 != -1){
        mnQuartaPergunta.push(mnIdxPergunta4)
        mnIdxPergunta4 = luzeletrica.indexOf(mn, mnIdxPergunta4+1)
    }



    var simQuintaPergunta = []
    var sim = "Sim"
    var simIdxPergunta5 = taxaassaltoelevada.indexOf(sim)
    while (simIdxPergunta5 != -1){
        simQuintaPergunta.push(simIdxPergunta5)
        simIdxPergunta5 = taxaassaltoelevada.indexOf(sim, simIdxPergunta5+1)
    }

    var naoQuintaPergunta = []
    var nao = "Não"
    var naoIdxPergunta5 = taxaassaltoelevada.indexOf(nao)
    while (naoIdxPergunta5 != -1){
        naoQuintaPergunta.push(naoIdxPergunta5)
        naoIdxPergunta5 = taxaassaltoelevada.indexOf(nao, naoIdxPergunta5+1)
    }

    var mnQuintaPergunta = []
    var mn = "Mais ou menos"
    var mnIdxPergunta5 = taxaassaltoelevada.indexOf(mn)
    while (mnIdxPergunta5 != -1){
        mnQuintaPergunta.push(mnIdxPergunta5)
        mnIdxPergunta5 = taxaassaltoelevada.indexOf(mn, mnIdxPergunta5+1)
    }



    var simSextaPergunta = []
    var sim = "Sim"
    var simIdxPergunta6 = jafoiassaltado.indexOf(sim)
    while (simIdxPergunta6 != -1){
        simSextaPergunta.push(simIdxPergunta6)
        simIdxPergunta6 = jafoiassaltado.indexOf(sim, simIdxPergunta6+1)
    }

    var naoSextaPergunta = []
    var nao = "Não"
    var naoIdxPergunta6 = jafoiassaltado.indexOf(nao)
    while (naoIdxPergunta6 != -1){
        naoSextaPergunta.push(naoIdxPergunta6)
        naoIdxPergunta6 = jafoiassaltado.indexOf(nao, naoIdxPergunta6+1)
    }

    var cfSextaPergunta = []
    var cf = "Com frequência"
    var cfIdxPergunta6 = jafoiassaltado.indexOf(cf)
    while (cfIdxPergunta6 != -1){
        cfSextaPergunta.push(cfIdxPergunta6)
        cfIdxPergunta6 = jafoiassaltado.indexOf(cf, cfIdxPergunta6+1)
    }

    var total = simPrimeiraPergunta.length + naoPrimeiraPergunta.length + mnPrimeiraPergunta.length

    porcentagemSimPergunta1 = (simPrimeiraPergunta.length/total)*100
    porcentagemNaoPergunta1 = (naoPrimeiraPergunta.length/total)*100
    porcentagemMnPergunta1 = (mnPrimeiraPergunta.length/total)*100

    porcentagemSimPergunta2 = (simSegundaPergunta.length/total)*100
    porcentagemNaoPergunta2 = (naoSegundaPergunta.length/total)*100
    porcentagemMnPergunta2 = (mnSegundaPergunta.length/total)*100

    porcentagemSimPergunta3 = (simTerceiraPergunta.length/total)*100
    porcentagemNaoPergunta3 = (naoTerceiraPergunta.length/total)*100
    porcentagemMnPergunta3 = (mnTerceiraPergunta.length/total)*100

    porcentagemSimPergunta4 = (simQuartaPergunta.length/total)*100
    porcentagemNaoPergunta4 = (naoQuartaPergunta.length/total)*100
    porcentagemMnPergunta4 = (mnQuartaPergunta.length/total)*100

    porcentagemSimPergunta5 = (simQuintaPergunta.length/total)*100
    porcentagemNaoPergunta5 = (naoQuintaPergunta.length/total)*100
    porcentagemMnPergunta5 = (mnQuintaPergunta.length/total)*100

    porcentagemSimPergunta6 = (simSextaPergunta.length/total)*100
    porcentagemNaoPergunta6 = (naoSextaPergunta.length/total)*100
    porcentagemCfPergunta6 = (cfSextaPergunta.length/total)*100

    porcentagemSimPergunta1 = parseFloat(porcentagemSimPergunta1.toFixed(1))
    porcentagemNaoPergunta1 = parseFloat(porcentagemNaoPergunta1.toFixed(1))
    porcentagemMnPergunta1 = parseFloat(porcentagemMnPergunta1.toFixed(1))
    porcentagemSimPergunta2 = parseFloat(porcentagemSimPergunta2.toFixed(1))
    porcentagemNaoPergunta2 = parseFloat(porcentagemNaoPergunta2.toFixed(1))
    porcentagemMnPergunta2 = parseFloat(porcentagemMnPergunta2.toFixed(1))
    porcentagemSimPergunta3 = parseFloat(porcentagemSimPergunta3.toFixed(1))
    porcentagemNaoPergunta3 = parseFloat(porcentagemNaoPergunta3.toFixed(1))
    porcentagemMnPergunta3 = parseFloat(porcentagemMnPergunta3.toFixed(1))
    porcentagemSimPergunta4 = parseFloat(porcentagemSimPergunta4.toFixed(1))
    porcentagemNaoPergunta4 = parseFloat(porcentagemNaoPergunta4.toFixed(1))
    porcentagemMnPergunta4 = parseFloat(porcentagemMnPergunta4.toFixed(1))
    porcentagemSimPergunta5 = parseFloat(porcentagemSimPergunta5.toFixed(1))
    porcentagemNaoPergunta5 = parseFloat(porcentagemNaoPergunta5.toFixed(1))
    porcentagemMnPergunta5 = parseFloat(porcentagemMnPergunta5.toFixed(1))
    porcentagemSimPergunta6 = parseFloat(porcentagemSimPergunta6.toFixed(1))
    porcentagemNaoPergunta6 = parseFloat(porcentagemNaoPergunta6.toFixed(1))
    porcentagemCfPergunta6 = parseFloat(porcentagemCfPergunta6.toFixed(1))

    request.post(
        "https://seguranca-publica-jundiai.herokuapp.com/api",
        {
            json: {
                "pergunta1": "Você se sente seguro(a) em seu bairro?",
                "porcentSim1": porcentagemSimPergunta1,
                "porcentNao1": porcentagemNaoPergunta1,
                "porcentMn1": porcentagemMnPergunta1,
                "pergunta2": "Você acha que as leis são respeitadas?",
                "porcentSim2": porcentagemSimPergunta2,
                "porcentNao2": porcentagemNaoPergunta2,
                "porcentMn2": porcentagemMnPergunta2,
                "pergunta3": "Seu bairro tem policiamento?",
                "porcentSim3": porcentagemSimPergunta3,
                "porcentNao3": porcentagemNaoPergunta3,
                "porcentMn3": porcentagemMnPergunta3,
                "pergunta4": "Seu bairro tem luz elétrica?",
                "porcentSim4": porcentagemSimPergunta4,
                "porcentNao4": porcentagemNaoPergunta4,
                "porcentMn4": porcentagemMnPergunta4,
                "pergunta5": "Seu bairro costuma ter uma taxa de assaltos elevada?",
                "porcentSim5": porcentagemSimPergunta5,
                "porcentNao5": porcentagemNaoPergunta5,
                "porcentMn5": porcentagemMnPergunta5,
                "pergunta6": "Você já foi assaltada(o) no bairro onde mora?",
                "porcentSim6": porcentagemSimPergunta6,
                "porcentNao6": porcentagemNaoPergunta6,
                "porcentCf6": porcentagemCfPergunta6,
                "obss": obss
            },
        },
        (error, res, body) => {
            if (error){
                console.error(error)
                return
            }
            console.log(`statusCode: ${res.statusCode}`)
        }
    )
}

accessSheet()
