# React Authentication System

A simple authentication-based frontend application built using React and the FreeAPI Authentication Module.

This project demonstrates a complete authentication flow including user registration, login, logout, authenticated profile fetching, form validation, and session-based UI rendering.

---

## Features

- User Registration
- User Login
- Logout Functionality
- Fetch Current Logged-In User
- Protected Profile View
- Form Validation
- Success & Error Messages
- Conditional Rendering Based on Auth State
- Token-Based Authentication
- Clean Responsive UI

---

## Tech Stack

- React
- JavaScript
- CSS
- Fetch API
- FreeAPI Authentication APIs

---

## API Endpoints Used

### Register User

POST https://api.freeapi.app/api/v1/users/register

### Login User

POST https://api.freeapi.app/api/v1/users/login

### Logout User

POST https://api.freeapi.app/api/v1/users/logout

### Get Current User

GET https://api.freeapi.app/api/v1/users/current-user

---

## Project Structure

```bash
src/
│
├── components/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Profile.jsx
│   └── Logout.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```
## Learning Outcomes

Through this project, I learned:
- React component architecture
- State management using useState
- Side effects using useEffect
- Props and lifted state
- Controlled forms in React
- API integration using Fetch API
- Authentication flow handling
- Conditional rendering
- Token-based requests
