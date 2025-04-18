/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Context } from "../../main";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div className="footer-content">
        <div className="footer-text">
          Created with ❤️ | by Prashanth
          <br />
          &copy; 2024 All Rights Reserved.
       
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/b-k-m-prashanth-914773211?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FyYvDbBFSuCP7wMLTI0ZOA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/rock_prashanth_09/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <RiInstagramFill />
          </a>
          <a
            href="mailto:prashanthbkm72@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <MdEmail />
          </a>
          </div>
        </div>
      </div>

      {/* Inline CSS Styling */}
      <style jsx>{`
        footer {
          background-color: #1a1a1a;
          color: white;
          padding: 20px 0;
          text-align: center;
          position: relative;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-text {
          font-size: 1.2rem;
          margin-bottom: 15px;
          font-family: 'Arial', sans-serif;
        }

        .footer-icons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 10px;
        }

        .footer-icons .icon-link {
          font-size: 1.5rem;
          color: white;
          transition: color 0.3s ease;
        }

        .footer-icons .icon-link:hover {
          color: #0073e6; /* Change color on hover */
        }

        .footerShow {
          display: block;
        }

        .footerHide {
          display: none;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
