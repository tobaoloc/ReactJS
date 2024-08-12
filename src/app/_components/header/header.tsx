"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "next/image";
import logo from "../../../assets/images/logo.png"; // Adjusted path

const Header = () => {
  let [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        setActiveLink(window.location.hash);
      };
      handleHashChange(); // Set initial hash on mount
      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }
   
  }, []);

  // Helper function to add "active" class based on the current hash
  const getNavLinkClass = (href: string) => {

    if(activeLink=="")
      activeLink="#home"
    return activeLink === href ? "nav-link active" : "nav-link";
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src={logo} alt="Logo" width={150} height={50} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className={getNavLinkClass("#home")} href="#home">
                  Trang Chủ
                </a>
              </li>
              <li className="nav-item">
                <a className={getNavLinkClass("#services")} href="#services">
                  Dịch Vụ
                </a>
              </li>
              <li className="nav-item">
                <a className={getNavLinkClass("#contact")} href="#contact">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
