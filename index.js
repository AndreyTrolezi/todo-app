const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handleabars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (requisicao, resposta) => {
    resposta.send("cr7 melhor do mundo")
})

app.listen(3000, () => {
    console.log("server is online on 3000")
})