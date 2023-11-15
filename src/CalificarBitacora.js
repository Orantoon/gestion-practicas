import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const CalificarBitacora = ({practicas}) => {
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
        navigate('/infobitacora/' + id);
    }


    const handleBack = () => {
        navigate('/infobitacora/' + id);
    };

    return (
        <div className="calificar-bitacora">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <div className="calificar-bitacora-con">
                <h2>Calificar Bitacora</h2>
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
 
export default CalificarBitacora;