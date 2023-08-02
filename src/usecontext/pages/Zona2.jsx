import React from 'react'

export const Zona2 = () => {
    return (
        < >
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" >Zona 2</h6>
                        <h1>Lugares y Servicios de la Zona</h1>
                    </div>

                    <div className="row ">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-route mx-auto mb-4"></i>
                                <h4 className="mb-2">Parque Ecológico de Ciudad Nueva:</h4>

                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Informacion
                                </button>


                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog modal-xl">
                                        <div className="modal-content ">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Parque Ecológico de Ciudad Nueva</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>

                                            <div className="text-center pb-4 ">
                                                <img className="img-fluid mx-auto" src="https://www.guatemala.com/fotos/2021/03/parque-Ciudad-Nueva-885x500.jpg" />
                                                <div className="testimonial-text bg-white p-4 mt-n5">
                                                    <p className="mt-5">Excelente lugar para visitar dentro de la ciudad si te gusta la aventura caminando, con área de juegos para niños, canopy corto y kiosko
                                                    </p>
                                                    <a href='https://www.google.com/maps?sca_esv=552649741&bih=776&biw=1517&hl=es&output=search&q=Parque+Ecol%C3%B3gico+de+Ciudad+Nueva&source=lnms&entry=mc&sa=X&ved=2ahUKEwjxus-0tbqAAxVoRDABHaEbDEsQ0pQJegQIDRAB' className="text-truncate">Dirección: 11 Av A 17-66, Cdad. de Guatemala</a>
                                                    <hr />
                                                    <span>
                                                        Teléfono: 2288 7741
                                                    </span>
                                                    <hr />
                                                    <a href='https://www.facebook.com/parqueecologico.ciudadnueva/?locale=es_LA' className="text-truncate">Facebook</a>
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
