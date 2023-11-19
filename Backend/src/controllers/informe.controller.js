import {getConnection, sql, queries} from '../database'

export const getInforme = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllInforme);
        res.json(result.recordset);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    
};

export const getInformeId = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        const result = await pool.request().input("Id", id).query(queries.getInforme);

        res.send(result.recordset[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const postInforme = async (req, res) => {

    const {titulo, contenido, practica, posttime, calificacionProfesor, calificacionEmpresa, calificacionTotal} = req.body;

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
        .input("calificacionEmpresa", sql.TinyInt, calificacionEmpresa)
        .input("calificacionTotal", sql.TinyInt, calificacionTotal)
        .query(queries.postInforme);

        res.json({titulo, contenido, practica, posttime, calificacionProfesor, calificacionEmpresa, calificacionTotal});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const deleteInforme = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        await pool.request().input("Id", id).query(queries.deleteInforme);

        res.sendStatus(204);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const putInforme = async (req, res) => {

    const {titulo, contenido, practica, posttime, calificacionProfesor, calificacionEmpresa, calificacionTotal} = req.body;
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
        .input("calificacionEmpresa", sql.TinyInt, calificacionEmpresa)
        .input("calificacionTotal", sql.TinyInt, calificacionTotal)
        .input('id', sql.Int, id)
        .query(queries.updateInforme);

        res.json({titulo, contenido, practica, posttime, calificacionProfesor, calificacionEmpresa, calificacionTotal});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}