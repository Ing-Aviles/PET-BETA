import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/FormRes.css'
import Footer from "./Footer"
import ImgRes from '../imagenes/img-FormRes.jpg'

const FormRes = () => {
    return (
        <>
            <div className='Container'>
                <img src={ImgRes} alt="Imagen rescatistas" className='ImgRes'></img>
            </div>
            <h1 className='title'>Rescatistas</h1>
            <h3>&iexcl; Gracias por considerar unirte a nuestro equipo de rescatistas de mascotas&#33;</h3>
            <p>
                Tu voluntad de ayudar hace una gran diferencia en la vida de esos amigos peludos que necesitan amor y cuidado&#46; Como rescatista&#44; tendrás la oportunidad de marcar un impacto positivo&#44; brindando una segunda oportunidad a aquellos que lo necesitan&#46;<br />
                Al unirte a nosotros&#44; te conviertes en un héroe para aquellos que no pueden hablar por sí mismos&#46; Tu dedicación y pasión por el bienestar animal son el corazón de nuestra comunidad&#46; Juntos&#44; podemos construir un entorno donde cada mascota reciba el amor y el refugio que merece&#46;<br />
                Si estás listo para ser parte de esta noble causa&#44; regístrate ahora y comencemos este viaje increíble&#46; Estamos emocionados de dar la bienvenida a nuevos miembros que comparten nuestro compromiso de crear un mundo mejor para nuestros amigos de cuatro patas&#46;<br /></p>
            <h4>&iexcl;Gracias por ser un defensor de los animales y un amigo para siempre&#33; 🐾✨</h4>
            <div className="container mt-5 border rounded  p-4">
                <div>
                    <label htmlFor="textName" className="form-label">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        id="textName"
                        name="name"
                        className="form-control"
                        placeholder="Introduce tu nombre"
                        required
                    />
                </div>
                <div>
                  <label htmlFor="textEmail" className="form-label">
                    Correo Electronico:
                  </label>
                  <input
                    type="text"
                    id="textEmail"
                    name="email"
                    className="form-control"
                    placeholder="Introduce tu email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="textSocial" className="form-label">
                    Red Social:
                  </label>
                  <input
                    type="text"
                    id="textSocial"
                    name="Social"
                    className="form-control"
                    placeholder="Link de red social"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-secondary w-100 mt-3">Enviar</button>
            </div>
            <span className='text-dark font-weight-bold'>&iexcl; TU INFORMACIÓN FUE ENVIADA&#44; SERA RESPONDIDA EN BREBEDAD&#33;</span>
            <Footer />
        </>
    )
}

export default FormRes