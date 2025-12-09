import React, { useState, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaMapMarkerAlt, FaEnvelopeOpenText, FaPhoneAlt, FaClock, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import "./ContactUs.css";

const WEB3FORMS_ACCESS_KEY = "83397b0c-2d87-4f6e-ac24-70a5cbed5f53"; // Reusing key for simplicity or separate if needed
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const contactCards = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Us",
    line1: "SagePath Labs Reference Lab",
    line2: "Boduppal, Hyderabad, Telangana",
    color: "#e9543c"
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "Email Us",
    line1: "info@sagepathlabs.com",
    line2: "hr@sagepathlabs.com",
    color: "#18BC7A"
  },
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    line1: "+91 90599 02920",
    line2: "+91 79958 62920",
    color: "#07B6EF"
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    line1: "Mon - Sat: 9:00 AM - 9:00 PM",
    line2: "Sunday: Closed",
    color: "#f59e0b"
  }
];

export default function ContactUsPage() {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setMessage("");

    try {
      const formData = new FormData(formRef.current);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("form_name", "Contact Us Form");

      const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
      const json = await res.json();

      if (res.ok && json.success) {
        setStatus("success");
        setMessage("Message Sent! We'll be in touch.");
        formRef.current.reset();
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Network Error.");
    }
  }

  return (
    <>
      <Header />

      <div className="contact-page-wrapper">

        {/* HERO */}
        <section className="contact-hero">
          <div className="contact-hero-content">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              We are here to help. Reach out to us for any queries or support.
            </motion.p>
          </div>
        </section>

        {/* INFO CARDS */}
        <section className="contact-cards-section container">
          <div className="contact-cards-grid">
            {contactCards.map((card, i) => (
              <motion.div
                className="contact-card-modern"
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="cc-icon" style={{ backgroundColor: `${card.color}15`, color: card.color }}>
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.line1}</p>
                <p>{card.line2}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SUPPORT HUB (Map + Form) */}
        <section className="contact-hub-section">
          <div className="container contact-hub-container">

            {/* Map Side */}
            <motion.div
              className="contact-map-wrapper"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <iframe
                title="SagePath Labs Location"
                src="https://maps.google.com/maps?q=17.4018,78.5607&hl=en&z=15&output=embed"
                className="contact-map-frame"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Form Side */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <form className="contact-form-modern" onSubmit={handleSubmit} ref={formRef}>
                <h2>Send a Message</h2>
                <p>Have a question? We'd love to hear from you.</p>

                <div className="cc-input-group">
                  <input type="text" name="name" placeholder="Your Name" required className="cc-input" />
                </div>
                <div className="cc-input-group">
                  <input type="email" name="email" placeholder="Email Address" required className="cc-input" />
                </div>
                <div className="cc-input-group">
                  <input type="tel" name="phone" placeholder="Phone Number" required className="cc-input" />
                </div>
                <div className="cc-input-group">
                  <textarea name="message" placeholder="How can we help?" className="cc-input cc-textarea" required></textarea>
                </div>

                <button type="submit" className="cc-submit-btn" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : <>Send Message <FaPaperPlane /></>}
                </button>

                {status && <p className={`cc-status ${status}`}>{message}</p>}
              </form>
            </motion.div>

          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
