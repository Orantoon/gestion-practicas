const UsuarioList = ({ usuarios, tiposUsuario, handleEdit, handleDelete, estudiantes, profesores, empresas }) => {
    return (
      <div className="usuario-list">
        {usuarios.map((usuario) => (
          <div className="usuario-preview" key={usuario.id}>
            <h2>{usuario.correo}</h2>
            <p>Tipo de usuario: {tiposUsuario.find(tipo => tipo.id === usuario.tipo).nombre}</p>
  
            {estudiantes.find(estudiante => estudiante.id === usuario.id) && (
              <div>
                <p>Nombre: {estudiantes.find(estudiante => estudiante.id === usuario.id).nombre}</p>
                <p>Apellido: {estudiantes.find(estudiante => estudiante.id === usuario.id).apellido}</p>
                <p>Carnet: {estudiantes.find(estudiante => estudiante.id === usuario.id).carnet}</p>
                <p>Carrera: {estudiantes.find(estudiante => estudiante.id === usuario.id).carrera}</p>
              </div>
            )}
  
            {profesores.find(profesor => profesor.id === usuario.id) && (
              <div>
                <p>Nombre: {profesores.find(profesor => profesor.id === usuario.id).nombre}</p>
                <p>Apellido: {profesores.find(profesor => profesor.id === usuario.id).apellido}</p>
                <p>Escuela: {profesores.find(profesor => profesor.id === usuario.id).escuela}</p>
              </div>
            )}
  
            {empresas.find(empresa => empresa.id === usuario.id) && (
              <div>
                <p>Nombre: {empresas.find(empresa => empresa.id === usuario.id).nombre}</p>
                <p>Teléfono: {empresas.find(empresa => empresa.id === usuario.id).telefono}</p>
              </div>
            )}
  
            <div className="usuario-list-boton">
              {usuario.tipo !== 4 && <button onClick={() => handleEdit(usuario.id)}>Editar</button>}
              <button onClick={() => handleDelete(usuario.id)}>Borrar</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
 
export default UsuarioList;
