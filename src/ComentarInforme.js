import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const ComentarInforme = ({practicas, usuarioActual}) => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

    const {id} = useParams();
    const idNum = parseInt(id, 10);

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(inputs.comentario);
        navigate('/infoinforme/' + id);
    }


    const handleBack = () => {
        navigate('/infoinforme/' + id);
    };

    return (
        <div className="comentar-informe">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <h2>Comentar Informe</h2>
            <p>Escriba su comentario:</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="comentario" placeholder={"Escriba su comentario aquí"} style={BarStyle} value={inputs.comentario || ""} onChange={handleChange}/>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}
 
export default ComentarInforme;