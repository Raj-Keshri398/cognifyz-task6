# Cognifyz Task 6 – User Authentication System

A complete **Node.js + Express + MySQL** based authentication project deployed **LIVE** using **Render** and **Railway MySQL**.

This project includes **User Registration, Login, Session-based Authentication, and Dashboard**, with secure password hashing using **bcrypt**.

---

## 🚀 Live Demo

🔗 **Live URL:** [https://cognifyz-task6.onrender.com](https://cognifyz-task6.onrender.com)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, Bootstrap 5, HTML, CSS, JavaScript
* **Database:** MySQL (Railway Cloud)
* **Authentication:** bcryptjs, express-session
* **Deployment:**

  * Backend: Render
  * Database: Railway

---

## ✨ Features

* User Registration with validation
* Password hashing using bcrypt
* User Login with session management
* Protected Dashboard route
* Logout functionality
* MySQL database integration
* Fully deployed on cloud (Render + Railway)

---

## 📂 Project Structure

```
cognifyz-task6/
│
├── views/
│   ├── index.ejs
│   ├── register.ejs
│   ├── login.ejs
│   └── dashboard.ejs
│
├── app.js
├── db.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ⚙️ Environment Variables

Create environment variables in **Render Dashboard**:

```
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASS=your_mysql_password
DB_NAME=your_database_name
DB_PORT=your_mysql_port
SESSION_SECRET=task6_secret
```

> ⚠️ `.env` file is used locally but **not committed** to GitHub.

---

## 🗄️ Database Setup (Railway MySQL)

Run this SQL **once** in Railway MySQL Database console:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(15),
  address TEXT,
  pincode VARCHAR(10),
  password VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## ▶️ Run Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Raj-Keshri398/cognifyz-task6.git
cd cognifyz-task6
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Server

```bash
npm run dev
```

Open browser:

```
http://localhost:3000
```

---

## 🔐 Authentication Flow

1. User registers via `/register`
2. Password is hashed using bcrypt
3. User logs in via `/login`
4. Session is created using express-session
5. Dashboard `/dashboard` is protected
6. User can logout using `/logout`

---

## 🌐 Deployment Details

* **Backend hosted on Render**
* **MySQL Database hosted on Railway**
* Database connected using **public MySQL URL + SSL**
* Environment variables configured securely

---

## 🧠 Learning Outcomes

* Cloud deployment using Render
* MySQL cloud integration (Railway)
* Secure authentication using bcrypt
* Environment variable management
* Session-based authentication

---

## 👨‍💻 Author

**Raj Keshri**
GitHub: [https://github.com/Raj-Keshri398](https://github.com/Raj-Keshri398)

---

## 📌 Note

This project was built as part of **Cognifyz Internship – Task 6** and demonstrates real-world backend deployment and database integration.

---

⭐ If you like this project, feel free to give it a star on GitHub!
