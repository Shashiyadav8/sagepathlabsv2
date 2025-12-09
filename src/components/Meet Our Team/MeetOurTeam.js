import React from "react";
import "./MeetOurTeam.css";
import member1 from "../../assets/Dr Prathusha.jpeg";
import member2 from "../../assets/Dr Bharath.jpeg";
import member3 from "../../assets/doctor.webp";
import member4 from "../../assets/doctor.webp";
import member5 from "../../assets/doctor.webp";
import member6 from "../../assets/Dr Swetha.jpeg";
import member7 from "../../assets/Dr Ritu Raj.jpeg";
import member8 from "../../assets/doctor.webp";
import member9 from "../../assets/Dr.Lavanya.jpeg";
import { FaLinkedinIn } from "react-icons/fa";

const team = [
  {
    name: "Dr. Prathusha",
    role: "Director - Lab Operations",
    image: member1,
  },
  {
    name: "Dr. Bharath",
    role: "HOD-Pathology",
    image: member2,
  },
  {
    name: "Dr. Meenashi",
    role: "Microbiologist",
    image: member3,
  },
  {
    name: "Dr. Srilatha",
    role: "Pathologist",
    image: member4,
  },
  {
    name: "Dr. Vivek",
    role: "MD Pathologist",
    image: member5,
  },
  {
    name: "Dr. Swetha",
    role: "HOD-Pathology",
    image: member6,
  },
  {
    name: "Dr. Ruthuraju",
    role: "Microbiologist",
    image: member7,
  },
  {
    name: "Dr. Gandhi Priyanka",
    role: "Pathologist",
    image: member8,
  },
  {
    name: "Dr. Lavanya",
    role: "MD Biochemistry",
    image: member9,
  },
];

const MeetOurTeam = () => (
  <section className="meet-team-section py-5" id="team">
    <div className="container">
      <div className="text-center mb-5">
        <span className="team-badge">Our Specialists</span>
        <h2 className="team-heading">Meet Our <span className="highlight">Medical Board</span></h2>
        <p className="team-sub">
          Leading experts dedicated to precision and patient care.
        </p>
      </div>

      <div className="row justify-content-center g-4">
        {team.map((member, idx) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={idx}>
            <div className="team-card-pro">
              <div className="team-img-frame">
                <img src={member.image} alt={member.name} className="team-img-pro" />
                <div className="team-social-overlay">
                  <a href="#link" className="social-link" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h4 className="team-name-pro">{member.name}</h4>
                <div className="team-divider"></div>
                <span className="team-role-pro">{member.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MeetOurTeam;
