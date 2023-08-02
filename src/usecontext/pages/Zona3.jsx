import React from 'react'

export const Zona3 = () => {
    return (
        < >
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" >Zona 3</h6>
                        <h1>Lugares y Servicios de la Zona</h1>
                    </div>

                    <div className="row ">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-regular fa-futbol mx-auto mb-4"></i>
                                <h4 className="mb-2">Estadio Doroteo Guamuch Flores:</h4>

                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Informacion
                                </button>


                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog modal-xl">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Estadio Doroteo Guamuch Flores</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>

                                            <div className="text-center pb-4 ">
                                                <img className="img-fluid mx-auto" src="https://aprende.guatemala.com/wp-content/uploads/2022/02/Historia-del-cambio-de-nombre-del-estadio-Doroteo-Guamuch-Flores.jpg" />
                                                <div className="testimonial-text bg-white p-4 mt-n5">
                                                    <p className="mt-5">El estadio más grande de Guatemala, donde se llevan a cabo eventos deportivos y conciertos..
                                                    </p>
                                                    <a href='https://www.google.com/maps/search/Direcci%C3%B3n:+JFGQ%2B7WJ+Ciudad+de,+10A+Avenida,+Cdad.+de+Guatemala+01005/@14.6261076,-90.515634,16z?hl=es&entry=ttu' className="text-truncate">Dirección: JFGQ+7WJ Ciudad de, 10A Avenida, Cdad. de Guatemala 01005</a>
                                                    <hr />
                                                    <span>
                                                        Teléfono: 2412 7500
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
