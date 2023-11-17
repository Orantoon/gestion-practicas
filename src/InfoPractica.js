import { useParams } from 'react-router-dom';
import InformeList from "./InformeList";
import BitacoraList from "./BitacoraList";
import { useNavigate } from "react-router-dom";

const InfoPractica = ({practicas, informes, bitacoras, usuarioActual, estudiantes, profesores, empresas}) => {

    const {id} = useParams();
    const idNum = parseInt(id, 10);
    const practica = practicas.find(practica => practica.id === idNum);

    let navigate = useNavigate();
    const handleInforme = (id) => {
        navigate('/agregarinforme/' + id);
    }

    const handleBitacora = (id) => {
        navigate('/agregarbitacora/' + id);
    }


    const handleBack = () => {
        navigate('/practicas');
    };

    return (
        <div className="info-practica">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <div className="info-practica-con">
            {(() => {
                const estudiante = estudiantes.find(estudiante => estudiante.id === practica.estudiante);
                const profesor = profesores.find(profesor => profesor.id === practica.profesor);
                const empresa = empresas.find(empresa => empresa.id === practica.empresa);

                return (
                <>
                    <h1>{practica.nombre}</h1>
                    <p>Estudiante: {estudiante ? estudiante.nombre : 'No encontrado'}</p>
                    <p>Empresa: {empresa ? empresa.nombre : 'No encontrado'}</p>
                    <p>Profesor encargado: {profesor ? profesor.nombre : 'No encontrado'}</p>
                    <p>Fecha de inicio: {practica.fechainicio}</p>
                    <p>Fecha de finalización: {practica.fechafinal}</p>
                    <p>Stado de la práctica: {practica.status}</p>
                    {practica.status === 'calificado' && <p>Calificación final: {practica.calificacion}</p>}

                    <InformeList practica={practica} informes={informes} usuarioActual={usuarioActual} handleInforme={handleInforme} />
                    <BitacoraList practica={practica} bitacoras={bitacoras} usuarioActual={usuarioActual} handleBitacora={handleBitacora} />
                </>
                );
            })()}
            </div>
        </div>
    );
}
 
export default InfoPractica;