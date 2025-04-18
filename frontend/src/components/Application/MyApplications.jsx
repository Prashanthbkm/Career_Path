/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ResumeModal from "./ResumeModal";

const MyApplications = () => {
  const { user, isAuthorized } = useContext(Context) || {};
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");

  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigateTo("/");
      return;
    }

    const fetchApplications = async () => {
      try {
        const endpoint =
          user?.role === "Employer"
            ? "http://localhost:5000/api/v1/application/employer/getall"
            : "http://localhost:5000/api/v1/application/jobseeker/getall";

        const response = await axios.get(endpoint, { withCredentials: true });
        setApplications(response.data?.applications || []);
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to fetch applications."
        );
      }
    };

    fetchApplications();
  }, [isAuthorized, user, navigateTo]);

  const deleteApplication = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/application/delete/${id}`,
        { withCredentials: true }
      );
      toast.success(response.data.message);
      setApplications((prev) =>
        prev.filter((application) => application._id !== id)
      );
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete the application."
      );
    }
  };

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="my_applications page">
      {user?.role === "Job Seeker" ? (
        <div className="container">
          <h1>My Applications</h1>
          {applications.length === 0 ? (
            <h4>No Applications Found</h4>
          ) : (
            applications.map((element) => (
              <JobSeekerCard
                element={element}
                key={element._id}
                deleteApplication={deleteApplication}
                openModal={openModal}
              />
            ))
          )}
        </div>
      ) : (
        <div className="container">
          <h1>Applications From Job Seekers</h1>
          {applications.length === 0 ? (
            <h4>No Applications Found</h4>
          ) : (
            applications.map((element) => (
              <EmployerCard
                element={element}
                key={element._id}
                openModal={openModal}
              />
            ))
          )}
        </div>
      )}
      {modalOpen && (
        <ResumeModal imageUrl={resumeImageUrl} onClose={closeModal} />
      )}
    </section>
  );
};

export default MyApplications;

const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
  return (
    <div className="job_seeker_card">
      <div className="detail">
        <p>
          <span>Name:</span> {element?.name || "N/A"}
        </p>
        <p>
          <span>Email:</span> {element?.email || "N/A"}
        </p>
        <p>
          <span>Phone:</span> {element?.phone || "N/A"}
        </p>
        <p>
          <span>Address:</span> {element?.address || "N/A"}
        </p>
        <p>
          <span>Cover Letter:</span> {element?.coverLetter || "N/A"}
        </p>
      </div>
      <div className="resume">
        {element?.resume?.url ? (
          <img
            src={element.resume.url}
            alt="Resume"
            onClick={() => openModal(element.resume.url)}
          />
        ) : (
          <p>No Resume Uploaded</p>
        )}
      </div>
      <div className="btn_area">
        <button onClick={() => deleteApplication(element?._id)}>
          Delete Application
        </button>
      </div>
    </div>
  );
};

const EmployerCard = ({ element, openModal }) => {
  return (
    <div className="job_seeker_card">
      <div className="detail">
        <p>
          <span>Name:</span> {element?.name || "N/A"}
        </p>
        <p>
          <span>Email:</span> {element?.email || "N/A"}
        </p>
        <p>
          <span>Phone:</span> {element?.phone || "N/A"}
        </p>
        <p>
          <span>Address:</span> {element?.address || "N/A"}
        </p>
        <p>
          <span>Cover Letter:</span> {element?.coverLetter || "N/A"}
        </p>
      </div>
      <div className="resume">
        {element?.resume?.url ? (
          <img
            src={element.resume.url}
            alt="Resume"
            onClick={() => openModal(element.resume.url)}
          />
        ) : (
          <p>No Resume Uploaded</p>
        )}
      </div>
    </div>
  );
};
