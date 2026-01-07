# DistroFlow - Distribution Management System

DistroFlow is a comprehensive full-stack distribution management solution designed to streamline operations for distributors, wholesalers, and field sales teams. It combines a robust Django backend with a dynamic React frontend (web & mobile ready) to manage inventory, shops, orders, and sales efficiently.

## 🚀 Features

### Web & Mobile Interface
- **Responsive Design:** Built with React and Tailwind CSS, fully responsive for desktop and mobile devices.
- **Hybrid Mobile App:** Capacitor-integrated for deploying as an Android application.
- **Role-Based Access:** Distinct interfaces for Admins (Dashboard) and Sales Reps (POS).

### Core Functionality
- **Dashboard:** Real-time overview of orders, revenue, and active shops.
- **Inventory Management:** 
    - Track products with dual units (e.g., Box/Piece).
    - Manage categories and stock levels.
    - Real-time stock updates.
- **Shop/Customer Management:**
    - Maintain a database of shops/retailers including owner details, address, GST, and routes.
    - View purchase history per shop.
- **Point of Sale (POS):**
    - Fast order entry interface for sales reps.
    - Product selection by category.
    - Real-time cart calculation.
- **Order Processing:**
    - Order status tracking (Pending -> Approved).
    - Generate and print professional Invoice PDFs.

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** React 19
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **HTTP Client:** Axios
- **Mobile Runtime:** Capacitor (Android)
- **PDF Generation:** html2pdf.js

### Backend
- **Framework:** Django 5
- **API:** Django REST Framework (DRF)
- **Database:** SQLite (default)
- **CORS:** Django CORS Headers

---

## 📋 Prerequisites

Before running the project, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **Python** (v3.10 or higher)
- **Android Studio** (optional, for building the mobile app)

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd DMS_Project
```

### 2. Backend Setup
Navigate to the backend directory and set up the Python environment.

```bash
cd backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
# source venv/bin/activate

# Install dependencies
# Note: Ensure you have a requirements.txt, if not:
pip install django djangorestframework django-cors-headers

# Apply database migrations
python manage.py migrate

# Create an admin user
python manage.py createsuperuser

# Start the server
python manage.py runserver 0.0.0.0:8000
```
*The backend will run at `http://localhost:8000` (or your local IP).*

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory.

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```
*The web app will run at `http://localhost:3000`.*

---

## 🔧 Configuration

### API Connection
The frontend communicates with the backend via an API URL. 
If running on a real device or a different network, update the `baseURL` in `frontend/src/App.js` and `frontend/src/components/Sidebar.jsx` (if applicable).

**File:** `frontend/src/App.js`
```javascript
// Change localhost/IP to your backend server's IP
const API = axios.create({ baseURL: 'http://<YOUR_IP_ADDRESS>:8000/api/' });
```

**File:** `backend/backend/settings.py`
Ensure your frontend IP or domain is allowed in CORS settings.
```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://<YOUR_IP_ADDRESS>:3000",
]
# OR for development only:
CORS_ALLOW_ALL_ORIGINS = True
```

---

## 📱 Mobile Build (Android)

To build the project for Android using Capacitor:

1. **Build the React App:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Sync with Capacitor:**
   ```bash
   npx cap sync
   ```

3. **Open in Android Studio:**
   ```bash
   npx cap open android
   ```
   *From Android Studio, you can run the app on an emulator or a connected physical device.*

---

## 📁 Project Structure

```
DMS_Project/
├── backend/                # Django Backend
│   ├── api/                # Main Application Logic (Models, Views, Serializers)
│   ├── backend/            # Project Settings & URLs
│   ├── db.sqlite3          # Database
│   └── manage.py           # Django CLI utility
│
├── frontend/               # React Frontend
│   ├── android/            # Android Native Project (Capacitor)
│   ├── public/             # Static Assets
│   ├── src/
│   │   ├── components/     # UI Components (Dashboard, POS, etc.)
│   │   ├── App.js          # Main Application Component & Routing
│   │   └── index.css       # Global Styles & Tailwind Imports
│   ├── capacitor.config.ts # Capacitor Configuration
│   ├── package.json        # Frontend Dependencies
│   └── tailwind.config.js  # Tailwind Configuration
│
└── README.md
```

## 🤝 Contributing
1. Fork the repository.
2. Create key feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

