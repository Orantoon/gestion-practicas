import {getConnection, sql, queries} from '../database'

export const getComentarioBitacora = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllComentarioBitacora);
        res.json(result.recordset);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    
};

export const getComentarioBitacoraId = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        const result = await pool.request().input("Id", id).query(queries.getComentarioBitacora);

        res.send(result.recordset[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const postComentarioBitacora = async (req, res) => {

    const {bitacora, autor, contenido, posttime} = req.body;

    if (bitacora == null || autor == null || contenido == null || posttime == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("bitacora", sql.SmallInt, bitacora)
        .input("autor", sql.Int, autor)
        .input("contenido", sql.NVarChar, contenido)
        .input("posttime", sql.DateTime, posttime)
        .query(queries.postComentarioBitacora);

        res.json({bitacora, autor, contenido, posttime});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const deleteComentarioBitacora = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        await pool.request().input("Id", id).query(queries.deleteComentarioBitacora);

        res.sendStatus(204);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const putComentarioBitacora = async (req, res) => {

    const {bitacora, autor, contenido, posttime} = req.body;
    const {id} = req.params;

    if (bitacora == null || autor == null || contenido == null || posttime == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("bitacora", sql.SmallInt, bitacora)
        .input("autor", sql.Int, autor)
        .input("contenido", sql.NVarChar, contenido)
        .input("posttime", sql.DateTime, posttime)
        .input('id', sql.Int, id)
        .query(queries.updateComentarioBitacora);

        res.json({bitacora, autor, contenido, posttime});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}