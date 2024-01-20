/*--------------------------- *\
 * index.js
 *  Interacciones: 
 *     - Cargar datos de una API
 *  Datos: 
 *     - API fetch a VITE_URL_API en local (http://localhost:3000/)
 *     - API fetch a VITE_URL_API en produccion (VITE_URL_API="https://api-zara.vercel.app/")
 *  Estrcutura: 
 *     - Constantes
 *     - Variables
 *     - Funciones
 * 
 * Express API
 * Conectamos con la base de datos de zarapp para devolver la información
 * 
 * @middlewares {cors, nodemon}
 * @routing {Express Router}
 * @odm {mongoose}
 * @endpoint {/} [get, post]
 * @endpoint {/gestor} [get]
 * @endpoint {/rebajas} [get]
 * @endpoint {/wishlist} [get, post]
 * @endpoint {/wishlist/:id} [delete, put]
 *--------------------------- */

console.clear()

const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const { router } = require('./router')

let URL_ATLAS = process.env.URL_ATLAS || 'mongodb://127.0.0.1:27017/zarapp'

const app = express()

const conectar = async () => await mongoose.connect(URL_ATLAS)
    .then(() => console.log('Conectado a BBDD'))
    .catch(error => console.log(error))

conectar()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

app.use((req, res, next) => {
    next({ status: 404, message: 'Error' })
})

app.use((error, req, res, next) => {
    let { status, message } = error
    status = status ? status : 500
    res.status(status).json(message)
})

app.listen(3000, () => console.log('Iniciando API'))
