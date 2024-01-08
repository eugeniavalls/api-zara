const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema(
    { nombre: String, pass: String },
    { collection: 'usuarios' }
)

const Usuario = mongoose.model('Usuario', usuarioSchema)

module.exports = {
    Usuario
}