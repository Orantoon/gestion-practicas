import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PracticaList from "./PracticaList";
import Searchbar from "./Searchbar";

const Practicas = ({usuarioActual, usuarios, practicas, setPracticas}) => {
    let navigate = useNavigate();

    const handleCreate = () => {
        navigate('/crearpractica');
    }

    const handleView = (id) => {
        navigate('/infopractica/' + id);
    }

    const handleEdit = (id) => {
        navigate('/editpractica/' + id);
    }

    const handleDelete = (id) => {
        const newPracticas = practicas.filter(practica => practica.id !== id)
        setPracticas(newPracticas)
    }

    // Searchbar
    const [keyword, setKeyword] = useState('');

    const updateKeyword = (keyword) => {
        setKeyword(keyword);
    }

    return (
        <div className="practicas">
            <Searchbar keyword={keyword} onChange={updateKeyword}/>
            <div className="boton-crear-practica">
                {(usuarioActual.tipo === 'Admin' || usuarioActual.tipo === 'Profesor') && <button onClick={() => handleCreate()}>Nueva Práctica</button>}
            </div>
            <PracticaList usuarioActual={usuarioActual} usuarios={usuarios} practicas={practicas.filter((practica) => practica.nombre.includes(keyword))} handleView={handleView} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    );
}
 
export default Practicas;