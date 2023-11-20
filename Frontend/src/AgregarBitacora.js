import {useParams} from 'react-router-dom';
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const AgregarBitacora = ({practicas, bitacoras, setBitacoras}) => {
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

        const nuevaBitacora = {
            titulo: inputs.titulo,
            contenido: inputs.contenido,
            practica: practica.id,
            posttime: formatoFechaHora,
            calificacionProfesor: null
        };

        fetch('http://localhost:4000/bitacora', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevaBitacora),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo crear la bitacora');
            }
            return response.json();
        })
        .then(data => {
            console.log('Bitacora creado con éxito', data);
    
            if (bitacoras) {
                setBitacoras([...bitacoras, data]);
            } else {
                setBitacoras([data]);
            }
        })
        .catch(error => {
            console.error('Error al agregar bitacora', error.message);
        });

        navigate('/infopractica/' + id);
    }


    const handleBack = () => {
        navigate('/infopractica/' + id);
    };

    return (
        <div className="agregar-bitacora">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <div className="agregar-bitacora-con">
                <h2>Agregar Bitacora</h2>
                <form onSubmit={handleSubmit}>
                    <label>Escriba el título de la bitacora:
                        <input type="text" name="titulo" placeholder={"título"} style={BarStyle} value={inputs.titulo || ""} onChange={handleChange}/>
                    </label>
                    <p/>
                    <label>Escriba la bitacora: 
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
 
export default AgregarBitacora;