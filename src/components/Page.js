import React, { useState, useEffect } from "react";
import { apiHandler } from "../assets/api";
import { endpoint } from "../assets/api/endpoint";
import Footer from "./Footer";
import Cookies from "js-cookie";

const Page = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchPageData = async () => {
    const currentUrl = window.location.href;
    const slug =  currentUrl.split('/').pop();

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
    if (pageData) {
      const pageDescriptionElement = document.querySelector(".page-description");
      console.log("pageDescriptionElement", pageDescriptionElement);
  
      if (pageDescriptionElement) {
        const buttons = pageDescriptionElement.querySelectorAll(".elementor-button");
        console.log("buttons", buttons);
  
        buttons.forEach((button) => {
          const buttonText = button.querySelector(".elementor-button-text")?.textContent.trim();
  
          if (buttonText === "Let's Connect") {
            button.classList.add("custom-class");
  
            button.addEventListener("click", (e) => {
              e.preventDefault(); 
              window.location.href = "/contact-us";
            });
  
            button.setAttribute("href", "/contact-us");
          }
        });
      }
    }
  }, [pageData]);


  useEffect(() => {
    fetchPageData();
  }, []);

  if (loading) {
    return (
      <div className="loading-spinner  d-flex align-items-center justify-content-center" style={{height:'80vh',}}>
        <div class="spinner-grow " role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message d-flex align-items-center justify-content-center" style={{height:'80vh',}}>
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
    </div>
    <Footer/>
    </>
  );
};

export default Page;

