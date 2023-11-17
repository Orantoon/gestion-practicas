const PracticaList = ({usuarioActual, usuarios, estudiantes, profesores, empresas, practicas, handleView, handleEdit, handleDelete}) => {
    const practicasUsuario = practicas.filter(practica => {
    
      switch (usuarioActual.tipo) {
        case 1: // Estudiante
          return practica.estudiante === usuarioActual.id;
        case 2: // Profesor
          return practica.profesor === usuarioActual.id;
        case 3: // Empresa
          return practica.empresa === usuarioActual.id;
        default: // Admin
          return practicas;
      }
    });
     
    return (
        <div className="practica-list">
          {practicasUsuario.map((practica) => {
            const estudiante = estudiantes.find(estudiante => estudiante.id === practica.estudiante);
            const profesor = profesores.find(profesor => profesor.id === practica.profesor);
            const empresa = empresas.find(empresa => empresa.id === practica.empresa);
            return (
              <div className="practica-preview" key={practica.id}>
                <h2>{practica.nombre}</h2>
                <p>Estudiante: {estudiante ? estudiante.nombre : 'No encontrado'}</p>
                <p>Empresa: {empresa ? empresa.nombre : 'No encontrado'}</p>
                <p>Profesor encargado: {profesor ? profesor.nombre : 'No encontrado'}</p>
                <p>Status: {practica.status}</p>
                <div className="practica-list-boton">
                  <button onClick={() => handleView(practica.id)}>Visualizar</button>
                  {usuarioActual.tipo === 4 && <button onClick={() => handleEdit(practica.id)}>Editar</button>}
                  {usuarioActual.tipo === 4 && <button onClick={() => handleDelete(practica.id)}>Borrar</button>}
                </div>
              </div>
            );
          })}
        </div>
      );
      
}
 
export default PracticaList;