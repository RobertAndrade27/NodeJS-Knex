const express = require('express')
const { list, inserir_usuario, atualizar_usuario, deletar_usuario } = require('../controllers/UserController')

const routes = express.Router()

routes.get('/users', list)
routes.post('/users/insert', inserir_usuario)
routes.put('/users/:id', atualizar_usuario)
routes.delete('/users/:id', deletar_usuario)

module.exports = routes