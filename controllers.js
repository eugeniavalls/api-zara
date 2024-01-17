const { Usuario , Slider, Prenda, Wishlist } = require('./schemas/schemas')

//Inicio de sesion
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

//SLider home
const getSlider = async (req, res, next) => {
    try {
        
        const buscarSlider = await Slider.find()
        res.json(buscarSlider)
        
    } catch (error) {
        next(error)
    }

}

//Rebajas
const getPrendas = async (req, res, next) => {
    try {
        
            const buscar = await Prenda.find()
            if (!buscar){
                res.status(200).json('No existe esta prenda')
            } else{
            res.json(buscar)

        }
    } catch (error) {
        next(error)
    }

}

//Wishlist 
const getWishlist = async (req, res, next) => {
    // try {
    //     const wishlistItems = await Wishlist.find()
    //     res.json(wishlistItems)
    // } catch (error) {
    //     next(error)
    // }
    try {
        const buscar = await Prenda.find()
        if (!buscar){
            res.status(200).json('No existe esta prenda')
        } else{
        res.json(buscar)
    }
} catch (error) {
    next(error)
}
}

const saveToWishlist = async (req, res, next) => {
    try {
        const {src, alt, prendaName, prendaPriceActual, prendaPriceDisccount, prendaPriceLast, prendaPriceOld} = req.body
        const savedItem = await Wishlist.create({
            src, alt, prendaName, prendaPriceActual, prendaPriceDisccount, prendaPriceLast, prendaPriceOld
        })
        res.status(201).json(savedItem)
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
    saveToWishlist
}