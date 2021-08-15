import React from 'react';

function Main() {
  return (
    <main className="bg-dark" id="jumbotron">
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-7 text-white my-auto py-5 ps-5" id="bg-row">
            <img src="assets/img/banner/pg1.png" className="img-fluid " id="zero" alt="profile" />
            <h3 className="pt-3 fw-bolder text-warning">Hay I'M Wildan B Surtanik</h3>
            <h1 className="display-3 fw-bold">Front-End Developer | Mahasiswa</h1>
            <p>
              Perkenalkan nama saya Wildan Beckham Surtanik, saya merupakan mahasiswa dari Universitas Bina Sarana Informatika BSD. Saya memiliki beberapa pengalaman pada bidang Front End Developer, seperti mengikuti kelas online Full-Stack
              Designer, Workshop pembuatan Portofolio menggunakan ReactJS, volunteer dibagian Web Development dan pernah mengikuti Re-Cloud Challenges Indonesia 2021, dan pernah mengikuti magang di Paramound Land Gading Serpong.
            </p>
            <a className="btn btn-black px-5" href="https://drive.google.com/file/d/1vh6ajRCzs9oupCpPjVm3kThd1frTvswn/view?usp=sharing" target="_blank" role="button">
              GET CV <i className="bi bi-arrow-right ps-2"></i>
            </a>
            <a className="btn btn-orange" href="https://www.instagram.com/wldnbs13/" target="_blank">
              <i className="h3 px-2 bi bi-instagram"></i>
            </a>
            <a className="btn btn-orange" href="https://www.linkedin.com/in/wildan-beckham-surtanik-2b08491b2/" target="_blank">
              <i className="h3 px-2 bi bi-linkedin"></i>
            </a>
            <a className="btn btn-orange" href="https://github.com/wildanbeckham" target="_blank">
              <i className="h3 px-2 bi bi-github"></i>
            </a>
          </div>
          <div className="col-lg p-0 text-end text-center" id="parent">
            <img src="assets/img/banner/1.png" className="img-fluid" id="profile" alt="profile" />
            <img src="assets/img/banner/2.png" className="img-fluid " id="profile2" alt="profile" />
            <img src="assets/img/banner/pg1.png" className="img-fluid " id="one" alt="profile" />
            <img src="assets/img/banner/pg2.png" className="img-fluid " id="two" alt="profile" />
            <img src="assets/img/banner/pg3.png" className="img-fluid " id="three" alt="profile" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
