import React from "react";
import "./OurFootprint.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobeAsia } from "react-icons/fa";
import { motion } from "framer-motion";

const locations = [
  { name: "Hyderabad", address: "Plot No. 564, 1st Floor, Buddhanagar, Near Sai Baba Temple, Peerzadiguda, Boduppal, Hyderabad, Telangana", phone: "7995862920" },
  { name: "Pune", address: "Flat No.5, First Floor, 386/3 Nana Peth, Pune, Maharashtra, 411002", phone: "7995862920" },
  { name: "Patna", address: "Hall No.15187, Holding No.1074, 2nd Floor, Maharaj Market, Opp. Pillar No.40, Raja Bazar, Bailey Road", phone: "7995862920" },
  { name: "Bhubaneswar", address: "Plot No.331/3846/4372, Khata No.731/4010, Mouza-Lingipur, Tahasil Bhubaneswar, PIN 751002", phone: "7995862920" },
  { name: "Bhopal", address: "#105, 1st Floor, Opp. Tazul Masazid, Moitia Talab Road, Bhopal, MP - 462001", phone: "7995862920" },
  { name: "Ranchi", address: "Tiwari Complex, Birsa Chowk, Opp. Hanuman Mandir, Birsa Nagar, Ranchi, Jharkhand - 834003", phone: "7995862920" },
  { name: "Guwahati", address: "404, 4th Floor, Swagota Envision+, GS Road, Six Mile, Guwahati, Assam - 781002", phone: "7995862920" },
  { name: "Silchar", address: "C/O Medilife, Near Valley Hospital, 1st Floor, Meherpur, Silchar, Cachar, Assam - 788015", phone: "7995862920" },
  { name: "Raipur", address: "Rani Avanti Bai, Lodhipara Chowk, Shankar Nagar Road, Opp. Shivaji Apartment, Tarun Nagar Main Road", phone: "7995862920" },
  { name: "Aurangabad", address: "Plot No.10, Vishal Nagar, Opp. Kada Bhavan, Near Gajanan Maharaj Temple, Garkheda Road", phone: "7995862920" },
  { name: "Barshi", address: "Dr Gulabrao Patil Old Hospital, Kurudwadi Road, Barshi, Dist. Solapur, PIN 413411", phone: "7995862920" },
  { name: "Nagpur", address: "Plot No.301, Third Floor, Meera Apartment, Opp. Yashwant Stadium, HDFC Bank Building, Dhantoli", phone: "7995862920" },
  { name: "Varanasi", address: "B38/2A 3&4, Gopal Vihar Colony, Mahmoorganj, Varanasi - 221010", phone: "7995862920" },
  { name: "Prayagraj", address: "55 Lowder Road, George Town, Prayagraj - 211002", phone: "7995862920" },
  { name: "Lucknow", address: "Baby Bliss IVF Center, C/185 Indiranagar, Opp. HAL, Lucknow - 226016", phone: "7995862920" },
  { name: "Agartala", address: "C/O OM Diagnostic, TG Road, Ramnagar, Road No.5 (Main Road), Agartala, West Tripura", phone: "7995862920" },
  { name: "Sagar", address: "Opp. Chhatrapati Shivaji Hospital, Near BMC, Tili Road, Sagar, MP - 470001", phone: "7995862920" },
  { name: "Ameerpet (HYD)", address: "Surabhi Lotus, 8-3-903/F/11, Flat No.201, 2nd Floor, Behind Image Hospital, Yellareddy Guda", phone: "7995862920" },
  { name: "Cuttack", address: "Plot No.2616 & 2618(P), Holding No.552 C-2/A, Mouza Bisinabar, Ward No.21, Friends Colony", phone: "7995862920" },
  { name: "Vidisha", address: "Near Shastri Nagar Gate, Ashirwad Complex, Sanchi Road, Vidisha, MP - 464001", phone: "7995862920" },
  { name: "Pune (PCMC)", address: "Shop No.14 & 15, Shewale Complex, Opp. Ramkrishna More Natya Gruh, Chinchwad, Pune", phone: "7995862920" }
];

const OurFootprint = () => (
  <>
    <Header />
    <div className="footprint-page-wrapper">

      {/* Background Mesh */}
      <div className="fp-bg-mesh"></div>

      <div className="footprint-split-container container">

        {/* Left Side: Sticky Map area */}
        <div className="fp-sticky-side">
          <motion.div
            className="fp-header-block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="fp-badge"><FaGlobeAsia /> Network</span>
            <h1 className="fp-title">Our Growing <br /> Footprint</h1>
            <p className="fp-subtitle">
              Serving thousands of patients across India with precision and care.
              Find a SagePath center near you.
            </p>
          </motion.div>

          <motion.div
            className="fp-map-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <iframe
              title="SagePath Labs Footprint Map"
              src="https://www.google.com/maps/d/embed?mid=1BsY2pXgS8ABsk-EivqS7geHgwx6axnI&ehbc=2E312F&noprof=1"
              className="fp-map-frame"
              allowFullScreen
            ></iframe>
            <div className="fp-map-overlay">
              <span>Interactive Map</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Scrollable List */}
        <div className="fp-scroll-side">
          <div className="fp-locations-grid">
            {locations.map((loc, i) => (
              <motion.div
                className="fp-location-card"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i % 2 * 0.1 }}
                whileHover={{ y: -5, borderColor: "#18BC7A" }}
              >
                <div className="fp-card-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="fp-card-content">
                  <h3>{loc.name}</h3>
                  <p className="fp-address">{loc.address}</p>
                  <a href={`tel:${loc.phone}`} className="fp-phone-link">
                    <FaPhoneAlt size={12} /> {loc.phone} / 90599 02920
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </>
);

export default OurFootprint;
