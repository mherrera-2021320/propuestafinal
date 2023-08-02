import React from 'react'

export const Zona1 = () => {
  return (
    < >
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" >Zona 1</h6>
            <h1>Lugares y Servicios de la Zona</h1>
          </div>

          <div className="row ">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-item bg-white text-center mb-2 py-5 px-4">
                <i className="fa fa-2x fa-route mx-auto mb-4"></i>
                <h4 className="mb-2">Plaza de la constitución:</h4>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Informacion
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog modal-xl">
                    <div className="modal-content ">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Plaza de la Constitucion</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>

                      <div className="text-center pb-4 ">
                        <img className="img-fluid mx-auto" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/58/1c/30/citta-del-guatemala-guatemala.jpg?w=1200&h=-1&s=1" />
                        <div className="testimonial-text bg-white p-4 mt-n5">
                          <p className="mt-5">La plaza de la Constitución, también comúnmente llamada Parque Central, es la mayor plaza de Guatemala,
                            rodeada al norte por el Palacio Nacional, antigua sede del Gobierno.
                          </p>
                          <a href='https://www.google.com/search?q=%0D%0ASexta+avenida+de+la+zona+1%2C+en+la+Nueva+Guatemala+de+la+Asunci%C3%B3n.&sca_esv=552620815&sxsrf=AB5stBh76CQUWZ0eWgofvtmfvYuvAm-s8A%3A1690855400571&ei=6GfIZMG9Isj_wbkPveS_4AE&ved=0ahUKEwjB0ZGcr7qAAxXIfzABHT3yDxwQ4dUDCA8&uact=5&oq=%0D%0ASexta+avenida+de+la+zona+1%2C+en+la+Nueva+Guatemala+de+la+Asunci%C3%B3n.&gs_lp=Egxnd3Mtd2l6LXNlcnAiQwpTZXh0YSBhdmVuaWRhIGRlIGxhIHpvbmEgMSwgZW4gbGEgTnVldmEgR3VhdGVtYWxhIGRlIGxhIEFzdW5jacOzbi4yBxAjGOoCGCcyBxAjGOoCGCcyBxAjGOoCGCcyBxAjGOoCGCcyBxAjGOoCGCcyBxAjGOoCGCcyBxAjGOoCGCcyBxAjGOoCGCcyBxAjGOoCGCcyBxAjGOoCGCcyEBAAGIoFGOoCGLQCGEPYAQEyEBAAGIoFGOoCGLQCGEPYAQEyFhAAGAMYjwEY6gIYtAIYjAMY5QLYAQIyFhAuGAMYjwEY6gIYtAIYjAMY5QLYAQIyFhAAGAMYjwEY6gIYtAIYjAMY5QLYAQIyFhAAGAMYjwEY6gIYtAIYjAMY5QLYAQIyFhAAGAMYjwEY6gIYtAIYjAMY5QLYAQJIuC9Qyh9Y4S1wAngBkAEAmAEAoAEAqgEAuAEDyAEA-AEB-AECqAIR4gMEGAAgQYgGAboGBggBEAEYAboGBggCEAEYCw&sclient=gws-wiz-serp#' className="text-truncate">Dirección</a>
                          <hr />
                          <span>
                            Teléfono: 4270 5542
                          </span>
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
