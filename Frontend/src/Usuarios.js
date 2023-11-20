import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UsuarioList from "./UsuarioList";
import Searchbar from "./Searchbar";

const Usuarios = ({practicas, usuarioActual, tipoUsuario, usuarios, setUsuarios, estudiantes, profesores, empresas}) => {
    let navigate = useNavigate();

    const handleCreate = () => {
        navigate('/crearusuario');
    }

    const handleEdit = (id) => {
        navigate('/editusuario/' + id);
    }

    const handleDelete = (id) => {
        const practicaEncontrada = practicas.find(practica => practica.estudiante === id || practica.profesor === id || practica.empresa === id);

        if (practicaEncontrada) {
            alert("El usuario seleccionado no se puede eliminar ya que está vinculado con una práctica. Elimine o edite la práctica " + practicaEncontrada.nombre + " antes de volver a intentarlo.");
        } else if (usuarioActual.id === id) {
            alert("No puede eliminar su propio usuario.");
        } else  {
            fetch(`http://localhost:4000/estudiante/${id}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo eliminar el estudiante');
                }
                if (response.status === 204) {
                    return null;
                } else {
                    return response.json();
                }
            })
            .then(data => {
                const newUsuario = estudiantes && estudiantes.filter(estudiante => estudiante.id !== id)
                setUsuarios(newUsuario);
            })
            .catch(error => {
                console.error('Error al eliminar usuario', error);
                console.log(estudiantes && estudiantes.filter(estudiante => estudiante.id !== id))
            });

            fetch(`http://localhost:4000/profesor/${id}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo eliminar el profesor');
                }
                if (response.status === 204) {
                    return null;
                } else {
                    return response.json();
                }
            })
            .then(data => {
                const newUsuario = profesores && profesores.filter(profesor => profesor.id !== id)
                setUsuarios(newUsuario);
            })
            .catch(error => {
                console.error('Error al eliminar profesor', error);
                console.log(profesores && profesores.filter(profesor => profesor.id !== id))
            });

            fetch(`http://localhost:4000/empresa/${id}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo eliminar la empresa');
                }
                if (response.status === 204) {
                    return null;
                } else {
                    return response.json();
                }
            })
            .then(data => {
                const newUsuario = empresas && empresas.filter(empresa => empresa.id !== id)
                setUsuarios(newUsuario);
            })
            .catch(error => {
                console.error('Error al eliminar empresa', error);
                console.log(empresas && empresas.filter(empresa => empresa.id !== id))
            });


            fetch(`http://localhost:4000/usuario/${id}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo eliminar el usuario');
                }
                if (response.status === 204) {
                    return null;
                } else {
                    return response.json();
                }
            })
            .then(data => {
                const newUsuario = usuarios && usuarios.filter(usuario => usuario.id !== id)
                setUsuarios(newUsuario);
            })
            .catch(error => {
                console.error('Error al eliminar usuario', error);
                console.log(usuarios && usuarios.filter(usuario => usuario.id !== id))
            });
        }
    }

    // Searchbar
    const [keyword, setKeyword] = useState('');

    const updateKeyword = (keyword) => {
        setKeyword(keyword);
    }
    console.log("Tipo Usuario: " + tipoUsuario)
    return (
        <div className="usuarios">
            <Searchbar keyword={keyword} onChange={updateKeyword}/>
            <div className="boton-crear-usuario">
                {usuarioActual && (usuarioActual.tipo === 4) && <button onClick={() => handleCreate()}>Nuevo Usuario</button>}
            </div>
            {tipoUsuario && usuarios && <UsuarioList usuarios={usuarios.filter((usuario) => usuario.correo && usuario.correo.includes(keyword))} tipoUsuario={tipoUsuario} handleEdit={handleEdit} handleDelete={handleDelete} estudiantes={estudiantes} profesores={profesores} empresas={empresas}/>}
        </div>
    );
}
 
export default Usuarios;