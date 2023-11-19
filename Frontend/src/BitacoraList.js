import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const BitacoraList = ({practica, bitacoras, usuarioActual, handleBitacora}) => {
    
    let navigate = useNavigate();
    const handleView = (id) => {
        navigate('/infobitacora/' + id);
    }
    
    const bitacorasPractica = bitacoras.filter(bitacora => bitacora.practica === practica.id);
    const [bitacoraActual, setBitacoraActual] = useState(0);

    const mostrarSiguienteBitacora = () => {
        if (bitacoraActual < bitacoras.length - 1) {
        setBitacoraActual(bitacoraActual + 1);
        }
    };

    const mostrarBitacoraAnterior = () => {
        if (bitacoraActual > 0) {
        setBitacoraActual(bitacoraActual - 1);
        }
    };

    return (
        <div className="bitacora-list">
            <h2>Bitácoras</h2>
            <div className="bitacora-list-boton">
                {usuarioActual.tipo === 1 && practica.status === 'activo' && <button onClick={() => handleBitacora(practica.id)}>Agregar Bitácora</button>}
            </div>

            {bitacorasPractica.length > 0 ? (
            <div className="bitacora-preview" key={bitacorasPractica[bitacoraActual].id}>
                <h3>{bitacorasPractica[bitacoraActual].titulo}</h3>
                <p>Fecha de carga: {bitacorasPractica[bitacoraActual].posttime}</p>
                <p>
                Calificación del profesor: {' '}
                {bitacorasPractica[bitacoraActual].calificacionProfesor !== null
                    ? bitacorasPractica[bitacoraActual].calificacionProfesor
                    : 'No Calificado'}
                </p>
                <button onClick={() => handleView(bitacorasPractica[bitacoraActual].id)}>Visualizar</button>
            </div>
            ) : (
                <p>No hay bitacoras.</p>
            )}

            <div>
                <button onClick={mostrarBitacoraAnterior}>Anterior</button>
                <button onClick={mostrarSiguienteBitacora}>Siguiente</button>
            </div>
        </div>
    );
}
 
export default BitacoraList;