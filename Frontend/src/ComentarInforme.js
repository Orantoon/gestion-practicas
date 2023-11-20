import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const ComentarInforme = ({usuarioActual, informes, comentariosInforme, setComentariosInforme}) => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

    const {id} = useParams();
    const idNum = parseInt(id, 10);
    const informe = informes && informes.find(informe => informe.id === idNum);

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const fechaHoraActual = new Date();
        const formatoFechaHora = fechaHoraActual.toISOString()

        const nuevoComentario = {
            informe: informe.id,
            autor: usuarioActual.id,
            contenido: inputs.comentario,
            posttime: formatoFechaHora
        };

        fetch('http://localhost:4000/comentario-informe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoComentario),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo crear el comentario');
            }
            return response.json();
        })
        .then(data => {
            console.log('Comentario creado con éxito', data);
    
            if (comentariosInforme) {
                setComentariosInforme([...comentariosInforme, data]);
            } else {
                setComentariosInforme([data]);
            }
        })
        .catch(error => {
            console.error('Error al agregar comentario', error.message);
        });

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