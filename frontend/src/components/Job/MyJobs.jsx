/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [editingMode, setEditingMode] = useState(null);
  const { isAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  // Fetching all jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/v1/job/getmyjobs", {
          withCredentials: true,
        });
        setMyJobs(data.myJobs || []);
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred");
        setMyJobs([]);
      }
    };
    fetchJobs();
  }, []);

  // Redirect if not authorized or not an Employer
  useEffect(() => {
    if (!isAuthorized || (user && user.role !== "Employer")) {
      navigateTo("/");
    }
  }, [isAuthorized, user, navigateTo]);

  // Function For Enabling Editing Mode
  const handleEnableEdit = (jobId) => {
    setEditingMode(jobId);
  };

  // Function For Disabling Editing Mode
  const handleDisableEdit = () => {
    setEditingMode(null);
  };

  // Function For Updating The Job
  const handleUpdateJob = async (jobId) => {
    const updatedJob = myJobs.find((job) => job._id === jobId);
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/job/update/${jobId}`,
        updatedJob,
        { withCredentials: true }
      );
      toast.success(response.data.message);
      setEditingMode(null);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  // Function For Deleting Job
  const handleDeleteJob = async (jobId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/v1/job/delete/${jobId}`, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      setMyJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  // Handle input changes in the job form
  const handleInputChange = (jobId, field, value) => {
    setMyJobs((prevJobs) =>
      prevJobs.map((job) =>
        job._id === jobId ? { ...job, [field]: value } : job
      )
    );
  };

  return (
    <div className="myJobs page">
      <div className="container">
        <h1>Your Posted Jobs</h1>
        {myJobs.length > 0 ? (
          <div className="banner">
            {myJobs.map((element) => (
              <div className="card" key={element._id}>
                <div className="content">
                  <div className="short_fields">
                    <div>
                      <span>Title:</span>
                      <input
                        type="text"
                        disabled={editingMode !== element._id}
                        value={element.title}
                        onChange={(e) => handleInputChange(element._id, "title", e.target.value)}
                      />
                    </div>
                    <div>
                      <span>Country:</span>
                      <input
                        type="text"
                        disabled={editingMode !== element._id}
                        value={element.country}
                        onChange={(e) => handleInputChange(element._id, "country", e.target.value)}
                      />
                    </div>
                    {/* Add similar input fields for other fields like city, category, salary, etc. */}
                  </div>
                </div>
                <div className="button_wrapper">
                  <div className="edit_btn_wrapper">
                    {editingMode === element._id ? (
                      <>
                        <button onClick={() => handleUpdateJob(element._id)} className="check_btn">
                          <FaCheck />
                        </button>
                        <button onClick={handleDisableEdit} className="cross_btn">
                          <RxCross2 />
                        </button>
                      </>
                    ) : (
                      <button onClick={() => handleEnableEdit(element._id)} className="edit_btn">
                        Edit
                      </button>
                    )}
                  </div>
                  <button onClick={() => handleDeleteJob(element._id)} className="delete_btn">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>You&apos;ve not posted any jobs or may have deleted all of your jobs!</p>
        )}
      </div>
    </div>
  );
};

export default MyJobs;
