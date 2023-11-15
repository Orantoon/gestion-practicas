import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {

    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        // VALIDACION
        
        setLoggedIn(true);
        navigate('/');
    }

    return (
        <div className="login">
            <h2>¡Bienvenido a la Gestión de Prácticas Profesionales del TEC!</h2>
            <p>Ingrese con una cuenta vinculada con el TEC</p>

            <form onSubmit={handleSubmit}>
                <label>Correo:
                    <input type="text" name="correo" placeholder={"correo@estudiantec.cr"} style={BarStyle} value={inputs.correo || ""} onChange={handleChange}/>
                </label>
                <label>Contraseña:
                    <input type="password" name="password" placeholder={"password"} style={BarStyle} value={inputs.password || ""} onChange={handleChange}/>
                </label>

                <label>
                    <input type="submit" />
                </label>
            </form>
        </div>
    );
}
 
export default Login;