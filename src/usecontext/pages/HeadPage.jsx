import { Link, NavLink } from "react-router-dom"


export const HeadPage = () => {
    return (
        < >
            <div className="container-fluid bg-light pt-3 d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <p><i className="fa fa-envelope mr-2"></i>recorretuciudad@gmail.com</p>
                                <p className="text-body px-3">|</p>
                                <p><i className="fa fa-phone-alt mr-2"></i>+502 2598 6845</p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-primary px-3" href="https://es-la.facebook.com/">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="text-primary px-3" href="https://twitter.com/?lang=es">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="text-primary px-3" href="https://www.linkedin.com/feed/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="text-primary px-3" href="https://www.instagram.com/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="text-primary pl-3" href="https://www.youtube.com/">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand"> </a>
                        <h1 className="text-primary"><span className="text-black">Explorando M</span>i Ciudad</h1>
                    </div>
                </nav>
            </div>


            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="navbar-brand">Inicio </Link>
                            </li>

                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Lugares</a> */}
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to='/lugares'>
                                    Zonas
                                </NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to='/populares'>
                                    Lugares Populares
                                </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to='/about'>
                                    Acerca de . . .
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            </div>
            

        </>
    )
}
