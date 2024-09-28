import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faDribbble,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import BGVideo from "../../assets/video/main.mp4";
import Swal from "sweetalert2";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Full Name must be at least 3 characters long";
    } else if (!isNaN(formData.fullName)) {
      newErrors.fullName = "Full Name cannot be a number";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    // Message validation
    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Retrieve existing data from local storage
      let existingData = JSON.parse(localStorage.getItem("contactFormData"));

      // Ensure existingData is an array
      if (!Array.isArray(existingData)) {
        existingData = [];
      }

      // Append new data to the existing data
      existingData.push(formData);

      // Save the updated array back to local storage
      localStorage.setItem("contactFormData", JSON.stringify(existingData));

      // Show thank you message
      Swal.fire({
        title: "Thank You!",
        text: "Your message has been sent successfully.",
        icon: "success",
      });

      // Clear the form
      setFormData({ fullName: "", email: "", message: "" });
    }
  };

  const VideoBackground = () => (
    <video autoPlay muted loop className="video-background">
      <source src={BGVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  return (
    <div className="maincontact">
      <VideoBackground />
      <section id="contact">
        <div className="social">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faDribbble} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faBehance} />
          </a>
        </div>
        <div className="contact-box">
          <div className="c-heading">
            <h2>Contact Us</h2>
            <p>Call Or Email Us Regarding Questions Or Issues</p>
          </div>
          <div className="c-inputs">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}

              <input
                type="email"
                name="email"
                placeholder="Example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <textarea
                name="message"
                placeholder="Write Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="error">{errors.message}</p>}

              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1701.5252574812218!2d74.31603229143637!3d31.46779655679461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906abd2d8f2db%3A0x2d4bd93a1eb25b41!2sArfa%20Technologies!5e0!3m2!1sen!2s!4v1596774150754!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;
