const mdlSalasDeAula = require("../model/mdlSalasDeAula.js");

const getAllSalasDeAula = (req, res) =>
    (async () => {
        let registro = await mdlSalasDeAula.getAllSalasDeAula();
        res.json({ status: "ok", "registro": registro });
    })();

const getSalasDeAulaByID = (req, res) =>
    (async () => {
        const salasdeaulaID = parseInt(req.body.salasdeaulaid);
        let registro = await mdlSalasDeAula.getSalasDeAulaByID(salasdeaulaID);

        res.json({ status: "ok", "registro": registro });
    })();

const insertSalasDeAula = (request, res) =>
    (async () => {
        const salasdeaulaREG = request.body;
        let { msg, linhasAfetadas } = await mdlSalasDeAula.insertSalasDeAula(salasdeaulaREG);
        res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
    })();

const updateSalasDeAula = (request, res) =>
    (async () => {
        const salasdeaulaREG = request.body;
        let { msg, linhasAfetadas } = await mdlSalasDeAula.updateSalasDeAula(salasdeaulaREG);
        res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
    })();

const deleteSalasDeAula = (request, res) =>
    (async () => {
        const salasdeaulaREG = request.body;
        let { msg, linhasAfetadas } = await mdlSalasDeAula.deleteSalasDeAula(salasdeaulaREG);
        res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
    })();

module.exports = {
    getAllSalasDeAula,
    getSalasDeAulaByID,
    insertSalasDeAula,
    updateSalasDeAula,
    deleteSalasDeAula
};