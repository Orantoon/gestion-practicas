import {useParams} from 'react-router-dom';
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const AgregarBitacora = ({setPracticas}) => {
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
    function handleSubmit(event) {
        event.preventDefault();

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