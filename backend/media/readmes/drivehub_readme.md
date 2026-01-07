# 🚗 DriveHub - Automotive Services & Marketplace Platform

DriveHub is a comprehensive web platform designed to connect vehicle owners with automotive service providers and product vendors. It serves as a dual-purpose hub: a **Marketplace** for buying car parts/accessories and a **Service Booking System** for scheduling repairs, maintenance, or doorstep services.

## 🌟 Features

### 🛒 Marketplace
- **Product Browsing**: Users can explore a wide range of automotive products categorized for easy navigation.
- **Vendor Management**: Vendors can list products, manage stock, and track pricing.
- **Approval System**: Products require admin approval before going live, ensuring quality control.
- **Order System**: Secure order processing and management.

### 🔧 Services
- **Service Booking**: Users can book appointments for specific services (e.g., Foam Wash, Engine Checkup).
- **Service Providers**: Mechanics and Shops can register, list their services, and set their own pricing.
- **Doorstep Options**: Support for mobile mechanics offering doorstep services.
- **Location & Scheduling**: Integrated scheduling and location details for workshops.
- **Booking Status**: Real-time tracking of booking status (Pending, Confirmed, Completed).

### 👥 User Roles
- **Customers**: Browse products, book services, track orders/bookings.
- **Vendors**: Sell physical products.
- **Mechanics**: Offer professional automotive services.
- **Admin**: Oversee the entire platform, approve vendors/products, and manage categories.

---

## 🛠️ Technology Stack

### Backend
- **Framework**: Django 5.x (Python)
- **API**: Django Rest Framework (DRF)
- **Database**: SQLite (Development)
- **Authentication**: Token-based Authentication
- **Key Libraries**: `django-cors-headers`, `Pillow` (Image handling)

### Frontend
- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router DOM 7
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Animations**: Framer Motion

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Python** (v3.10 or higher)
- **Node.js** (v16 or higher)
- **npm** (usually comes with Node.js)

---

## 🚀 Installation & Setup

### 1. Backend Setup (Django)

Navigate to the backend directory:
```bash
cd drivehub_backend
```

Create a virtual environment (optional but recommended):
```bash
# Windows
python -m venv venv
.\venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

Install the required Python packages:
*(Note: If a requirements.txt is missing, these are the core dependencies)*
```bash
pip install django djangorestframework django-cors-headers Pillow
```

Run database migrations:
```bash
python manage.py migrate
```

Start the development server:
```bash
python manage.py runserver
```
The backend will be available at `http://127.0.0.1:8000/`.

### 2. Frontend Setup (React)

Open a new terminal and navigate to the frontend directory:
```bash
cd drivehub_frontend
```

Install Node dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```
The frontend will be available at `http://localhost:5173/`.

---

## 📂 Project Structure

```
DRIVE_HUB/
├── drivehub_backend/       # Django Project Root
│   ├── accounts/           # User authentication & Profiles
│   ├── marketplace/        # Product & Category management
│   ├── orders/             # Order processing logic
│   ├── services/           # Service bookings & Provider logic
│   ├── drivehub_backend/   # Project settings & URL config
│   └── manage.py           # Django CLI utility
│
└── drivehub_frontend/      # React Project Root
    ├── src/
    │   ├── pages/          # Application views (Dashboard, Services, etc.)
    │   ├── components/     # Reusable UI components
    │   └── assets/         # Static assets
    ├── package.json        # Frontend dependencies
    └── vite.config.js      # Vite configuration
```

## 🔒 Configuration

- **CORS**: The backend is pre-configured to accept requests from `http://localhost:5173`.
- **Media**: Uploaded images (Products, Service Types) are stored locally in the backend directory.

## 🤝 Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
