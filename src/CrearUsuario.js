import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CrearUsuario = () => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(inputs.tipo);
        //alert(inputs.correo);
        //alert(inputs.password);
        //alert(inputs.nombre);
        //alert(inputs.apellido);
        //alert(inputs.final);
    }


    let navigate = useNavigate();
    const handleBack = () => {
        navigate('/usuarios');
    };

    return (
        <div className="crear-usuario">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <div className="crear-usuario-con">
                <h2>Nuevo Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <label> Tipo de usuario a crear:
                        <select name="tipo" value={inputs.tipo} onChange={handleChange}>
                            <option value=''>---</option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Profesor">Profesor</option>
                            <option value="Empresa">Empresa</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </label>
                    
                    <label>Correo de la cuenta:
                        <input type="text" name="correo" placeholder={"correo@estudiantec.cr"} style={BarStyle} value={inputs.correo || ""} onChange={handleChange}/>
                    </label>
                    <label>Contraseña de la cuenta:
                        <input type="password" name="password" placeholder={"password"} style={BarStyle} value={inputs.password || ""} onChange={handleChange}/>
                    </label>

                    {(inputs.tipo === 'Estudiante' || inputs.tipo === 'Profesor' || inputs.tipo === 'Empresa') && 
                    <label>Nombre del usuario:
                        <input type="text" name="nombre" placeholder={"nombre"} style={BarStyle} value={inputs.nombre || ""} onChange={handleChange}/>
                    </label>
                    }
                    {(inputs.tipo === 'Estudiante' || inputs.tipo === 'Profesor') && 
                    <label>Apellido del usuario:
                        <input type="text" name="apellido" placeholder={"apellido"} style={BarStyle} value={inputs.apellido || ""} onChange={handleChange}/>
                    </label>
                    }
                    {inputs.tipo === 'Estudiante' && 
                    <label>Carnet del estudiante:
                        <input type="number" name="carnet" placeholder={"carnet"} style={BarStyle} value={inputs.carnet || ""} onChange={handleChange}/>
                    </label>
                    }
                    {inputs.tipo === 'Estudiante' && 
                    <label>Carrera del estudiante:
                        <input type="text" name="carrera" placeholder={"carrera"} style={BarStyle} value={inputs.carrera || ""} onChange={handleChange}/>
                    </label>
                    }
                    {inputs.tipo === 'Profesor' && 
                    <label>Escuela del profesor:
                        <input type="text" name="escuela" placeholder={"escuela"} style={BarStyle} value={inputs.escuela || ""} onChange={handleChange}/>
                    </label>
                    }
                    {inputs.tipo === 'Empresa' && 
                    <label>Teléfono de la empresa:
                        <input type="text" name="telefono" placeholder={"telefono"} style={BarStyle} value={inputs.telefono || ""} onChange={handleChange}/>
                    </label>
                    }

                    <label>
                        <input type="submit" />
                    </label>
                </form>
            </div>
        </div>
    );
}
 
export default CrearUsuario;