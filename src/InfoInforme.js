import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Comentarios from './Comentarios';

const InfoInforme = ({practicas, usuarios, usuarioActual}) => {

    const {id} = useParams();
    const idNum = parseInt(id, 10);
    const informe = practicas
        .map(practica => practica.informes)
        .flat()
        .find(informe => informe.id === idNum);
    const practica = practicas.find(practica => practica.id === informe.practica);

    let navigate = useNavigate();
    const handleCalificar = () => {
        navigate('/calificarinforme/' + id);
    }
    const handleComentar = () => {
        navigate('/comentarinforme/' + id);
    }


    const handleBack = () => {
        navigate('/infopractica/' + practica.id);
    };

    return (
        <div className="info-informe">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <h1>{informe.titulo}</h1>
            <div className="info-informe-texto">
                <p>{informe.contenido}</p>
            </div>
            <div className="info-informe-detalles">
                <p>Fecha de publicación: {informe.posttime}</p>
                <p>Practica: {practica.nombre}</p>
                <p>Calificación del profesor: {informe.calificacionProfesor !== null ? informe.calificacionProfesor : 'No Calificado'}</p>
                <p>Calificación de la empresa: {informe.calificacionEmpresa !== null ? informe.calificacionEmpresa : 'No Calificado'}</p>
                <p>Calificación total: {informe.calificacionTotal !== null ? informe.calificacionTotal : 'Faltan Calificaciones'}</p>
            </div>
            <div className="info-informe-botones">
                {((usuarioActual.tipo === 'Profesor' && usuarioActual.id === practica.profesor) || (usuarioActual.tipo === 'Empresa' && usuarioActual.id === practica.empresa)) && <button onClick={() => handleCalificar()}>Calificar</button>}
                {((usuarioActual.tipo === 'Profesor' && usuarioActual.id === practica.profesor) || (usuarioActual.tipo === 'Empresa' && usuarioActual.id === practica.empresa)) && <button onClick={() => handleComentar()}>Comentar</button>}
            </div>
            <div className="info-informe-comentarios">
                <Comentarios usuarios={usuarios} comentarios={informe.comentarios}/>
            </div>
        </div>
    );
}
 
export default InfoInforme;