import React from 'react'

export const Zona4 = () => {
    return (
        < >
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" >Zona 4</h6>
                        <h1>Lugares y Servicios de la Zona</h1>
                    </div>

                    <div className="row ">
                        <div className="col-lg-4 col-md-6 mb- 4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-route mx-auto mb-4"></i>
                                <h4 className="mb-2">Torre del Reformador:</h4>

                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Informacion
                                </button>


                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog modal-xl" >
                                        <div className="modal-content ">
                                            <div className="modal-header ">
                                                <h1 className="modal-title fs-5 " id="exampleModalLabel">Torre del Reformador</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="text-center pb-4 ">
                                                <img className="img-fluid mx-auto" src="https://cdn.republica.gt/012022/1642024865902.jpg?cw=1200&ch=801" />
                                                <div className="testimonial-text bg-white p-4 mt-n5">
                                                    <p className="mt-5">Esta imponente estructura es un monumento icónico en la ciudad y se encuentra al final de la Avenida de la Reforma.3</p>
                                                    <a href='https://www.google.com/search?q=Direcci%C3%B3n%3A+JF7M%2B59R%2C+7A+Avenida%2C+Cdad.+de+Guatemala+01009&oq=Direcci%C3%B3n%3A+JF7M%2B59R%2C+7A+Avenida%2C+Cdad.+de+Guatemala+01009&aqs=chrome..69i57.878j0j4&sourceid=chrome&ie=UTF-8#' className="text-truncate">Dirección: JFGQ+7WJ Ciudad de, 10A Avenida, Cdad. de Guatemala 01005</a>
                                                    <hr />
                                                    <span>
                                                    
                                                    </span>
                                                    <hr />
                                                    
                                                </div>
                                            </div>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" > Cerrar </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}
