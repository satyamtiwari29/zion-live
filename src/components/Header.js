import React, { useState, useEffect } from "react";
import logo from "../assets/images/logoImage.png";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLocation, useNavigate, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Offcanvas } from "bootstrap";
import "../assets/css/Header.css";

const solutionPages = [
  "/solutions",
  "/consulting",
  "/infrastructure-solutions",
  "/digital-workspace",
  "/data-centre",
  "/network",
  "/mobility",
  "/security-solutions",
  "/security-audit",
  "/infrastructure-security",
  "/monitoring",
  "/detection-and-prevention",
  "/vapt",
  "/siem",
  "/cloud-solutions",
  "/cloud-consulting-services",
  "/migration-and-deployment",
  "/cloud-managed-services",
  "/cloud-security-solutions",
  "/digital-experience-solutions",
  "/enterprise-modernization",
  "/cloud-transformation",
  "/enterprise-automation",
  "/enterprise-automation",
  "/connected-enterprise",
  "/platform-engineering",
  "/enterprise-agility",
  "/internet-of-things",
  "/surveillance-solutions",
];

const servicesPages = [
  "/it-services-for-small-business",
  "/managed-services",
  "/data-centre-services",
  "/remote-infrastructure-management",
  "/multi-brand-amc-fms-services",
  "/technology-staff-augmentation",
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSolutions, setShowSolutions] = useState(false);
  const [showInfra, setShowInfra] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showCloud, setShowCloud] = useState(false);
  const [showEnterprise, setShowEnterprise] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  console.log("location", location);

  useEffect(() => {
    const offcanvasElement = document.getElementById("offcanvasExample");
    const bsOffcanvas = new Offcanvas(offcanvasElement, {
      backdrop: true,
      keyboard: true,
    });

    if (mobileMenuOpen) {
      bsOffcanvas.show();
    } else {
      bsOffcanvas.hide();
      const backdropElement = document.querySelector(".offcanvas-backdrop");
      if (backdropElement) {
        backdropElement.remove();
      }
    }

    return () => {
      bsOffcanvas.hide();
      const backdropElement = document.querySelector(".offcanvas-backdrop");
      if (backdropElement) {
        backdropElement.remove();
      }
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop Header */}
      <div
        className="d-none d-lg-block shadow-lg"
        style={{
          backgroundColor: "#1A1919",
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          // transition: "transform 0.3s ease",
        }}
      >
        <nav className="container-fluid py-2 px-5 d-inline-flex flex-wrap justify-content-between align-items-center transition-all fadeIn duration-300">
          <a href="/" className="text-decoration-none">
            <img
              src={logo}
              alt="Zion Group"
              style={{ width: "70px", height: "70px" }}
              className="img-fluid"
            />
          </a>
          <div
            className="d-inline-flex flex-wrap justify-content-between align-items-center"
            style={{ gap: "4.5rem" }}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "menu-item active-menu-item" : "menu-item"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "menu-item active-menu-item" : "menu-item"
              }
            >
              About Us
            </NavLink>

            <span
              className="fs-5 fw-normal cursor-pointer position-relative"
              onMouseEnter={() => setShowSolutions(true)}
              onMouseLeave={() => setShowSolutions(false)}
            >
              <NavLink
                to="/solutions"
                className={({ isActive }) =>
                  isActive || solutionPages.includes(location.pathname) ? "menu-item active-menu-item" : "menu-item"
                }
              >
                Solutions
                <IoIosArrowDown size={15} className="ms-1" />
              </NavLink>{" "}
              {showSolutions && (
                <div
                  className="border position-absolute d-flex flex-column gap-3 py-2 ps-3 bg-white text-black fadeIn"
                  style={{ width: "200px" }}
                  onMouseEnter={() => setShowSolutions(true)}
                  onMouseLeave={() => setShowSolutions(false)}
                >
                  <span
                    onClick={() => navigate("/consulting")}
                    className='fs-6'
                  >
                    Consulting
                  </span>
                  <div
                    className="d-inline-flex justify-content-between align-items-center position-relative"
                    onMouseEnter={() => setShowInfra(true)}
                    onMouseLeave={() => setShowInfra(false)}
                  >
                    <span
                      className="fs-6"
                      onClick={() => navigate("/infrastructure-solutions")}
                    >
                      Infrastructure Solutions
                    </span>
                    <MdKeyboardArrowRight />
                    {showInfra && (
                      <div
                        className="border position-absolute fs-6 start-100 top-0 d-flex flex-column gap-2 px-3 py-2 bg-white text-black fadeIn"
                        style={{ width: "200px" }}
                        onMouseEnter={() => setShowInfra(true)}
                        onMouseLeave={() => setShowInfra(false)}
                      >
                        <span onClick={() => navigate("/digital-workspace")}>
                          Digital Workspace
                        </span>
                        <span onClick={() => navigate("/data-centre")}>
                          Data Centre
                        </span>
                        <span onClick={() => navigate("/network")}>
                          Network
                        </span>
                        <span onClick={() => navigate("/mobility")}>
                          Mobility
                        </span>
                      </div>
                    )}
                  </div>
                  <div
                    className="d-inline-flex justify-content-between align-items-center position-relative"
                    onMouseEnter={() => setShowSecurity(true)}
                    onMouseLeave={() => setShowSecurity(false)}
                  >
                    <span
                      onClick={() => navigate("/security-solutions")}
                      className="fs-6"
                    >
                      Security Solutions
                    </span>
                    <MdKeyboardArrowRight />
                    {showSecurity && (
                      <div
                        className="border position-absolute fs-6 start-100 top-0 d-flex flex-column gap-3 px-3 py-2 bg-white text-black fadeIn"
                        style={{ width: "200px" }}
                        onMouseEnter={() => setShowSecurity(true)}
                        onMouseLeave={() => setShowSecurity(false)}
                      >
                        <span onClick={() => navigate("/security-audit")}>
                          Security Audit
                        </span>
                        <span
                          onClick={() => navigate("/infrastructure-security")}
                        >
                          Infrastructure Security
                        </span>
                        <span onClick={() => navigate("/monitoring")}>
                          Monitoring
                        </span>
                        <span
                          onClick={() => navigate("/detection-and-prevention")}
                        >
                          Detection and Prevention
                        </span>
                        <span onClick={() => navigate("/vapt")}>VAPT</span>
                        <span onClick={() => navigate("/siem")}>SIEM</span>
                      </div>
                    )}
                  </div>
                  <span
                    className="d-inline-flex justify-content-between align-items-center position-relative"
                    onMouseEnter={() => setShowCloud(true)}
                    onMouseLeave={() => setShowCloud(false)}
                  >
                    <span
                      onClick={() => navigate("/cloud-solutions")}
                      className="fs-6"
                    >
                      Cloud Solutions
                    </span>
                    <MdKeyboardArrowRight />
                    {showCloud && (
                      <div
                        className="border position-absolute fs-6 start-100 top-0 d-flex flex-column gap-3 px-3 py-2 bg-white text-black fadeIn"
                        style={{ width: "200px" }}
                        onMouseEnter={() => setShowCloud(true)}
                        onMouseLeave={() => setShowCloud(false)}
                      >
                        <span
                          onClick={() => navigate("/cloud-consulting-services")}
                        >
                          Cloud Consulting Services
                        </span>
                        <span
                          onClick={() => navigate("/migration-and-deployment")}
                        >
                          Migration and Deployment
                        </span>
                        <span
                          onClick={() => navigate("/cloud-managed-services")}
                        >
                          Cloud Managed Services
                        </span>
                        <span
                          onClick={() => navigate("/cloud-security-solutions")}
                        >
                          Cloud Security Solutions
                        </span>
                      </div>
                    )}
                  </span>
                  <span
                    className="fs-6"
                    onClick={() => navigate("/digital-experience-solutions")}
                  >
                    Digital Experience Solutions
                  </span>
                  <span
                    className="d-inline-flex justify-content-between align-items-center position-relative"
                    onMouseEnter={() => setShowEnterprise(true)}
                    onMouseLeave={() => setShowEnterprise(false)}
                  >
                    <span
                      onClick={() => navigate("/enterprise-modernization")}
                      className="fs-6"
                    >
                      Enterprise Modernization
                    </span>
                    <MdKeyboardArrowRight />
                    {showEnterprise && (
                      <div
                        className="border position-absolute fs-6 start-100 top-0 d-flex flex-column gap-3 px-3 py-2 bg-white text-black fadeIn"
                        style={{ width: "200px" }}
                        onMouseEnter={() => setShowEnterprise(true)}
                        onMouseLeave={() => setShowEnterprise(false)}
                      >
                        <span onClick={() => navigate("/cloud-transformation")}>
                          Cloud Transformation
                        </span>
                        <span
                          onClick={() => navigate("/enterprise-automation")}
                        >
                          Enterprise Automation
                        </span>
                        <span onClick={() => navigate("/connected-enterprise")}>
                          Connected Enterprise
                        </span>
                        <span onClick={() => navigate("/platform-engineering")}>
                          Platform Engineering
                        </span>
                        <span onClick={() => navigate("/enterprise-agility")}>
                          Enterprise Agility
                        </span>
                        <span onClick={() => navigate("/internet-of-things")}>
                          Internet of Things
                        </span>
                      </div>
                    )}
                  </span>
                  <span
                    className="fs-6"
                    onClick={() => navigate("/surveillance-solutions")}
                  >
                    Surveillance Solutions
                  </span>
                </div>
              )}
            </span>
            <span
              className="fs-5 fw-normal position-relative cursor-pointer"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <NavLink
                to="/services1"
                className={({ isActive }) =>
                  isActive || servicesPages.includes(location.pathname) ? "menu-item active-menu-item" : "menu-item"
                }
              >
                Services
                <IoIosArrowDown size={15} className="ms-1" />
              </NavLink>{" "}
              {showServices && (
                <div
                  className="border position-absolute fs-6 top-20 start-0 d-flex flex-column gap-3 px-3 py-2 bg-white text-black fadeIn"
                  style={{ width: "200px" }}
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  <span
                    onClick={() => navigate("/it-services-for-small-business")}
                  >
                    IT Services for Small Businesses
                  </span>
                  <span onClick={() => navigate("/managed-services")}>
                    Managed Services
                  </span>
                  <span onClick={() => navigate("/data-centre-services")}>
                    Data Centre Services
                  </span>
                  <span
                    onClick={() =>
                      navigate("/remote-infrastructure-management")
                    }
                  >
                    Remote Infrastructure Management
                  </span>
                  <span
                    onClick={() => navigate("/multi-brand-amc-fms-services")}
                  >
                    Multibrand AMC/FMS Services
                  </span>
                  <span
                    onClick={() => navigate("/technology-staff-augmentation")}
                  >
                    Technology Staff Augmentation
                  </span>
                </div>
              )}
            </span>

            <button className="btn btn-primary">
              <Link to="/contact-us" className="text-decoration-none">
                <span className="fs-5 fw-normal text-white">Contact Us</span>
              </Link>
            </button>
          </div>
        </nav>
      </div>

      <div className="d-lg-none">
        <nav className="navbar p-0">
          <div
            className="container-fluid"
            style={{ backgroundColor: "#1A1919" }}
          >
            <a href="/" className="navbar-brand">
              <img
                src={logo}
                alt="Zion Group"
                style={{ width: "60px", height: "60px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
            >
              <AiOutlineMenu color="white" size={25} />
            </button>
          </div>
        </nav>
      </div>
      <div
        className="offcanvas offcanvas-end d-lg-none"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ maxWidth: "280px" }}
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="d-flex flex-column gap-3">
            <Link
              to="/"
              className={`text-decoration-none fw-bold d-flex align-items-center gap-2 ${
                isActive("/") ? "active-menu-item" : "text-black"
              }`}
              // data-bs-dismiss="offcanvas"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-decoration-none fw-bold d-flex align-items-center gap-2 ${
                isActive("/about") ? "active-menu-item" : "text-black"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            {/* Solutions Accordion */}
            <div
              className="accordion accordion-flush nav-accordion"
              id="solutionsAccordion"
            >
              <div className="accordion-item">
                <div
                  className="accordion-header"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSolutions"
                  aria-expanded="false"
                  aria-controls="collapseSolutions"
                  id="headingSolutions"
                >
                  <span
                    className={`text-start text-decoration-none fw-bold ${
                      isActive("/solutions") || solutionPages.includes(location.pathname) ? "active-menu-item" : ""
                    }`}
                    type="button"
                  >
                    Solutions <IoIosArrowDown />
                  </span>
                </div>
                <div
                  id="collapseSolutions"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSolutions"
                  // data-bs-parent="#solutionsAccordion"
                >
                  <div className="accordion-body d-flex flex-column gap-1">
                    <Link
                      to="/solutions"
                      className="text-decoration-none text-black fw-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Solutions
                    </Link>
                    <Link
                      to="/consulting"
                      className="text-decoration-none text-black fw-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Consulting
                    </Link>
                    <div
                      className="accordion accordion-flush nav-accordion"
                      id="infraSolutionsAccordion"
                    >
                      <div className="accordion-item">
                        <div
                          className="accordion-header"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseInfraSolutions"
                          aria-expanded="false"
                          aria-controls="collapseInfraSolutions"
                          id="infraSolutions"
                        >
                          <span
                            className="text-start text-decoration-none fw-semibold"
                            type="button"
                          >
                            Infrastructure Solutions <IoIosArrowDown />
                          </span>
                        </div>
                        <div
                          id="collapseInfraSolutions"
                          className="accordion-collapse collapse"
                          aria-labelledby="infraSolutions"
                          // data-bs-parent="#infraSolutionsAccordion"
                        >
                          <div className="accordion-body d-flex flex-column gap-1">
                            <Link
                              to="/infrastructure-solutions"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Infrastructure Solutions
                            </Link>
                            <Link
                              to="/digital-workspace"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Digital Workspace
                            </Link>
                            <Link
                              to="/data-centre"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Data Centre
                            </Link>
                            <Link
                              to="/network"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Network
                            </Link>
                            <Link
                              to="/mobility"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Mobility
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion accordion-flush nav-accordion"
                      id="securitySolutionsAccordion"
                    >
                      <div className="accordion-item">
                        <div
                          className="accordion-header"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSecuritySolutions"
                          aria-expanded="false"
                          aria-controls="collapseSecuritySolutions"
                          id="securitySolutions"
                        >
                          <span
                            className="text-start text-decoration-none fw-semibold"
                            type="button"
                          >
                            Security Solutions <IoIosArrowDown />
                          </span>
                        </div>
                        <div
                          id="collapseSecuritySolutions"
                          className="accordion-collapse collapse"
                          aria-labelledby="securitySolutions"
                          // data-bs-parent="#infraSolutionsAccordion"
                        >
                          <div className="accordion-body d-flex flex-column gap-1">
                            <Link
                              to="/security-solutions"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Security Solutions
                            </Link>
                            <Link
                              to="/security-audit"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Security Audit
                            </Link>
                            <Link
                              to="/infrastructure-security"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Infrastructure Security
                            </Link>
                            <Link
                              to="/monitoring"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Monitoring
                            </Link>
                            <Link
                              to="/detection-and-prevention"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Detection and Prevention
                            </Link>
                            <Link
                              to="/vapt"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              VAPT
                            </Link>
                            <Link
                              to="/siem"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              SIEM
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion accordion-flush nav-accordion"
                      id="cloudSolutionsAccordion"
                    >
                      <div className="accordion-item">
                        <div
                          className="accordion-header"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseCloudSolutions"
                          aria-expanded="false"
                          aria-controls="collapseCloudSolutions"
                          id="cloudSolutions"
                        >
                          <span
                            className="text-start text-decoration-none fw-semibold"
                            type="button"
                          >
                            Cloud Solutions <IoIosArrowDown />
                          </span>
                        </div>
                        <div
                          id="collapseCloudSolutions"
                          className="accordion-collapse collapse"
                          aria-labelledby="cloudSolutions"
                          // data-bs-parent="#infraSolutionsAccordion"
                        >
                          <div className="accordion-body d-flex flex-column gap-1">
                            <Link
                              to="/cloud-solutions"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Cloud Solutions
                            </Link>
                            <Link
                              to="/cloud-consulting-services"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Cloud Consulting Services
                            </Link>
                            <Link
                              to="/migration-and-deployment"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Migration and Deployment
                            </Link>
                            <Link
                              to="/cloud-managed-services"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Cloud Managed Services
                            </Link>
                            <Link
                              to="/cloud-security-solutions"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Cloud Security Solutions
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/digital-experience-solutions"
                      className="text-decoration-none text-black fw-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Digital Experience Solutions
                    </Link>
                    <div
                      className="accordion accordion-flush nav-accordion"
                      id="enterpriseSolutionsAccordion"
                    >
                      <div className="accordion-item">
                        <div
                          className="accordion-header"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseEnterpriseSolutions"
                          aria-expanded="false"
                          aria-controls="collapseEnterpriseSolutions"
                          id="enterpriseSolutions"
                        >
                          <span
                            className="text-start text-decoration-none fw-semibold"
                            type="button"
                          >
                            Enterprise Modernization <IoIosArrowDown />
                          </span>
                        </div>
                        <div
                          id="collapseEnterpriseSolutions"
                          className="accordion-collapse collapse"
                          aria-labelledby="enterpriseSolutions"
                          // data-bs-parent="#infraSolutionsAccordion"
                        >
                          <div className="accordion-body d-flex flex-column gap-1">
                            <Link
                              to="/enterprise-modernization"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Enterprise Modernization
                            </Link>
                            <Link
                              to="/cloud-transformation"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Cloud Transformation
                            </Link>
                            <Link
                              to="/enterprise-automation"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Enterprise Automation
                            </Link>
                            <Link
                              to="/connected-enterprise"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Connected Enterprise
                            </Link>
                            <Link
                              to="/platform-engineering"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Platform Engineering
                            </Link>
                            <Link
                              to="/enterprise-agility"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Enterprise Agility
                            </Link>
                            <Link
                              to="/internet-of-things"
                              className="text-decoration-none text-black"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Internet of Things
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/surveillance-solutions"
                      className="text-decoration-none text-black fw-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Surveillance Solutions
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Accordion */}
            <div
              className="accordion accordion-flush nav-accordion"
              id="servicesAccordion"
            >
              <div className="accordion-item">
                <div
                  className="accordion-header"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseServices"
                  aria-expanded="false"
                  aria-controls="collapseServices"
                  id="headingServices"
                  style={{ border: "none" }}
                >
                  <span
                    className={`text-start text-decoration-none fw-bold ${
                      isActive("/service") || servicesPages.includes(location.pathname) ? "active-menu-item" : "text-black"
                    }`}
                    type="button"
                  >
                    Services <IoIosArrowDown />
                  </span>
                </div>
                <div
                  id="collapseServices"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingServices"
                  data-bs-parent="#servicesAccordion"
                >
                  <div className="accordion-body d-flex flex-column gap-1">
                    <Link
                      to="/service"
                      className="text-decoration-none text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Services
                    </Link>
                    <Link
                      to="/it-services-for-small-business"
                      className="text-decoration-none text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      IT Services for Small Businesses
                    </Link>
                    <Link
                      to="/managed-services"
                      className="text-decoration-none text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Managed Services
                    </Link>
                    <Link
                      to="/data-centre-services"
                      className="text-decoration-none text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Data Centre Services
                    </Link>
                    <Link
                      to="/remote-infrastructure-management"
                      className="text-decoration-none text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Remote Infrastructure Management
                    </Link>
                    <Link
                      to="/multi-brand-amc-fms-services"
                      className="text-decoration-none text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Multi-Brand AMC/FMS Services
                    </Link>
                    <Link
                      to="/technology-staff-augmentation"
                      className="text-decoration-none text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Technology Staff Augmentation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/contact-us"
              className={`text-decoration-none fw-bold ${isActive('/contact') ? 'active-menu-item' : 'text-black'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
