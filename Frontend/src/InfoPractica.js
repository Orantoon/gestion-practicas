import { useParams } from 'react-router-dom';
import InformeList from "./InformeList";
import BitacoraList from "./BitacoraList";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';

const InfoPractica = ({practicas, informes, bitacoras, usuarioActual, estudiantes, profesores, empresas}) => {

    const {id} = useParams();
    const idNum = parseInt(id, 10);
    const practica = practicas && practicas.find(practica => practica.id === idNum);

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
                const estudiante = estudiantes && estudiantes.find(estudiante => estudiante.id === practica.estudiante);
                const profesor = profesores && profesores.find(profesor => profesor.id === practica.profesor);
                const empresa = empresas && empresas.find(empresa => empresa.id === practica.empresa);

                return (
                <>
                    {practica && <h1>{practica.nombre}</h1>}
                    {estudiante && <p>Estudiante: {estudiante ? estudiante.nombre : 'No encontrado'}</p>}
                    {empresa && <p>Empresa: {empresa ? empresa.nombre : 'No encontrado'}</p>}
                    {profesor && <p>Profesor encargado: {profesor ? profesor.nombre : 'No encontrado'}</p>}
                    {practica && <p>Fecha de inicio: {format(new Date(practica.fechaInicio), 'yyyy-MM-dd HH:mm')}</p>}
                    {practica && <p>Fecha de finalización: {format(new Date(practica.fechaFinal), 'yyyy-MM-dd HH:mm')}</p>}
                    {practica && <p>Estado de la práctica: {practica.estado}</p>}
                    {practica && practica.estado === 'calificado' && <p>Calificación final: {practica.calificacion}</p>}

                    {practica && <InformeList practica={practica} informes={informes} usuarioActual={usuarioActual} handleInforme={handleInforme} />}
                    {practica && <BitacoraList practica={practica} bitacoras={bitacoras} usuarioActual={usuarioActual} handleBitacora={handleBitacora} />}
                </>
                );
            })()}
            </div>
        </div>
    );
}
 
export default InfoPractica;