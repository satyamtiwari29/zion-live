import React, { useState, useEffect } from "react";
import { apiHandler } from "../assets/api";
import { endpoint } from "../assets/api/endpoint";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import axios from "axios";
import '../assets/css/ContactPage.css';

const ContactPage = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formMessage, setFormMessage] = useState("");

  const fetchPageData = async () => {
    const currentUrl = window.location.href;
    const slug = currentUrl.split("/").pop();

    try {
      const result = await apiHandler({
        url: `${endpoint.GET_SOLUTION_PAGE}?slug=${slug}&_embed`,
        method: "GET",
      });

      const matchedPage = result.data.find(
        (page) =>
          page.slug === slug ||
          page.title.rendered.toLowerCase() === slug.toLowerCase()
      );

      if (matchedPage) {
        setPageData(matchedPage);
      } else {
        setError("Page not found.");
      }
    } catch (error) {
      console.error("Error fetching page data:", error);
      setError("Failed to load page content.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Cookies.set("humans_21909", "1", { path: "/", secure: true, sameSite: "Strict" });
  }, []);

  useEffect(() => {
    fetchPageData();
  }, []);

  useEffect(() => {
    const initializeAccordion = () => {
      const accordionItems = document.querySelectorAll(".elementor-accordion-item");
  
      accordionItems.forEach((item) => {
        const title = item.querySelector(".elementor-tab-title");
        const content = item.querySelector(".elementor-tab-content");
        const icon = item.querySelector(".elementor-accordion-icon");
  
        if (title && content && icon) {
          // Initially hide all accordion content and set icons to plus
          content.style.display = "none";
          icon.classList.add("icon-plus");
          icon.classList.remove("icon-minus");
  
          // Add click event listener
          title.addEventListener("click", () => {
            const isActive = item.classList.contains("elementor-active");
  
            if (isActive) {
              // Collapse the current item
              item.classList.remove("elementor-active");
              content.style.display = "none";
              icon.classList.remove("icon-minus");
              icon.classList.add("icon-plus");
            } else {
              // Close other accordion items
              accordionItems.forEach((otherItem) => {
                if (otherItem !== item) {
                  otherItem.classList.remove("elementor-active");
                  const otherContent = otherItem.querySelector(".elementor-tab-content");
                  const otherIcon = otherItem.querySelector(".elementor-accordion-icon");
  
                  if (otherContent && otherIcon) {
                    otherContent.style.display = "none";
                    otherIcon.classList.remove("icon-minus");
                    otherIcon.classList.add("icon-plus");
                  }
                }
              });
  
              // Expand the current item
              item.classList.add("elementor-active");
              content.style.display = "block";
              icon.classList.remove("icon-plus");
              icon.classList.add("icon-minus");
            }
          });
        }
      });
    };
  
    initializeAccordion();
  }, [pageData]);
  
  

  const handleDynamicFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default action if applicable

    const formContainer = document.querySelector(".elementor-form-fields-wrapper");
    if (!formContainer) {
      setFormMessage("Form container not found.");
      return;
    }

    // Collect input values from the form
    const inputs = formContainer.querySelectorAll("input, textarea, select");
    const formValues = {};

    inputs.forEach((input) => {
      formValues[input.name] = input.value; // Collect input values
    });

    // Add the missing fields
    const postId = pageData?.id; 
    const formId = formContainer.getAttribute("data-form-id"); 
    const gRecaptchaResponse = true; 
    const action = "submit_contact_form"; 

    formValues.post_id = postId;
    formValues.form_id = formId;
    formValues["g-recaptcha-response"] = gRecaptchaResponse;
    formValues.action = action;

    try {
      const response = await axios.post(endpoint.SUBMIT_CONTACT_FORM, formValues);
      setFormMessage("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormMessage("Failed to submit the form.");
    }
  };

  if (loading) {
    return (
      <div
        className="loading-spinner  d-flex align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        <div className="spinner-grow " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="error-message d-flex align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 mx-auto py-5">
            <h1 className="text-center">{pageData?.title?.rendered}</h1>
            <div
              className="page-description text-left py-3"
              dangerouslySetInnerHTML={{
                __html: pageData?.content?.rendered || "<p>No content available.</p>",
              }}
            />
          </div>
        </div>
        {formMessage && <p className="text-center">{formMessage}</p>}
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
