import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CrearUsuario = ({usuarios, setUsuarios, estudiantes, setEstudiantes, profesores, setProfesores, empresas, setEmpresas}) => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

    let navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    var nuevoUsuario = {
        correo: inputs.correo,
        contrasena: inputs.password,
        tipo: inputs.tipo
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Usuario
        fetch('http://localhost:4000/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoUsuario),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo crear el usuario');
            }
            return response.json();
        })
        .then(data => {
            console.log('Usuario creado con éxito', data);
        
            const nuevoUsuarioId = data.id;
        
            setUsuarios(prevUsuarios => [...prevUsuarios, data]);
        
            if (inputs.tipo === "1") {
                fetchAndCreateEstudiante(nuevoUsuarioId);
            } else if (inputs.tipo === "2") {
                fetchAndCreateProfesor(nuevoUsuarioId);
            } else if (inputs.tipo === "3") {
                fetchAndCreateEmpresa(nuevoUsuarioId);
            }
    
            navigate('/usuarios');
        })
        .catch(error => {
            console.error('Error al agregar usuario', error.message);
        });
    }

    const fetchAndCreateEstudiante = (id) => {
        // Estudiante
        return fetch('http://localhost:4000/estudiante', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
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
            if (estudiantes) {
                setEstudiantes([...estudiantes, data]);
            } else {
                setEstudiantes([data]);
            }
        })
        .catch(error => {
            console.error('Error al crear estudiante', error.message);
        });
    };
    const fetchAndCreateProfesor = (id) => {
        // Profesor
        fetch('http://localhost:4000/profesor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
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
    const fetchAndCreateEmpresa = (id) => {
        // Empresa
        fetch('http://localhost:4000/empresa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
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

    const handleBack = () => {
        navigate('/usuarios');
    };

    return (
        <div className="crear-usuario">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <div className="crear-usuario-con">
                <h2>Nuevo Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <label> Tipo de usuario a crear:
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

                    {(inputs.tipo === '1' || inputs.tipo === '2' || inputs.tipo === '3') && 
                    <label>Nombre del usuario:
                        <input type="text" name="nombre" placeholder={"nombre"} style={BarStyle} value={inputs.nombre || ""} onChange={handleChange}/>
                    </label>
                    }
                    {(inputs.tipo === '1' || inputs.tipo === '2') && 
                    <label>Apellido del usuario:
                        <input type="text" name="apellido" placeholder={"apellido"} style={BarStyle} value={inputs.apellido || ""} onChange={handleChange}/>
                    </label>
                    }
                    {inputs.tipo === '1' && 
                    <label>Carnet del estudiante:
                        <input type="number" name="carnet" placeholder={"carnet"} style={BarStyle} value={inputs.carnet || ""} onChange={handleChange}/>
                    </label>
                    }
                    {inputs.tipo === '1' && 
                    <label>Carrera del estudiante:
                        <input type="text" name="carrera" placeholder={"carrera"} style={BarStyle} value={inputs.carrera || ""} onChange={handleChange}/>
                    </label>
                    }
                    {inputs.tipo === '2' && 
                    <label>Escuela del profesor:
                        <input type="text" name="escuela" placeholder={"escuela"} style={BarStyle} value={inputs.escuela || ""} onChange={handleChange}/>
                    </label>
                    }
                    {inputs.tipo === '3' && 
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
 
export default CrearUsuario;