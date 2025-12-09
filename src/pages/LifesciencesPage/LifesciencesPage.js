import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import heroImg from "../../assets/lifesciences-main-section.png";         
import cardImg from "../../assets/about-sectin-mainpage.png";         
import "./Lifesciences.css";

// Sample services (use real services from SagePath Labs here)
const serviceList1 = [
  "Beta Thalassemia HBB gene sequencing (SANGER)",
  "Chorionic Villi Culture - QFPCR (T13/18/21 & XY)",
  "PVB QFPCR",
  "QFPCR (T13,18,21 & XY)",
  "Mitochondrial Genome Sequencing",
  "AF QFPCR (T13/18/21 & XY)",
  "Allergy Profile (Adult/Pediatric)",
  "Allergy Comprehensive Profile",
  "Allergy Drugs, Food, etc."
];
const serviceList2 = [
  "NBS Comprehensive Panel (7 Conditions)",
  "TORCH 5 Profile (IgG/IgM)",
  "TORCH 8 Profile (IgG & IgM)",
  "TORCH 4 Profile (IgG/IgM)",
  "Dual Marker – Delfia",
  "Quadruple Screening – Delfia",
  "Maternal Cell Contamination (MCC)",
  "NIPT (Basic)/131821 X & Y",
  "Dual Marker + PLGF"
];
const serviceList3 = [
  "CMA750K with Whole Exome Sequencing",
  "DNA Storage/Multiplex PCR",
  "Infertility Multiplex PCR",
  "QFPCR Basic + CMA 315K + MCC",
  "Prenatal KT+QFPCR (Amniotic Fluid/CVS)",
  "QFPCR + CMA 750K",
  "Comprehensive 1st Trimester Screening",
  "FISH (131821XY) - Amniotic Fluid"
];

export default function LifesciencesPage() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="lifesciences-hero">
        <div className="lifesciences-hero-img">
          <img src={heroImg} alt="Precision Diagnostics" />
        </div>
        <div className="lifesciences-hero-content">
          <div className="lifesciences-badge">
            <span role="img" aria-label="partner">🔬</span> Your Partner in Precision Medicine
          </div>
          <h1>
            Unlocking the Power of<br /> Precision Diagnostics
          </h1>
          <p>
            With commitment to innovation and personalized care, SagePath Lifesciences empowers healthcare professionals to make informed decisions for better patient outcomes.
          </p>
          <p>
            A division of SagePath Diagnostics dedicated to advanced and specialized diagnostic testing using molecular diagnostics, next-generation sequencing (NGS), and immunohistochemistry (IHC) for comprehensive testing solutions across clinical areas.
          </p>
          <div className="lifesciences-hero-actions">
            <a href="/order" className="lifesciences-order-btn">Order Test &rarr;</a>
            <a href="tel:04061216121" className="lifesciences-call-btn">📞 (040) 6121-6121</a>
          </div>
        </div>
      </section>


      {/* OUR SERVICES */}
      <section className="lifesciences-services">
        <h2 className="lifesciences-services-title">Our Services</h2>
        <div className="lifesciences-services-columns">
          {[serviceList1, serviceList2, serviceList3].map((column, idx) => (
            <ul className="lifesciences-service-list" key={idx}>
              {column.map(line => (
                <li key={line}>
                  <span className="service-check">&#10004;</span> {line}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>
      {/* PROMO CARD */}
      <div className="lifesciences-banner">Tests Booking Launching Soon</div>
      <section className="lifesciences-card">
        <div className="lifesciences-card-content">
          <h2>SagePath Lifesciences</h2>
          <p>
            Visit our website to learn more about our comprehensive range of testing services and how SagePath Lifesciences can be your partner in achieving optimal health.
          </p>
          <a
            href="https://sagepathlabs.com/life-sciences/"
            className="lifesciences-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website &rarr;
          </a>
        </div>
        <div className="lifesciences-card-img">
          <img src={cardImg} alt="Life Sciences Lab" />
        </div>
      </section>

      <Footer />
    </>
  );
}
