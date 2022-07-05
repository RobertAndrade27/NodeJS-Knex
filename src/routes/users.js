const express = require('express')
const { list_projects, inserir_projetos } = require('../controllers/ProjectsControler')
const { list, inserir_usuario, atualizar_usuario, deletar_usuario } = require('../controllers/UserController')

const routes = express.Router()

routes
    .get('/users', list)
    .post('/users/insert', inserir_usuario)
    .put('/users/:id', atualizar_usuario)
    .delete('/users/:id', deletar_usuario)

    //Projects
    .get('/projects', list_projects)
    .post('/projects/insert', inserir_projetos)

module.exports = routes