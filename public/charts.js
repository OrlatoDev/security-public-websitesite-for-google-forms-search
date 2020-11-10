var url = "https://seguranca-publica-jundiai.herokuapp.com/apiGet"
var xhttp = new XMLHttpRequest()
xhttp.open("GET", url, false)
xhttp.send()

var reqData = JSON.parse(xhttp.responseText)[0]

var ctx1 = document.getElementById("chart1")

var chartGraph1 = new Chart(ctx1, {
    type: "bar",
    data: {
        labels: ["Porcentagem de Respostas"],
        datasets: [{
            label: "Sim",
            data: [reqData.porcentSim1],
            backgroundColor: [
                "rgba(0, 255, 0, 0.2)"
            ],
            borderColor: [
                "green"
            ],
            borderWidth: 3
        },
        {
            label: "Não",
            data: [reqData.porcentNao1],
            backgroundColor: [
                "rgba(255, 0, 0, 0.2)"
            ],
            borderColor: [
                "red"
            ],
            borderWidth: 3
        },
        {
            label: "Mais ou menos",
            data: [reqData.porcentMn1],
            backgroundColor: [
                "rgba(255, 217, 0, 0.219)"
            ],
            borderColor: [
                "yellow"
            ],
            borderWidth: 3
        }
    ]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Você se sente seguro(a) em seu bairro?"
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    callback: function(value){return value+ "%"}
                }
            }]
        }
    }
})



var ctx2 = document.getElementById("chart2")

var chartGraph2 = new Chart(ctx2, {
    type: "bar",
    data: {
        labels: ["Porcentagem de Respostas"],
        datasets: [{
            label: "Sim",
            data: [reqData.porcentSim2],
            backgroundColor: [
                "rgba(0, 255, 0, 0.2)"
            ],
            borderColor: [
                "green"
            ],
            borderWidth: 3
        },
        {
            label: "Não",
            data: [reqData.porcentNao2],
            backgroundColor: [
                "rgba(255, 0, 0, 0.2)"
            ],
            borderColor: [
                "red"
            ],
            borderWidth: 3
        },
        {
            label: "Mais ou menos",
            data: [reqData.porcentMn2],
            backgroundColor: [
                "rgba(255, 217, 0, 0.219)"
            ],
            borderColor: [
                "yellow"
            ],
            borderWidth: 3
        }
    ]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Você acha que as leis são respeitadas?"
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    callback: function(value){return value+ "%"}
                }
            }]
        }
    }
})



var ctx3 = document.getElementById("chart3")

var chartGraph3 = new Chart(ctx3, {
    type: "bar",
    data: {
        labels: ["Porcentagem de Respostas"],
        datasets: [{
            label: "Sim",
            data: [reqData.porcentSim3],
            backgroundColor: [
                "rgba(0, 255, 0, 0.2)"
            ],
            borderColor: [
                "green"
            ],
            borderWidth: 3
        },
        {
            label: "Não",
            data: [reqData.porcentNao3],
            backgroundColor: [
                "rgba(255, 0, 0, 0.2)"
            ],
            borderColor: [
                "red"
            ],
            borderWidth: 3
        },
        {
            label: "Mais ou menos",
            data: [reqData.porcentMn3],
            backgroundColor: [
                "rgba(255, 217, 0, 0.219)"
            ],
            borderColor: [
                "yellow"
            ],
            borderWidth: 3
        }
    ]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Seu bairro tem policiamento?"
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    callback: function(value){return value+ "%"}
                }
            }]
        }
    }
})



var ctx4 = document.getElementById("chart4")

var chartGraph4 = new Chart(ctx4, {
    type: "bar",
    data: {
        labels: ["Porcentagem de Respostas"],
        datasets: [{
            label: "Sim",
            data: [reqData.porcentSim4],
            backgroundColor: [
                "rgba(0, 255, 0, 0.2)"
            ],
            borderColor: [
                "green"
            ],
            borderWidth: 3
        },
        {
            label: "Não",
            data: [reqData.porcentNao4],
            backgroundColor: [
                "rgba(255, 0, 0, 0.2)"
            ],
            borderColor: [
                "red"
            ],
            borderWidth: 3
        },
        {
            label: "Mais ou menos",
            data: [reqData.porcentMn4],
            backgroundColor: [
                "rgba(255, 217, 0, 0.219)"
            ],
            borderColor: [
                "yellow"
            ],
            borderWidth: 3
        }
    ]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Seu bairro tem luz elétrica?"
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    callback: function(value){return value+ "%"}
                }
            }]
        }
    }
})



var ctx5 = document.getElementById("chart5")

var chartGraph5 = new Chart(ctx5, {
    type: "bar",
    data: {
        labels: ["Porcentagem de Respostas"],
        datasets: [{
            label: "Sim",
            data: [reqData.porcentSim5],
            backgroundColor: [
                "rgba(255, 0, 0, 0.2)"
            ],
            borderColor: [
                "red"
            ],
            borderWidth: 3
        },
        {
            label: "Não",
            data: [reqData.porcentNao5],
            backgroundColor: [
                "rgba(0, 255, 0, 0.2)"
            ],
            borderColor: [
                "green"
            ],
            borderWidth: 3
        },
        {
            label: "Mais ou menos",
            data: [reqData.porcentMn5],
            backgroundColor: [
                "rgba(255, 217, 0, 0.219)"
            ],
            borderColor: [
                "yellow"
            ],
            borderWidth: 3
        }
    ]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Seu bairro costuma ter uma taxa de assaltos elevada?"
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    callback: function(value){return value+ "%"}
                }
            }]
        }
    }
})



var ctx6 = document.getElementById("chart6")

var chartGraph6 = new Chart(ctx6, {
    type: "bar",
    data: {
        labels: ["Porcentagem de Respostas"],
        datasets: [{
            label: "Sim",
            data: [reqData.porcentSim6],
            backgroundColor: [
                "rgba(255, 217, 0, 0.219)"
            ],
            borderColor: [
                "yellow"
            ],
            borderWidth: 3
        },
        {
            label: "Não",
            data: [reqData.porcentNao6],
            backgroundColor: [
                "rgba(0, 255, 0, 0.2)"
            ],
            borderColor: [
                "green"
            ],
            borderWidth: 3
        },
        {
            label: "Com frequência",
            data: [reqData.porcentCf6],
            backgroundColor: [
                "rgba(255, 0, 0, 0.219)"
            ],
            borderColor: [
                "red"
            ],
            borderWidth: 3
        }
    ]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Você já foi assaltada(o) no bairro onde mora?"
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    callback: function(value){return value+ "%"}
                }
            }]
        }
    }
})

var ul = $("#obsp")[0]

for (var i = 0; i<reqData.obss.length; i++){
    if (reqData.obss[i] == "" || reqData.obss[i].length <= 1){

    }
    else{
        ul.insertAdjacentHTML("beforeend", `<li>${reqData.obss[i]}</li>`)
    }
}
