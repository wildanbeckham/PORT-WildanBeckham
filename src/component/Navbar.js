import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top mx-5 py-3" id="navbar">
      <div className="container px-5">
        <a className="navbar-brand" href="#">
          Wildan
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <a className="nav-link" href="#">
              About Me
            </a>
            <a className="nav-link" href="#project">
              Project
            </a>
            <a className="nav-link" href="#skill">
              Skill
            </a>
          </div>
          <div className="text-center">
            <a className="btn btn-black rounded-pill p-2 px-3" href="https://drive.google.com/file/d/1vh6ajRCzs9oupCpPjVm3kThd1frTvswn/view?usp=sharing" target="_blank" role="button">
              Curriculum Vitae
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
