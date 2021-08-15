import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark footer-bg" id="footer">
      <div className="container text-white">
        <div className="row">
          <div className="col-lg">
            <h2 className="fw-bolder">Get in touch</h2>
            <p className="text-secondary">
              Created by <b className="text-white">Wildan Beckham Surtanik</b>
            </p>
            <a className="btn-orange" href="https://www.instagram.com/wldnbs13/" target="_blank">
              <i className="pe-4 h4 bi bi-instagram"></i>
            </a>
            <a className="btn-orange" href="https://www.linkedin.com/in/wildan-beckham-surtanik-2b08491b2/" target="_blank">
              <i className="px-4 h4 bi bi-linkedin"></i>
            </a>
            <a className="btn-orange" href="https://github.com/wildanbeckham" target="_blank">
              <i className="px-4 h4 bi bi-github"></i>
            </a>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
