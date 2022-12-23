require('dotenv').config();
const express = require('express');
var cors = require('cors');

const {dbConnection} = require('./database/config')


//Crear servidor express
const app = express();

//Usar cors
app.use(cors());

//Base de datos
dbConnection();

//Rutas
app.get( '/', (req, res) => {
    res.json({
        ok:true,
        msg: 'Hola mundo'
    })
})

app.listen(4000, () => {
    console.log('Servidor corriendo : ' + 4000)
})

console.log("Hola mundo")