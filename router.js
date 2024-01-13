const express = require('express')
const { getUsuario, postUsuario, getSlider,   } = require('./controllers')

const router = express.Router()

router.route('/')
    .get(getUsuario)
    .post(postUsuario)

router.route('/gestor')
    .get(getSlider)


module.exports = {
    router
}