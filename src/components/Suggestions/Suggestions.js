import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaPaperPlane } from "react-icons/fa";
import "./Suggestions.css";
import suggestionImg from "../../assets/suggestions.jpg";

const WEB3FORMS_ACCESS_KEY = "83397b0c-2d87-4f6e-ac24-70a5cbed5f53";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const Suggestions = () => {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setMessage("");

    try {
      const form = formRef.current;
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("form_name", "Suggestions Form");

      const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
      const json = await res.json();

      if (res.ok && json.success) {
        setStatus("success");
        setMessage("Thank you for your feedback! We appreciate it.");
        form.reset();
      } else {
        setStatus("error");
        setMessage("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Network error. Please check your connection.");
    }
  }

  return (
    <section className="suggestions-section" id="suggestions">
      <div className="container">
        <div className="row align-items-center gx-5">

          {/* Left Illustration */}
          <motion.div
            className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sug-img-wrapper">
              <img
                src={suggestionImg}
                alt="Suggestion Box"
                className="suggestion-img"
              />
            </div>
          </motion.div>

          {/* Right Content/Form */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sug-content-card">
              <motion.span
                className="suggestions-badge"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <FaLightbulb style={{ marginRight: "8px" }} />
                WE VALUE YOUR FEEDBACK
              </motion.span>

              <h2 className="suggestions-title">
                Help Us Improve
              </h2>
              <p className="suggestions-subtitle">
                Your suggestions and constructive criticism help us deliver better healthcare services.
              </p>

              <form className="suggestions-form" onSubmit={handleSubmit} ref={formRef}>
                <div className="sug-input-row">
                  <input
                    className="suggestions-input"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    className="suggestions-input"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <input
                  className="suggestions-input"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <input
                  className="suggestions-input"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  className="suggestions-input sug-textarea"
                  rows="4"
                  name="message"
                  placeholder="Your Message / Suggestion"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="suggestions-btn"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaPaperPlane style={{ marginRight: "8px" }} />
                      Send Feedback
                    </>
                  )}
                </button>

                {status && (
                  <motion.p
                    className={`sug-status ${status}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {message}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Suggestions;
