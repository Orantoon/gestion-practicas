import { useState } from 'react';

const Comentarios = ({ usuarios, profesores, empresas, comentarios }) => {
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
          {comentarios && comentarioActual && comentarios.length > 0 && comentarioActual < comentarios.length ? (
            <div className="comentarios-preview" key={comentarios[comentarioActual].id}>

              {profesores && profesores.some(profesor => profesor.id === comentarios[comentarioActual].autor) && (
                <p className="comentarios-autor">
                  Profesor: {profesores.find(profesor => profesor.id === comentarios[comentarioActual].autor)?.nombre || 'Nombre no encontrado'}
                </p>
              )}
      
              {empresas && empresas.some(empresa => empresa.id === comentarios[comentarioActual].autor) && (
                <p className="comentarios-autor">
                  Empresa: {empresas.find(empresa => empresa.id === comentarios[comentarioActual].autor)?.nombre || 'Nombre no encontrado'}
                </p>
              )}
      
              {profesores && empresas && !profesores.some(profesor => profesor.id === comentarios[comentarioActual].autor) &&
               !empresas.some(empresa => empresa.id === comentarios[comentarioActual].autor) && (
                <p className="comentarios-autor">Usuario no encontrado</p>
              )}
      
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