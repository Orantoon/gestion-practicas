const Navbar = ({ usuarioActual, handleLogout }) => {
    return (
      <nav className="navbar">
        <h1>Gestión de Prácticas TEC</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/practicas">Prácticas Profesionales</a>
          {usuarioActual.tipo === 4 && <a href="/usuarios">Usuarios</a>}
        </div>
        <div className="boton-logout">
          <button onClick={() => handleLogout()}>Cerrar Sesión</button>
        </div>
      </nav>
    );
  };
 
export default Navbar;