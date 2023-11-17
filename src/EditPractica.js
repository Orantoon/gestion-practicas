import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

const EditPractica = ({estudiantes, profesores, empresas, practicas}) => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

    const {id} = useParams();
    const idNum = parseInt(id, 10);
    const practica = practicas.find(practica => practica.id === idNum);

    let navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

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


    const selectEstudiantes = () => {
        let items = [];
        items.push(<option value=''>---</option>)
        estudiantes.map((estudiante) => (
            items.push(<option value={estudiante.correo}>{estudiante.nombre} {estudiante.apellido}: {estudiante.carnet}</option>)
        ))
        return items;
    }

    const selectProfesores = () => {
        let items = [];
        items.push(<option value=''>---</option>)
        profesores.map((profesor) => (
            items.push(<option value={profesor.correo}>{profesor.nombre} {profesor.apellido}: {profesor.escuela}</option>)
        ))
        return items;
    }

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
        <div className="edit-practica">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <div className="edit-practica-con">
                {(() => {
                    const estudiante = estudiantes.find(estudiante => estudiante.id === practica.estudiante);
                    const profesor = profesores.find(profesor => profesor.id === practica.profesor);
                    const empresa = empresas.find(empresa => empresa.id === practica.empresa);
    
                    return (
                        <>
                            <h2>Editar Práctica</h2>
                            <form onSubmit={handleSubmit}>
                                <p>Nombre de la practica actual: {practica.nombre}</p>
                                <label>Nuevo nombre de la práctica:
                                    <input type="text" name="nombre" placeholder={"práctica"} style={BarStyle} value={inputs.nombre || ""} onChange={handleChange}/>
                                </label>
                                <p>Estudiante actual: {estudiante ? estudiante.nombre : 'No encontrado'}</p>
                                <label>Nuevo estudiante: 
                                    <select name="estudiante" value={inputs.estudiante} onChange={handleChange}>
                                        {selectEstudiantes()}
                                    </select>
                                </label>
                                <p>Profesor encargado actual: {profesor ? profesor.nombre : 'No encontrado'}</p>
                                <label>Nuevo profesor encargado: 
                                    <select name="profesor" value={inputs.profesor} onChange={handleChange}>
                                        {selectProfesores()}
                                    </select>
                                </label>
                                <p>Empresa actual: {empresa ? empresa.nombre : 'No encontrado'}</p>
                                <label>Nueva empresa: 
                                    <select name="empresa" value={inputs.empresa} onChange={handleChange}>
                                        {selectEmpresa()}
                                    </select>
                                </label>
                                <p>Fecha de inicio actual: {practica.fechainicio}</p>
                                <label>Nueva fecha de inicio de la Práctica: 
                                    <input type="date" name="inicio" value={inputs.inicio} onChange={handleChange} ref={dateInputRef}/>
                                </label>
                                <p>Fecha de finalización actual: {practica.fechafinal}</p>
                                <label>Nueva fecha de finalización de la Práctica: 
                                    <input type="date" name="final" value={inputs.final} onChange={handleChange} ref={dateInputRef}/>
                                </label>

                                <label>
                                    <input type="submit" />
                                </label>
                            </form>
                        </>
                    );
            })()}
            </div>
        </div>
    );
}
 
export default EditPractica;