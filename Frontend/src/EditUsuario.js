import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const EditUsuario = ({tipoUsuario, usuarios, setUsuarios, estudiantes, setEstudiantes, profesores, setProfesores, empresas, setEmpresas}) => {
    
    const {id} = useParams();
    const idNum = parseInt(id, 10);
    const usuario = usuarios && usuarios.find(usuario => usuario.id === idNum);
    
    let navigate = useNavigate();

    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        var nuevoUsuario = {
            correo: inputs.correo,
            contrasena: inputs.password,
            tipo: inputs.tipo
        };
        
        fetch(`http://localhost:4000/usuario/${usuario.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoUsuario),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo editar el usuario');
            }
            return response.json();
        })
        .then(data => {
            console.log('Usuario editado con éxito', data);
    
            if (usuarios) {
                setUsuarios([...usuarios, data]);
            } else {
                setUsuarios([data]);
            }
        })
        .catch(error => {
            console.error('Error al editar usuario', error.message);
            console.log(nuevoUsuario)
        });

        if (usuario.tipo !== inputs.tipo){
            // DELETE
            console.log(usuario.tipo)
            if (usuario.tipo === 1) {
                fetchAndDeleteEstudiante();
            } else if (usuario.tipo === 2) {
                fetchAndDeleteProfesor();
            } else if (usuario.tipo === 3) {
                fetchAndDeleteEmpresa();
            }

            // CREATE
            if (inputs.tipo === "1") {
                fetchAndCreateEstudiante();
            } else if (inputs.tipo === "2") {
                fetchAndCreateProfesor();
            } else if (inputs.tipo === "3") {
                fetchAndCreateEmpresa();
            }
        } else {
            // EDIT
            if (inputs.tipo === "1") {
                fetchAndEditEstudiante();
            } else if (inputs.tipo === "2") {
                fetchAndEditProfesor();
            } else if (inputs.tipo === "3") {
                fetchAndEditEmpresa();
            }
        }

        navigate('/usuarios');
    }

    // DELETE
    const fetchAndDeleteEstudiante = () => {
        // Estudiante
        return fetch(`http://localhost:4000/estudiante/${usuario.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo eliminar el estudiante');
            }
            return response.json();
        })
        .then(data => {
            console.log('Estudiante eliminado con éxito', data);
            const newEstudiantes = estudiantes && estudiantes.filter(estudiante => estudiante.id !== usuario.id);
            setEstudiantes(newEstudiantes);
        })
        .catch(error => {
            console.error('Error al eliminar estudiante', error.message);
        });
    };
    const fetchAndDeleteProfesor = () => {
        // Profesor
        fetch(`http://localhost:4000/profesor/${usuario.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo eliminar el profesor');
                }
                return response.json();
            })
            .then(data => {
                console.log('Profesor eliminado con éxito', data);
        
                const newProfesores = profesores && profesores.filter(profesor => profesor.id !== usuario.id);
                setProfesores(newProfesores);
            })
            .catch(error => {
                console.error('Error al eliminar profesor', error.message);
            });
    };
    const fetchAndDeleteEmpresa = () => {
        // Empresa
        fetch(`http://localhost:4000/empresa/${usuario.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo eliminar la empresa');
                }
                return response.json();
            })
            .then(data => {
                console.log('Empresa eliminada con éxito', data);
        
                const newEmpresas = empresas && empresas.filter(empresa => empresa.id !== usuario.id);
                setEmpresas(newEmpresas);
            })
            .catch(error => {
                console.error('Error al eliminar empresa', error.message);
            });
    };

    // CREATE
    const fetchAndCreateEstudiante = () => {
        // Estudiante
        return fetch('http://localhost:4000/estudiante', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: usuario.id,
                nombre: inputs.nombre,
                apellido: inputs.apellido,
                carnet: inputs.carnet,
                carrera: inputs.carrera
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo crear el estudiante');
            }
            return response.json();
        })
        .then(data => {
            console.log('Estudiante creado con éxito', data);
            setEstudiantes(prevEstudiantes => prevEstudiantes ? [...prevEstudiantes, data] : [data]);
        })
        .catch(error => {
            console.error('Error al crear estudiante', error.message);
        });
    };
    const fetchAndCreateProfesor = () => {
        // Profesor
        fetch('http://localhost:4000/profesor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: usuario.id,
                    nombre: inputs.nombre,
                    apellido: inputs.apellido,
                    escuela: inputs.escuela
                }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo crear el profesor');
                }
                return response.json();
            })
            .then(data => {
                console.log('Profesor creado con éxito', data);
        
                if (profesores) {
                    setProfesores([...profesores, data]);
                } else {
                    setProfesores([data]);
                }
            })
            .catch(error => {
                console.error('Error al crear profesor', error.message);
            });
    };
    const fetchAndCreateEmpresa = () => {
        // Empresa
        fetch('http://localhost:4000/empresa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: usuario.id,
                    nombre: inputs.nombre,
                    telefono: inputs.telefono
                }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo crear la empresa');
                }
                return response.json();
            })
            .then(data => {
                console.log('Empresa creada con éxito', data);
        
                if (empresas) {
                    setEmpresas([...empresas, data]);
                } else {
                    setEmpresas([data]);
                }
            })
            .catch(error => {
                console.error('Error al crear empresa', error.message);
            });
    };

    // EDIT
    const fetchAndEditEstudiante = () => {
        // Estudiante
        return fetch(`http://localhost:4000/estudiante/${usuario.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: usuario.id,
                nombre: inputs.nombre,
                apellido: inputs.apellido,
                carnet: inputs.carnet,
                carrera: inputs.carrera
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo editar el estudiante');
            }
            return response.json();
        })
        .then(data => {
            console.log('Estudiante editado con éxito', data);

            if (estudiantes) {
                setEstudiantes([...estudiantes, data]);
            } else {
                setEstudiantes([data]);
            }
        })
        .catch(error => {
            console.error('Error al editar estudiante', error.message);
        });
    };
    const fetchAndEditProfesor = () => {
        // Profesor
        fetch(`http://localhost:4000/profesor/${usuario.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: usuario.id,
                    nombre: inputs.nombre,
                    apellido: inputs.apellido,
                    escuela: inputs.escuela
                }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo editar el profesor');
                }
                return response.json();
            })
            .then(data => {
                console.log('Profesor editado con éxito', data);
        
                if (profesores) {
                    setProfesores([...profesores, data]);
                } else {
                    setProfesores([data]);
                }
            })
            .catch(error => {
                console.error('Error al editar profesor', error.message);
            });
    };
    const fetchAndEditEmpresa = () => {
        // Empresa
        fetch(`http://localhost:4000/empresa/${usuario.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: usuario.id,
                    nombre: inputs.nombre,
                    telefono: inputs.telefono
                }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo editar la empresa');
                }
                return response.json();
            })
            .then(data => {
                console.log('Empresa editado con éxito', data);
        
                if (empresas) {
                    setEmpresas([...empresas, data]);
                } else {
                    setEmpresas([data]);
                }
            })
            .catch(error => {
                console.error('Error al editar empresa', error.message);
            });
    };

    
    const handleBack = () => {
        navigate('/usuarios');
    };

    return (
        <div className="editar-usuario">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <div className="editar-usuario-con">
                <h2>Editar Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <p>Tipo de usuario actual: {tipoUsuario && usuario && tipoUsuario.find(tipo => tipo.id === usuario.tipo).nombre}</p>
                    {usuario && <p>Correo del usuario actual: {usuario.correo}</p>}

                    {usuario && estudiantes && estudiantes.find(estudiante => estudiante.id === usuario.id) && (
                    <div>
                        <p>Nombre del estudiante actual: {estudiantes.find(estudiante => estudiante.id === usuario.id).nombre}</p>
                        <p>Apellido del estudiante actual: {estudiantes.find(estudiante => estudiante.id === usuario.id).apellido}</p>
                        <p>Carnet del estudiante actual: {estudiantes.find(estudiante => estudiante.id === usuario.id).carnet}</p>
                        <p>Carrera del estudiante actual: {estudiantes.find(estudiante => estudiante.id === usuario.id).carrera}</p>
                    </div>
                    )}
        
                    {usuario && profesores && profesores.find(profesor => profesor.id === usuario.id) && (
                    <div>
                        <p>Nombre del profesor actual: {profesores.find(profesor => profesor.id === usuario.id).nombre}</p>
                        <p>Apellido del profesor actual: {profesores.find(profesor => profesor.id === usuario.id).apellido}</p>
                        <p>Escuela del profesor actual: {profesores.find(profesor => profesor.id === usuario.id).escuela}</p>
                    </div>
                    )}
        
                    {usuario && empresas && empresas.find(empresa => empresa.id === usuario.id) && (
                    <div>
                        <p>Nombre de la empresa actual: {empresas.find(empresa => empresa.id === usuario.id).nombre}</p>
                        <p>Teléfono de la empresa actual: {empresas.find(empresa => empresa.id === usuario.id).telefono}</p>
                    </div>
                    )}

                    <label> Nuevo tipo de usuario:
                        <select name="tipo" value={inputs.tipo} onChange={handleChange}>
                            <option value=''>---</option>
                            <option value="1">Estudiante</option>
                            <option value="2">Profesor</option>
                            <option value="3">Empresa</option>
                            <option value="4">Admin</option>
                        </select>
                    </label>
                    
                    <label>Correo de la cuenta:
                        <input type="text" name="correo" placeholder={"correo@estudiantec.cr"} style={BarStyle} value={inputs.correo || ""} onChange={handleChange}/>
                    </label>
                    <label>Contraseña de la cuenta:
                        <input type="password" name="password" placeholder={"password"} style={BarStyle} value={inputs.password || ""} onChange={handleChange}/>
                    </label>
                    
                    {(inputs.tipo === "1" || inputs.tipo === "2" || inputs.tipo === "3") && 
                    <label>Nombre del usuario:
                        <input type="text" name="nombre" placeholder={"nombre"} style={BarStyle} value={inputs.nombre || ""} onChange={handleChange}/>
                    </label>
                    }
                    {(inputs.tipo === "1" || inputs.tipo === "2") && 
                    <label>Apellido del usuario:
                        <input type="text" name="apellido" placeholder={"apellido"} style={BarStyle} value={inputs.apellido || ""} onChange={handleChange}/>
                    </label>
                    }
                    {inputs.tipo === "1" && 
                    <label>Carnet del estudiante:
                        <input type="number" name="carnet" placeholder={"carnet"} style={BarStyle} value={inputs.carnet || ""} onChange={handleChange}/>
                    </label>
                    }
                    {inputs.tipo === "1" && 
                    <label>Carrera del estudiante:
                        <input type="text" name="carrera" placeholder={"carrera"} style={BarStyle} value={inputs.carrera || ""} onChange={handleChange}/>
                    </label>
                    }
                    {inputs.tipo === "2" && 
                    <label>Escuela del profesor:
                        <input type="text" name="escuela" placeholder={"escuela"} style={BarStyle} value={inputs.escuela || ""} onChange={handleChange}/>
                    </label>
                    }
                    {inputs.tipo === "3" && 
                    <label>Teléfono de la empresa:
                        <input type="text" name="telefono" placeholder={"telefono"} style={BarStyle} value={inputs.telefono || ""} onChange={handleChange}/>
                    </label>
                    }

                    <label>
                        <input type="submit" />
                    </label>
                </form>
            </div>
        </div>
    );
}
 
export default EditUsuario;