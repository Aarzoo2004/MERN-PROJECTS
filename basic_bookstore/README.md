
# Basic MERN Stack Book Store

A simple **MERN (MongoDB, Express, React, Node.js) stack project** for managing books. This project demonstrates full-stack development with **REST APIs**, **React components**, and **client-side routing** using **React Router DOM**.

---

## Features

* Create, Read, Update, Delete (CRUD) books
* MongoDB database integration using Mongoose
* Express backend with structured routes
* React frontend with reusable components
* Modal forms for adding/editing books
* Notifications using **Notistack**
* Loading spinners for async operations
* TailwindCSS for responsive styling

---

## Project Structure

```
backend/
├── config.js
├── index.js
├── models/
│   └── bookModel.js
├── routes/
│   └── booksRoute.js
frontend/
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── BooksCard.jsx
│   │   │   ├── BookSingleCard.jsx
│   │   │   ├── BooksTable.jsx
│   │   │   └── BookModal.jsx
│   │   └── Spinner.jsx
│   │   └── BackButton.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CreateBook.jsx
│   │   ├── EditBook.jsx
│   │   ├── ShowBook.jsx
│   │   └── DeleteBook.jsx
│   ├── main.jsx
│   └── index.css
```

---

## Installation

### Backend

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm i
```

3. Add `.env` or `config.js` with your MongoDB connection string.
4. Run the development server:

```bash
npm run dev
```

### Frontend

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm i
```

3. Start the development server:

```bash
npm run dev
```

---

## Dependencies

### Backend

* express
* nodemon
* mongoose
* cors

### Frontend

* react
* react-dom
* react-router-dom
* axios
* react-icons
* notistack
* tailwindcss

---

## Key Concepts

* **Express Router**: Modular routing using `express.Router()`.
* **Mongoose Models**: Schemas and models for MongoDB collections.
* **React State**: `useState` for managing component state.
* **React Effects**: `useEffect` for API calls and side effects.
* **Client-side Routing**: `BrowserRouter`, `Routes`, `Route`, `Link`.
* **Notifications**: Using `notistack` for success/error messages.
* **Reusable Components**: `BooksTable`, `BooksCard`, `BookSingleCard`, `Spinner`, `BookModal`.

---

## Usage

1. Start the backend server first.
2. Start the frontend server.
3. Navigate to `http://localhost:3000` to access the app.
4. Use the UI to **create, view, edit, and delete books**.

---

## Notes

* Make sure **MongoDB** is running and your connection string is correct.
* TailwindCSS is used for styling; ensure you follow the Vite setup for Tailwind.
* React Router DOM enables client-side routing for a single-page app experience.

---

## Author

**Aarzoo Asar**

---

