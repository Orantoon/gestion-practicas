export const queries = {
    // Usuario
    getAllUsuario: "SELECT * FROM Usuario",
    getUsuario: "SELECT * FROM Usuario WHERE Id = @Id",
    postUsuario: "INSERT INTO Usuario (correo, contrasena, tipo) VALUES (@correo, @contrasena, @tipo)",
    deleteUsuario: "DELETE FROM [ACS].[dbo].[Usuario] WHERE Id = @Id",
    updateUsuario: "UPDATE Usuario SET correo = @correo, contrasena = @contrasena, tipo = @tipo WHERE Id = @Id",

    // Tipo Usuario
    getAllTipoUsuario: "SELECT * FROM TipoUsuario",
    getTipoUsuario: "SELECT * FROM TipoUsuario WHERE Id = @Id",
    postTipoUsuario: "INSERT INTO TipoUsuario (nombre) VALUES (@nombre)",
    deleteTipoUsuario: "DELETE FROM [ACS].[dbo].[TipoUsuario] WHERE Id = @Id",
    updateTipoUsuario: "UPDATE TipoUsuario SET nombre = @nombre WHERE Id = @Id",

    // Estudiante
    getAllEstudiante: "SELECT * FROM Estudiante",
    getEstudiante: "SELECT * FROM Estudiante WHERE Id = @Id",
    postEstudiante: "INSERT INTO Estudiante (id, nombre, apellido, carnet, carrera) VALUES (@id, @nombre, @apellido, @carnet, @carrera)",
    deleteEstudiante: "DELETE FROM [ACS].[dbo].[Estudiante] WHERE Id = @Id",
    updateEstudiante: "UPDATE Estudiante SET id = @id, nombre = @nombre, apellido = @apellido, carnet = @carnet, carrera = @carrera WHERE Id = @userid",

    // Profesor
    getAllProfesor: "SELECT * FROM Profesor",
    getProfesor: "SELECT * FROM Profesor WHERE Id = @Id",
    postProfesor: "INSERT INTO Profesor (id, nombre, apellido, escuela) VALUES (@id, @nombre, @apellido, @escuela)",
    deleteProfesor: "DELETE FROM [ACS].[dbo].[Profesor] WHERE Id = @Id",
    updateProfesor: "UPDATE Profesor SET id = @id, nombre = @nombre, apellido = @apellido, escuela = @escuela WHERE Id = @userid",

    // Empresa
    getAllEmpresa: "SELECT * FROM Empresa",
    getEmpresa: "SELECT * FROM Empresa WHERE Id = @Id",
    postEmpresa: "INSERT INTO Empresa (id, nombre, telefono) VALUES (@id, @nombre, @telefono)",
    deleteEmpresa: "DELETE FROM [ACS].[dbo].[Empresa] WHERE Id = @Id",
    updateEmpresa: "UPDATE Empresa SET id = @id, nombre = @nombre, telefono = @telefono WHERE Id = @userid",

    // Practica
    getAllPractica: "SELECT * FROM PracticaProfesional",
    getPractica: "SELECT * FROM PracticaProfesional WHERE Id = @Id",
    postPractica: "INSERT INTO PracticaProfesional (estudiante, profesor, empresa, calificacionFinal, fechaInicio, fechaFinal, estado, nombre) VALUES (@estudiante, @profesor, @empresa, @calificacionFinal, @fechaInicio, @fechaFinal, @estado, @nombre)",
    deletePractica: "DELETE FROM [ACS].[dbo].[PracticaProfesional] WHERE Id = @Id",
    updatePractica: "UPDATE PracticaProfesional SET estudiante = @estudiante, profesor = @profesor, empresa = @empresa, calificacionFinal = @calificacionFinal, fechaInicio = @fechaInicio, fechaFinal = @fechaFinal, estado = @estado, nombre = @nombre WHERE Id = @Id",

    // Informe
    getAllInforme: "SELECT * FROM Informe",
    getInforme: "SELECT * FROM Informe WHERE Id = @Id",
    postInforme: "INSERT INTO Informe (titulo, contenido, practica, posttime, calificacionProfesor, calificacionEmpresa, calificacionTotal) VALUES (@titulo, @contenido, @practica, @posttime, @calificacionProfesor, @calificacionEmpresa, @calificacionTotal)",
    deleteInforme: "DELETE FROM [ACS].[dbo].[Informe] WHERE Id = @Id",
    updateInforme: "UPDATE Informe SET titulo = @titulo, contenido = @contenido, practica = @practica, posttime = @posttime, calificacionProfesor = @calificacionProfesor, calificacionEmpresa = @calificacionEmpresa, calificacionTotal = @calificacionTotal WHERE Id = @Id",

    // Bitacora
    getAllBitacora: "SELECT * FROM Bitacora",
    getBitacora: "SELECT * FROM Bitacora WHERE Id = @Id",
    postBitacora: "INSERT INTO Bitacora (titulo, contenido, practica, posttime, calificacionProfesor) VALUES (@titulo, @contenido, @practica, @posttime, @calificacionProfesor)",
    deleteBitacora: "DELETE FROM [ACS].[dbo].[Bitacora] WHERE Id = @Id",
    updateBitacora: "UPDATE Bitacora SET titulo = @titulo, contenido = @contenido, practica = @practica, posttime = @posttime, calificacionProfesor = @calificacionProfesor WHERE Id = @Id",

    // Comentario Informe
    getAllComentarioInforme: "SELECT * FROM ComentarioInforme",
    getComentarioInforme: "SELECT * FROM ComentarioInforme WHERE Id = @Id",
    postComentarioInforme: "INSERT INTO ComentarioInforme (informe, autor, contenido, posttime) VALUES (@informe, @autor, @contenido, @posttime)",
    deleteComentarioInforme: "DELETE FROM [ACS].[dbo].[ComentarioInforme] WHERE Id = @Id",
    updateComentarioInforme: "UPDATE ComentarioInforme SET informe = @informe, autor = @autor, contenido = @contenido, posttime = @posttime WHERE Id = @Id",

    // Comentario Bitacora
    getAllComentarioBitacora: "SELECT * FROM ComentarioBitacora",
    getComentarioBitacora: "SELECT * FROM ComentarioBitacora WHERE Id = @Id",
    postComentarioBitacora: "INSERT INTO ComentarioBitacora (bitacora, autor, contenido, posttime) VALUES (@bitacora, @autor, @contenido, @posttime)",
    deleteComentarioBitacora: "DELETE FROM [ACS].[dbo].[ComentarioBitacora] WHERE Id = @Id",
    updateComentarioBitacora: "UPDATE ComentarioBitacora SET bitacora = @bitacora, autor = @autor, contenido = @contenido, posttime = @posttime WHERE Id = @Id"
}