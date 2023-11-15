import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const AgregarInforme = ({setPracticas}) => {

    const {id} = useParams();
    const idNum = parseInt(id, 10);

    const [file, setFile] = useState();

    function handleFile(event) {
        setFile(event.target.files[0]);
    }

    let navigate = useNavigate();
    function handleUpload(event) {
        const formData = new FormData();
        formData.append('file', file);

        fetch (
            'url',
            {
                method: 'POST',
                body: formData
            }
        ).then((response) => response.json())
        .then((result) => {
            setPracticas(prevPracticas => {
                return prevPracticas.map(practica => {
                    if (practica.id === idNum) {
                        return {
                            ...practica,
                            informes: [
                                ...practica.informes,
                                { archivo: result.fileName, fecha: new Date() }
                            ]
                        };
                    }
                    return practica;
                });
            });
            console.log('success', result);
        })
        .catch(error => {
            console.error("Error:", error)
        });

        navigate('/infopractica/' + id);
    }


    const handleBack = () => {
        navigate('/infopractica/' + id);
    };

    return (
        <div className="agregar-informe">
            <button className="boton-volver" onClick={handleBack}>Volver</button>
            <h2>Agregar Informe</h2>
            <p>Inserte su informe aquí:</p>
            <form onSubmit={handleUpload}>
                <input type='file' name='file' onChange={handleFile} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}
 
export default AgregarInforme;