# HIRELY | JOB based application includes: 

1. Major Features of Job based platform
- User authentication (Signup/Login for Job Seekers and Employers).
- JOB Posting (Employers).
- JOB Search (Seekers).
- Resume upload & profile creation.
- Admin & User Diff. Dashboard.

````` Optional ``````
- Subscription Plans (Employers).
- AI based Resume builder.
- Video interviews integration (e.g., via Zoom API).
- AI based job recommendation. 

2. Techstack Used 
- MongoDB 
- Express
- React
- NodeJS
- Cloudinary 
- Shadcn UI
- Vercel (FDT Deployment)
- Render (Backend Deployment)

# Step by Step Approach to build Hirely  
Note : [ Use ✅ when task completed & ❌ if there is any blocker ]

i. Initial Setup 
    1. Set up a GitHub repository for version control. ✅
    2. Set up a React project via Vite. ✅
    3. Setup basic Project for FDT initially. ✅
    4. Install dep : FDT (react-router-dom, axios, zustand) , Backend (express,mongoose,cors,dotenv, jsonwebtoken, bcrypt). ✅
    5. Create a MongoDB Atlas Account. ✅

ii. Authentication
    A. Backend
        1. Create a User schema with fields for email, password, role, etc.
        2. Implement routes:
            i. POST /api/auth/register: Register a new user (Job Seeker or Employer).
            ii. POST /api/auth/login: Authenticate user and return JWT.
        3. Hash passwords using bcrypt.
        4. Protect routes using JWT middleware.

    B. Frontend
        1. Create Signup and Login pages with forms.
        2. Implement API calls to backend for registration and login.
        3. Store JWT token in localStorage or cookies.
        4. Redirect users based on roles (e.g., Employer → Dashboard, Job Seeker → Job Listings).

iii. Job Posting Feature
    A. Backend 
        1. Create a Job schema with fields like title, description, salary, location, and postedBy.
        2. Implement routes:
            i. POST /api/jobs: Allow Employers to post jobs.
            ii. GET /api/jobs: Retrieve all jobs.
            iii. GET /api/jobs/:id: Retrieve job details.
            iv. PUT /api/jobs/:id: Update a job (Employer only).
            v. DELETE /api/jobs/:id: Delete a job (Employer only).

    B. Frontend
        i. For Employers:
            1. Create a "Post Job" form.
            2. Implement a dashboard to view, edit, and delete posted jobs.
        ii. For Job Seekers:
            1. Create a "Job Listings" page with a search bar and filters (e.g., location, salary).
            2. Create a "Job Details" page.

iv. Job Application System
    A. Backend
        i. Create an application schema with fields like jobId,userId, resume, and status.
        ii. Implement routes:
            1. POST /api/applications: Allow Job Seekers to apply for jobs.
            2. GET /api/jobs/:id/applications: Allow Employers to view applicants for a job.
            3. PUT /api/applications/:id: Allow Employers to update application status.
    B. Frontend
        i. For Job seekers: 
            1. Add an "Apply Now" button on the Job Details page.
            2. Create a form to upload resumes and submit applications.
            3. Create a "My Applications" page to track application statuses.

        ii. For Employers:
            1. Display a list of applicants for each job on the Employer Dashboard.
            2. Add options to update application statuses (e.g., Accepted, Rejected).

v. Profile Management
    A. Backend
        i. Extend the User schema to include fields like name, profilePicture, resume, experience, and skills.
        ii. Implement routes:
            A. GET /api/users/:id: Fetch user profile.
            B. PUT /api/users/:id: Update user profile.
    
    B. Frontend
        i. Create Profile Page: 
            A. For Job Seekers: Allow users to update personal details, upload resumes, and add skills/experience.
            B. For Employers: Allow users to update company details like name, logo, and description.

vi. Admin Panel
    A. Backend
        i. Create routes for admin tasks:
            A. Manage users (GET /api/admin/users, DELETE /api/admin/users/:id).
            B. Manage jobs (GET /api/admin/jobs, DELETE /api/admin/jobs/:id).
            C. Add admin middleware to protect these routes.

    B. Frontend
        i. Create an admin dashboard:
            A. View all users and jobs.
            B. Add delete or ban functionality for users and jobs.
            C. Display basic analytics (e.g., total users, jobs posted). 

vii. Deployment
    A. Frontend:
        - Deploy React app using Netlify or Vercel.
    B. Backend:
        - Deploy Node.js app using Heroku or Render.
    C. Database:
        - Use MongoDB Atlas for the production database.

