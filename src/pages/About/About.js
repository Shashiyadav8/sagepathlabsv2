import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import techDoctorImg from "../../assets/about-sectin-mainpage.png";
import "./About.css";
import { FaUserMd, FaFlask, FaHistory, FaGlobeAsia } from "react-icons/fa";

const About = () => (
  <>
    <Header />
    <div className="about-page-wrapper">

      {/* 1. HERO - SLIM & ELEGANT */}
      <section className="ap-hero">
        <div className="container">
          <div className="ap-hero-content">
            <span className="ap-badge">Our Story</span>
            <h1 className="ap-title">
              A Decade of Excellence in <br /> Diagnostic Care
            </h1>
            <p className="ap-subtitle">
              From a humble beginning to becoming Hyderabad's most trusted name in pathology.
              This is the journey of SagePath Labs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION - Split Layout */}
      <section className="ap-mission-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="ap-image-stack">
                <img src={techDoctorImg} alt="Vision" className="ap-img-main" />
                <div className="ap-img-card">
                  <FaUserMd className="ap-icon-float" />
                  <span>Patient First Approach</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="ap-section-title">Driven by a Purpose</h2>
              <div className="ap-mission-block">
                <h3>Our Vision</h3>
                <p>To lead the future of diagnostics through innovation, integrity, and accessibility. We envision a world where precise health insights are available to everyone.</p>
              </div>
              <div className="ap-mission-block">
                <h3>Our Mission</h3>
                <p>To provide actionable diagnostic information that empowers patients and doctors. We don't just deliver results; we deliver confidence and care in every report.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. JOURNEY TIMELINE - The "10 Years" Story */}
      <section className="ap-journey-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="ap-section-title text-white">Our Journey</h2>
            <p className="ap-section-sub text-white-50">Celebrating milestones that defined our growth.</p>
          </div>

          <div className="ap-timeline">
            {/* Step 1 */}
            <div className="ap-timeline-item left">
              <div className="ap-timeline-content">
                <span className="ap-year">2014</span>
                <h4>The Inception</h4>
                <p>SagePath Labs was founded with a single microscope and a vision to serve the local community with honest testing.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="ap-timeline-item right">
              <div className="ap-timeline-content">
                <span className="ap-year">2017</span>
                <h4>Tech Integration</h4>
                <p>Adopted fully automated analysers and LIMS, reducing turnaround time by 50% and increasing accuracy.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="ap-timeline-item left">
              <div className="ap-timeline-content">
                <span className="ap-year">2020</span>
                <h4>COVID Response</h4>
                <p>Stood at the forefront of the pandemic response, conducting thousands of RT-PCR tests with 24/7 operations.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="ap-timeline-item right">
              <div className="ap-timeline-content">
                <span className="ap-year">2024</span>
                <h4>Network Expansion</h4>
                <p>Expanded to 50+ collection centers and achieved full NABL accreditation for all major departments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS - Trust Markers */}
      <section className="ap-stats-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="ap-stat-card">
                <FaHistory className="ap-stat-icon" />
                <h3>4+</h3>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="ap-stat-card">
                <FaUserMd className="ap-stat-icon" />
                <h3>50+</h3>
                <p>Specialist Doctors</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="ap-stat-card">
                <FaFlask className="ap-stat-icon" />
                <h3>1M+</h3>
                <p>Tests Conducted</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="ap-stat-card">
                <FaGlobeAsia className="ap-stat-icon" />
                <h3>20+</h3>
                <p>Cities Covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="ap-cta-section">
        <div className="container">
          <div className="ap-cta-box">
            <h2>Ready to experience world-class care?</h2>
            <p>Book a test today and take the first step towards better health.</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="https://wa.me/917995862920" className="ap-btn-white">Book via WhatsApp</a>
              <a href="/contact" className="ap-btn-outline-white">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

    </div>
    <Footer />
  </>
);

export default About;
