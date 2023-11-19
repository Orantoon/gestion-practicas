import {getConnection, sql, queries} from '../database'

export const getEstudiante = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllEstudiante);
        res.json(result.recordset);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    
};

export const getEstudianteId = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        const result = await pool.request().input("Id", id).query(queries.getEstudiante);

        res.send(result.recordset[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const postEstudiante = async (req, res) => {

    const {id, nombre, apellido, carnet, carrera} = req.body;

    if (id == null || nombre == null || apellido == null || carnet == null || carrera == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("id", sql.Int, id)
        .input("nombre", sql.NVarChar, nombre)
        .input("apellido", sql.NVarChar, apellido)
        .input("carnet", sql.NChar, carnet)
        .input("carrera", sql.NVarChar, carrera)
        .query(queries.postEstudiante);

        res.json({id, nombre, apellido, carnet, carrera});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const deleteEstudiante = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        await pool.request().input("Id", id).query(queries.deleteEstudiante);

        res.sendStatus(204);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const putEstudiante = async (req, res) => {

    const {id, nombre, apellido, carnet, carrera} = req.body;
    const {userid} = req.params;

    if (id == null || nombre == null || apellido == null || carnet == null || carrera == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("id", sql.Int, id)
        .input("nombre", sql.NVarChar, nombre)
        .input("apellido", sql.NVarChar, apellido)
        .input("carnet", sql.NChar, carnet)
        .input("carrera", sql.NVarChar, carrera)
        .input('userid', sql.Int, userid)
        .query(queries.updateEstudiante);

        res.json({id, nombre, apellido, carnet, carrera});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}