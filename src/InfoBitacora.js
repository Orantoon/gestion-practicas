import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Comentarios from './Comentarios';

const InfoBitacora = ({practicas, usuarios, usuarioActual}) => {

    const {id} = useParams();
    const idNum = parseInt(id, 10);
    const bitacora = practicas
        .map(practica => practica.bitacoras)
        .flat()
        .find(bitacora => bitacora.id === idNum);
    const practica = practicas.find(practica => practica.id === bitacora.practica);

    let navigate = useNavigate();
    const handleCalificar = () => {
        navigate('/calificarbitacora/' + id);
    }
    const handleComentar = () => {
        navigate('/comentarbitacora/' + id);
    }


    const handleBack = () => {
        navigate('/infopractica/' + practica.id);
    };

    return (
        <div className="info-bitacora">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <h1>{bitacora.titulo}</h1>
            <div className="info-bitacora-texto">
                <p>{bitacora.contenido}</p>
            </div>
            <div className="info-bitacora-detalles">
                <p>Fecha de publicación: {bitacora.posttime}</p>
                <p>Practica: {practica.nombre}</p>
                <p>Calificación del profesor: {bitacora.calificacionProfesor !== null ? bitacora.calificacionProfesor : 'No Calificado'}</p>
            </div>
            <div className="info-bitacora-botones">
                {(usuarioActual.tipo === 'Profesor' && usuarioActual.id === practica.profesor) && <button onClick={() => handleCalificar()}>Calificar</button>}
                {(usuarioActual.tipo === 'Profesor' && usuarioActual.id === practica.profesor) && <button onClick={() => handleComentar()}>Comentar</button>}
            </div>
            <div className="info-bitacora-comentarios">
                <Comentarios usuarios={usuarios} comentarios={bitacora.comentarios}/>
            </div>
        </div>
    );
}
 
export default InfoBitacora;