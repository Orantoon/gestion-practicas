import {getConnection, sql, queries} from '../database'

export const getBitacora = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllBitacora);
        res.json(result.recordset);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    
};

export const getBitacoraId = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        const result = await pool.request().input("Id", id).query(queries.getBitacora);

        res.send(result.recordset[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const postBitacora = async (req, res) => {

    const {titulo, contenido, practica, posttime, calificacionProfesor} = req.body;

    if (titulo == null || contenido == null || practica == null || posttime == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("titulo", sql.NVarChar, titulo)
        .input("contenido", sql.NVarChar, contenido)
        .input("practica", sql.SmallInt, practica)
        .input("posttime", sql.DateTime, posttime)
        .input("calificacionProfesor", sql.TinyInt, calificacionProfesor)
        .query(queries.postBitacora);

        res.json({titulo, contenido, practica, posttime, calificacionProfesor});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const deleteBitacora = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        await pool.request().input("Id", id).query(queries.deleteBitacora);

        res.sendStatus(204);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const putBitacora = async (req, res) => {

    const {titulo, contenido, practica, posttime, calificacionProfesor} = req.body;
    const {id} = req.params;

    if (titulo == null || contenido == null || practica == null || posttime == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("titulo", sql.NVarChar, titulo)
        .input("contenido", sql.NVarChar, contenido)
        .input("practica", sql.SmallInt, practica)
        .input("posttime", sql.DateTime, posttime)
        .input("calificacionProfesor", sql.TinyInt, calificacionProfesor)
        .input('id', sql.Int, id)
        .query(queries.updateBitacora);

        res.json({titulo, contenido, practica, posttime, calificacionProfesor});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}