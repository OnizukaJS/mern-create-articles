"use strict"

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const port = 3900;

var url = "mongodb://localhost:27017/api_rest_reactarticles";

mongoose.Promise = global.Promise;

var article_routes = require("./routes/article");

// Cargamos body-parser, un middleware para analizar cuerpos a través de la URL
app.use(bodyParser.urlencoded({extended: false}));

// Cualquier petición la convertimos a formato json
app.use(bodyParser.json());

// Activamos el CORS para permitir las peticiones AJAX y HTTP desde el frontend
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

app.use("/api", article_routes);

mongoose.connect(url, { useNewUrlParser: true }).then(() => {
    console.log("Conexión a la bdd realizada con éxito!");
    app.listen(port, () => {
        console.log(`Puerto ${port}`);
    })
})