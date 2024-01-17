const mongoose = require('mongoose')

//Inicio de sesion

    //Schema para inicio de sesion
    const usuarioSchema = new mongoose.Schema(
        { nombre: String, pass: String },
        { collection: 'usuarios' }
    )

    //Modelo para inicio de sesion
    const Usuario = mongoose.model('Usuario', usuarioSchema)

//Slider home

    //Schema para slider de la home 
    const sliderSchema = new mongoose.Schema(
        { src : String , alt : String},
        {collection: 'slider'}
    )

    //Modelo para slider de la home
    const Slider = mongoose.model('Slider', sliderSchema)

//Prendas

    //Schema para prendas
    const prendasSchema = new mongoose.Schema(
        {   src: String, 
            alt: String,
            prendaName: String,
            prendaPriceActual: String,
            prendaPriceDisccount: String,
            prendaPriceLast: String,
            prendaPriceOld: String,
        
        },
        { collection: 'prendas' }
    )

    //Modelo para prendas
    const Prenda = mongoose.model('Prenda', prendasSchema)

//Wishlist

    //Schema para prendas
    const wishlistSchema = new mongoose.Schema(
        { },
        { collection: 'wishlist' }
    )

    //Modelo para prendas
    const Wishlist = mongoose.model('Wishlist', wishlistSchema)


module.exports = {
    Usuario,
    Slider,
    Prenda,
    Wishlist
}