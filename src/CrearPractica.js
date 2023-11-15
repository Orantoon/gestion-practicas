import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

const CrearPractica = ({usuarios}) => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(inputs.nombre);
        //alert(inputs.estudiante);
        //alert(inputs.profesor);
        //alert(inputs.empresa);
        //alert(inputs.inicio);
        //alert(inputs.final);
        navigate('/practicas/');
    }


    const estudiantes = usuarios.filter((usuario) => usuario.tipo === 'Estudiante')
    const selectEstudiantes = () => {
        let items = [];
        items.push(<option value=''>---</option>)
        estudiantes.map((estudiante) => (
            items.push(<option value={estudiante.correo}>{estudiante.nombre} {estudiante.apellido}: {estudiante.carnet}</option>)
        ))
        return items;
    }

    const profesores = usuarios.filter((usuario) => usuario.tipo === 'Profesor')
    const selectProfesores = () => {
        let items = [];
        items.push(<option value=''>---</option>)
        profesores.map((profesor) => (
            items.push(<option value={profesor.correo}>{profesor.nombre} {profesor.apellido}: {profesor.escuela}</option>)
        ))
        return items;
    }

    const empresas = usuarios.filter((usuario) => usuario.tipo === 'Empresa')
    const selectEmpresa = () => {
        let items = [];
        items.push(<option value=''>---</option>)
        empresas.map((empresa) => (
            items.push(<option value={empresa.correo}>{empresa.nombre}</option>)
        ))
        return items;
    }

    const dateInputRef = useRef(null);


    const handleBack = () => {
        navigate('/practicas');
    };

    return (
        <div className="crear-practica">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <div className="crear-practica-con">
                <h2>Nueva Práctica</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nombre de la práctica:
                        <input type="text" name="nombre" placeholder={"práctica"} style={BarStyle} value={inputs.nombre || ""} onChange={handleChange}/>
                    </label>
                    <label>Escoja un estudiante: 
                        <select name="estudiante" value={inputs.estudiante} onChange={handleChange}>
                            {selectEstudiantes()}
                        </select>
                    </label>
                    <label>Escoja un profesor encargado: 
                        <select name="profesor" value={inputs.profesor} onChange={handleChange}>
                            {selectProfesores()}
                        </select>
                    </label>
                    <label>Escoja la empresa: 
                        <select name="empresa" value={inputs.empresa} onChange={handleChange}>
                            {selectEmpresa()}
                        </select>
                    </label>
                    <label>Fecha de inicio de la Práctica: 
                        <input type="date" name="inicio" value={inputs.inicio} onChange={handleChange} ref={dateInputRef}/>
                    </label>
                    <label>Fecha de finalización de la Práctica: 
                        <input type="date" name="final" value={inputs.final} onChange={handleChange} ref={dateInputRef}/>
                    </label>

                    <label>
                        <input type="submit" />
                    </label>
                </form>
            </div>
        </div>
    );
}
 
export default CrearPractica;