# Gym Management System

A comprehensive web-based application designed to streamline gym operations, member management, and administrative tasks. Built with Django and Docker.

## 🚀 Features

### member & Trainer Management
- **Members**: Register new members, manage profiles, track body metrics (Height, Weight, BMI), and manage memberships.
- **Trainers**: Manage trainer profiles, specializations, and assign trainers to members.

### Operational Tools
- **Attendance**: Track member check-in and check-out times.
- **Payments**: Process membership payments, view transaction history, and generate invoices.
- **Dashboard**: Centralized hub for quick overview of gym statistics.
- **Reports**: View revenue reports and get alerts for expiring memberships.
- **Utilities**: Built-in BMI Calculator and Progress Tracker.

### User Interface
- **Public Pages**: Home, About, Services, and Contact pages for prospective members.
- **Responsive Design**: Accessible on various devices.

## 🛠 Technology Stack

- **Backend**: Django (Python)
- **Database**: MySQL / MariaDB
- **Frontend**: HTML, CSS, JavaScript (Django Templates)
- **Deployment/Containerization**: Docker & Docker Compose

## ⚙️ Installation & Setup

### Option 1: Using Docker (Recommended)

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd gymmgmt
   ```

2. **Build and start the containers:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:8000`.

### Option 2: Manual Installation

1. **Prerequisites:**
   - Python 3.8+
   - MySQL Server

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Database:**
   - Ensure MySQL is running.
   - Create a database named `gym_db`.
   - Update `gymmgmt/settings.py` or set environment variables for `MYSQL_USER` and `MYSQL_PASSWORD`.

5. **Run Migrations:**
   ```bash
   python manage.py migrate
   ```

6. **Create Superuser (Admin):**
   ```bash
   python manage.py createsuperuser
   ```

7. **Run the server:**
   ```bash
   python manage.py runserver
   ```

## 📂 Project Structure

```
gymmgmt/
├── gym/                # Core gym application logic (Views, Models, URLs)
├── gymmgmt/            # Project configuration (Settings, WSGI, Main URLs)
├── templates/          # HTML templates for the application
├── static/             # Static files (CSS, JS, Images)
├── users/              # User authentication app
├── docker-compose.yml  # Docker services configuration
├── Dockerfile          # Docker build instructions
├── manage.py           # Django management script
└── requirements.txt    # Python dependencies
```

## 🛡 License

This project is open-source and available for educational and personal use.
