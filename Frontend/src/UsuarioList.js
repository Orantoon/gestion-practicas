const UsuarioList = ({ usuarios, tipoUsuario, handleEdit, handleDelete, estudiantes, profesores, empresas }) => {
    return (
      <div className="usuario-list">
        {usuarios && usuarios.map((usuario) => {
          if (!usuario || !estudiantes || !profesores || !empresas) {
            return (
              <div className="usuario-preview" key={usuario.id}>
                <p>Error al cargar el usuario</p>
              </div>
            );
          }

          return (
          <div className="usuario-preview" key={usuario.id}>
            {usuario && <h2>{usuario.correo}</h2>}
            {tipoUsuario && usuario && <p>Tipo de usuario: {tipoUsuario.find(tipo => tipo.id === usuario.tipo).nombre}</p>}
  
            {estudiantes && estudiantes.find(estudiante => estudiante.id === usuario.id) && (
              <div>
                {estudiantes && usuario && <p>Nombre: {estudiantes.find(estudiante => estudiante.id === usuario.id).nombre}</p>}
                {estudiantes && usuario && <p>Apellido: {estudiantes.find(estudiante => estudiante.id === usuario.id).apellido}</p>}
                {estudiantes && usuario && <p>Carnet: {estudiantes.find(estudiante => estudiante.id === usuario.id).carnet}</p>}
                {estudiantes && usuario && <p>Carrera: {estudiantes.find(estudiante => estudiante.id === usuario.id).carrera}</p>}
              </div>
            )}
  
            {profesores && profesores.find(profesor => profesor.id === usuario.id) && (
              <div>
                {profesores && usuario && <p>Nombre: {profesores.find(profesor => profesor.id === usuario.id).nombre}</p>}
                {profesores && usuario && <p>Apellido: {profesores.find(profesor => profesor.id === usuario.id).apellido}</p>}
                {profesores && usuario && <p>Escuela: {profesores.find(profesor => profesor.id === usuario.id).escuela}</p>}
              </div>
            )}
  
            {empresas && empresas.find(empresa => empresa.id === usuario.id) && (
              <div>
                {empresas && usuario && <p>Nombre: {empresas.find(empresa => empresa.id === usuario.id).nombre}</p>}
                {empresas && usuario && <p>Teléfono: {empresas.find(empresa => empresa.id === usuario.id).telefono}</p>}
              </div>
            )}
  
            <div className="usuario-list-boton">
              {usuario.tipo !== 4 && <button onClick={() => handleEdit(usuario.id)}>Editar</button>}
              <button onClick={() => handleDelete(usuario.id)}>Borrar</button>
            </div>
          </div>
          );
        })}
      </div>
    );
};
 
export default UsuarioList;
