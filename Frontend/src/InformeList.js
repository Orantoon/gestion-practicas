import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';

const InformeList = ({practica, informes, usuarioActual, handleInforme}) => {

    let navigate = useNavigate();
    const handleView = (id) => {
        navigate('/infoinforme/' + id);
    }

    const informesPractica = informes && informes.filter(informe => informe.practica === practica.id);
    const [informeActual, setInformeActual] = useState(0);

    const mostrarSiguiente = () => {
        if (informeActual < informesPractica.length - 1) {
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
                {usuarioActual && usuarioActual.tipo === 1 && practica.estado === 'activo' && <button onClick={() => handleInforme(practica.id)}>Agregar Informe</button>}
            </div>

            {informesPractica && informesPractica.length > 0 ? (
                <div className="informe-preview" key={informesPractica[informeActual].id}>
                    <h3>{informesPractica[informeActual].titulo}</h3>
                    <p>Fecha de carga: {format(new Date(informesPractica[informeActual].posttime), 'yyyy-MM-dd HH:mm')}</p>
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