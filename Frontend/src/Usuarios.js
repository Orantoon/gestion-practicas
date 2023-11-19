import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UsuarioList from "./UsuarioList";
import Searchbar from "./Searchbar";

const Usuarios = ({usuarioActual, tiposUsuario, usuarios, setUsuarios, estudiantes, profesores, empresas}) => {
    let navigate = useNavigate();

    const handleCreate = () => {
        navigate('/crearusuario');
    }

    const handleEdit = (id) => {
        navigate('/editusuario/' + id);
    }

    const handleDelete = (id) => {
        const newUsuario = usuarios.filter(usuario => usuario.id !== id)
        setUsuarios(newUsuario)
    }

    // Searchbar
    const [keyword, setKeyword] = useState('');

    const updateKeyword = (keyword) => {
        setKeyword(keyword);
    }

    return (
        <div className="usuarios">
            <Searchbar keyword={keyword} onChange={updateKeyword}/>
            <div className="boton-crear-usuario">
                {(usuarioActual.tipo === 4) && <button onClick={() => handleCreate()}>Nuevo Usuario</button>}
            </div>
            <UsuarioList usuarios={usuarios.filter((usuario) => usuario.correo.includes(keyword))} tiposUsuario={tiposUsuario} handleEdit={handleEdit} handleDelete={handleDelete} estudiantes={estudiantes} profesores={profesores} empresas={empresas}/>
        </div>
    );
}
 
export default Usuarios;