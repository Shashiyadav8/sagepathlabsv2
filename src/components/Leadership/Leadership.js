import React from "react";
import "./Leadership.css";
import chairmanImg from "../../assets/doctor.webp";
import directorImg from "../../assets/doctor.webp";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaLinkedinIn, FaQuoteLeft } from "react-icons/fa";

const leaders = [
  {
    name: "J. Shashi Preetham",
    title: "Managing Director",
    image: chairmanImg,
    bio: "Driving the vision of SagePath Labs towards becoming a global leader in diagnostics. With a focus on innovation and patient care, leading the team to new heights.",
    quote: "Quality is not an act, it is a habit.",
    social: "#"
  },
  {
    name: "B. Venkateswara Rao",
    title: "Director",
    image: directorImg,
    bio: "Ensuring operational excellence and strategic growth. Committed to bringing affordable and accurate healthcare to every doorstep.",
    quote: "Integrity is the essence of everything successful.",
    social: "#"
  },
  {
    name: "Y. Shankar Kumar",
    title: "Director",
    image: directorImg,
    bio: "Spearheading technological advancements and infrastructure development. dedicated to maintaining the highest standards of safety and efficiency.",
    quote: "Innovation distinguishes between a leader and a follower.",
    social: "#"
  }
];

const Leadership = () => {
  return (
    <>
      <Header />
      <section className="leadership-section">
        <div className="leadership-container">

          <div className="leadership-header">
            <span className="leadership-badge">Governance</span>
            <h1 className="leadership-title">Our Leadership</h1>
            <p className="leadership-subtitle">
              Guided by a team of visionaries dedicated to excellence, integrity, and the future of healthcare.
            </p>
          </div>

          <div className="leadership-grid">
            {leaders.map((leader, index) => (
              <div className="leader-card" key={index}>
                <div className="leader-card-top">
                  <div className="leader-img-wrapper">
                    <img src={leader.image} alt={leader.name} className="leader-img" />
                  </div>
                  <div className="leader-social-link">
                    <a href={leader.social} aria-label={`${leader.name} LinkedIn`}>
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                <div className="leader-card-content">
                  <h3 className="leader-name">{leader.name}</h3>
                  <span className="leader-role">{leader.title}</span>
                  <div className="leader-divider"></div>
                  <p className="leader-bio">{leader.bio}</p>

                  <div className="leader-quote-box">
                    <FaQuoteLeft className="quote-icon" />
                    <p className="leader-quote">{leader.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default Leadership;