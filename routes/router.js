const express = require("express");
const routerApp = express.Router();

const appSalasDeAula = require("../apps/SalasDeAula/controller/ctlSalasDeAula.js");

routerApp.use((req, res, next) => {
    next();
});

routerApp.get("/", (req, res) => {
    res.send("Olá mundo!");
});

//Rotas de SalasDeAula
routerApp.get("/getAllSalasDeAula", appSalasDeAula.getAllSalasDeAula);
routerApp.post("/getSalasDeAulaByID", appSalasDeAula.getSalasDeAulaByID);
routerApp.post("/insertSalasDeAula", appSalasDeAula.insertSalasDeAula);
routerApp.post("/updateSalasDeAula", appSalasDeAula.updateSalasDeAula);
routerApp.post("/deleteSalasDeAula", appSalasDeAula.deleteSalasDeAula);

module.exports = routerApp;