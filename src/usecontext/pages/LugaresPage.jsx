import React from 'react'
import { Link, NavLink } from "react-router-dom"


export const LugaresPage = () => {
    return (
        < >
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" >Zonas de Guatemala</h6>
                        <h1>Crea tu Destino Perfecto</h1>
                        <ul className="nav-item">
                            <Link to="/" className="navbar-brand">Inicio </Link>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src="./src/assets/img/package-1.jpg" alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i></small>
                                    </div>
                                    <div>
                                        <u className="h5 text-decoration-none">
                                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                                to='/lugares/zona1'>
                                                Zona 1
                                            </NavLink>
                                        </u>
                                    </div>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i></h6>
                                            <h5 className="m-0"></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src="./src/assets/img/package-2.jpg" alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i></small>
                                    </div>
                                    <div>
                                        <u className="h5 text-decoration-none">
                                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                                to='/lugares/zona2'>
                                                Zona 2
                                            </NavLink>
                                        </u>
                                    </div>
                                    <div className="border-top mt-4 pt-4">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src="./src/assets/img/package-3.jpg" alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i></small>
                                    </div>
                                    <div>
                                        <u className="h5 text-decoration-none">
                                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                                to='/lugares/zona3'>
                                                Zona 3
                                            </NavLink>
                                        </u>
                                    </div>
                                    <div className="border-top mt-4 pt-4">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src="./src/assets/img/package-4.jpg" alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i></small>
                                    </div>
                                    <div>
                                        <u className="h5 text-decoration-none">
                                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                                to='/lugares/zona4'>
                                                Zona 4
                                            </NavLink>
                                        </u>
                                    </div>
                                    <div className="border-top mt-4 pt-4">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src="./src/assets/img/package-5.jpg" alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i></small>
                                    </div>
                                    <div>
                                        <u className="h5 text-decoration-none">
                                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                                to='/lugares/zona5'>
                                                Zona 5
                                            </NavLink>
                                        </u>
                                    </div>
                                    <div className="border-top mt-4 pt-4">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src="./src/assets/img/package-12.jpg" alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i></small>
                                    </div>
                                    <div>
                                        <u className="h5 text-decoration-none">
                                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                                to='/lugares/zona12'>
                                                Zona 12
                                            </NavLink>
                                        </u>
                                    </div>
                                    <div className="border-top mt-4 pt-4">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src="./src/assets/img/package-16.jpg" alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i></small>
                                    </div>
                                    <div>
                                        <u className="h5 text-decoration-none">
                                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                                to='/lugares/zona16'>
                                                Zona 16
                                            </NavLink>
                                        </u>
                                    </div>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i></h6>
                                            <h5 className="m-0"></h5>
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
