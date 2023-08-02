import React from 'react'

export const Zona12 = () => {
    return (
        < >
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" >Zona 12</h6>
                        <h1>Lugares y Servicios de la Zona</h1>
                    </div>

                    <div className="row ">
                        <div className="col-lg-4 col-md-6 mb- 4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-route mx-auto mb-4"></i>
                                <h4 className="mb-2">Iglesia de Nuestra Señora del Carmen:</h4>

                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Informacion
                                </button>


                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog modal-xl" >
                                        <div className="modal-content ">
                                            <div className="modal-header ">
                                                <h1 className="modal-title fs-5 " id="exampleModalLabel">Iglesia de Nuestra Señora del Carmen </h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="text-center pb-4 ">
                                                <img className="img-fluid mx-auto" src="https://centrohistorico.gt/wp-content/uploads/2018/09/Del-Carmen-05.jpg" />
                                                <div className="testimonial-text bg-white p-4 mt-n5">
                                                    <p className="mt-5">
                                                        Esta iglesia católica es un lugar de interés histórico en la Zona 12. Construida en estilo neoclásico, data del siglo XIX y presenta una hermosa arquitectura y detalles artísticos.

                                                    </p>
                                                    <a href='https://www.google.com/maps/search/26+Avenida+3,+Cdad.+de+Guatemala/@14.6026193,-90.5252222,14z?hl=es&entry=ttu' className="text-truncate">Dirección 
                                                    </a>
                                                    <hr />
                                                    <span>
                                                        Telefono:
                                                        42344234
                                                        
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
