import {getConnection, sql, queries} from '../database'

export const getComentarioInforme = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllComentarioInforme);
        res.json(result.recordset);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    
};

export const getComentarioInformeId = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        const result = await pool.request().input("Id", id).query(queries.getComentarioInforme);

        res.send(result.recordset[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const postComentarioInforme = async (req, res) => {

    const {informe, autor, contenido, posttime} = req.body;

    if (informe == null || autor == null || contenido == null || posttime == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("informe", sql.SmallInt, informe)
        .input("autor", sql.Int, autor)
        .input("contenido", sql.NVarChar, contenido)
        .input("posttime", sql.DateTime, posttime)
        .query(queries.postComentarioInforme);

        res.json({informe, autor, contenido, posttime});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const deleteComentarioInforme = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        await pool.request().input("Id", id).query(queries.deleteComentarioInforme);

        res.sendStatus(204);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const putComentarioInforme = async (req, res) => {

    const {informe, autor, contenido, posttime} = req.body;
    const {id} = req.params;

    if (informe == null || autor == null || contenido == null || posttime == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("informe", sql.SmallInt, informe)
        .input("autor", sql.Int, autor)
        .input("contenido", sql.NVarChar, contenido)
        .input("posttime", sql.DateTime, posttime)
        .input('id', sql.Int, id)
        .query(queries.updateComentarioInforme);

        res.json({informe, autor, contenido, posttime});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}