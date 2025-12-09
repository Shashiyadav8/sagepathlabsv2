import React, { useState, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { FaMicroscope, FaChalkboardTeacher, FaUsers, FaFileAlt, FaChartLine, FaCheckCircle, FaRocket } from "react-icons/fa";
import StatsSection from "../../components/stats/StatsSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./BecomePartner.css";

const WEB3FORMS_ACCESS_KEY = "5a5aafd5-cef4-49c4-b9d6-195db91b5067";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const benefits = [
  {
    icon: <FaMicroscope />,
    title: "Minimal Investment",
    desc: "Start your diagnostic journey with low capital requirements and high ROI potential."
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Training",
    desc: "We provide end-to-end training in lab operations, quality control, and customer service."
  },
  {
    icon: <FaUsers />,
    title: "Established Brand",
    desc: "Leverage SagePath's reputation for accuracy and trust to build your local presence."
  },
  {
    icon: <FaFileAlt />,
    title: "Wide Test Menu",
    desc: "Offer 3000+ tests ranging from routine checks to complex molecular diagnostics."
  },
  {
    icon: <FaChartLine />,
    title: "Business Support",
    desc: "Get marketing, logistical, and technical support to ensure your center succeeds."
  }
];

export default function BecomePartnerPage() {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  async function handleSubmit(e) {
    /* Same logic as before */
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setMessage("");

    try {
      const form = formRef.current;
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("form_name", "Become Partner Form");

      const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
      const json = await res.json();

      if (res.ok && json.success) {
        setStatus("success");
        setMessage("Application received! We will contact you shortly.");
        form.reset();
      } else {
        setStatus("error");
        setMessage("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <>
      <Header />
      <div className="partner-page-wrapper">

        {/* HERO SECTION (Split) */}
        <section className="pp-hero">
          <div className="pp-hero-bg"></div>
          <div className="container pp-hero-container">

            {/* Left: Content */}
            <motion.div
              className="pp-hero-content"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="pp-badge"><FaRocket /> Franchise Opportunity</span>
              <h1 className="pp-title">Partner with <br /> Excellence</h1>
              <p className="pp-subtitle">
                Join India's fastest-growing diagnostic network. Empower your community with world-class healthcare while building a profitable business.
              </p>

              <ul className="pp-feature-list">
                <li><FaCheckCircle /> <span>NABL Accredited & ISO Certified Labs</span></li>
                <li><FaCheckCircle /> <span>24/7 Tech Support & Logistics</span></li>
                <li><FaCheckCircle /> <span>Proven Franchise Model</span></li>
              </ul>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              className="pp-form-wrapper"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <form
                className="pp-form"
                onSubmit={handleSubmit}
                ref={formRef}
                autoComplete="off"
              >
                <div className="pp-form-header">
                  <h3>Start Your Journey</h3>
                  <p>Fill in the details to get a callback.</p>
                </div>

                <div className="pp-input-group">
                  <input type="text" name="name" placeholder="Full Name" required className="pp-input" />
                </div>
                <div className="pp-input-group">
                  <input type="tel" name="phone" placeholder="Mobile Number" required className="pp-input" />
                </div>
                <div className="pp-input-group">
                  <input type="email" name="email" placeholder="Email Address" required className="pp-input" />
                </div>
                <div className="pp-input-group">
                  <select name="city" className="pp-input" required>
                    <option value="" disabled selected>Select Your City</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="pp-input-group">
                  <textarea name="message" placeholder="Why do you want to partner?" className="pp-input pp-textarea"></textarea>
                </div>

                <button type="submit" className="pp-submit-btn" disabled={status === "sending"}>
                  {status === "sending" ? "Submitting..." : "Apply Now"}
                </button>

                {status && <p className={`pp-msg ${status}`}>{message}</p>}
              </form>
            </motion.div>

          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="pp-benefits">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="pp-section-title">Why SagePath?</h2>
              <p className="pp-section-sub">We provide everything you need to succeed.</p>
            </div>

            <div className="pp-benefits-grid">
              {benefits.map((b, i) => (
                <motion.div
                  className="pp-benefit-card"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="pp-icon-box">{b.icon}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <StatsSection />
        <Testimonials />

      </div>
      <Footer />
    </>
  );
}
