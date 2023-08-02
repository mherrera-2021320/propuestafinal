import React from 'react'

export const Zona5 = () => {
    return (
        < >
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" >Zona 5</h6>
                        <h1>Lugares y Servicios de la Zona</h1>
                    </div>

                    <div className="row ">
                        <div className="col-lg-4 col-md-6 mb- 4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-route mx-auto mb-4"></i>
                                <h4 className="mb-2">Parque ecologico de la asunción:</h4>

                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Informacion
                                </button>


                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog modal-xl" >
                                        <div className="modal-content ">
                                            <div className="modal-header ">
                                                <h1 className="modal-title fs-5 " id="exampleModalLabel">Parque ecologico de la asunción:</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="text-center pb-4 ">
                                                <img className="img-fluid mx-auto" src="https://www.guatemala.com/fotos/2018/10/POSIBLE-ASUNCION-885x500.jpg" />
                                                <div className="testimonial-text bg-white p-4 mt-n5">
                                                    <p className="mt-5">Ubicado al final de la diagonal 14 bajo el puente La Asunción zona 5,
                                                        el Parque Ecológico La Asunción es un ejemplo de recuperación, reforestación, protección y conservación de barrancos.
                                                        Dirección: Cdad. de Guatemala</p>
                                                    <a href='https://www.google.com/maps/place/Parque+Ecol%C3%B3gico+La+Asunci%C3%B3n/@14.6370087,-90.4966952,17z/data=!3m1!4b1!4m6!3m5!1s0x8589a26688a40e7f:0xc253e21f1c827aa9!8m2!3d14.6370087!4d-90.4945065!16s%2Fg%2F11b_007qm1?hl=es&entry=ttu' className="text-truncate">Dirección</a>
                                                    <hr />
                                                    <span>
                                                        Numero: 48932249
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
