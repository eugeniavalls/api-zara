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


module.exports = {
    Usuario,
    Slider
}