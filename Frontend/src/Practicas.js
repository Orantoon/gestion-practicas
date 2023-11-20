import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PracticaList from "./PracticaList";
import Searchbar from "./Searchbar";

const Practicas = ({usuarioActual, usuarios, estudiantes, profesores, empresas, practicas, setPracticas}) => {
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
        fetch(`http://localhost:4000/practica/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo eliminar la práctica');
            }
            if (response.status === 204) {
                return null;
            } else {
                return response.json();
            }
        })
        .then(data => {
            const newPracticas = practicas && practicas.filter(practica => practica.id !== id);
            setPracticas(newPracticas);
        })
        .catch(error => {
            console.error('Error al eliminar la práctica', error);
        });
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
                {usuarioActual && (usuarioActual.tipo === 4) && <button onClick={() => handleCreate()}>Nueva Práctica</button>}
            </div>
            {usuarios && practicas && <PracticaList usuarioActual={usuarioActual} estudiantes={estudiantes} profesores={profesores} empresas={empresas} practicas={practicas.filter((practica) => practica.nombre.includes(keyword))} handleView={handleView} handleEdit={handleEdit} handleDelete={handleDelete} />}
        </div>
    );
}
 
export default Practicas;