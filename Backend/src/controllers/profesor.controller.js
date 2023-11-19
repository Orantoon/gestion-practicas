import {getConnection, sql, queries} from '../database'

export const getProfesor = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProfesor);
        res.json(result.recordset);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    
};

export const getProfesorId = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        const result = await pool.request().input("Id", id).query(queries.getProfesor);

        res.send(result.recordset[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const postProfesor = async (req, res) => {

    const {id, nombre, apellido, escuela} = req.body;

    if (id == null || nombre == null || apellido == null || escuela == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("id", sql.Int, id)
        .input("nombre", sql.NVarChar, nombre)
        .input("apellido", sql.NVarChar, apellido)
        .input("escuela", sql.NVarChar, escuela)
        .query(queries.postProfesor);

        res.json({id, nombre, apellido, escuela});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const deleteProfesor = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        await pool.request().input("Id", id).query(queries.deleteProfesor);

        res.sendStatus(204);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const putProfesor = async (req, res) => {

    const {id, nombre, apellido, escuela} = req.body;
    const {userid} = req.params;

    if (id == null || nombre == null || apellido == null || escuela == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("id", sql.Int, id)
        .input("nombre", sql.NVarChar, nombre)
        .input("apellido", sql.NVarChar, apellido)
        .input("escuela", sql.NVarChar, escuela)
        .input('userid', sql.Int, userid)
        .query(queries.updateProfesor);

        res.json({id, nombre, apellido, escuela});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}