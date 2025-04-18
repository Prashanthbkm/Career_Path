/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="container">
        <div className="logo">
          <img src="/JobZee-logos__white.png" alt="logo" />
        </div>
        <ul className={`menu ${show ? "show-menu" : ""}`}>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to={"/job/getall"} onClick={() => setShow(false)}>
              ALL JOBS
            </Link>
          </li>
          <li>
            <Link to={"/applications/me"} onClick={() => setShow(false)}>
              {user && user.role === "Employer"
                ? "APPLICANT'S APPLICATIONS"
                : "MY APPLICATIONS"}
            </Link>
          </li>
          {user && user.role === "Employer" ? (
            <>
              <li>
                <Link to={"/job/post"} onClick={() => setShow(false)}>
                  POST NEW JOB
                </Link>
              </li>
              <li>
                <Link to={"/job/me"} onClick={() => setShow(false)}>
                  VIEW YOUR JOBS
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}

          <button onClick={handleLogout}>LOGOUT</button>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>

      {/* Inline CSS Styling */}
      <style jsx>{`
        nav {
          background-color: #333;
          padding: 10px 20px;
          position: relative;
          transition: all 0.3s ease;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo img {
          width: 150px;
        }

        .menu {
          list-style-type: none;
          display: flex;
          gap: 20px;
          font-family: 'Times New Roman', serif; /* Classic font style */
          font-size: 1.1rem;
          color: white;
          margin: 0;
        }

        .menu li {
          transition: color 0.3s ease;
        }

        .menu li:hover {
          color: #0073e6;
        }

        .hamburger {
          display: none;
          font-size: 2rem;
          color: white;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .hamburger:hover {
          transform: scale(1.1);
        }

        .show-menu {
          display: block;
          animation: slideIn 0.3s ease-in-out;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .menu {
            display: none;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            position: absolute;
            top: 60px;
            right: 20px;
            background-color: #333;
            width: 200px;
            padding: 10px;
            border-radius: 5px;
          }

          .hamburger {
            display: block;
          }

          .menu li {
            padding: 10px;
            border-bottom: 1px solid #555;
          }

          .menu li:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
