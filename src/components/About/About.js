import React from "react";
import "./About.css";

// Assets
import aboutImg from "../../assets/sagepath about home section.jpg";
import iconLab from "../../assets/lab-icon_aboutsection.png";
import iconNabl from "../../assets/certi-aboutsection.png";

const About = () => {
  return (
    <section className="about-section-main" id="about">
      <div className="container">
        <div className="row align-items-center gx-lg-5">
          {/* Left Column: Image with Experience Badge */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="about-image-wrapper">
              <img
                src={aboutImg}
                alt="SagePath Labs Technician"
                className="about-main-img img-fluid"
              />
              <div className="experience-badge">
                <span className="years">4+</span>
                <span className="text">Years of<br />Experience</span>
              </div>
              <div className="decorative-shape"></div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="col-lg-6">
            <div className="about-content">
              <span className="section-subtitle">About Us</span>
              <h2 className="section-title">
                Committed to Excellence in <span className="highlight">Diagnostic Pathology</span>
              </h2>

              <p className="section-desc">
                With a decade of dedicated service, SagePath Labs stands as a beacon of accuracy and trust.
                Our mission is simple: patient care first. We combine cutting-edge technology with
                human expertise to deliver results you can rely on.
              </p>

              <div className="features-grid">
                <div className="feature-card">
                  <div className="icon-box">
                    <img src={iconLab} alt="Lab Technician" />
                  </div>
                  <div className="feature-info">
                    <h4>Expert Technicians</h4>
                    <p>Highly trained professionals ensuring precision in every test.</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <img src={iconNabl} alt="NABL Certified" />
                  </div>
                  <div className="feature-info">
                    <h4>NABL Accredited</h4>
                    <p>ISO 15189 compliant facility meeting global standards.</p>
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                <a
                  href="https://wa.me/917995862920?text=Hello%20SagePath%20Labs%21%20I%20want%20to%20place%20an%20order."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-primary-custom"
                >
                  Order Test
                </a>
                <a href="tel:09059902920" className="btn-secondary-custom">
                  <span className="phone-icon">📞</span> 090599 02920
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
