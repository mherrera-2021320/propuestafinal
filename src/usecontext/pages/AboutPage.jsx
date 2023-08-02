
import React from 'react';

export const AboutPage = () => {
  return (
    < >
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
                <p> El propósito de este proyecto esta centrado enpersonas de todo el mundo, incluso en las de Guatemala, ya que hay muchas personas quienes no conocen los lugares mas concurridos y visitados, por lo tanto esto ayuda a que la gente tenga lugares donde ir para divertirse y explorar tan hermoso Pais. </p>
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
                    <a className="text-primary px-3" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-primary px-3" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-primary pl-3" href="">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary " >Equipo 5</h6>
            <h1>Desarrollado por:</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
              <div className="team-item bg-white mb-4">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="./src/assets/img/team-1.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-primary btn-square" href="https://www.instagram.com/muystein/"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-primary btn-square" href="https://www.linkedin.com/in/melvin-herrera-007b59282/"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h5 className="text-truncate">Melvin Herrera</h5>
                  <p className="m-0">Front y Band End</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
              <div className="team-item bg-white mb-4">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="./src/assets/img/team-2.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-primary btn-square" href="https://www.instagram.com/sserg_03/"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-primary btn-square" href="https://www.linkedin.com/in/sergio-undefined-192b05282/"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h5 className="text-truncate">Sergio Suruy</h5>
                  <p className="m-0">Investigacion y Back End</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
              <div className="team-item bg-white mb-4">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="./src/assets/img/team-4.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-primary btn-square" href="https://www.instagram.com/everyonehates_andres/"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h5 className="text-truncate">Andres Coronado</h5>
                  <p className="m-0">Invesigacion</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
              <div className="team-item bg-white mb-4">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="./src/assets/img/team-3.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-outline-primary btn-square" href="https://www.instagram.com/ostyn_993/"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-primary btn-square" href="https://www.linkedin.com/in/ostynguerra"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h5 className="text-truncate">Ostyn Guerra</h5>
                  <p className="m-0">Investigacion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
