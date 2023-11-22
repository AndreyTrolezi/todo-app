const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (requisicao, resposta) => {
    resposta.render('home')
})

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "andrey",
    database: "todoapp",
    port: 3306
})

conexao.connect((error) => {
    if (error) {
        return console.log("access denided")
    }

    console.log("access guaranteed, connected on the servers of mysql")

    app.listen(3000, () => {
        console.log("connected to the residence of the loucos of north zone")
    })
})