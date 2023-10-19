import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './aboutus.css'
import loveRat from '/public/homepage-imgs/lovefirstsight.png'

export default function AboutUs() {


    return (
        <>
        <div className="about-borderbox">
            <div className="about-container d-flex flex-column align-items-center">
                <section>
                     <img className="mb-3" src={loveRat} alt="" />
                </section>
                <section>
                    <h3 className="text-center">¿Quiénes Somos?</h3>
                    <p>RatClub nace el año 2022. Somos una pequeña compañia de 20 personas que aman a los roedores.
                            Casi todos los miembros de la compañia tienen ratas de mascotas por lo que estamos
                            constantemente buscando productos para nuestros amigos, y debido a la falta de 
                            venta de productos dedicados a ellos, decidimos crear este lugar!
                        <br />
                        <br />
                        Tenemos un grupo especializado de exploradores que esta constantemente investigando nuevos
                        productos para tanto importar como para crear. Esperamos que tengas una excelente experiencia y que tus pequeños disfruten todos los productos que 
                        ofrecemos. 
                        <br />
                        <br />
                        Por el momento nuestra tienda es 100% digital, llegamos a todas las regiones de Chile y
                        te aseguramos que siempre recibiras exactamente lo que pediste. 
                        <br />
                        <br />
                        Si tienes cualquier duda o pregunta, porfavor dirigite hacia nuestra sección de preguntas frecuentes
                        o contáctanos directamente a hola@ratclub.cl 💛
                    </p>
                </section>
            </div>
        </div>
        </>



    )


}