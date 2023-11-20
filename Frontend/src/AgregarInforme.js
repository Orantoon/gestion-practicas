import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const AgregarInforme = ({practicas, informes, setInformes}) => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

    const {id} = useParams();
    const idNum = parseInt(id, 10);
    const practica = practicas && practicas.find(practica => practica.id === idNum);


    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    let navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();

        const fechaHoraActual = new Date();
        const formatoFechaHora = fechaHoraActual.toISOString()

        const nuevoInforme = {
            titulo: inputs.titulo,
            contenido: inputs.contenido,
            practica: practica.id,
            posttime: formatoFechaHora,
            calificacionProfesor: null,
            calificacionEmpresa: null,
            calificacionTotal: null
        };

        fetch('http://localhost:4000/informe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoInforme),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo crear el informe');
            }
            return response.json();
        })
        .then(data => {
            console.log('Informe creado con éxito', data);
    
            if (informes) {
                setInformes([...informes, data]);
            } else {
                setInformes([data]);
            }
        })
        .catch(error => {
            console.error('Error al agregar informe', error.message);
        });

        navigate('/infopractica/' + id);
    }


    const handleBack = () => {
        navigate('/infopractica/' + id);
    };

    return (
        <div className="agregar-informe">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <div className="agregar-informe-con">
                <h2>Agregar Informe</h2>
                <form onSubmit={handleSubmit}>
                    <label>Escriba el título del informe:
                        <input type="text" name="titulo" placeholder={"título"} style={BarStyle} value={inputs.titulo || ""} onChange={handleChange}/>
                    </label>
                    <p/>
                    <label>Escriba el informe: 
                        <input type="text" name="contenido" placeholder={"contenido"} style={BarStyle} value={inputs.contenido || ""} onChange={handleChange}/>
                    </label>
                    <p/>

                    <label>
                        <input type="submit" />
                    </label>
                </form>
            </div>
        </div>
    );
}
 
export default AgregarInforme;