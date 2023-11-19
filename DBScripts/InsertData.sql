use ACS;

INSERT INTO TipoUsuario (nombre)
VALUES
('Estudiante'),
('Profesor'),
('Empresa'),
('Admin');

INSERT INTO Usuario (correo, contrasena, tipo)
VALUES
('correo1@estudiantec.cr', '12345', 1),
('correo2@estudiantec.cr', '12345', 1),
('correo3@estudiantec.cr', '12345', 1),
('correo4@estudiantec.cr', '12345', 1),
('correo5@estudiantec.cr', '12345', 1),
('correo6@itcr.ac.cr', '12345', 2),
('correo7@itcr.ac.cr', '12345', 2),
('correo8@itcr.ac.cr', '12345', 2),
('correo9@itcr.ac.cr', '12345', 2),
('correo10@itcr.ac.cr', '12345', 2),
('correo11@gmail.com', '12345', 3),
('correo12@gmail.com', '12345', 3),
('correo13@gmail.com', '12345', 3),
('correo14@gmail.com', '12345', 3),
('correo15@gmail.com', '12345', 3),
('correo16@tec.ac.cr', '12345', 4),
('correo17@tec.ac.cr', '12345', 4),
('correo18@tec.ac.cr', '12345', 4),
('correo19@tec.ac.cr', '12345', 4),
('correo20@tec.ac.cr', '12345', 4);

INSERT INTO Estudiante (id, nombre, apellido, carnet, carrera)
VALUES
(1, 'David', 'Suarez', '2020038304', 'Computacion'),
(2, 'Ignacio', 'Acosta', '2020038305', 'Computacion'),
(3, 'Alberto', 'Rodriguez', '2020038306', 'Computacion'),
(4, 'Rodrigo', 'Quezada', '2020038307', 'Computacion'),
(5, 'Pedro', 'Gutierrez', '2020038308', 'Computacion');

INSERT INTO Profesor (id, nombre, apellido, escuela)
VALUES
(6, 'Mario', 'Chacon', 'Computacion'),
(7, 'Rodolfo', 'Rivas', 'Computacion'),
(8, 'Gabriel', 'Martinez', 'Computacion'),
(9, 'Hugo', 'Fernandez', 'Computacion'),
(10, 'Carlos', 'Sanchez', 'Computacion');

INSERT INTO Empresa (id, nombre, telefono)
VALUES
(11, 'Tec', '48392051'),
(12, 'Amazon', '39503195'),
(13, 'Apple', '19408395'),
(14, 'Microsoft', '65403392'),
(15, 'Tesla', '54960549');

INSERT INTO PracticaProfesional(nombre, estudiante, profesor, empresa, calificacionFinal, fechaInicio, fechaFinal, estado)
VALUES
('Practica 1', 1, 6, 11, null, '20230101 00:00:00 AM', '20230601 00:00:00 AM', 'activo'),
('Practica 2', 2, 7, 12, null, '20220101 00:00:00 AM', '20220601 00:00:00 AM', 'finalizado'),
('Practica 3', 3, 8, 13, null, '20210101 00:00:00 AM', '20210601 00:00:00 AM', 'finalizado'),
('Practica 4', 4, 9, 14, 67, '20200101 00:00:00 AM', '20200601 00:00:00 AM', 'calificado'),
('Practica 5', 5, 10, 15, 88, '20190101 00:00:00 AM', '20190601 00:00:00 AM', 'calificado'),
('Practica 6', 1, 6, 11, 100, '20180101 00:00:00 AM', '20180601 00:00:00 AM', 'calificado'),
('Practica 7', 2, 7, 12, 95, '20170101 00:00:00 AM', '20170601 00:00:00 AM', 'calificado'),
('Practica 8', 3, 8, 13, 90, '20160101 00:00:00 AM', '20160601 00:00:00 AM', 'calificado');

INSERT INTO Informe (titulo, contenido, practica, posttime, calificacionProfesor, calificacionEmpresa, calificacionTotal)
VALUES
('Primer Informe - P1', 'Esto es un documento de prueba.', 1, '20230101 00:00:00 AM', 90, 45, 68),
('Segundo Informe - P1', 'Esto es un documento de prueba.', 1, '20230101 00:00:00 AM', 87, null, null),
('Tercer Informe - P1', 'Esto es un documento de prueba.', 1, '20230101 00:00:00 AM', null, 70, null),
('Primer Informe - P2', 'Esto es un documento de prueba.', 2, '20220101 00:00:00 AM', null, null, null),
('Segundo Informe - P2', 'Esto es un documento de prueba.', 2, '20220101 00:00:00 AM', 100, 100, 100),
('Tercer Informe - P2', 'Esto es un documento de prueba.', 2, '20220101 00:00:00 AM', 98, 100, 99),
('Primer Informe - P3', 'Esto es un documento de prueba.', 3, '20210101 00:00:00 AM', null, null, null),
('Segundo Informe - P3', 'Esto es un documento de prueba.', 3, '20210101 00:00:00 AM', 89, null, null),
('Tercer Informe - P3', 'Esto es un documento de prueba.', 3, '20210101 00:00:00 AM', null, null, null),
('Primer Informe - P4', 'Esto es un documento de prueba.', 4, '20200101 00:00:00 AM', null, 96, null),
('Segundo Informe - P4', 'Esto es un documento de prueba.', 4, '20200101 00:00:00 AM', 67, 90, 77),
('Tercer Informe - P4', 'Esto es un documento de prueba.', 4, '20200101 00:00:00 AM', null, 55, null),
('Primer Informe - P5', 'Esto es un documento de prueba.', 5, '20200101 00:00:00 AM', null, 0, null),
('Segundo Informe - P5', 'Esto es un documento de prueba.', 5, '20200101 00:00:00 AM', 89, 90, 90),
('Tercer Informe - P5', 'Esto es un documento de prueba.', 5, '20200101 00:00:00 AM', 95, 100, 98);

INSERT INTO Bitacora (titulo, contenido, practica, posttime, calificacionProfesor)
VALUES
('S1 Bitacora - P1', 'Esto es un documento de prueba.', 1, '20230101 00:00:00 AM', 86),
('S2 Bitacora - P1', 'Esto es un documento de prueba.', 1, '20230101 00:00:00 AM', null),
('S3 Bitacora - P1', 'Esto es un documento de prueba.', 1, '20230101 00:00:00 AM', null),
('S4 Bitacora - P1', 'Esto es un documento de prueba.', 1, '20230101 00:00:00 AM', 100),
('S5 Bitacora - P1', 'Esto es un documento de prueba.', 1, '20230101 00:00:00 AM', 97),
('S6 Bitacora - P1', 'Esto es un documento de prueba.', 1, '20230101 00:00:00 AM', null),
('S1 Bitacora - P2', 'Esto es un documento de prueba.', 2, '20220101 00:00:00 AM', 45),
('S2 Bitacora - P2', 'Esto es un documento de prueba.', 2, '20220101 00:00:00 AM', 98),
('S3 Bitacora - P2', 'Esto es un documento de prueba.', 2, '20220101 00:00:00 AM', 88),
('S4 Bitacora - P2', 'Esto es un documento de prueba.', 2, '20220101 00:00:00 AM', 89),
('S5 Bitacora - P2', 'Esto es un documento de prueba.', 2, '20220101 00:00:00 AM', 100);

INSERT INTO ComentarioInforme (informe, contenido, autor, posttime)
VALUES
(1, 'Buen Trabajo!', 6, '20230101 00:00:00 AM'),
(2, 'Bien', 6, '20230101 00:00:00 AM'),
(3, 'necesita mejorar redaccion', 6, '20230101 00:00:00 AM'),
(1, 'Pesimo, no vuelva', 11, '20230101 00:00:00 AM'),
(2, 'Este documento no detalle la situacion de las horas', 11, '20230101 00:00:00 AM'),
(3, 'Esta bien', 11, '20230101 00:00:00 AM'),
(4, 'Un obra de arte', 7, '20220101 00:00:00 AM'),
(5, 'Mejorar introduccion', 7, '20220101 00:00:00 AM'),
(6, 'No se encuentran conclusiones que detallen el resultado del trabajo', 12, '20220101 00:00:00 AM');

INSERT INTO ComentarioBitacora (bitacora, contenido, autor, posttime)
VALUES
(1, 'Excelente presentacion', 6, '20230101 00:00:00 AM'),
(2, 'Faltan referencias', 6, '20230101 00:00:00 AM'),
(3, 'Se entrego tarde', 6, '20230101 00:00:00 AM'),
(4, 'Agregar las horas del domingo, por favor', 7, '20220101 00:00:00 AM'),
(5, 'Mejora notable en la calidad', 7, '20220101 00:00:00 AM');