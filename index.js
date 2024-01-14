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
