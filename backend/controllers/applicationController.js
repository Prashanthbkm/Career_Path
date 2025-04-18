import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Application } from "../models/applicationSchema.js";
import { Job } from "../models/jobSchema.js";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

// Configure Cloudinary
cloudinary.config({
  cloud_name: "your-cloud-name",
  api_key: "your-api-key",
  api_secret: "your-api-secret",
});

// POST Application
export const postApplication = catchAsyncErrors(async (req, res, next) => {
  const { role } = req.user;

  if (role === "Employer") {
    return next(
      new ErrorHandler("Employers are not allowed to apply for jobs.", 403)
    );
  }

  if (!req.files || !req.files.resume) {
    return next(new ErrorHandler("Resume is required!", 400));
  }

  const { resume } = req.files;
  const allowedFormats = ["image/png", "image/jpeg", "image/pdf"];

  if (!allowedFormats.includes(resume.mimetype)) {
    return next(
      new ErrorHandler("Invalid file type. Please upload PNG, JPEG, or PDF.", 400)
    );
  }

  const cloudinaryResponse = await cloudinary.uploader.upload(
    resume.tempFilePath
  );

  const { name, email, coverLetter, phone, address, jobId } = req.body;

  if (!jobId || !mongoose.Types.ObjectId.isValid(jobId)) {
    return next(new ErrorHandler("Invalid or missing Job ID.", 400));
  }

  const jobDetails = await Job.findById(jobId);
  if (!jobDetails) {
    return next(new ErrorHandler("Job not found!", 404));
  }

  const application = await Application.create({
    name,
    email,
    coverLetter,
    phone,
    address,
    applicantID: {
      user: req.user._id,
      role: "Job Seeker",
    },
    employerID: {
      user: jobDetails.postedBy,
      role: "Employer",
    },
    resume: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    message: "Application Submitted!",
    application,
  });
});

// Employer Get All Applications
export const employerGetAllApplications = catchAsyncErrors(async (req, res, next) => {
  const { role } = req.user;

  if (role !== "Employer") {
    return next(new ErrorHandler("Unauthorized Access!", 403));
  }

  const applications = await Application.find({ "employerID.user": req.user._id });

  res.status(200).json({
    success: true,
    applications,
  });
});

// Job Seeker Get All Applications
export const jobseekerGetAllApplications = catchAsyncErrors(async (req, res, next) => {
  const { role } = req.user;

  if (role === "Employer") {
    return next(new ErrorHandler("Employers cannot access this resource.", 403));
  }

  const applications = await Application.find({ "applicantID.user": req.user._id });

  res.status(200).json({
    success: true,
    applications,
  });
});

// Job Seeker Delete Application
export const jobseekerDeleteApplication = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler("Invalid Application ID!", 400));
  }

  const application = await Application.findById(id);
  if (!application) {
    return next(new ErrorHandler("Application not found!", 404));
  }

  await application.deleteOne();

  res.status(200).json({
    success: true,
    message: "Application Deleted!",
  });
});
