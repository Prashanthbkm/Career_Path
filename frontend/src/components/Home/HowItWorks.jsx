/* eslint-disable no-unused-vars */
import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>How JobZee Works</h3>
        <div className="banner">
          {/* Link for Create Account */}
          <div className="card">
            <Link to="/register">
              <FaUserPlus />
              <p>Create Account</p>
              <p>Sign up to access job listings or post new opportunities.</p>
            </Link>
          </div>

          {/* Link for Find a Job/Post a Job */}
          <div className="card">
            <Link to="/job/getall">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>Browse available jobs or post your own to attract talent.</p>
            </Link>
          </div>

          {/* Link for Apply for Job/Recruit Suitable Candidates */}
          <div className="card">
            <Link to="/job/post">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>Apply for jobs or hire the best candidates for your openings.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
