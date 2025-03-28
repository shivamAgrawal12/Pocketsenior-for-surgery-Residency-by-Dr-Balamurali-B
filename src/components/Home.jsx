import React, { useState } from 'react';
import "./Style.css";
import chap from '../assets/chapter.png';
import heart from '../assets/heart.png'; // Ensure this file exists
import TestimonialsCarousel from './TestimonialsCarousel';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import emailjs from "emailjs-com";


const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
  
    const serviceID = "service_xp0uqj9"; // Replace with your Email.js service ID
    const templateID = "template_94glit5"; // Replace with your Email.js template ID
    const userID = "TN8v4bWE9lk2m01ro"; // Replace with your Email.js user ID
  
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };
  
    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setStatusMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
  
      // Show confirmation alert
      alert("Your message has been sent successfully!");
  
    } catch (error) {
      setStatusMessage("Failed to send message. Please try again.");
      console.error("Email error:", error);
    }
  
    setIsSubmitting(false);
  };  

  return (
    <>
      {/************************************** Home Section *******************************************/}
      <div className="section" id="home-section">
        <div id="home-content">
          <h1 id="home-title"> POCKET SENIOR TO HACK <span id="home-title-span">SURGERY RESIDENCY</span> IN INDIA </h1>
          <h1 id="home-title2"><span id="home-title-span"> Surgical Training</span> Handbook for <span id="home-title-span">Residents</span></h1>
          <p id="home-describe">
            Welcome to the Surgical Training Handbook, created for surgical residents.
            Here, you'll find step-by-step techniques, tips, and practical guidance to support
            you through your residency, helping you succeed in your surgical training and career.
          </p>
          <h3 id="home-doctor">- Dr. BALAMURALI BALAKRISHNAN</h3>
          <div id="home-describe-div">
            <p id="home-role">
              MS General Surgery <br/>Resident ~ Third year, RIMS Ranchi <br/>From Vellore, Tamilnadu
            </p>
          </div>
        </div>
      </div>

      {/************************************** Chapters Section *******************************************/}
      <div className="section" id="chapters-section">
        <h1 id="chapter">
          <span id="about-heading-span">~</span> CHAPTERS <span id="about-heading-span">~</span>
        </h1>
        <div id="chapter-intro">
          <img src={chap} alt="Chapter" id="chapter-pic" />
          <p id="chapter-title">
            This guide covers a series of essential surgical procedures commonly
            encountered during a residency. Each chapter provides a step-by-step approach
            to key surgeries, including ICD insertion, Jabouley's procedure, circumcision,
            appendectomy, hernia repair, Graham patch repair, and stoma site marking. With a
            focus on proper technique, necessary instruments, and important precautions, this
            resource aims to help residents develop the skills needed to perform these procedures
            effectively and safely.
          </p>
        </div>
      </div>
      
      <TestimonialsCarousel />

      {/************************************** Contact Form Section *******************************************/}
      <div className="section" id="reachout-section">
        <h1 id="chapter">
          <span id="about-heading-span">~</span> CONTACT <span id="about-heading-span">~</span>
        </h1>
        <div id="contact-div">
          <img src={heart} alt="Contact" id="contact-pic" />
          <div className="form-box">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
