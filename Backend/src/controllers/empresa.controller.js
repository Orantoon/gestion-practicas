import {getConnection, sql, queries} from '../database'

export const getEmpresa = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllEmpresa);
        res.json(result.recordset);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    
};

export const getEmpresaId = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        const result = await pool.request().input("Id", id).query(queries.getEmpresa);

        res.send(result.recordset[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const postEmpresa = async (req, res) => {

    const {id, nombre, telefono} = req.body;

    if (id == null || nombre == null || telefono == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("id", sql.Int, id)
        .input("nombre", sql.NVarChar, nombre)
        .input("telefono", sql.NChar, telefono)
        .query(queries.postEmpresa);

        res.json({id, nombre, telefono});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const deleteEmpresa = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        await pool.request().input("Id", id).query(queries.deleteEmpresa);

        res.sendStatus(204);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const putEmpresa = async (req, res) => {

    const {id, nombre, telefono} = req.body;
    const {userid} = req.params;

    if (id == null || nombre == null || telefono == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("id", sql.Int, id)
        .input("nombre", sql.NVarChar, nombre)
        .input("telefono", sql.NChar, telefono)
        .input('userid', sql.Int, userid)
        .query(queries.updateEmpresa);

        res.json({id, nombre, telefono});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}