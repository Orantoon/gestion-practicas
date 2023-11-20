import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

const CrearPractica = ({practicas, setPracticas, estudiantes, profesores, empresas}) => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    var nuevaPractica = {
        nombre: inputs.nombre,
        estudiante: inputs.estudiante,
        profesor: inputs.profesor,
        empresa: inputs.empresa,
        fechaInicio: inputs.inicio,
        fechaFinal: inputs.final,
        estado: 'activo',
        calificacionFinal: null
    };

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:4000/practica', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevaPractica),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo crear la práctica');
            }
            return response.json();
        })
        .then(data => {
            console.log('Práctica creada con éxito', data);
    
            if (practicas) {
                setPracticas([...practicas, data]);
            } else {
                setPracticas([data]);
            }
        })
        .catch(error => {
            console.error('Error al agregar la práctica', error.message);
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