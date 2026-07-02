# 🎓 JOSAA Counsellor

A full-stack web application that helps JEE aspirants predict eligible colleges and generate personalized choice-filling recommendations based on JoSAA cutoff data.

---

## 🚀 Features

### 📌 College Predictor
- Predict eligible colleges using JEE rank.
- Supports filtering by:
  - Quota (AI, HS, OS)
  - Seat Type
  - Gender
  - Institute Type (IIT, NIT, IIIT, GFTI)
  - Branch Preferences
- Categorizes colleges into:
  - 🟢 Dream
  - 🟠 Moderate
  - 🔵 Safe

---

### 📌 Choice Filling Generator *(Under Development)*

- Automatically generates an optimized JoSAA choice-filling order.
- Uses branch preferences and cutoff analysis.

---

### 📌 Recommendation Engine

Custom ranking algorithm that considers:

- Closing Rank
- User Rank
- Branch Preference
- Institute Type

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- CSS
- Axios

### Backend

- Node.js
- Express.js

### Database

- MySQL

### Tools

- Git
- GitHub
- Postman

---

## 📂 Project Structure

```
JOSAA-Counsellor

├── frontend
│   ├── src
│   ├── components
│   └── ...
│
├── jee_counselling
│   ├── src
│   ├── routes
│   ├── controllers
│   ├── services
│   └── server.js
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/aman-igu/JOSSA-Counsellor-.git
```

---

### Backend

```bash
cd backend

npm install

npm run dev
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## 🗄 Database

Import the JoSAA cutoff CSV into MySQL.

Create a database:

```sql
CREATE DATABASE josaa;
```

Update your `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=josaa
PORT=3000
```

---

## 🔮 Future Improvements

- AI Counselling Copilot
- Multi-Year Cutoff Analysis
- College Comparison
- Authentication
- Bookmark Favourite Colleges
- Export Choice Filling PDF

---

## 👨‍💻 Author

**Aman Dubey**

- IIT Jammu
- Electrical Engineering

GitHub:
https://github.com/aman-igu

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
