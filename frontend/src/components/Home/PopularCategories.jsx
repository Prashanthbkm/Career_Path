/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
      link: "https://www.behance.net/",
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500 Open Positions",
      icon: <TbAppsFilled />,
      link: "https://developer.android.com/",
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
      link: "https://frontendmasters.com/",
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Positions",
      icon: <FaReact />,
      link: "https://www.mongodb.com/mern-stack",
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
      link: "https://www.accounting.com/",
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
      link: "https://ai.google/",
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
      link: "https://www.adobe.com/products/aftereffects.html",
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions",
      icon: <IoGameController />,
      link: "https://unity.com/",
    },
  ];

  return (
    <div className="categories">
      <h3>POPULAR CATEGORIES</h3>
      <div className="banner">
        {categories.map((element) => (
          <a
            href={element.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            key={element.id}
          >
            <div className="icon">{element.icon}</div>
            <div className="text">
              <p>{element.title}</p>
              <p>{element.subTitle}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Inline CSS Styling */}
      <style jsx>{`
        .categories {
          text-align: center;
        }
        .categories h3 {
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
      `}</style>
    </div>
  );
};

export default PopularCategories;
