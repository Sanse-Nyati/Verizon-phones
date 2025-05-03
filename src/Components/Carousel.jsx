import React from 'react';


const Carousel = () => {
  return (
    <>

      {/* Carousel Section */}
      <section className="row mt-5 pt-4">
        <div className="col-sm-12">
          <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="images/maxresdefault.jpg"
                  alt=""
                  height="600px"
                  className="d-block w-100"
                />
             
              </div>

              <div className="carousel-item">
                <img
                  src="images/ChatGPT .png"
                  height="600px"
                  alt=""
                  className="d-block w-100"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="images/hq.jpg"
                  alt=""
                  height="600px"
                  className="d-block w-100"
                />
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#mycarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>

            <a
              className="carousel-control-next"
              href="#mycarousel"
              role="button"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>

            <ol className="carousel-indicators">
              <li data-bs-target="#mycarousel" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
