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
  //const usuarioActual = useState(null);
  //const usuarioActual = useState({id: 1, tipo: "Estudiante"});
  //const usuarioActual = useState({id: 2, tipo: "Profesor"});
  //const usuarioActual = useState({id: 3, tipo: "Empresa"});
  const usuarioActual = useState({id: 4, tipo: "Admin"});

  //const [practicas, setPracticas] = useState(null);
  const [practicas, setPracticas] = useState([
    {id: 1, nombre: 'Practica 1', estudiante: 1, profesor: 2, empresa: 3, fechainicio: '10-02-2023', fechafinal: '10-08-2023', status: 'activo', calificacion: null,
      informes: [
        {id: 1, titulo: "Prueba 1", contenido: "asdf", practica: 1, posttime: "02-10-2020", calificacionProfesor: null, calificacionEmpresa: null, calificacionTotal: null,
          comentarios: [{id: 1, informe: 1, autor: 2, contenido: "Buen trabajo!", posttime: "02-10-2020"}, {id: 2, informe: 1, autor: 3, contenido: "Pesimo, no vuelva", posttime: "05-12-2020"}]},
        {id: 2, titulo: "Prueba 2", contenido: "asdf", practica: 1, posttime: "10-08-2023", calificacionProfesor: null, calificacionEmpresa: null, calificacionTotal: null, comentarios: []}],
      bitacoras: [
        {id: 1, titulo: "Prueba 3", contenido: "asdf", practica: 1, posttime: "10-08-2023", semana: 14, calificacionProfesor: null}]},
    {id: 2, nombre: 'Practica 2', estudiante: 1, profesor: 2, empresa: 7, fechainicio: '10-02-2022', fechafinal: '10-08-2022', status: 'finalizado', calificacion: null, informes: [], bitacoras: []},
    {id: 3, nombre: 'Practica 3', estudiante: 1, profesor: 6, empresa: 3, fechainicio: '10-02-2021', fechafinal: '10-08-2021', status: 'calificado', calificacion: 98, informes: [], bitacoras: []}
  ]);

  //const [usuarios, setUsuarios] = useState(null);
  const [usuarios, setUsuarios] = useState([
    {id: 1, correo: "prueba1@hotmail.com", password: '1234', nombre: 'David', apellido: 'Suarez', carnet: '2020038304', carrera: 'Computacion', tipo: 'Estudiante'},
    {id: 2, correo: "prueba2@gmail.com", password: '1234', nombre: 'Mario', apellido: 'Chacon', escuela: 'Computacion', tipo: 'Profesor'},
    {id: 3, correo: "prueba3@mail.com", password: '1234', nombre: 'Walmart', telefono: '1249953103', tipo: 'Empresa'},
    {id: 4, correo: "prueba4@mail.com", password: '1234', tipo: 'Admin'},
    {id: 5, correo: "prueba5@hotmail.com", password: '1234', nombre: 'Ignacio', apellido: 'Chavez', carnet: '2020038305', carrera: 'Electronica', tipo: 'Estudiante'},
    {id: 6, correo: "prueba6@gmail.com", password: '1234', nombre: 'Alberto', apellido: 'Hernandez', escuela: 'Electronica', tipo: 'Profesor'},
    {id: 7, correo: "prueba7@mail.com", password: '1234', nombre: 'Amazon', telefono: '1249950003', tipo: 'Empresa'},
  ]);

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
          <Navbar usuarioActual={usuarioActual[0]} handleLogout={handleLogout} />
          <div className='Content'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/practicas" element={<Practicas usuarioActual={usuarioActual[0]} practicas={practicas} setPracticas={setPracticas} usuarios={usuarios}/>} />
                <Route path="/usuarios" element={<Usuarios usuarioActual={usuarioActual[0]} usuarios={usuarios} setUsuarios={setUsuarios}/>} />
                
                <Route path="/crearpractica" element={<CrearPractica usuarios={usuarios}/>} />
                <Route path="/infopractica/:id" element={<InfoPractica practicas={practicas} usuarioActual={usuarioActual[0]} usuarios={usuarios}/>} />
                <Route path="/editpractica/:id" element={<EditPractica usuarios={usuarios} practicas={practicas} />} />

                <Route path="/agregarinforme/:id" element={<AgregarInforme setPracticas={setPracticas}/>} />
                <Route path="/infoinforme/:id" element={<InfoInforme practicas={practicas} usuarios={usuarios} usuarioActual={usuarioActual[0]}/>} />
                <Route path="/calificarinforme/:id" element={<CalificarInforme practicas={practicas} usuarioActual={usuarioActual[0]}/>} />
                <Route path="/comentarinforme/:id" element={<ComentarInforme practicas={practicas} usuarioActual={usuarioActual[0]}/>} />

                <Route path="/agregarbitacora/:id" element={<AgregarBitacora setPracticas={setPracticas}/>} />
                <Route path="/infobitacora/:id" element={<InfoBitacora practicas={practicas} usuarios={usuarios} usuarioActual={usuarioActual[0]}/>} />
                <Route path="/calificarbitacora/:id" element={<CalificarBitacora practicas={practicas}/>} />
                <Route path="/comentarbitacora/:id" element={<ComentarBitacora practicas={practicas} usuarioActual={usuarioActual[0]}/>} />
              
                <Route path="/crearusuario" element={<CrearUsuario />} />
                <Route path="/editusuario/:id" element={<EditUsuario usuarios={usuarios}/>} />
              </Routes>
          </div>
        </>
      )}
      </Router>
    </div>
  );
}

export default App;
  