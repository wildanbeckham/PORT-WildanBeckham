import React from 'react';

function Skill() {
  return (
    <section id="skill">
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h1 className="card-subtitle pb-4 text-muted text-center">Tools & skill</h1>
          </div>
        </div>
        <div className="row py-4 justify-content-center">
          <div className="col text-center">
            <img src="assets/img/skill/css.png" className="img-fluid img-project-skill" alt="profile" />
          </div>
          <div className="col text-center">
            <img src="assets/img/skill/html.png" className="img-fluid img-project-skill" alt="profile" />
          </div>
          <div className="col text-center">
            <img src="assets/img/skill/js.png" className="img-fluid img-project-skill" alt="profile" />
          </div>
          <div className="col text-center">
            <img src="assets/img/skill/boot.png" className="img-fluid img-project-skill" alt="profile" />
          </div>
          <div className="col text-center">
            <img src="assets/img/skill/react.png" className="img-fluid img-project-skill" alt="profile" />
          </div>
          <div className="col text-center">
            <img src="assets/img/skill/ci.png" className="img-fluid img-project-skill" alt="profile" />
          </div>
          <div className="col text-center">
            <img src="assets/img/skill/word.png" className="img-fluid img-project-skill" alt="profile" />
          </div>
        </div>
        <div className="row m-5 p-5 bg-dark">
          <div className="col-lg py-2">
            <p className="text-white h4 pt-2 fw-bolder text-center">Interested working with me?</p>
          </div>
          <div className="col-lg text-center py-2">
            <a href="#" className="btn fw-bolder px-3 mx-2 but-link" role="button">
              Linkeind
            </a>
            <a href="#" className="btn fw-bolder px-3 but-cv" role="button">
              Curriculum Vitae
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
