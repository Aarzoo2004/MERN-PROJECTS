# 🍽️ Restaurant Reservation System (MERN Stack)

A **full-stack restaurant reservation web application** built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
This project allows users to explore restaurant details, view the menu, learn about the team, and make online reservations — with a smooth, responsive UI.

---

## 🚀 Features

### 🌐 Frontend (React + Vite)

* Modern responsive UI with **React.js (Vite)**.
* Pages: `Home`, `About Us`, `Menu`, `Team`, `Reservation`, `Success`, `404`.
* Components: Navbar, Hero, About, Qualities, Menu, Team, WhoAreWe, Footer, etc.
* Smooth scrolling with **react-scroll**.
* Routing with **react-router-dom**.
* Notifications with **react-hot-toast**.
* REST API integration via **Axios**.
* UI enhancements with **react-icons**.

### ⚙️ Backend (Node.js + Express)

* REST API using **Express.js**.
* MongoDB database handled with **Mongoose**.
* Reservation schema & controller for booking data.
* Error handling middleware.
* Secure environment variables with **dotenv**.
* Cross-origin requests handled with **cors**.
* Form input validation with **validator**.

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite)
* React Router DOM
* Axios
* React Hot Toast
* React Scroll
* React Icons

**Backend**

* Node.js
* Express.js
* Mongoose
* Cors
* Dotenv
* Validator

**Database**

* MongoDB (Atlas or Local)

---

## 📦 Installed Packages

### Frontend:

```json
"axios"
"react"
"react-dom"
"react-hot-toast"
"react-icons"
"react-router-dom"
"react-scroll"
```

### Backend:

```json
"cors"
"dotenv"
"express"
"mongoose"
"validator"
```

---

## 📂 Project Structure

```bash
Restaurant-MERN/
│── backend/
│   ├── config/           # Environment variables
│   ├── controller/       # Reservation logic
│   ├── database/         # MongoDB connection
│   ├── error/            # Error handler
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API endpoints
│   ├── app.js            # Express app
│   ├── server.js         # Entry point
│
│── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Pages (Home, Success, NotFound)
│   │   ├── App.jsx       # Root component
│   │   ├── main.jsx      # Entry file
│   │   ├── restApi.json  # API routes config
│   ├── index.html
│
│── package.json
│── README.md
```

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Restaurant-MERN.git
cd Restaurant-MERN
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend/config`:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
```

Run the backend:

```bash
npm start
```

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
```

Run the frontend:

```bash
npm run dev
```

Frontend → `http://localhost:5173`
Backend → `http://localhost:5000`

---

## 📡 API Endpoints

| Method | Endpoint                  | Description            |
| ------ | ------------------------- | ---------------------- |
| POST   | `/reservation/send`       | Create a reservation   |
| GET    | `/reservation/all` (opt.) | Fetch all reservations |

---

## 🎨 UI Preview
