# Career Path — Full-stack Job Portal Application

An intuitive full-stack job portal application designed to streamline the job-seeking and recruitment process. It empowers job seekers to create profiles, search and apply for jobs, while recruiters can post listings, manage applicants, and view real-time updates — all through a secure, modern web platform.

---

## 🚀 Features

* 🧑‍💼 Job Seeker Profile Creation & Management
* 🔍 Advanced Job Search & Filtering
* 📝 Apply for Jobs Seamlessly
* 📋 Recruiter Job Posting & Management
* 📊 Real-time Applicant Tracking
* 🔐 Secure Authentication & Authorization
* ⚡ Responsive UI built with React.js
* ⚙️ Backend APIs with Node.js & Express
* 💾 MongoDB for Data Storage

---

## 🛠️ Tech Stack

### Backend

* Node.js with Express.js
* MongoDB & Mongoose ODM
* JWT-based Authentication & Authorization
* RESTful API design

### Frontend

* React.js with Vite
* React Router for navigation
* Axios for API calls with JWT interceptors
* Responsive design with CSS Modules

---

## 📂 Project Structure

```
/backend
  ├── controllers
  ├── models
  ├── routes
  ├── middleware
  └── config
/frontend
  ├── components
  ├── pages
  ├── context
  └── services
```

---

## 🧪 How to Run Locally

1. Clone the repo:

```bash
git clone https://github.com/Prashanthbkm/Career_Path.git
cd Career_Path
```

2. Run backend:

```bash
cd backend
npm install
npm start
```

3. Run frontend:

```bash
cd frontend
npm install
npm run dev
```

4. Open your browser:

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend API: [http://localhost:5000](http://localhost:5000) (or your configured port)

---

## 🔐 API Endpoints

* **Auth**

  * POST `/api/auth/register` — Register new user
  * POST `/api/auth/login` — Login user

* **Jobs**

  * GET `/api/jobs` — List jobs
  * POST `/api/jobs` — Create job (recruiter)
  * PUT `/api/jobs/:id` — Update job
  * DELETE `/api/jobs/:id` — Delete job

* **Applications**

  * POST `/api/applications` — Apply for a job
  * GET `/api/applications` — Get applications

---

## 📌 Future Enhancements

* Real-time Notifications for applicants and recruiters
* Resume Upload and Parsing
* Advanced AI-powered Job Recommendations
* Interview Scheduling & Calendar Integration
* Multi-language Support

---

## 🧑‍💻 Author

Prashanth B K M


LinkedIn: [linkedin.com/in/prashanthbkm](https://linkedin.com/in/prashanthbkm)
GitHub: [github.com/Prashanthbkm](https://github.com/Prashanthbkm)

---

## 📄 License

MIT License — Feel free to use, modify, and contribute!

