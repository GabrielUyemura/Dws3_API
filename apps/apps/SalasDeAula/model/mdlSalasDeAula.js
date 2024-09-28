const db = require("../../../database/databaseconfig");

const getAllSalasDeAula = async () => {
    return (
        await db.query(
            "SELECT * FROM salasdeaula WHERE removido = false ORDER BY descricao ASC"
        )
    ).rows;
};

const getSalasDeAulaByID = async (salasdeaulaIDPar) => {
    return (
        await db.query(
            "SELECT * FROM salasdeaula WHERE salasdeaulaid = $1 and removido = false ORDER BY descricao ASC",
            [salasdeaulaIDPar]
        )
    ).rows;
};

const insertSalasDeAula = async (salasdeaulaREGPar) => {
    //@ Atenção: aqui já começamos a utilizar a variável msg para retornor erros de banco de dados.
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas = (
            await db.query(
                "INSERT INTO salasdeaula " + "values(default, $1, $2, $3, $4)",
                [
                    salasdeaulaREGPar.descricao,
                    salasdeaulaREGPar.localizacao,
                    salasdeaulaREGPar.capacidade,
                    salasdeaulaREGPar.removido,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlSalasDeAula|insertSalasDeAula] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};

const updateSalasDeAula = async (salasdeaulaREGPar) => {
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas = (
            await db.query(
                "UPDATE salasdeaula SET " +
                "descricao = $2, " +
                "localizacao = $3, " +
                "capacidade = $4, " +
                "removido = $5 " +
                "WHERE salasdeaulaid = $1",
                [
                    salasdeaulaREGPar.salasdeaulaid,
                    salasdeaulaREGPar.descricao,
                    salasdeaulaREGPar.localizacao,
                    salasdeaulaREGPar.capacidade,
                    salasdeaulaREGPar.removido,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlSalasDeAula|updateSalasDeAula] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};

const deleteSalasDeAula = async (salasdeaulaREGPar) => {
    let linhasAfetadas;
    let msg = "ok";

    try {
        linhasAfetadas = (
            await db.query(
                "UPDATE salasdeaula SET " + "removido = true " + "WHERE salasdeaulaid = $1",
                [salasdeaulaREGPar.salasdeaulaid]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlSalasDeAula|deleteSalasDeAula] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};

module.exports = {
    getAllSalasDeAula,
    getSalasDeAulaByID,
    insertSalasDeAula,
    updateSalasDeAula,
    deleteSalasDeAula,
};