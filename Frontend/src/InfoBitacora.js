import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Comentarios from './Comentarios';
import { format } from 'date-fns';

const InfoBitacora = ({practicas, bitacoras, comentariosBitacora, usuarios, usuarioActual, profesores, empresas}) => {

    const {id} = useParams();
    const idNum = parseInt(id, 10);
    const bitacora = bitacoras && bitacoras.find(bitacora => bitacora.id === idNum);
    const practica = practicas && practicas.find(practica => practica.id === bitacora.practica);

    let navigate = useNavigate();
    const handleCalificar = () => {
        navigate('/calificarbitacora/' + bitacora.id);
    }
    const handleComentar = () => {
        navigate('/comentarbitacora/' + bitacora.id);
    }


    const handleBack = () => {
        navigate('/infopractica/' + practica.id);
    };

    return (
        <div className="info-bitacora">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            {bitacora && <h1>{bitacora.titulo}</h1>}
            <div className="info-bitacora-texto">
                {bitacora && <p>{bitacora.contenido}</p>}
            </div>
            <div className="info-bitacora-detalles">
                {bitacora && <p>Fecha de publicación: {format(new Date(bitacora.posttime), 'yyyy-MM-dd HH:mm')}</p>}
                {practica && <p>Practica: {practica.nombre}</p>}
                {bitacora && <p>Calificación del profesor: {bitacora.calificacionProfesor !== null ? bitacora.calificacionProfesor : 'No Calificado'}</p>}
            </div>
            <div className="info-bitacora-botones">
                {usuarioActual && practica && (usuarioActual.tipo === 2 && usuarioActual.id === practica.profesor) && <button onClick={() => handleCalificar()}>Calificar</button>}
                {usuarioActual && practica &&  (usuarioActual.tipo === 2 && usuarioActual.id === practica.profesor) && <button onClick={() => handleComentar()}>Comentar</button>}
            </div>
            <div className="info-bitacora-comentarios">
                {comentariosBitacora && bitacora && <Comentarios usuarios={usuarios} profesores={profesores} empresas={empresas} comentarios={comentariosBitacora.filter(comentario => comentario.bitacora === bitacora.id)}/>}
            </div>
        </div>
    );
}
 
export default InfoBitacora;