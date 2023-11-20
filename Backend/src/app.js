import express from 'express'
import config from './config'

import usuarioRoutes from './routes/usuario.routes'
import tipoUsuarioRoutes from './routes/tipoUsuario.routes'
import estudianteRoutes from './routes/estudiante.routes'
import profesorRoutes from './routes/profesor.routes'
import empresaRoutes from './routes/empresa.routes'
import practicaRoutes from './routes/practica.routes'
import informeRoutes from './routes/informe.routes'
import bitacoraRoutes from './routes/bitacora.routes'
import comentarioInformeRoutes from './routes/comentarioInforme.routes'
import comentarioBitacoraRoutes from './routes/comentarioBitacora.routes'

const app = express();
const cors = require('cors');

app.use(cors());

// settings
app.set('port', config.port)

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(usuarioRoutes);
app.use(tipoUsuarioRoutes);
app.use(estudianteRoutes);
app.use(profesorRoutes);
app.use(empresaRoutes);
app.use(practicaRoutes);
app.use(informeRoutes);
app.use(bitacoraRoutes);
app.use(comentarioInformeRoutes);
app.use(comentarioBitacoraRoutes);

export default app