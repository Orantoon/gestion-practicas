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
  const [usuarioActualId, setUsuarioActualId] = useState(6);
  //const [usuarioActualId, setUsuarioActualId] = useState(11);
  //const [usuarioActualId, setUsuarioActualId] = useState(17);

  const [practicas, setPracticas] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/practica')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setPracticas(data);
    });
  }, []);

  /*
  const [practicas, setPracticas] = useState([
    {id: 1, nombre: 'Practica 1', estudiante: 1, profesor: 2, empresa: 3, fechainicio: '10-02-2023', fechafinal: '10-08-2023', status: 'activo', calificacion: null},
    {id: 2, nombre: 'Practica 2', estudiante: 1, profesor: 2, empresa: 7, fechainicio: '10-02-2022', fechafinal: '10-08-2022', status: 'finalizado', calificacion: null},
    {id: 3, nombre: 'Practica 3', estudiante: 5, profesor: 6, empresa: 3, fechainicio: '10-02-2021', fechafinal: '10-08-2021', status: 'calificado', calificacion: 98}
  ]);
  */

  const [informes, setInformes] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/informe')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setInformes(data);
    });
  }, []);
  /*
  const [informes, setInformes] = useState([
    {id: 1, titulo: "Prueba 1", contenido: "asdf", practica: 1, posttime: "02-10-2020", calificacionProfesor: null, calificacionEmpresa: null, calificacionTotal: null},
    {id: 2, titulo: "Prueba 2", contenido: "asdf", practica: 1, posttime: "10-08-2023", calificacionProfesor: null, calificacionEmpresa: null, calificacionTotal: null}
  ]);
  */

  const [bitacoras, setBitacoras] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/bitacora')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setBitacoras(data);
    });
  }, []);
  /*
  const [bitacoras, setBitacoras] = useState([
    {id: 1, titulo: "Prueba 3", contenido: "asdf", practica: 1, posttime: "10-08-2023", semana: 14, calificacionProfesor: null}
  ]);
  */

  const [comentariosInforme, setComentariosInforme] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/comentario-informe')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setComentariosInforme(data);
    });
  }, []);
  /*
  const [comentariosInforme, setComentariosInforme] = useState([
    {id: 1, informe: 1, autor: 2, contenido: "Buen trabajo!", posttime: "02-10-2020"},
    {id: 2, informe: 1, autor: 3, contenido: "Pesimo, no vuelva", posttime: "05-12-2020"}
  ]);
  */

  const [comentariosBitacora, setComentariosBitacora] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/comentario-bitacora')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setComentariosBitacora(data);
    });
  }, []);
  /*
  const [comentariosBitacora, setComentariosBitacora] = useState([
    {id: 1, bitacora: 1, autor: 2, contenido: "Excelente", posttime: "13-11-2020"}
  ]);
  */

  const [usuarios, setUsuarios] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/usuario')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setUsuarios(data);
    })
  }, []);
  /*
  const [usuarios, setUsuarios] = useState([
    {id: 1, correo: "prueba1@hotmail.com", password: '1234', tipo: 1},
    {id: 2, correo: "prueba2@gmail.com", password: '1234', tipo: 2},
    {id: 3, correo: "prueba3@mail.com", password: '1234', tipo: 3},
    {id: 4, correo: "prueba4@mail.com", password: '1234', tipo: 4},
    {id: 5, correo: "prueba5@hotmail.com", password: '1234', tipo: 1},
    {id: 6, correo: "prueba6@gmail.com", password: '1234', tipo: 2},
    {id: 7, correo: "prueba7@mail.com", password: '1234', tipo: 3}
  ]);
  */

  const [tipoUsuario, setTipoUsuario] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/tipo-usuario')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setTipoUsuario(data);
    });
  }, []);
  /*
  const [tipoUsuario, setTipoUsuario] = useState([
    {id: 1, nombre: "Estudiante"},
    {id: 2, nombre: "Profesor"},
    {id: 3, nombre: "Empresa"},
    {id: 4, nombre: "Admin"}
  ]);
  */

  const [estudiantes, setEstudiantes] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/estudiante')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setEstudiantes(data);
    });
  }, []);
  /*
  const [estudiantes, setEstudiantes] = useState([
    {id: 1, nombre: 'David', apellido: 'Suarez', carnet: '2020038304', carrera: 'Computacion'},
    {id: 5, nombre: 'Ignacio', apellido: 'Chavez', carnet: '2020038305', carrera: 'Electronica'}
  ]);
  */

  const [profesores, setProfesores] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/profesor')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setProfesores(data);
    });
  }, []);
  /*
  const [profesores, setProfesores] = useState([
    {id: 2, nombre: 'Mario', apellido: 'Chacon', escuela: 'Computacion'},
    {id: 6, nombre: 'Alberto', apellido: 'Hernandez', escuela: 'Electronica'},
  ]);
  */

  const [empresas, setEmpresas] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/empresa')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setEmpresas(data);
    });
  }, []);
  /*
  const [empresas, setEmpresas] = useState([
    {id: 3, nombre: 'Walmart', telefono: '1249953103'},
    {id: 7, nombre: 'Amazon', telefono: '1249950003'}
  ]);
  */

  
  const usuarioActual = usuarios && usuarios.flat().find(usuario => usuario.id === usuarioActualId);

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
          <Route path="/login" element={<Login usuarios={usuarios} setLoggedIn={setLoggedIn} setUsuarioActualId={setUsuarioActualId} />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <>
          {usuarioActual && <Navbar usuarioActual={usuarioActual} handleLogout={handleLogout} />}
          <div className='Content'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/practicas" element={<Practicas usuarioActual={usuarioActual} usuarios={usuarios} estudiantes={estudiantes} profesores={profesores} empresas={empresas} practicas={practicas} setPracticas={setPracticas}/>} />
                <Route path="/usuarios" element={<Usuarios practicas={practicas} usuarioActual={usuarioActual} tipoUsuario={tipoUsuario} usuarios={usuarios} setUsuarios={setUsuarios} estudiantes={estudiantes} profesores={profesores} empresas={empresas}/>} />
                
                <Route path="/crearpractica" element={<CrearPractica practicas={practicas} setPracticas={setPracticas} estudiantes={estudiantes} profesores={profesores} empresas={empresas}/>} />
                <Route path="/infopractica/:id" element={<InfoPractica practicas={practicas} informes={informes} bitacoras={bitacoras} usuarioActual={usuarioActual} estudiantes={estudiantes} profesores={profesores} empresas={empresas}/>} />
                <Route path="/editpractica/:id" element={<EditPractica estudiantes={estudiantes} profesores={profesores} empresas={empresas} practicas={practicas} setPracticas={setPracticas}/>} />

                <Route path="/agregarinforme/:id" element={<AgregarInforme practicas={practicas} informes={informes} setInformes={setInformes} />} />
                <Route path="/infoinforme/:id" element={<InfoInforme practicas={practicas} informes={informes} comentariosInforme={comentariosInforme} usuarios={usuarios} usuarioActual={usuarioActual} profesores={profesores} empresas={empresas}/>} />
                <Route path="/calificarinforme/:id" element={<CalificarInforme usuarioActual={usuarioActual} informes={informes} setInformes={setInformes} />} />
                <Route path="/comentarinforme/:id" element={<ComentarInforme usuarioActual={usuarioActual} informes={informes} comentariosInforme={comentariosInforme} setComentariosInforme={setComentariosInforme} />} />

                <Route path="/agregarbitacora/:id" element={<AgregarBitacora practicas={practicas} bitacoras={bitacoras} setBitacoras={setBitacoras}/>} />
                <Route path="/infobitacora/:id" element={<InfoBitacora practicas={practicas} bitacoras={bitacoras} comentariosBitacora={comentariosBitacora} usuarios={usuarios} usuarioActual={usuarioActual} profesores={profesores} empresas={empresas}/>} />
                <Route path="/calificarbitacora/:id" element={<CalificarBitacora bitacoras={bitacoras} setBitacoras={setBitacoras}/>} />
                <Route path="/comentarbitacora/:id" element={<ComentarBitacora usuarioActual={usuarioActual} bitacoras={bitacoras} comentariosBitacora={comentariosBitacora} setComentariosBitacora={setComentariosBitacora}/>} />
              
                <Route path="/crearusuario" element={<CrearUsuario usuarios={usuarios} setUsuarios={setUsuarios} estudiantes={estudiantes} setEstudiantes={setEstudiantes} profesores={profesores} setProfesores={setProfesores} empresas={empresas} setEmpresas={setEmpresas}/>} />
                <Route path="/editusuario/:id" element={<EditUsuario tipoUsuario={tipoUsuario} usuarios={usuarios} setUsuarios={setUsuarios} estudiantes={estudiantes} setEstudiantes={setEstudiantes} profesores={profesores} setProfesores={setProfesores} empresas={empresas} setEmpresas={setEmpresas}/>} />
              </Routes>
          </div>
        </>
      )}
      </Router>
    </div>
  );
}

export default App;
  