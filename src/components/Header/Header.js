// Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Sagepath-Labs-Logo.png";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/leadership" },
    ],
  },
  { label: "Diagnostics", href: "/diagnostics" },
  { label: "Our Footprint", href: "/Our-Footprint" },
  { label: "Become a Partner", href: "/Become-a-Partner" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
  { label: "Sample Report", href: "/DocTable" },
  { label: "Client Login", href: "http://sos.sagepathlabs.com/SagePath/Design/" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setOpenSubmenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleDocClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  const isParentActive = (href) =>
    href !== "/" && location.pathname.startsWith(href);

  const handleSubmenuToggle = (label, e) => {
    e && e.preventDefault();
    setOpenSubmenu((prev) => (prev === label ? null : label));
  };

  const handleKeyDownOnParent = (e, label) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenSubmenu((prev) => (prev === label ? null : label));
    } else if (e.key === "Escape") {
      setOpenSubmenu(null);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpenSubmenu(label);
      setTimeout(() => {
        const first = navRef.current?.querySelector(
          `.nav-item[data-key="${label}"] .submenu a`
        );
        first && first.focus();
      }, 50);
    }
  };

  return (
    <header className="header-main header-glass">
      <div className="header-topbar">
        <span className="topbar-left">
          For Home Pickup, Call Us On:
          <a href="tel:7995862920" className="header-phone">
            7995862920
          </a>
        </span>

        <div className="header-social" aria-hidden="false">
          <a
            href="https://www.facebook.com/people/SagePath-Labs/61555933944215/"
            className="social-icon"
            aria-label="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/sagepathlabs/"
            className="social-icon"
            aria-label="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/sagepath-labs/"
            className="social-icon"
            aria-label="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/@sagepathlabs"
            className="social-icon"
            aria-label="youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <nav
        className="header-navbar container-fluid header-nav-actions"
        ref={navRef}
        aria-label="Main navigation"
      >
        <div className="header-left">
          <div className="header-logo-wrap">
            <img src={logo} alt="SagePath Labs Logo" className="header-logo" />

          </div>
        </div>

        <button
          className="nav-toggle"
          onClick={() => {
            setMenuOpen((s) => !s);
            setOpenSubmenu(null);
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`header-nav ${menuOpen ? "open" : ""}`}>
          {navItems.map(({ label, href, children }) => {
            const hasChildren = Array.isArray(children) && children.length > 0;
            const submenuId = `submenu-${label.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <li
                key={label}
                data-key={label}
                className={`nav-item ${hasChildren ? "has-submenu" : ""} ${openSubmenu === label ? "submenu-open" : ""
                  } ${isParentActive(href) ? "parent-active" : ""}`}
              /* aria attributes moved to the interactive NavLink for a11y */
              >
                {hasChildren ? (
                  <>
                    <NavLink
                      to={href}
                      end={href === "/"}
                      className={({ isActive }) =>
                        "nav-link " +
                        ((isActive || isParentActive(href)) ? "active" : "")
                      }
                      aria-haspopup="true"
                      aria-expanded={openSubmenu === label}
                      aria-controls={submenuId}
                      onClick={(e) => {
                        if (window.innerWidth <= 991) {
                          handleSubmenuToggle(label, e);
                        }
                      }}
                      onKeyDown={(e) => handleKeyDownOnParent(e, label)}
                    >
                      <span className="nav-label">
                        {label}
                        <FaChevronDown className="chev-icon" />
                      </span>
                      <span className="nav-underline" aria-hidden="true" />
                    </NavLink>

                    <ul
                      id={submenuId}
                      className={`submenu ${openSubmenu === label ? "open" : ""}`}
                      role="menu"
                      aria-label={`${label} submenu`}
                    >
                      {children.map((child) => (
                        <li key={child.label} role="none">
                          <NavLink
                            to={child.href}
                            end={child.href === "/"}
                            className={({ isActive }) =>
                              "nav-sublink " + (isActive ? "active" : "")
                            }
                            onClick={() => {
                              setMenuOpen(false);
                              setOpenSubmenu(null);
                            }}
                            role="menuitem"
                            tabIndex={0}
                          >
                            <span className="sublink-content">
                              {child.icon ? (
                                <span className="sublink-icon">{child.icon}</span>
                              ) : null}
                              <span>{child.label}</span>
                            </span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={href}
                    end={href === "/"}
                    className={({ isActive }) =>
                      "nav-link " + (isActive ? "active" : "")
                    }
                    onClick={() => {
                      setMenuOpen(false);
                      setOpenSubmenu(null);
                    }}
                  >
                    <span className="nav-label">{label}</span>
                    <span className="nav-underline" aria-hidden="true" />
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>

        <div className="header-cta">
          <a
            className="order-btn"
            href="https://wa.me/917995862920?text=Hello%20SagePath%20Labs!%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setMenuOpen(false)}
          >
            Order Test <span className="order-arrow">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
