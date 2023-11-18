import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const InformeList = ({practica, informes, usuarioActual, handleInforme}) => {

    let navigate = useNavigate();
    const handleView = (id) => {
        navigate('/infoinforme/' + id);
    }

    const informesPractica = informes.filter(informe => informe.practica === practica.id);
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
                {usuarioActual.tipo === 1 && practica.status === 'activo' && <button onClick={() => handleInforme(practica.id)}>Agregar Informe</button>}
            </div>

            {informesPractica.length > 0 ? (
            <div className="informe-preview" key={informesPractica[informeActual].id}>
                <h3>{informesPractica[informeActual].titulo}</h3>
                <p>Fecha de carga: {informesPractica[informeActual].posttime}</p>
                <p>
                Calificación del profesor: {' '}
                {informesPractica[informeActual].calificacionProfesor !== null
                    ? informesPractica[informeActual].calificacionProfesor
                    : 'No Calificado'}
                </p>
                <p>
                Calificación de la empresa: {' '}
                {informesPractica[informeActual].calificacionEmpresa !== null
                    ? informesPractica[informeActual].calificacionEmpresa
                    : 'No Calificado'}
                </p>
                <p>
                Calificación total: {' '}
                {informesPractica[informeActual].calificacionTotal !== null
                    ? informesPractica[informeActual].calificacionTotal
                    : 'Faltan Calificaciones'}
                </p>
                <button onClick={() => handleView(informesPractica[informeActual].id)}>Visualizar</button>
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