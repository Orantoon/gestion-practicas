import {getConnection, sql, queries} from '../database'

export const getTipoUsuario = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllTipoUsuario);
        res.json(result.recordset);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    
};

export const getTipoUsuarioId = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        const result = await pool.request().input("Id", id).query(queries.getTipoUsuario);

        res.send(result.recordset[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const postTipoUsuario = async (req, res) => {

    const {nombre} = req.body;

    if (nombre == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("nombre", sql.NVarChar, nombre)
        .query(queries.postTipoUsuario);

        res.json({nombre});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const deleteTipoUsuario = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        await pool.request().input("Id", id).query(queries.deleteTipoUsuario);

        res.sendStatus(204);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const putTipoUsuario = async (req, res) => {

    const {nombre} = req.body;
    const {id} = req.params;

    if (nombre == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("nombre", sql.NVarChar, nombre)
        .input('id', sql.Int, id)
        .query(queries.updateTipoUsuario);

        res.json({nombre});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}