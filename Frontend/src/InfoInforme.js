import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Comentarios from './Comentarios';
import { format } from 'date-fns';

const InfoInforme = ({practicas, informes, comentariosInforme, usuarios, usuarioActual, profesores, empresas}) => {

    const {id} = useParams();
    const idNum = parseInt(id, 10);
    const informe = informes && informes.find(informe => informe.id === idNum);
    const practica = practicas && informe && practicas.find(practica => practica.id === informe.practica);

    let navigate = useNavigate();
    const handleCalificar = () => {
        navigate('/calificarinforme/' + informe.id);
    }
    const handleComentar = () => {
        navigate('/comentarinforme/' + informe.id);
    }


    const handleBack = () => {
        navigate('/infopractica/' + practica.id);
    };

    return (
        <div className="info-informe">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            {informe && <h1>{informe.titulo}</h1>}
            <div className="info-informe-texto">
                {informe && <p>{informe.contenido}</p>}
            </div>
            <div className="info-informe-detalles">
                {informe && <p>Fecha de publicación: {format(new Date(informe.posttime), 'yyyy-MM-dd HH:mm')}</p>}
                {practica && <p>Practica: {practica.nombre}</p>}
                {informe && <p>Calificación del profesor: {informe.calificacionProfesor !== null ? informe.calificacionProfesor : 'No Calificado'}</p>}
                {informe && <p>Calificación de la empresa: {informe.calificacionEmpresa !== null ? informe.calificacionEmpresa : 'No Calificado'}</p>}
                {informe && <p>Calificación total: {informe.calificacionTotal !== null ? informe.calificacionTotal : 'Faltan Calificaciones'}</p>}
            </div>
            <div className="info-informe-botones">
                {usuarioActual && practica && ((usuarioActual.tipo === 2 && usuarioActual.id === practica.profesor) || (usuarioActual.tipo === 3 && usuarioActual.id === practica.empresa)) && <button onClick={() => handleCalificar()}>Calificar</button>}
                {usuarioActual && practica && ((usuarioActual.tipo === 2 && usuarioActual.id === practica.profesor) || (usuarioActual.tipo === 3 && usuarioActual.id === practica.empresa)) && <button onClick={() => handleComentar()}>Comentar</button>}
            </div>
            <div className="info-informe-comentarios">
                {comentariosInforme && informe &&  <Comentarios usuarios={usuarios} profesores={profesores} empresas={empresas} comentarios={comentariosInforme.filter(comentario => comentario.informe === informe.id)}/>}
            </div>
        </div>
    );
}
 
export default InfoInforme;