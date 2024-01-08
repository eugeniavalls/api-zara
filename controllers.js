const { Usuario } = require('./schemas/schemas')

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

module.exports = {
    getUsuario,
    postUsuario
}