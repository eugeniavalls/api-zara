const express = require('express')
const { getUsuario, postUsuario, getSlider, getPrendas, getWishlist, saveToWishlist, deleteWishlist, updateTalla } = require('./controllers')

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

router.route('/wishlist/:id')
    .delete(deleteWishlist)
    .put(updateTalla)

module.exports = {
    router
}