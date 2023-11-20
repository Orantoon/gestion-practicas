import {getConnection, sql, queries} from '../database'

export const getUsuario = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllUsuario);
        res.json(result.recordset);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    
};

export const getUsuarioId = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        const result = await pool.request().input("Id", id).query(queries.getUsuario);

        res.send(result.recordset[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const postUsuario = async (req, res) => {
    const { correo, contrasena, tipo } = req.body;

    if (correo == null || contrasena == null || tipo == null) {
        return res.status(400).json({ msg: 'Bad Request: Some of the fields are missing.' });
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("correo", sql.NVarChar, correo)
            .input("contrasena", sql.NVarChar, contrasena)
            .input("tipo", sql.TinyInt, tipo)
            .query(`${queries.postUsuario}; SELECT SCOPE_IDENTITY() AS id`);

        if (result.recordset && result.recordset.length > 0) {
            const nuevoUsuarioId = result.recordset[0].id;
            res.json({ id: nuevoUsuarioId, correo, contrasena, tipo });
        } else {
            res.status(500).json({ msg: 'Error: No records returned from the database.' });
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const deleteUsuario = async (req, res) => {

    try {
        const {id} = req.params;

        const pool = await getConnection();
        await pool.request().input("Id", id).query(queries.deleteUsuario);

        res.sendStatus(204);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const putUsuario = async (req, res) => {

    const {correo, contrasena, tipo} = req.body;
    const {id} = req.params;

    if (correo == null || contrasena == null || tipo == null){
        return res.status(400).json({msg: 'Bad Request: Some of the fields are missing.'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("correo", sql.NVarChar, correo)
        .input("contrasena", sql.NVarChar, contrasena)
        .input("tipo", sql.TinyInt, tipo)
        .input('id', sql.Int, id)
        .query(queries.updateUsuario);

        res.json({correo, contrasena, tipo});
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}