/*--------------------------- *\
 * controllers.js
 *  
 *  Esta ruta maneja las solicitudes relacionadas con el inicio de sesión, las prendas, la wishlist y actualizar la talla de la prenda
 *
 * @getUsuario {GET} / 
 * @postUsuario {POST} / 
 * @getSlider {GET} /gestor 
 * @getPrendas {GET} /rebajas 
 * @getWishlist {GET} /wishlist 
 * @saveToWishlist {POST} /wishlist  
 * @deleteWishlist {DELETE} /wishlist/:id 
 * @updateTalla {PUT} /wishlist/:id
 *--------------------------- */

const { Usuario, Slider, Prenda, Wishlist } = require('./schemas/schemas')

//Inicio de sesión
//Muestra una lista de todos los datos de usuarios que existen
const getUsuario = (req, res, next) => {
    try {
        if (Usuario) {
            const buscar = Usuario.find()
            res.json(buscar)
        } else {
            res.status(200).json('No existe este usuario')
        }
    } catch (error) {
        next(error)
    }
}

//Los datos que recibe por el body los comprueba si existe uno de ellos en la API 
const postUsuario = async (req, res, next) => {
    try {
        const { nombre, pass } = req.body
        const buscar = await Usuario.findOne({
            nombre, pass
        })
        res.status(201).json(buscar)
    } catch (error) {
        next(error)
    }
}

//Slider home
//Muestra de las imágenes para el slider
const getSlider = async (req, res, next) => {
    try {
        const buscarSlider = await Slider.find()
        res.json(buscarSlider)
    } catch (error) {
        next(error)
    }
}

//Rebajas
//Muestra las prendas 
const getPrendas = async (req, res, next) => {
    try {
        const buscar = await Prenda.find()
        if (!buscar) {
            res.status(200).json('No existe esta prenda')
        } else {
            res.json(buscar)
        }
    } catch (error) {
        next(error)
    }
}

//Wishlist 
//Muestra las prendas en la Wishlist
const getWishlist = async (req, res, next) => {
    try {
        const buscar = await Wishlist.find()
        if (!buscar) {
            res.status(200).json('No existe esta prenda')
        } else {
            res.json(buscar)
        }
    } catch (error) {
        next(error)
    }
}

//Añadir la prenda a la colección vacia
//Añade las prenda a la Wishlist, al ser una colección vacía inicialmente, la crea
const saveToWishlist = async (req, res, next) => {
    try {
        const { src, alt, prendaName, prendaPriceActual, prendaPriceDisccount, prendaPriceLast, prendaPriceOld, talla } = req.body
        const savedItem = await Wishlist.create({
            src, alt, prendaName, prendaPriceActual, prendaPriceDisccount, prendaPriceLast, prendaPriceOld, talla
        })
        res.status(201).json(savedItem)
    } catch (error) {
        next(error)
    }
}

//Eliminar prenda
//Elimina la prenda de la wishlist mediante el Id
const deleteWishlist = async (req, res, next) => {
    try {
        const { id } = req.params

        await Wishlist.findByIdAndDelete(id)

        const eliminar = await Wishlist.find()
        
        res.status(200).json(eliminar)
    } catch (error) {
        next(error)
    }
}

//Actualizar prenda
//Actualiza la talla de la prenda mediante el Id
const updateTalla = async (req, res, next) => {
    try {
        const { id } = req.params
        const { talla } = req.body

        const updateItem = await Wishlist.findByIdAndUpdate(id, { talla }, { new: true })

        if (!updateItem) {
            return res.status(404).json('Elemento de wishlist no encontrado')
        }
        res.status(200).json(updateItem)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getUsuario,
    postUsuario,
    getSlider,
    getPrendas,
    getWishlist,
    saveToWishlist,
    deleteWishlist,
    updateTalla
}