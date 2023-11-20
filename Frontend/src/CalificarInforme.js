import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const CalificarInforme = ({usuarioActual, informes, setInformes}) => {
    const {id} = useParams();
    const idNum = parseInt(id, 10);
    const informe = informes && informes.find(informe => informe.id === idNum);


    const [inputs, setInputs] = useState({ calificacion: '' });
    const handleChange = (event) => {
        setInputs({ calificacion: event.target.value });
    }

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const calProf = usuarioActual && usuarioActual.tipo === 2
            ? inputs.calificacion 
            : usuarioActual && usuarioActual.tipo === 3
            ? informe.calificacionProfesor
            : null;
        
        const calEmp = usuarioActual && usuarioActual.tipo === 3
            ? inputs.calificacion 
            : usuarioActual && usuarioActual.tipo === 2
            ? informe.calificacionEmpresa
            : null;

        // Promedio segun la ponderacion del TEC
        const calTot = (calProf * 65)/100 + (calEmp * 35)/100;

        var informeActualizado = {
            titulo: informe.titulo || null,
            contenido: informe.contenido || null,
            practica: informe.practica || null,
            posttime: informe.posttime || null,
            calificacionProfesor: calProf || informe.calificacionProfesor,
            calificacionEmpresa: calEmp || informe.calificacionEmpresa,
            calificacionTotal: calTot
        };

        fetch(`http://localhost:4000/informe/${informe.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(informeActualizado),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo actualizar el informe');
            }
            return response.json();
        })
        .then(data => {
            console.log('Informe actualizado con éxito', data);
    
            setInformes(prevInformes => {
                const informesActualizados = prevInformes.map(informeAct =>
                    informeAct.id === informe.id ? data : informeAct
                );
                return informesActualizados;
            });

            navigate('/infoinforme/' + id);
        })
        .catch(error => {
            console.error('Error al actualizar informe', error.message);
        });
    }

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
                    <input type="number" value={inputs.calificacion} placeholder={0} onChange={handleChange} min="0" max="100"/>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}
 
export default CalificarInforme;