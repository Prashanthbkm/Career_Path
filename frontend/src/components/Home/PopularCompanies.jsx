/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Hyderabad, Telangana, India",
      openPositions: 10,
      icon: <FaMicrosoft />,
      companyLink: "https://www.microsoft.com/en-in",
      positionsLink: "https://careers.microsoft.com/",
    },
    {
      id: 2,
      title: "Tesla",
      location: "Bangalore, Karnataka, India",
      openPositions: 5,
      icon: <SiTesla />,
      companyLink: "https://www.tesla.com/",
      positionsLink: "https://www.tesla.com/careers",
    },
    {
      id: 3,
      title: "Apple",
      location: "Mumbai, Maharashtra, India",
      openPositions: 20,
      icon: <FaApple />,
      companyLink: "https://www.apple.com/in/",
      positionsLink: "https://jobs.apple.com/en-in",
    },
  ];

  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                {/* Company Link */}
                <a
                  href={element.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-link"
                >
                  <div className="content">
                    <div className="icon">{element.icon}</div>
                    <div className="text">
                      <p>{element.title}</p>
                      <p>{element.location}</p>
                    </div>
                  </div>
                </a>
                {/* Open Positions Link */}
                <a
                  href={element.positionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="positions-link"
                >
                  <button>Open Positions {element.openPositions}</button>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inline CSS Styling */}
      <style jsx>{`
        .companies {
          text-align: center;
          margin: 20px;
        }
        .companies h3 {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .banner {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .card {
          text-decoration: none; /* Remove default link styling */
          color: inherit; /* Inherit text color */
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
          width: 200px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .card .icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }
        .card .text p {
          margin: 5px 0;
          text-align: center;
        }
        .card a {
          text-decoration: none; /* Remove default link styling */
          color: inherit;
        }
        .card a:hover {
          color: #0073e6; /* Optional: add hover color effect for links */
        }
        .card button {
          background-color: #0073e6;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .card button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default PopularCompanies;
