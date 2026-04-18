import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!serviceID || !templateID || !publicKey) {
      toast.error("Email service not configured properly ❌");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(
        () => {
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        () => {
          toast.error("Failed to send message ❌");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="contact">
      <Navbar />

      <div className="contact-section">
        <div className="contact-body">
          <h1>Get in Touch</h1>
          <a href="mailto:mhadeshreyas911@gmail.com">
            <FaEnvelope /> mhadeshreyas911@gmail.com
          </a>
        </div>

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="user_details">
            <label>
              Name
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email Address
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <div className="user_msg">
            <label>
              Message
              <textarea
                name="message"
                placeholder="Write your message..."
                required
              />
            </label>
          </div>

          <div className="form_btn">
            <button
              className="submit-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        <div className="icons">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Contact;