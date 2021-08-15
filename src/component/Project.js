import React from 'react';

function Project() {
  return (
    <section className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="nav nav-pills mb-3 justify-content-center tabs" id="project" role="tablist">
              <li className="col-lg-2 bg-dark shadow-lg mx-3" role="presentation">
                <button className="btn btn-transparent" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="false">
                  <div className="text-white pe-5 ps-4 py-5">
                    <h5 className="pt-5 mt-5">
                      <i className="bi bi-front "></i> Front End
                    </h5>
                    <h6 className="card-subtitle pt-2 text-muted">5 Project</h6>
                  </div>
                </button>
              </li>
              <li className="col-lg-2 bg-dark shadow-lg mx-3" role="presentation">
                <button className="btn btn-transparent" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                  <div className="text-white pe-5 ps-4 py-5">
                    <h5 className="pt-5 mt-5 pe-2">
                      <i className="bi bi-back "></i> Back End
                    </h5>
                    <h6 className="card-subtitle pt-2 text-muted">1 Project</h6>
                  </div>
                </button>
              </li>
              <li className="col-lg-2 bg-dark shadow-lg mx-3" role="presentation">
                <button className="btn btn-transparent" id="pills-3-tab" data-bs-toggle="pill" data-bs-target="#pills-3" role="tab" aria-controls="pills-3" aria-selected="false">
                  <div className="text-white pe-5 ps-4 me-2 py-5">
                    <h5 className="pt-5 mt-5 pe-4">
                      <i className="bi bi-back "></i> Game
                    </h5>
                    <h6 className="card-subtitle pt-2 text-muted">1 Project</h6>
                  </div>
                </button>
              </li>
            </ul>
            <div className="container text-project pt-5">
              <h5 className="text-white px-5">
                All Creative Work,
                <br /> Selected Project.
              </h5>
              <a href="#" id="text-orange">
                <p className="px-5">
                  Go To My Github <i className="ms-3 py-auto bi bi-arrow-right"></i>
                </p>
              </a>
            </div>
            <div className="row tab-content" id="pills-tabContent">
              <div className="tab-pane fade text-white bg-dark" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="container">
                  <div className="row">
                    <div className="col-lg py-5 left px-5">
                      <div className="row pb-5">
                        <div className="col-lg">
                          <a href="https://github.com/wildanbeckham/landing-page" target="_blank">
                            <img src="assets/img/project/front-landig.jpg" className="img-fluid img-project" alt="profile" />
                          </a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg">
                          <a href="https://github.com/wildanbeckham/MyPortofolio" target="_blank">
                            <img src="assets/img/project/front-port3.jpg" className="img-fluid img-project" alt="profile" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg px-5 right">
                      <div className="row pb-5">
                        <div className="col-lg">
                          <a href="https://github.com/wildanbeckham/portfolio1" target="_blank">
                            <img src="assets/img/project/front-port1.jpg" className="img-fluid img-project" alt="profile" />
                          </a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg">
                          <a href="https://github.com/wildanbeckham/portfolio-WBS" target="_blank">
                            <img src="assets/img/project/front-port2.jpg" className="img-fluid img-project" alt="profile" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade text-white bg-dark" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 py-5 left px-5">
                      <a href="https://github.com/wildanbeckham/perpus-BSI" target="_blank">
                        <img src="assets/img/project/back-end.jpg" className="img-fluid img-project" alt="profile" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade text-white bg-dark" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 py-5 left px-5">
                      <a href="https://github.com/wildanbeckham/game-pukul" target="_blank">
                        <img src="assets/img/project/game.jpg" className="img-fluid img-project" alt="profile" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
