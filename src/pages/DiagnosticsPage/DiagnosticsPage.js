import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaMicroscope, FaArrowRight } from "react-icons/fa";
import "./Diagnostics.css";

const diagnosticPanels = [
  { name: "Master Health Check Century Profile", count: "100 tests", category: "Comprehensive" },
  { name: "Male Health Check Profile", count: "80 tests", category: "General" },
  { name: "Female Health Check Profile", count: "80 tests", category: "General" },
  { name: "Thyroid Check", count: "12 tests", category: "Hormonal" },
  { name: "Cardiac Risk Package", count: "12 tests", category: "Cardiac" },
  { name: "Comprehensive Diabetes Panel", count: "9 tests", category: "Diabetic" },
  { name: "Full Liver Profile", count: "12 tests", category: "Organ" },
  { name: "Vitamin Deficiency Profile", count: "11 tests", category: "Nutritional" },
  { name: "Cancer - Tumor Marker Package", count: "Screening", category: "Specialized" },
  { name: "Allergy Comprehensive Panel", count: "Allergens", category: "Specialized" },
  { name: "Fever Profile", count: "Infection", category: "General" },
  { name: "Bone & Joint Ortho Screen", count: "Bone Health", category: "Specialized" }
];

const whatsappNumber = "919652998977";

export default function DiagnosticsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPanels = diagnosticPanels.filter(pkg =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const bookViaWhatsApp = (testName) => {
    const msg = `Hello SagePath Labs! I want to book: ${testName}`;
    const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waLink, "_blank");
  };

  return (
    <>
      <Header />
      <div className="dp-wrapper">

        {/* Animated Background */}
        <div className="dp-bg-anim">
          <div className="dp-blob dp-blob-1"></div>
          <div className="dp-blob dp-blob-2"></div>
        </div>

        <motion.main
          className="dp-main-content container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header Section */}
          <div className="dp-header text-center">
            <motion.span
              className="dp-badge"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Advanced Diagnostics
            </motion.span>
            <motion.h1
              className="dp-title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Precision Testing for <span className="dp-highlight">Every Need</span>
            </motion.h1>

            {/* Search Bar */}
            <motion.div
              className="dp-search-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <FaSearch className="dp-search-icon" />
              <input
                type="text"
                placeholder="Search for a test..."
                className="dp-search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
          </div>

          {/* Grid */}
          <motion.div
            className="dp-grid"
            layout
          >
            <AnimatePresence>
              {filteredPanels.map((pkg) => (
                <motion.div
                  key={pkg.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  className="dp-card"
                >
                  <div className="dp-card-glow"></div>
                  <div className="dp-card-content">
                    <div className="dp-card-icon">
                      <FaMicroscope />
                    </div>
                    <span className="dp-card-category">{pkg.category}</span>
                    <h3 className="dp-card-title">{pkg.name}</h3>
                    <span className="dp-card-count">{pkg.count}</span>

                    <button
                      className="dp-book-btn"
                      onClick={() => bookViaWhatsApp(pkg.name)}
                    >
                      Book Now <FaArrowRight className="btn-arrow" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPanels.length === 0 && (
            <div className="dp-no-results">
              <p>No tests found matching "{searchTerm}".</p>
            </div>
          )}

          {/* Catalog Download */}
          <motion.div
            className="dp-footer-action"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              className="dp-catalog-btn"
              onClick={() => window.open("https://drive.google.com/file/d/1v1tp1FqaGi9ypDewF20q3EilUbS4ih08/view?usp=sharing", "_blank")}
            >
              Download Full Catalog
            </button>
          </motion.div>

        </motion.main>
      </div>
      <Footer />
    </>
  );
}
