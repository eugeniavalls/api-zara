const mongoose = require('mongoose')

/*--------------------------- *\
 * Modelo de inicio de sesión 
 *  
 * Este modelo define la estrucutura y comportamiento de los registros o intentos de sesión del usuario en la base de datos
 *
 * @model Usuario
 * @property {string} nombre - Nombre de usuario
 * @property {string} pass - Contraseña de usuario
 *--------------------------- */

    const usuarioSchema = new mongoose.Schema(
        { 
            nombre: String, 
            pass: String 
        },
        { collection: 'usuarios' }
    )

    const Usuario = mongoose.model('Usuario', usuarioSchema)

/*--------------------------- *\
 * Modelo del Slider de /gestor 
 *  
 * Este modelo define la estrucutura y comportamiento de las imágenes y el cambio de estas (al hacer scroll) en la base de datos
 *
 * @model Slider
 * @property {string} src - Ruta de la imagen
 * @property {string} alt - Texto alternativo
 *--------------------------- */

    const sliderSchema = new mongoose.Schema(
        { 
            src : String , 
            alt : String
        },
        {collection: 'slider'}
    )

    const Slider = mongoose.model('Slider', sliderSchema)

/*--------------------------- *\
 * Modelo de las prendas
 *  
 * Este modelo define la estrucutura y comportamiento de las prendas en la base de datos
 *
 * @model Prenda
 * @property {string} src - Ruta de la imagen
 * @property {string} alt - Texto alternativo
 * @property {string} prendaName - Nombre de la prenda
 * @property {string} prendaPriceActual - Precio actual de la prenda 
 * @property {string} prendaPriceDisccount - Precio de la prenda con descuento
 * @property {string} prendaPriceLast - Precio último de la prenda
 * @property {string} prendaPriceOld - Precio antiguo de la prenda
 * @property {string} talla - talla de la prenda
 *--------------------------- */

    const prendasSchema = new mongoose.Schema(
        {   src: String, 
            alt: String,
            prendaName: String,
            prendaPriceActual: String,
            prendaPriceDisccount: String,
            prendaPriceLast: String,
            prendaPriceOld: String,
            talla: String
        },
        { collection: 'prendas' }
    )

    const Prenda = mongoose.model('Prenda', prendasSchema)

/*--------------------------- *\
 * Modelo de la wishlist
 *  
 * Este modelo define la estrucutura y comportamiento de las prendas dentro de la wishlist en la base de datos
 *
 * @model Wishlist
 * @property {string} src - Ruta de la imagen
 * @property {string} alt - Texto alternativo
 * @property {string} prendaName - Nombre de la prenda
 * @property {string} prendaPriceActual - Precio actual de la prenda 
 * @property {string} prendaPriceDisccount - Precio de la prenda con descuento
 * @property {string} prendaPriceLast - Precio último de la prenda
 * @property {string} prendaPriceOld - Precio antiguo de la prenda
 * @property {string} talla - talla de la prenda
 *--------------------------- */

    const wishlistSchema = new mongoose.Schema(
        {src: String, 
            alt: String,
            prendaName: String,
            prendaPriceActual: String,
            prendaPriceDisccount: String,
            prendaPriceLast: String,
            prendaPriceOld: String,
            talla: String
         },
        { collection: 'wishlist' }
    )

    const Wishlist = mongoose.model('Wishlist', wishlistSchema)


module.exports = {
    Usuario,
    Slider,
    Prenda,
    Wishlist
}