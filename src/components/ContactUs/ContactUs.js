import React from "react";
import "./ContactUs.css";
import contactImg from "../../assets/home-contact-section.webp";

const ContactUs = () => (
  <section className="contact-section-new" id="contact">
    <div className="container">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <span className="contact-subtitle">Get In Touch</span>
          <h2 className="contact-heading">
            We're Here to <span className="highlight">Help You</span>
          </h2>
          <p className="contact-lead">
            Have questions or need to book a test? Reach out to us through any of the channels below.
            We are committed to providing you with the best diagnostic care.
          </p>
        </div>
      </div>

      <div className="row g-4 justify-content-center">
        {/* Contact Cards Column */}
        <div className="col-lg-5 col-md-6">
          <div className="contact-card-grid">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/917995862920?text=Hello%20SagePath%20Labs!%20I%20want%20to%20place%20an%20order."
              target="_blank"
              rel="noreferrer noopener"
              className="contact-card whatsapp"
            >
              <div className="card-icon">
                <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp" />
              </div>
              <div className="card-info">
                <h3>Chat with Us</h3>
                <p>Book tests instantly</p>
              </div>
              <div className="card-arrow">&rarr;</div>
            </a>

            {/* Phone Card */}
            <a href="tel:09059902920" className="contact-card phone">
              <div className="card-icon">
                <span className="material-icons-outlined">call</span>
              </div>
              <div className="card-info">
                <h3>Call Now</h3>
                <p>+91 90599 02920</p>
              </div>
              <div className="card-arrow">&rarr;</div>
            </a>

            {/* Email Card */}
            <a href="mailto:info@sagepathlabs.com" className="contact-card email">
              <div className="card-icon">
                <span className="material-icons-outlined">email</span>
              </div>
              <div className="card-info">
                <h3>Email Us</h3>
                <p>info@sagepathlabs.com</p>
              </div>
              <div className="card-arrow">&rarr;</div>
            </a>
          </div>
        </div>

        {/* Location & Image Column */}
        <div className="col-lg-5 col-md-6">
          <div className="location-card h-100">
            <div className="location-image-wrapper">
              <img src={contactImg} alt="SagePath Labs Location" className="location-img" />
              <div className="location-overlay">
                <span className="badge-visit">Visit Us</span>
              </div>
            </div>

            <div className="location-details">
              <div className="d-flex align-items-start gap-3">
                <div className="loc-icon-box">
                  <span className="material-icons-outlined">location_on</span>
                </div>
                <div>
                  <h4>Hyderabad Centre</h4>
                  <p>
                    Plot No. 564, First Floor, Buddanagar,<br />
                    Near Saibaba Temple, Boduppal,<br />
                    Hyderabad, Telangana 500092
                  </p>
                  <a
                    href="https://maps.google.com/?q=SagePath+Labs+Boduppal"
                    target="_blank"
                    rel="noreferrer"
                    className="map-link"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
