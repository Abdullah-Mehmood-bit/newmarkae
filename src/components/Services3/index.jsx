import React from "react";
import Link from "next/link";

const Services3 = () => {
  return (
    <section className="services section-padding sub-bg">
      <div className="container">
        <div className="sec-head custom-font tr-head">
          <h6>Best Features</h6>
          <h3>Services</h3>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop">
              <span className="icon pe-7s-gleam"></span>
              <h6>DIGITAL MARKETING</h6>
              <p>
              We help you to build your online presence and engage with your audience – in style.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <span className="icon pe-7s-phone"></span>
              <h6>WEB DESIGN &amp; DEVELOPMENT</h6>
              <p>
              Build your portfolio, share your stories and show the world who you are — with a professional website.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <span className="icon pe-7s-magic-wand"></span>
              <h6>GRAPHIC DESIGN</h6>
              <p>
              In a world where everyone is trying to get your attention we will get you noticed. We design to be clicked. To be seen. And to persuade.
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Services3;
