import React from 'react'
import '/src/index.css'

export const PiePag = () => {
    return (
        < >
            <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" >
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <a href="" className="navbar-brand">
                            <h1 className="text-primary"><span className="text-white">M</span>i Ciudad</h1>
                        </a>
                        <p>"Sumérgete en un mundo de maravillas y experiencias inolvidables mientras descubres la fascinante diversidad de nuestros lugares turísticos, donde la majestuosidad de paisajes naturales se entrelaza con la rica herencia cultural y arquitectónica, creando un lienzo perfecto para vivir aventuras emocionantes y crear recuerdos para toda la vida."</p>
                        <h6 className="text-white text-uppercase mt-4 mb-3" >Follow Us</h6>
                        <div className="d-flex justify-content-start">
                            <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        {/* Espacio XD */}
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="text-white text-uppercase mb-4" >Principal Patrocinador</h5>
                        <div className=" d-flex flex-column justify-content-start text-white ">
                            <a href="https://www.kinal.org.gt" className='text-white'>- Instituto Tenico Fundacion Kinal</a>
                            <img src="./src/assets/img/kinal_v.png" alt="" />
                        </div>
                    </div>

                    <hr />
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="text-white text-uppercase mb-4" >Contactanos</h5>
                        <p><i className="fa fa-phone-alt mr-2"></i>+502 2598 6845</p>
                        <p><i className="fa fa-envelope mr-2"></i>recorretuciudad@gmail.com</p>
                        <div className="w-100">
                        </div>
                    </div>
                </div>
                <p>© {new Date().getFullYear()} Nuestra Empresa - Todos los derechos reservados</p>
            </div>

        </>
    )
}
