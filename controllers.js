const { Usuario , Slider } = require('./schemas/schemas')

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

const postUsuario = (req, res, next) => {
    try {
        const { nombre, pass } = req.body
        const buscar = Usuario.findOne({
            nombre, pass
        })
        res.status(201).json(buscar)
    } catch (error) {
        next(error)
    }
}

//SLider home
const getSlider = (req, res, next) => {
    try {
        if(Slider) {
            const buscarSlider = Slider.find()
            res.json(buscarSlider)
        } else {
            res.status(200).json('No se pueden visualizar las imágenes')
        }
    } catch (error) {
        next(error)
    }
    
}

module.exports = {
    getUsuario,
    postUsuario,
    getSlider
}