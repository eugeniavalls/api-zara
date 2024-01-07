console.clear()

// --------------------
// HACER EL CONTROLLER ROUTER ETC ETC
// Los modelos en su carpeta, el schema tambien 
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

let URL_ATLAS = process.env.URL_ATLAS || 'mongodb://127.0.0.1:27017/zarapp'
// let URL_ATLAS = process.env.URL_ATLAS || 'mongodb+srv://evallsalfaro:Xativa2900@cluster0.ofcxycz.mongodb.net/zarapp'

const app = express()

const conectar = async () => await mongoose.connect(URL_ATLAS)
    .then(()=> console.log('Conectado a BBDD'))
    .catch(error => console.log(error))

conectar()

const usuarioSchema = new mongoose.Schema(
    {nombre : String , pass : String},
    {collection : 'usuarios'}
)

const Usuario = mongoose.model('Usuario', usuarioSchema)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', async (req, res, next)=>{
    // Aqui flatarian los middleware router etc
    const buscar = await Usuario.find()
    res.json(buscar)
    
})

app.post('/', async (req, res, next) => {
    const {nombre, pass} = req.body
    const buscar = await Usuario.findOne({
        nombre, pass
    })
    res.json(buscar)
})

app.listen(3000, ()=> console.log('Iniciando API'))
