const express = require('express')
const { getUsuario, postUsuario } = require('./controllers')

const router = express.Router()

router.route('/')
    .get(getUsuario)
    .post(postUsuario)

module.exports = {
    router
}