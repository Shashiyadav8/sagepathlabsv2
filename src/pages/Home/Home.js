import React from "react";
import { motion } from "framer-motion";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import StatsSection from "../../components/stats/StatsSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";
import MeetOurTeam from "../../components/Meet Our Team/MeetOurTeam";
import Suggestions from "../../components/Suggestions/Suggestions";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.14,
    },
  },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.56, ease: "easeOut" } },
};

export default function Home() {
  return (
    <motion.div
      className="App"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header can be static or animated — smaller subtle entry */}
      <motion.div variants={sectionVariant}>
        <Header />
      </motion.div>

      {/* Hero: larger presence, slightly earlier in the sequence */}
      <motion.section variants={sectionVariant}>
        <Hero />
      </motion.section>

      {/* About */}
      <motion.section variants={sectionVariant}>
        <About />
      </motion.section>

      {/* Contact block */}
      <motion.section variants={sectionVariant}>
        <ContactUs />
      </motion.section>

      {/* Testimonials */}
      <motion.section variants={sectionVariant}>
        <Testimonials />
      </motion.section>

      {/* Stats */}
      <motion.section variants={sectionVariant}>
        <StatsSection />
      </motion.section>

      {/* Meet Our Team */}
      <motion.section variants={sectionVariant}>
        <MeetOurTeam />
      </motion.section>

      {/* Suggestions / CTA */}
      <motion.section variants={sectionVariant}>
        <Suggestions />
      </motion.section>

      {/* Footer (appear last) */}
      <motion.footer variants={sectionVariant}>
        <Footer />
      </motion.footer>
    </motion.div>
  );
}
