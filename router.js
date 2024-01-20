/*--------------------------- *\
 * router.js
 *  Ruta principal de la API (Router.js)
 *  Esta ruta maneja las solicitudes a la raíz de la API 
 * 
 * @getUsuario {GET} /Inicio de sesión, muestra una lista de todos los datos de usuarios que existen
 * @postUsuario {POST} /Los datos que recibe por el body los comprueba si existe uno de ellos en la API 
 * @getSlider {GET} /Muestra de las imágenes para el slider
 * @getPrendas {GET} /Muestra las prendas 
 * @getWishlist {GET} /Muestra las prendas en la Wishlist
 * @saveToWishlist {POST} /Añade las prenda a la Wishlist, al ser una colección vacía inicialmente, la crea
 * @deleteWishlist {DELETE} /Elimina la prenda de la wishlist 
 * @updateTalla {PUT} /Actualiza la talla de la prenda 
 *--------------------------- */

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