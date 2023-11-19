import {getConnection, sql, queries} from '../database'

export const getPractica = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllPractica);
        res.json(result.recordset);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    
};

export const getPracticaId = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        const result = await pool.request().input("Id", id).query(queries.getPractica);

        res.send(result.recordset[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const postPractica = async (req, res) => {

    const {estudiante, profesor, empresa, calificacionFinal, fechaInicio, fechaFinal, estado, nombre} = req.body;

    if (estudiante == null || profesor == null || empresa == null || fechaInicio == null || fechaFinal == null || estado == null || nombre == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("estudiante", sql.Int, estudiante)
        .input("profesor", sql.Int, profesor)
        .input("empresa", sql.Int, empresa)
        .input("calificacionFinal", sql.TinyInt, calificacionFinal)
        .input("fechaInicio", sql.DateTime, fechaInicio)
        .input("fechaFinal", sql.DateTime, fechaFinal)
        .input("estado", sql.NVarChar, estado)
        .input("nombre", sql.NVarChar, nombre)
        .query(queries.postPractica);

        res.json({estudiante, profesor, empresa, calificacionFinal, fechaInicio, fechaFinal, estado, nombre});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const deletePractica = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        await pool.request().input("Id", id).query(queries.deletePractica);

        res.sendStatus(204);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const putPractica = async (req, res) => {

    const {estudiante, profesor, empresa, calificacionFinal, fechaInicio, fechaFinal, estado, nombre} = req.body;
    const {id} = req.params;

    if (estudiante == null || profesor == null || empresa == null || fechaInicio == null || fechaFinal == null || estado == null || nombre == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("estudiante", sql.Int, estudiante)
        .input("profesor", sql.Int, profesor)
        .input("empresa", sql.Int, empresa)
        .input("calificacionFinal", sql.TinyInt, calificacionFinal)
        .input("fechaInicio", sql.DateTime, fechaInicio)
        .input("fechaFinal", sql.DateTime, fechaFinal)
        .input("estado", sql.NVarChar, estado)
        .input("nombre", sql.NVarChar, nombre)
        .input('id', sql.Int, id)
        .query(queries.updatePractica);

        res.json({estudiante, profesor, empresa, calificacionFinal, fechaInicio, fechaFinal, estado, nombre});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}