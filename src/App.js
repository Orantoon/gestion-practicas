import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { useState, useEffect } from "react";

import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';
import Practicas from './Practicas';
import Usuarios from './Usuarios';
import CrearPractica from './CrearPractica';
import InfoPractica from './InfoPractica';
import EditPractica from './EditPractica';
import CrearUsuario from './CrearUsuario';
import EditUsuario from './EditUsuario';
import AgregarInforme from './AgregarInforme';
import AgregarBitacora from './AgregarBitacora';
import InfoInforme from './InfoInforme';
import CalificarInforme from './CalificarInforme';
import ComentarInforme from './ComentarInforme';
import InfoBitacora from './InfoBitacora';
import CalificarBitacora from './CalificarBitacora';
import ComentarBitacora from './ComentarBitacora';

function App() {
  //const [usuarioActualId, setUsuarioActualId] = useState(null);
  //const [usuarioActualId, setUsuarioActualId] = useState(1);
  //const [usuarioActualId, setUsuarioActualId] = useState(2);
  //const [usuarioActualId, setUsuarioActualId] = useState(3);
  const [usuarioActualId, setUsuarioActualId] = useState(4);

  //const [practicas, setPracticas] = useState(null);
  const [practicas, setPracticas] = useState([
    {id: 1, nombre: 'Practica 1', estudiante: 1, profesor: 2, empresa: 3, fechainicio: '10-02-2023', fechafinal: '10-08-2023', status: 'activo', calificacion: null},
    {id: 2, nombre: 'Practica 2', estudiante: 1, profesor: 2, empresa: 7, fechainicio: '10-02-2022', fechafinal: '10-08-2022', status: 'finalizado', calificacion: null},
    {id: 3, nombre: 'Practica 3', estudiante: 5, profesor: 6, empresa: 3, fechainicio: '10-02-2021', fechafinal: '10-08-2021', status: 'calificado', calificacion: 98}
  ]);

  //const [informe, setInforme] = useState(null);
  const [informes, setInformes] = useState([
    {id: 1, titulo: "Prueba 1", contenido: "asdf", practica: 1, posttime: "02-10-2020", calificacionProfesor: null, calificacionEmpresa: null, calificacionTotal: null},
    {id: 2, titulo: "Prueba 2", contenido: "asdf", practica: 1, posttime: "10-08-2023", calificacionProfesor: null, calificacionEmpresa: null, calificacionTotal: null}
  ]);

  //const [bitacoras, setBitacoras] = useState(null);
  const [bitacoras, setBitacoras] = useState([
    {id: 1, titulo: "Prueba 3", contenido: "asdf", practica: 1, posttime: "10-08-2023", semana: 14, calificacionProfesor: null}
  ]);

  //const [comentarioInforme, setComentarioInforme] = useState(null);
  const [comentariosInforme, setComentariosInforme] = useState([
    {id: 1, informe: 1, autor: 2, contenido: "Buen trabajo!", posttime: "02-10-2020"},
    {id: 2, informe: 1, autor: 3, contenido: "Pesimo, no vuelva", posttime: "05-12-2020"}
  ]);

  //const [comentarioBitacora, setComentarioBitacora] = useState(null);
  const [comentariosBitacora, setComentariosBitacora] = useState([
    {id: 1, bitacora: 1, autor: 2, contenido: "Excelente", posttime: "13-11-2020"}
  ]);

  //const [usuarios, setUsuarios] = useState(null);
  const [usuarios, setUsuarios] = useState([
    {id: 1, correo: "prueba1@hotmail.com", password: '1234', tipo: 1},
    {id: 2, correo: "prueba2@gmail.com", password: '1234', tipo: 2},
    {id: 3, correo: "prueba3@mail.com", password: '1234', tipo: 3},
    {id: 4, correo: "prueba4@mail.com", password: '1234', tipo: 4},
    {id: 5, correo: "prueba5@hotmail.com", password: '1234', tipo: 1},
    {id: 6, correo: "prueba6@gmail.com", password: '1234', tipo: 2},
    {id: 7, correo: "prueba7@mail.com", password: '1234', tipo: 3}
  ]);

  //const [tipoUsuario, setTipoUsuario] = useState(null);
  const [tiposUsuario, setTiposUsuario] = useState([
    {id: 1, nombre: "Estudiante"},
    {id: 2, nombre: "Profesor"},
    {id: 3, nombre: "Empresa"},
    {id: 4, nombre: "Admin"}
  ]);

  //const [estudiantes, setEstudiantes] = useState(null);
  const [estudiantes, setEstudiantes] = useState([
    {id: 1, nombre: 'David', apellido: 'Suarez', carnet: '2020038304', carrera: 'Computacion'},
    {id: 5, nombre: 'Ignacio', apellido: 'Chavez', carnet: '2020038305', carrera: 'Electronica'}
  ]);

  //const [profesores, setProfesores] = useState(null);
  const [profesores, setProfesores] = useState([
    {id: 2, nombre: 'Mario', apellido: 'Chacon', escuela: 'Computacion'},
    {id: 6, nombre: 'Alberto', apellido: 'Hernandez', escuela: 'Electronica'},
  ]);

  //const [empresas, setEmpresas] = useState(null);
  const [empresas, setEmpresas] = useState([
    {id: 3, nombre: 'Walmart', telefono: '1249953103'},
    {id: 7, nombre: 'Amazon', telefono: '1249950003'}
  ]);


  const usuarioActual = usuarios.flat().find(usuario => usuario.id === usuarioActualId);


  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  console.log('isLoggedIn:', isLoggedIn);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const handleLogout = () => {
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <Router>
      {!isLoggedIn ? (
        <Routes>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <>
          <Navbar usuarioActual={usuarioActual} handleLogout={handleLogout} />
          <div className='Content'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/practicas" element={<Practicas usuarioActual={usuarioActual} usuarios={usuarios} estudiantes={estudiantes} profesores={profesores} empresas={empresas} practicas={practicas} setPracticas={setPracticas} usuarios={usuarios}/>} />
                <Route path="/usuarios" element={<Usuarios usuarioActual={usuarioActual} tiposUsuario={tiposUsuario} usuarios={usuarios} setUsuarios={setUsuarios} estudiantes={estudiantes} profesores={profesores} empresas={empresas}/>} />
                
                <Route path="/crearpractica" element={<CrearPractica estudiantes={estudiantes} profesores={profesores} empresas={empresas}/>} />
                <Route path="/infopractica/:id" element={<InfoPractica practicas={practicas} informes={informes} bitacoras={bitacoras} usuarioActual={usuarioActual} estudiantes={estudiantes} profesores={profesores} empresas={empresas}/>} />
                <Route path="/editpractica/:id" element={<EditPractica estudiantes={estudiantes} profesores={profesores} empresas={empresas} practicas={practicas} />} />

                <Route path="/agregarinforme/:id" element={<AgregarInforme setPracticas={setPracticas}/>} />
                <Route path="/infoinforme/:id" element={<InfoInforme practicas={practicas} informes={informes} comentariosInforme={comentariosInforme} usuarios={usuarios} usuarioActual={usuarioActual} profesores={profesores} empresas={empresas}/>} />
                <Route path="/calificarinforme/:id" element={<CalificarInforme practicas={practicas} usuarioActual={usuarioActual}/>} />
                <Route path="/comentarinforme/:id" element={<ComentarInforme practicas={practicas} usuarioActual={usuarioActual}/>} />

                <Route path="/agregarbitacora/:id" element={<AgregarBitacora setPracticas={setPracticas}/>} />
                <Route path="/infobitacora/:id" element={<InfoBitacora practicas={practicas} bitacoras={bitacoras} comentariosBitacora={comentariosBitacora} usuarios={usuarios} usuarioActual={usuarioActual} profesores={profesores} empresas={empresas}/>} />
                <Route path="/calificarbitacora/:id" element={<CalificarBitacora practicas={practicas}/>} />
                <Route path="/comentarbitacora/:id" element={<ComentarBitacora practicas={practicas} usuarioActual={usuarioActual}/>} />
              
                <Route path="/crearusuario" element={<CrearUsuario />} />
                <Route path="/editusuario/:id" element={<EditUsuario tiposUsuario={tiposUsuario} usuarios={usuarios} estudiantes={estudiantes} profesores={profesores} empresas={empresas}/>} />
              </Routes>
          </div>
        </>
      )}
      </Router>
    </div>
  );
}

export default App;
  