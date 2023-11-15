import { useState } from 'react';

const Comentarios = ({ usuarios, comentarios }) => {
    const [comentarioActual, setComentarioActual] = useState(0);

    const mostrarSiguiente = () => {
        if (comentarios && comentarios.length > 0 && comentarioActual < comentarios.length - 1) {
        setComentarioActual(comentarioActual + 1);
        }
    };

    const mostrarAnterior = () => {
        if (comentarios && comentarioActual > 0) {
        setComentarioActual(comentarioActual - 1);
        }
    };

    return (
        <div className="comentarios">
        <h2>Comentarios</h2>
        {comentarios && comentarios.length > 0 && comentarioActual < comentarios.length ? (
            <div className="comentarios-preview" key={comentarios[comentarioActual].id}>
            <p className="comentarios-autor">{usuarios.find(usuario => usuario.id === comentarios[comentarioActual].autor)?.nombre || 'Usuario no encontrado'}</p>
            <p className="comentarios-texto">{comentarios[comentarioActual].contenido}</p>
            <p className="comentarios-posttime">{comentarios[comentarioActual].posttime}</p>
            </div>
        ) : (
            <p className="comentarios-nohay">No hay comentarios.</p>
        )}
        <div className="comentarios-botones">
            <button onClick={mostrarAnterior}>Anterior</button>
            <button onClick={mostrarSiguiente}>Siguiente</button>
        </div>
        </div>
    );
};
  


export default Comentarios;