import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const InformeList = ({practica, informes, usuarioActual, handleInforme}) => {

    let navigate = useNavigate();
    const handleView = (id) => {
        navigate('/infoinforme/' + id);
    }

    const [informeActual, setInformeActual] = useState(0);

    const mostrarSiguiente = () => {
        if (informeActual < informes.length - 1) {
            setInformeActual(informeActual + 1);
        }
    };

    const mostrarAnterior = () => {
        if (informeActual > 0) {
            setInformeActual(informeActual - 1);
        }
    };

    return (
        <div className="informe-list" >
            <h2>Informes</h2>
            <div className="informe-list-boton">
                {usuarioActual.tipo === 'Estudiante' && practica.status === 'activo' && <button onClick={() => handleInforme(practica.id)}>Agregar Informe</button>}
            </div>

            {informes.length > 0 ? (
            <div className="informe-preview" key={informes[informeActual].id}>
                <h3>{informes[informeActual].titulo}</h3>
                <p>Fecha de carga: {informes[informeActual].posttime}</p>
                <p>
                Calificación del profesor: {' '}
                {informes[informeActual].calificacionProfesor !== null
                    ? informes[informeActual].calificacionProfesor
                    : 'No Calificado'}
                </p>
                <p>
                Calificación de la empresa: {' '}
                {informes[informeActual].calificacionEmpresa !== null
                    ? informes[informeActual].calificacionEmpresa
                    : 'No Calificado'}
                </p>
                <p>
                Calificación total: {' '}
                {informes[informeActual].calificacionTotal !== null
                    ? informes[informeActual].calificacionTotal
                    : 'Faltan Calificaciones'}
                </p>
                <button onClick={() => handleView(informes[informeActual].id)}>Visualizar</button>
            </div>
            ) : (
                <p>No hay informes.</p>
            )}

            <div>
                <button onClick={mostrarAnterior}>Anterior</button>
                <button onClick={mostrarSiguiente}>Siguiente</button>
            </div>
        </div>
    );
}

export default InformeList;