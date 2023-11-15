const PracticaList = ({usuarioActual, usuarios, practicas, handleView, handleEdit, handleDelete}) => {
    return (
        <div className="practica-list">
          {practicas.map((practica) => {
            const estudiante = usuarios.find(usuario => usuario.id === practica.estudiante);
            const profesor = usuarios.find(usuario => usuario.id === practica.profesor);
            const empresa = usuarios.find(usuario => usuario.id === practica.empresa);
            return (
              <div className="practica-preview" key={practica.id}>
                <h2>{practica.nombre}</h2>
                <p>Estudiante: {estudiante ? estudiante.nombre : 'No encontrado'}</p>
                <p>Empresa: {empresa ? empresa.nombre : 'No encontrado'}</p>
                <p>Profesor encargado: {profesor ? profesor.nombre : 'No encontrado'}</p>
                <p>Status: {practica.status}</p>
                <div className="practica-list-boton">
                  <button onClick={() => handleView(practica.id)}>Visualizar</button>
                  {usuarioActual.tipo === 'Admin' && <button onClick={() => handleEdit(practica.id)}>Editar</button>}
                  {usuarioActual.tipo === 'Admin' && <button onClick={() => handleDelete(practica.id)}>Borrar</button>}
                </div>
              </div>
            );
          })}
        </div>
      );
      
}
 
export default PracticaList;