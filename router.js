const express = require('express')
const { getUsuario, postUsuario, getSlider, getPrendas } = require('./controllers')

const router = express.Router()

router.route('/')
    .get(getUsuario)
    .post(postUsuario)

router.route('/gestor')
    .get(getSlider)

router.route('/rebajas')
    .get(getPrendas)



module.exports = {
    router
}