const express =require("express")

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("cr7 melhor do mundo")
})

app.listen(3000, () => {
    console.log("server is online on 3000")
})