const express = require('express')
const { getUsuario, postUsuario, getSlider, getPrendas, getWishlist, saveToWishlist } = require('./controllers')

const router = express.Router()

router.route('/')
    .get(getUsuario)
    .post(postUsuario)

router.route('/gestor')
    .get(getSlider)

router.route('/rebajas')
    .get(getPrendas)

router.route('/wishlist')
    .get(getWishlist)
    .post(saveToWishlist)


module.exports = {
    router
}