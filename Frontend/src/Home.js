import homepageImage from './imagenes/homepage.jpg';

const Home = () => {
    
    return (
        <div className="home">
            <h2>Bienvenido al programa de Gestión de Prácticas Profesionales del TEC</h2>
            <p>Para comenzar, diríjase a la pestaña de Prácticas Profesionales para ver las prácticas profesionales asociadas a su cuenta.</p>
            <img src={homepageImage}/>
        </div>
    );
}
 
export default Home;