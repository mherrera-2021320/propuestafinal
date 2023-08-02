import React from 'react'

export const MedioPage = () => {
    return (
        < >

            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./src/assets/img/img1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./src/assets/img/img2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./src/assets/img/img3.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>






            <div className="container-fluid ">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" >Encuentra tu Destino</h6>
                        <h1>Explora la Zona de Guate</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="./src/assets/img/destination-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="./src/assets/img/destination-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="./src/assets/img/destination-3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="./src/assets/img/destination-4.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="./src/assets/img/destination-5.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="./src/assets/img/destination-6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container-fluid py-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6" >
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" src="./src/assets/img/about.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                                <h6 className="text-primary text-uppercase" >Porque lo Hacemos ?</h6>
                                <p> El propósito de este proyecto esta centrado enpersonas de todo el mundo, incluso en las de Guatemala, ya que hay muchas personas quienes no conocen los lugares mas concurridos y visitados, por lo tanto esto ayuda a que la gente tenga lugares donde ir para divertirse y explorar tan hermosa Ciudad. </p>
                                <div className="row mb-4">
                                    <div className="col-6">
                                        <img className="img-fluid" src="./src/assets/img/about-1.jpg" alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img className="img-fluid" src="./src/assets/img/about-2.jpg" alt="" />
                                    </div>
                                </div>
                                <hr />
                                <h1 className="mb-3">Apoya este Proyecto en:</h1>
                                <hr />
                                <div className="col-lg-6 text-center text-lg-right">
                                    <div className="d-inline-flex align-items-center">
                                        <a className="text-primary px-3" href="">
                                            <i className="fab fa-patreon"></i>
                                            Patreon
                                        </a>
                                        Comparte en:
                                        
                                        <a className="text-primary px-3" href="https://es-la.facebook.com/">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a className="text-primary px-3" href="https://twitter.com/?lang=es">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a className="text-primary px-3" href="https://www.instagram.com/">
                                            <i className="fab fa-instagram"></i>
                                        </a>
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
