import React, { useState, useEffect } from "react";
import "./WhatsAppWidget.css";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import sageLogo from "../../assets/Sagepath-Labs-Logo.png"; // Ensure this path is correct

export default function WhatsAppWidget({
  phone = "+919059902920",
  companyName = "SagePath Labs",
  logo = sageLogo,
  message = "Hello! I would like to know more about SagePath Labs.",
  autoOpen = true,
  autoOpenDelay = 1500,
}) {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);

  const waLink = `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(message)}`;

  // Auto-open logic
  useEffect(() => {
    if (!autoOpen) return;
    const timer = setTimeout(() => {
      setOpen(true);
      setPulse(false); // Stop pulsing when opened
    }, autoOpenDelay);
    return () => clearTimeout(timer);
  }, [autoOpen, autoOpenDelay]);

  const toggleOpen = () => {
    setOpen(!open);
    if (!open) setPulse(false);
  };

  return (
    <div className="wa-widget-wrapper">

      {/* 1. Floating Trigger Button */}
      <div
        className={`wa-trigger ${pulse ? "wa-pulse" : ""} ${open ? "wa-active" : ""}`}
        onClick={toggleOpen}
      >
        {open ? <FaTimes /> : <FaWhatsapp />}
        {!open && <span className="wa-tooltip">Chat with us!</span>}
      </div>

      {/* 2. Chat Window */}
      <div className={`wa-window ${open ? "wa-window-open" : ""}`}>

        {/* Header */}
        <div className="wa-header">
          <div className="wa-brand">
            <img src={logo} alt="Logo" className="wa-logo" />
            <div className="wa-info">
              <h4>{companyName}</h4>
              <p>Typically replies instantly</p>
            </div>
          </div>
          <button className="wa-close-small" onClick={() => setOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="wa-body" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')" }}>
          <div className="wa-msg-bubble incoming">
            <div className="wa-msg-name">{companyName}</div>
            Hello! 👋 <br />
            How can we help you with your health needs today?
            <span className="wa-time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>

        {/* Footer / Input Area */}
        <div className="wa-footer">
          <a href={waLink} target="_blank" rel="noreferrer" className="wa-start-btn">
            <FaWhatsapp style={{ fontSize: '1.2rem' }} /> Start Chat
          </a>
        </div>

      </div>

    </div>
  );
}
