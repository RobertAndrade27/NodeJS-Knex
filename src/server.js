const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes/users')

app.use(express.json())
app.use(routes)

//not found

app.use((req,res,next) => {
    const error = new Error('Caminho não encontrado')
    error.status = 404
    next(error)
})


// catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message})
})

app.listen(process.env.PORT, () => console.log('Servidor rodando na porta', process.env.PORT))