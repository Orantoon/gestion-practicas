import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const CalificarInforme = ({practicas, usuarioActual}) => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

    const {id} = useParams();
    const idNum = parseInt(id, 10);

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (!isNaN(value) && value >= 0 && value <= 100) {
            setInputs(values => ({...values, [name]: value}));
        }
    }

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(inputs.calificaion);
        navigate('/infoinforme/' + id);
    }

    // Revisar usuarioActual para ver si es calificacion de Profesor o Empresa


    const handleBack = () => {
        navigate('/infoinforme/' + id);
    };

    return (
        <div className="calificar-informe">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <div className="calificar-informe-con">
                <h2>Calificar Informe</h2>
                <p>Escriba un valor entre 0 y 100:</p>
                <form onSubmit={handleSubmit}>
                    <input type="number" value={inputs.calificaion} placeholder={0} onChange={handleChange} min="0" max="100"/>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}
 
export default CalificarInforme;