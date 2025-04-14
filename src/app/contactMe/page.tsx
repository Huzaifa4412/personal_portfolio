"use client";
import Button from "@/components/SendMsgBtn";
import React, { useState } from "react";
import styled from "styled-components";

const Form = () => {
  const [formData, useState_formData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const HandleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    useState_formData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <StyledWrapper>
      <div className="section-title">
        <h2>Get In Touch</h2>
        <span className="subtitle">Contact Me</span>
      </div>

      <div className="content-container">
        <div className="map-container">
          <div className="map-overlay"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d14476.088093286831!2d67.17649!3d24.8972304!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d24.895892099999998!2d67.1822138!5e0!3m2!1sen!2s!4v1744662341441!5m2!1sen!2s&style=dark"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter:
                "invert(90%) hue-rotate(180deg) brightness(90%) contrast(85%)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4>Call</h4>
                <a href="tel:+923142249632">+923142249632</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:mukhtarhuzaifa436@gmail.com">
                  mukhtarhuzaifa436@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-container">
          <form
            className="form"
            action="https://formspree.io/f/meoadaak"
            method="POST"
          >
            <div className="form-group">
              <input
                className="form-input"
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={HandleChange}
              />
              <label className={formData.name ? "active" : ""}>Full Name</label>
            </div>

            <div className="form-group">
              <input
                className="form-input"
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={HandleChange}
              />
              <label className={formData.email ? "active" : ""}>Email</label>
            </div>

            <div className="form-group">
              <textarea
                required
                className="form-input"
                name="message"
                value={formData.message}
                onChange={HandleChange}
              ></textarea>
              <label className={formData.message ? "active" : ""}>
                Message
              </label>
            </div>

            <div className="w-full flex items-center justify-center">
              <Button />
            </div>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 80px 20px;

  .section-title {
    text-align: center;
    margin-bottom: 50px;
  }

  .section-title h2 {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 8px;
  }

  .section-title .subtitle {
    color: #c778dd;
    font-size: 16px;
    display: block;
    position: relative;
  }

  .section-title .subtitle::after {
    content: "";
    display: block;
    width: 70px;
    height: 2px;
    background: #c778dd;
    margin: 15px auto 0;
  }

  .content-container {
    display: flex;
    flex-direction: row;
    width: 90%;
    max-width: 1200px;
    height: 550px;
    gap: 30px;
    margin: 0 auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    overflow: hidden;
  }

  .map-container {
    flex: 1;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 16px 0 0 16px;
  }

  .map-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(33, 33, 33, 0.15);
    z-index: 1;
    pointer-events: none;
  }

  .contact-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(33, 33, 33, 0.85);
    padding: 20px;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    backdrop-filter: blur(5px);
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 10px;
  }

  .info-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: rgba(199, 120, 221, 0.1);
    border-radius: 50%;
    color: #c778dd;
  }

  .info-item h4 {
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .info-item a,
  .info-item p {
    color: #abb2bf;
    font-size: 13px;
    text-decoration: none;
    transition: color 0.3s;
  }

  .info-item a:hover {
    color: #c778dd;
  }

  .form-container {
    flex: 1;
    background:
      linear-gradient(#1e2028, #191a1f) padding-box,
      linear-gradient(120deg, transparent 25%, #c778dd, #abb2bf) border-box;
    border: 2px solid transparent;
    padding: 40px 30px;
    font-size: 14px;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    border-radius: 0 16px 16px 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    color: #414141;
    position: relative;
    width: 100%;
  }

  .form-input {
    color: white;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #414141;
    border-radius: 5px;
    padding: 15px;
    outline: none;
    width: 100%;
    transition: all 0.3s;
  }

  .form-input:focus {
    border-color: #c778dd;
    box-shadow: 0 0 0 2px rgba(199, 120, 221, 0.2);
  }

  textarea.form-input {
    min-height: 150px;
    resize: vertical;
  }

  .form-group label {
    position: absolute;
    top: 15px;
    left: 15px;
    pointer-events: none;
    transition: 0.3s;
    color: #abb2bf;
  }

  .form-group input:focus ~ label,
  .form-group textarea:focus ~ label,
  .form-group label.active,
  .form-group input:valid ~ label,
  .form-group textarea:valid ~ label {
    top: -10px;
    left: 10px;
    background: #191a1f;
    padding: 0 5px;
    font-size: 12px;
    color: #c778dd;
  }

  @media (max-width: 900px) {
    .content-container {
      flex-direction: column;
      height: auto;
    }

    .map-container,
    .form-container {
      width: 100%;
      height: 400px;
      border-radius: 16px;
    }

    .map-container {
      margin-bottom: 30px;
    }
  }
`;

export default Form;
