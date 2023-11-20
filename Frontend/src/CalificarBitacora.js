import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const CalificarBitacora = ({bitacoras, setBitacoras}) => {
    const {id} = useParams();
    const idNum = parseInt(id, 10);
    const bitacora = bitacoras && bitacoras.find(bitacora => bitacora.id === idNum);

    const [inputs, setInputs] = useState({ calificacion: '' });
    const handleChange = (event) => {
        setInputs({ calificacion: event.target.value });
    }

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const calProf = inputs.calificacion;

        var bitacoraActualizada = {
            titulo: bitacora.titulo || null,
            contenido: bitacora.contenido || null,
            practica: bitacora.practica || null,
            posttime: bitacora.posttime || null,
            calificacionProfesor: calProf || bitacora.calificacionProfesor
        };

        fetch(`http://localhost:4000/bitacora/${bitacora.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bitacoraActualizada),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo actualizar la bitacora');
            }
            return response.json();
        })
        .then(data => {
            console.log('Bitacora actualizada con éxito', data);
    
            setBitacoras(prevInformes => {
                const bitacorasActualizadas = prevInformes.map(bitacoraAct =>
                    bitacoraAct.id === bitacora.id ? data : bitacoraAct
                );
                return bitacorasActualizadas;
            });

            navigate('/infobitacora/' + id);
        })
        .catch(error => {
            console.error('Error al actualizar bitacora', error.message);
        });
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