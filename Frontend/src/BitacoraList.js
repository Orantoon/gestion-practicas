import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';

const BitacoraList = ({practica, bitacoras, usuarioActual, handleBitacora}) => {
    
    let navigate = useNavigate();
    const handleView = (id) => {
        navigate('/infobitacora/' + id);
    }
    
    const bitacorasPractica = bitacoras && bitacoras.filter(bitacora => bitacora.practica === practica.id);
    const [bitacoraActual, setBitacoraActual] = useState(0);

    const mostrarSiguienteBitacora = () => {
        if (bitacoraActual < bitacorasPractica.length - 1) {
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
                {usuarioActual && usuarioActual.tipo === 1 && practica.estado === 'activo' && <button onClick={() => handleBitacora(practica.id)}>Agregar Bitácora</button>}
            </div>

            {bitacorasPractica && bitacorasPractica.length > 0 ? (
            <div className="bitacora-preview" key={bitacorasPractica[bitacoraActual].id}>
                <h3>{bitacorasPractica[bitacoraActual].titulo}</h3>
                <p>Fecha de carga: {format(new Date(bitacorasPractica[bitacoraActual].posttime), 'yyyy-MM-dd HH:mm')}</p>
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