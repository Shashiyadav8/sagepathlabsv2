import React, { useState, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { FaUserMd, FaFlask, FaLaptopMedical, FaHandHoldingHeart } from "react-icons/fa";
import "./Careers.css";

const WEB3FORMS_ACCESS_KEY = "83397b0c-2d87-4f6e-ac24-70a5cbed5f53";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const jobOpenings = [
  {
    title: "Senior Phlebotomist",
    loc: "Hyderabad & Bangalore",
    type: "Full-Time",
    icon: <FaUserMd />
  },
  {
    title: "Lab Technician (Pathology)",
    loc: "Pune",
    type: "Full-Time",
    icon: <FaFlask />
  },
  {
    title: "Medical Sales Representative",
    loc: "Pan India",
    type: "Full-Time",
    icon: <FaLaptopMedical />
  },
  {
    title: "Customer Care Executive",
    loc: "Remote / Hybrid",
    type: "Full-Time",
    icon: <FaHandHoldingHeart />
  }
];

export default function CareersPage() {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setMessage("");

    try {
      const form = formRef.current;
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("form_name", "Careers Form");

      const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
      const json = await res.json();

      if (res.ok && json.success) {
        setStatus("success");
        setMessage("Application Sent! Good luck.");
        form.reset();
      } else {
        setStatus("error");
        setMessage("Submission failed. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Network error.");
    }
  }

  return (
    <>
      <Header />

      <div className="cp-wrapper">

        {/* HERO */}
        <section className="cp-hero">
          <div className="cp-hero-content text-center">
            <motion.span
              className="cp-badge"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              We are Hiring
            </motion.span>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Build the Future of <br /> <span className="text-gradient">Diagnostics</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Join a team of innovators, doctors, and dreamers dedicated to saving lives through precision capability.
            </motion.p>
            <motion.button
              className="cp-cta-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToForm}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Apply Now
            </motion.button>
          </div>

          {/* Abstract blobs */}
          <div className="cp-blob cp-blob-1"></div>
          <div className="cp-blob cp-blob-2"></div>
        </section>

        {/* OPENINGS GRID */}
        <section className="cp-openings container">
          <h2 className="cp-section-title">Current Openings</h2>
          <div className="cp-grid">
            {jobOpenings.map((job, i) => (
              <motion.div
                className="cp-job-card"
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="cp-job-icon">{job.icon}</div>
                <h3>{job.title}</h3>
                <p className="cp-job-loc">{job.loc}</p>
                <span className="cp-job-type">{job.type}</span>
                <button className="cp-apply-link" onClick={scrollToForm}>Apply &rarr;</button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* APPLICATION FORM */}
        <section className="cp-form-section">
          <div className="cp-form-container">
            <div className="cp-form-header">
              <h2>Drop Your Resume</h2>
              <p>Don't see a role that fits? We are always looking for talent.</p>
            </div>

            <form className="cp-form" onSubmit={handleSubmit} ref={formRef} autoComplete="off">
              <div className="cp-input-row">
                <input type="text" name="name" placeholder="Name" required className="cp-input" />
                <input type="tel" name="phone" placeholder="Phone" required className="cp-input" />
              </div>
              <input type="email" name="email" placeholder="Email Address" required className="cp-input" />

              <div className="cp-file-input">
                <label>Upload Resume / CV</label>
                <input type="file" name="resume" />
              </div>

              <textarea name="message" placeholder="Cover Letter / Message" className="cp-input cp-textarea"></textarea>

              <button type="submit" className="cp-submit-btn" disabled={status === "sending"}>
                {status === "sending" ? "Sending Application..." : "Submit Application"}
              </button>

              {status && <p className={`cp-status ${status}`}>{message}</p>}
            </form>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
