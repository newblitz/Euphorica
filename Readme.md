#  Psychology Web Project

![Python](https://img.shields.io/badge/Python-3.12-blue)
![Django](https://img.shields.io/badge/Django-5.2.7-green)
![License](https://img.shields.io/badge/License-MIT-yellow)
# Euphorica
 
> The psychiatrist's second brain — session booking, patient records, and AI-generated notes in one place.
 
---
 
## What is Euphorica?
 
Euphorica is a full-stack mental health management platform built for two people: the patient who needs to book a session, and the psychiatrist who needs to remember everything about them.
 
Most mental health tools stop at appointment scheduling. Euphorica goes further — it gives the psychiatrist a private, structured digital workspace that replaces scattered paper notes, Word files, and memory.
 
---
 
## The psychiatrist's workflow
 
**Before a session**
The psychiatrist opens the patient profile and sees the full history — past session notes, AI-generated summary of the last visit, flagged concerns, medications. Ready in under a minute.
 
**During or after a session**
The psychiatrist dumps raw observations — fragmented notes, patient statements, medication changes. Euphorica processes these and generates a clean, structured session summary:
- Presenting complaint
- Observations & assessment
- Medication updates
- Plan & follow-up actions
 
**No formatting. No rewriting. Just notes.**
 
---
 
## The patient's workflow
 
- Book a counselling session from the dashboard
- Receive an auto-generated Google Meet link
- Track upcoming and past appointments

---

## Table of Contents

- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Setup & Installation](#setup--installation)  
- [Usage](#usage)  
- [API Integration](#api-integration)  
- [Screenshots](#screenshots)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- User registration and authentication
- Modern, animated React frontend with smooth transitions
- Book counselling sessions with real-time availability
- Automatically generate Google Meet links for online sessions
- View upcoming appointments
- Admin dashboard to manage sessions and users
- Secure and responsive design with mobile support
- Beautiful gradient themes and micro-interactions  

---

## Technologies Used

- **Backend:** Python, Django
- **Frontend:** React, Vite, Framer Motion, Lucide React
- **Styling:** Modern CSS with gradient themes
- **Database:** SQLite / PostgreSQL
- **APIs:** Google Calendar API (for Meet link generation)
- **Other Tools:** Django REST Framework, Django CORS Headers  

---

## Setup & Installation

### Backend (Django)

1. Clone the repository
```bash
git clone https://github.com/yourusername/psychology-web.git
cd psychology-web
```

2. Set up Django backend
```bash
cd prutha
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The Django backend will run on `http://localhost:8000`

### Frontend (React)

1. Navigate to frontend directory
```bash
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The React frontend will run on `http://localhost:5173`

### Running Both Servers

Open two terminal windows:
- Terminal 1: Run Django backend (`cd prutha && python manage.py runserver`)
- Terminal 2: Run React frontend (`cd frontend && npm run dev`)

Access the application at `http://localhost:5173`
