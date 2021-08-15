import React from 'react';

function About() {
  return (
    <section className="text-white" id="about">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="display-5 text-center">Why Me ?</h3>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg py-3 text-center">
            <div className="card-body">
              <img src="assets/img/banner/Untitled design (3).png" className="w-50" alt="profile" />
            </div>
            <h5 className="card-title fw-bold pb-2">Comunication</h5>
            <p className="card-text">I can work within a team, collaborate well with developers because I’m frontend-end myself, and I love feedbacks.</p>
          </div>
          <div className="col-lg py-3 text-center">
            <div className="card-body">
              <img src="assets/img/banner/Untitled design (5).png" className="w-50" alt="profile" />
            </div>
            <h5 className="card-title fw-bold pb-2">Team Work</h5>
            <p className="card-text">I can work within a team, collaborate well with developers because I’m frontend-end myself, and I love feedbacks.</p>
          </div>
          <div className="col-lg py-3 text-center">
            <div className="card-body">
              <img src="assets/img/banner/Untitled design (6).png" className="w-50" alt="profile" />
            </div>
            <h5 className="card-title fw-bold pb-2">Colaborative</h5>
            <p className="card-text">I can work within a team, collaborate well with developers because I’m frontend-end myself, and I love feedbacks.</p>
          </div>
          <div className="col-lg py-3 text-center">
            <div className="card-body">
              <img src="assets/img/banner/Untitled design (7).png" className="w-50" alt="profile" />
            </div>
            <h5 className="card-title fw-bold pb-2">Time</h5>
            <p className="card-text">I can work within a team, collaborate well with developers because I’m frontend-end myself, and I love feedbacks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
