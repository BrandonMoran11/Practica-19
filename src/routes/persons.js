const express = require('express');//inyeccion de la dependecia express
const router = express.Router();//creacion del router
const mongoose = require('mongoose');//inyeccion de la dependecia de mongoose

const Person = require('../models/persons');//se crea la variable "Person" para poder guardar la exportacion que se hace de models

router.get('/gente', async (req, res) => {//se crea un router tipo get con raiz /gente el cual respondera con un json
    const Persons = await Person.find({});
    res.json(Persons);
});

module.exports = router;//se exporta el router