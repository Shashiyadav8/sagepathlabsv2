import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/Header_sagepath.jpg";
import { FaMicroscope, FaCheckCircle, FaUserMd, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-premium">
      <div className="hero-bg-shape shape-1"></div>
      <div className="hero-bg-shape shape-2"></div>

      <div className="container hero-container">
        <div className="row align-items-center h-100">

          {/* Left Content */}
          <div className="col-lg-6 col-md-12 hero-content-col">
            <div className="hero-badge-pill fade-in-up">
              <FaCheckCircle className="badge-icon" /> NABL Accredited Lab
            </div>

            <h1 className="hero-title fade-in-up delay-1">
              Precision Diagnostics for <br />
              <span className="text-gradient">Better Health</span>
            </h1>

            <p className="hero-subtitle fade-in-up delay-2">
              Experience the gold standard in pathology testing with SagePath Labs.
              Accurate results delivered with speed and care by our expert team.
            </p>

            <div className="hero-actions fade-in-up delay-3">
              <a
                href="https://wa.me/917995862920?text=Hello%20SagePath%20Labs!%20I%20want%20to%20book%20a%20test."
                target="_blank"
                rel="noreferrer noopener"
                className="hero-btn-primary"
              >
                Book a Test <FaArrowRight className="btn-icon" />
              </a>
              <Link to="/Diagnostics" className="hero-btn-secondary">
                View All Services
              </Link>
            </div>

            <div className="hero-trust-row fade-in-up delay-4">
              <div className="trust-item">
                <span className="trust-number">4+</span>
                <span className="trust-label">Years of<br />Experience</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-number">50k+</span>
                <span className="trust-label">Happy<br />Patients</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-number">100%</span>
                <span className="trust-label">Accurate<br />Reports</span>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="col-lg-6 col-md-12 hero-image-col">
            <div className="hero-image-wrapper fade-in-right">
              <img src={heroImage} alt="SagePath Advanced Lab" className="hero-main-img" />

              {/* Floating Cards */}
              <div className="float-card card-1 floating-anim">
                <div className="icon-circle"><FaMicroscope /></div>
                <div>
                  <span className="float-title">Advanced Tech</span>
                  <span className="float-desc">Latest Equipment</span>
                </div>
              </div>

              <div className="float-card card-2 floating-anim-delayed">
                <div className="icon-circle secondary"><FaUserMd /></div>
                <div>
                  <span className="float-title">Expert Team</span>
                  <span className="float-desc">Qualified Doctors</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
