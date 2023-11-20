import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';

const EditPractica = ({estudiantes, profesores, empresas, practicas, setPracticas}) => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

    const {id} = useParams();
    const idNum = parseInt(id, 10);
    const practica = practicas && practicas.find(practica => practica.id === idNum);

    let navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        var nuevaPractica = {
            nombre: inputs.nombre || practica.nombre,
            estudiante: inputs.estudiante || practica.estudiante,
            profesor: inputs.profesor || practica.profesor,
            empresa: inputs.empresa || practica.empresa,
            fechaInicio: inputs.inicio || practica.fechaInicio,
            fechaFinal: inputs.final || practica.fechaFinal,
            estado: practica.estado,
            calificacionFinal: practica.calificacionFinal
        };
        
        fetch(`http://localhost:4000/practica/${practica.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevaPractica),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo editar la práctica');
            }
            return response.json();
        })
        .then(data => {
            console.log('Práctica editada con éxito', data);
    
            if (practicas) {
                setPracticas([...practicas, data]);
            } else {
                setPracticas([data]);
            }
        })
        .catch(error => {
            console.error('Error al editar la práctica', error.message);
            console.log(nuevaPractica)
        });

        navigate('/practicas/');
    }


    const selectEstudiantes = () => {
        let items = [];
        items.push(<option value=''>---</option>)
        estudiantes && estudiantes.map((estudiante) => (
            items.push(<option value={estudiante.id}>{estudiante.nombre} {estudiante.apellido}: {estudiante.carnet}</option>)
        ))
        return items;
    }

    const selectProfesores = () => {
        let items = [];
        items.push(<option value=''>---</option>)
        profesores && profesores.map((profesor) => (
            items.push(<option value={profesor.id}>{profesor.nombre} {profesor.apellido}: {profesor.escuela}</option>)
        ))
        return items;
    }

    const selectEmpresa = () => {
        let items = [];
        items.push(<option value=''>---</option>)
        empresas && empresas.map((empresa) => (
            items.push(<option value={empresa.id}>{empresa.nombre}</option>)
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
                    const estudiante = estudiantes && estudiantes.find(estudiante => estudiante.id === practica.estudiante);
                    const profesor = profesores && profesores.find(profesor => profesor.id === practica.profesor);
                    const empresa = empresas && empresas.find(empresa => empresa.id === practica.empresa);
    
                    return (
                        <>
                            <h2>Editar Práctica</h2>
                            <form onSubmit={handleSubmit}>
                                {practica && <p>Nombre de la practica actual: {practica.nombre}</p>}
                                <label>Nuevo nombre de la práctica:
                                    <input type="text" name="nombre" placeholder={"práctica"} style={BarStyle} value={inputs.nombre || ""} onChange={handleChange}/>
                                </label>
                                {estudiante && <p>Estudiante actual: {estudiante ? estudiante.nombre : 'No encontrado'}</p>}
                                <label>Nuevo estudiante: 
                                    <select name="estudiante" value={inputs.estudiante} onChange={handleChange}>
                                        {selectEstudiantes()}
                                    </select>
                                </label>
                                {profesor && <p>Profesor encargado actual: {profesor ? profesor.nombre : 'No encontrado'}</p>}
                                <label>Nuevo profesor encargado: 
                                    <select name="profesor" value={inputs.profesor} onChange={handleChange}>
                                        {selectProfesores()}
                                    </select>
                                </label>
                                {empresa && <p>Empresa actual: {empresa ? empresa.nombre : 'No encontrado'}</p>}
                                <label>Nueva empresa: 
                                    <select name="empresa" value={inputs.empresa} onChange={handleChange}>
                                        {selectEmpresa()}
                                    </select>
                                </label>
                                {practica && <p>Fecha de inicio actual: {format(new Date(practica.fechaInicio), 'yyyy-MM-dd HH:mm')}</p>}
                                <label>Nueva fecha de inicio de la Práctica: 
                                    <input type="date" name="inicio" value={inputs.inicio} onChange={handleChange} ref={dateInputRef}/>
                                </label>
                                {practica && <p>Fecha de finalización actual: {format(new Date(practica.fechaFinal), 'yyyy-MM-dd HH:mm')}</p>}
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