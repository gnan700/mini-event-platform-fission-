# Mini Event Management System

## Description
Built a full-stack application using React, Express, and MongoDB for managing events. Features include user authentication, event creation, browsing events, and user registration for events. Implemented dynamic event visibility for authenticated and non-authenticated users, enhancing user experience and security.

## Features
- **User Authentication**: Secure user login and registration.
- **Event Creation**: Users can create new events.
- **Browse Events**: All users can browse events. Non-authenticated users see all events, while authenticated users see only unregistered events.
- **User Registration for Events**: Authenticated users can register for events.

## Technologies Used
- **Frontend**: React, Vite
- **Backend**: Express.js
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **Icons**: react-icons/bs

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Heetika22/Event-Management-App.git
   cd event-management-system
   ```
2. **Install frontend dependencies**:
   ```bash
   cd Event-Management-App
   npm install
   ```
3. **Install backend dependencies**:
   ```bash
   cd server
   npm install
   ```
4. **Set up MongoDB**:
   - Ensure MongoDB is installed and running.
   - Create a database and make changes in db.js file.
  
5. **Configure environment variables**:
   - Create a .env file in the server directory and add the JWT_SECRET
  
## Usage

1. **Start the backend server**:
   ```bash
   cd server
   node index.js
   ```
2. **Start the frontend development server**:
   ```bash
   cd ..
   npm run dev
   ```

## 🚀 MERN Deployment   
### Backend → Render | Frontend → Vercel

---

### 🔹 Backend Deployment (Render)

1. Push backend code to GitHub

2. Go to **Render**
   - New → **Web Service**
   - Connect GitHub repo

3. Configure service:
  - Root Directory: backend
  - Build Command: npm install
  - Start Command: node index.js

4. Add Environment Variables:
  - MONGO_URI = <your_mongodb_uri>
  - JWT_Token = <your token>

5. Deploy

✅ Backend URL: https://your-backend.onrender.com


---

### 🔹 Frontend Deployment (Vercel)

1. Push frontend code to GitHub

2. Go to **Vercel**
   - New Project → Import repo

3. Configure project:
  - Framework Preset: React / Vite
  - Build Command: npm run build
  - Output Directory: dist


4. Deploy

✅ Frontend URL: https://your-app.vercel.app


---

## 🔹 Final Connection Flow
Vercel (Frontend) → Render (Backend) → MongoDB Atlas


---

## ⚠️ Important Notes
- Allow CORS for Vercel domain in backend
- Render free service may sleep on inactivity
- Always use HTTPS URLs in frontend

--- 






