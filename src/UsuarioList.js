const UsuarioList = ({usuarios, handleEdit, handleDelete}) => {
    return (
        <div className="usuario-list">
            {usuarios.map((usuario) => (
                <div className="usuario-preview" key={usuario.id}>
                    <h2>{usuario.correo}</h2>
                    <p>{usuario.nombre} {usuario.apellido}</p>
                    {usuario.carnet != null && <p>Carnet: {usuario.carnet}</p>}
                    {usuario.carrera != null && <p>Carrera: {usuario.carrera}</p>}
                    {usuario.escuela != null && <p>Escuela: {usuario.escuela}</p>}
                    {usuario.telefono != null && <p>Numero Telefónico: {usuario.telefono}</p>}
                    <p>Tipo de usuario: {usuario.tipo}</p>
                    <div className="usuario-list-boton">
                        {usuario.tipo !== 'Admin' && <button onClick={() => handleEdit(usuario.id)}>Editar</button>}
                        <button onClick={() => handleDelete(usuario.id)}>Borrar</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default UsuarioList;