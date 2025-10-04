# 🏥 Arogya Care - Healthcare Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-18.0+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-4.18+-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-4.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>

<div align="center">
  <h3>🌟 Modern Healthcare Management Platform 🌟</h3>
  <p><em>Connecting patients with qualified healthcare professionals through a secure, user-friendly platform</em></p>
</div>

---

## 📋 Table of Contents

- [🏥 About Arogya Care](#-about-arogya-care)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [⚡ Quick Start](#-quick-start)
- [🔧 Installation](#-installation)
- [🚀 Usage](#-usage)
- [📱 User Roles](#-user-roles)
- [🎯 API Endpoints](#-api-endpoints)
- [🗄️ Database Schema](#️-database-schema)
- [🔒 Security Features](#-security-features)
- [📸 Screenshots](#-screenshots)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📧 Contact](#-contact)

---

## 🏥 About Arogya Care

**Arogya Care** is a comprehensive healthcare management platform designed to bridge the gap between patients and healthcare providers. Built with modern web technologies, it offers a seamless experience for appointment booking, medical consultations, and healthcare management.

### 🎯 Mission
To make healthcare accessible, efficient, and user-friendly for everyone through innovative technology solutions.

### 🌟 Vision
Creating a digital healthcare ecosystem that empowers both patients and healthcare professionals with the tools they need for better health outcomes.

---

## ✨ Features

### 👥 **For Patients**
- 🔐 **Secure Registration & Login** - JWT-based authentication
- 🔍 **Doctor Discovery** - Search and filter qualified healthcare providers
- 📅 **Appointment Booking** - Easy scheduling with real-time availability
- 📊 **Health Dashboard** - Comprehensive overview of health metrics
- 📱 **Appointment Management** - View, reschedule, or cancel appointments
- 👤 **Profile Management** - Update personal and medical information
- 🔔 **Smart Notifications** - Appointment reminders and health updates

### 👨‍⚕️ **For Doctors**
- 🏥 **Professional Dashboard** - Complete practice management overview
- 📋 **Appointment Management** - Efficient scheduling and patient flow
- 👥 **Patient Directory** - Comprehensive patient records and history
- 📈 **Analytics & Insights** - Practice performance and patient statistics
- 👤 **Profile Customization** - Manage specializations and availability
- 💬 **Patient Communication** - Secure messaging and consultation notes

### 🔒 **Security & Compliance**
- 🛡️ **HIPAA Compliant** - Industry-standard data protection
- 🔐 **JWT Authentication** - Secure token-based authentication
- 🔒 **Data Encryption** - End-to-end data protection
- 🚫 **Role-Based Access** - Proper authorization controls
- 📝 **Audit Logs** - Complete activity tracking

### 🎨 **User Experience**
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast Performance** - Optimized for speed and efficiency
- 🎯 **Intuitive Interface** - User-friendly design
- ♿ **Accessibility** - WCAG compliant
- 🌙 **Modern Animations** - Smooth transitions and interactions

---

## 🛠️ Tech Stack

### **Frontend**
```typescript
React 18.0+          // UI Library
Vite 4.0+            // Build Tool & Dev Server
Tailwind CSS 3.0+    // Utility-First CSS Framework
React Router 6.0+     // Client-Side Routing
Lucide React         // Modern Icon Library
```

### **Backend**
```javascript
Node.js 18.0+        // Runtime Environment
Express.js 4.18+     // Web Application Framework
MongoDB Atlas        // Cloud Database Service
Mongoose 7.0+        // MongoDB Object Modeling
JWT                  // JSON Web Token Authentication
bcryptjs             // Password Hashing
```

### **Development Tools**
```bash
ESLint              // Code Linting
Prettier            // Code Formatting
Nodemon             // Development Auto-Restart
Concurrently        // Run Multiple Commands
Git                 // Version Control
```

---

## 🏗️ Architecture

### **Separated Architecture**
```
┌─────────────────────┐    ┌─────────────────────┐
│                     │    │                     │
│   Frontend (React)  │◄──►│   Backend (API)     │
│   Port: 3000        │    │   Port: 8080        │
│   Vite Dev Server   │    │   Express.js        │
│                     │    │                     │
└─────────────────────┘    └─────────────────────┘
                                      │
                                      ▼
                           ┌─────────────────────┐
                           │                     │
                           │   MongoDB Atlas     │
                           │   Cloud Database    │
                           │                     │
                           └─────────────────────┘
```

### **Project Structure**
```
arogya-care/
├── 📁 client-new/                 # React Frontend
│   ├── 📁 public/                 # Static Assets
│   ├── 📁 src/
│   │   ├── 📁 components/         # Reusable Components
│   │   ├── 📁 context/            # React Context
│   │   ├── 📁 pages/
│   │   │   ├── 📁 doctor/         # Doctor Dashboard Pages
│   │   │   └── 📁 patient/        # Patient Dashboard Pages
│   │   └── 📁 utils/              # Utility Functions
│   ├── 📄 package.json
│   ├── 📄 tailwind.config.js
│   └── 📄 vite.config.js
├── 📁 controllers/                # API Controllers
├── 📁 middlewares/               # Express Middlewares
├── 📁 models/                    # Database Models
├── 📁 routes/                    # API Routes
├── 📁 seeders/                   # Database Seeders
├── 📁 src/                       # Backend Source
├── 📄 server.js                  # Express Server
├── 📄 package.json
└── 📄 README.md
```

---

## ⚡ Quick Start

### **Prerequisites**
- 🟢 **Node.js** 18.0 or higher
- 🟢 **npm** 8.0 or higher
- 🟢 **MongoDB Atlas** account (or local MongoDB)
- 🟢 **Git** for version control

### **1-Minute Setup** ⏱️
```bash
# Clone the repository
git clone https://github.com/Parthasarathirout/Production-Project-Arogya-Care-main.git
cd Production-Project-Arogya-Care-main

# Install backend dependencies
npm install

# Install frontend dependencies
cd client-new
npm install
cd ..

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Seed the database (optional)
npm run seed

# Start both servers
npm run dev
```

**🎉 That's it!** Your application will be running at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080

---

## 🔧 Installation

### **Step 1: Clone Repository**
```bash
git clone https://github.com/Parthasarathirout/Production-Project-Arogya-Care-main.git
cd Production-Project-Arogya-Care-main
```

### **Step 2: Backend Setup**
```bash
# Install backend dependencies
npm install

# Create environment file
touch .env
```

### **Step 3: Environment Configuration**
Create a `.env` file in the root directory:
```env
# Database Configuration
MONGO_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/arogya-care

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# Server Configuration
PORT=8080
NODE_ENV=development

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:3000
```

### **Step 4: Frontend Setup**
```bash
# Navigate to frontend directory
cd client-new

# Install frontend dependencies
npm install

# Return to root directory
cd ..
```

### **Step 5: Database Setup**
```bash
# Seed the database with sample data
npm run seed
```

### **Step 6: Start Development Servers**
```bash
# Start both frontend and backend servers
npm run dev

# Or start them individually:
npm run server    # Backend only (port 8080)
npm run client    # Frontend only (port 3000)
```

---

## 🚀 Usage

### **Development Commands**
```bash
# Start both servers concurrently
npm run dev

# Start backend server only
npm run server

# Start frontend server only
npm run client

# Seed database with sample data
npm run seed

# Build frontend for production
npm run build

# Preview production build
npm run preview
```

### **Production Deployment**
```bash
# Build the frontend
cd client-new
npm run build

# Start production server
cd ..
npm start
```

---

## 📱 User Roles

### 👤 **Patient Role**
- **Registration**: Create account with personal information
- **Doctor Search**: Find doctors by specialty, location, rating
- **Appointment Booking**: Schedule appointments with available time slots
- **Dashboard**: View upcoming appointments, health metrics
- **Profile Management**: Update personal and medical information
- **Appointment History**: Track past and future appointments

### 👨‍⚕️ **Doctor Role**
- **Professional Profile**: Manage specializations, experience, availability
- **Appointment Management**: View, confirm, reschedule patient appointments
- **Patient Directory**: Access patient profiles and medical history
- **Schedule Management**: Set availability and time slots
- **Analytics**: View practice statistics and patient insights
- **Communication**: Secure messaging with patients

### 👨‍💼 **Admin Role**
- **User Management**: Manage patient and doctor accounts
- **System Monitoring**: Monitor platform usage and performance
- **Content Management**: Manage platform content and announcements
- **Analytics Dashboard**: Comprehensive system analytics
- **Security Management**: Monitor security and access logs

---

## 🎯 API Endpoints

### **Authentication Routes**
```http
POST   /api/v1/auth/register        # User Registration
POST   /api/v1/auth/login           # User Login
POST   /api/v1/auth/logout          # User Logout
GET    /api/v1/auth/profile         # Get User Profile
PUT    /api/v1/auth/profile         # Update Profile
```

### **User Routes**
```http
GET    /api/v1/users                # Get All Users (Admin)
GET    /api/v1/users/:id            # Get User by ID
PUT    /api/v1/users/:id            # Update User
DELETE /api/v1/users/:id            # Delete User
```

### **Doctor Routes**
```http
GET    /api/v1/doctors              # Get All Doctors
GET    /api/v1/doctors/:id          # Get Doctor by ID
POST   /api/v1/doctors              # Create Doctor Profile
PUT    /api/v1/doctors/:id          # Update Doctor Profile
GET    /api/v1/doctors/search       # Search Doctors
```

### **Appointment Routes**
```http
GET    /api/v1/appointments         # Get User Appointments
POST   /api/v1/appointments         # Book New Appointment
PUT    /api/v1/appointments/:id     # Update Appointment
DELETE /api/v1/appointments/:id     # Cancel Appointment
GET    /api/v1/appointments/doctor/:doctorId  # Get Doctor Appointments
```

### **Admin Routes**
```http
GET    /api/v1/admin/users          # Get All Users
GET    /api/v1/admin/doctors        # Get All Doctors
GET    /api/v1/admin/appointments   # Get All Appointments
GET    /api/v1/admin/analytics      # System Analytics
```

---

## 🗄️ Database Schema

### **User Model**
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  phone: String,
  dateOfBirth: Date,
  gender: String (enum),
  address: String,
  role: String (enum: ['patient', 'doctor', 'admin']),
  isVerified: Boolean (default: false),
  profileImage: String,
  createdAt: Date,
  updatedAt: Date
}
```

### **Doctor Model**
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'User'),
  specialization: String (required),
  experience: Number,
  qualification: String,
  registrationNumber: String (unique),
  consultationFee: Number,
  availability: [{
    day: String,
    startTime: String,
    endTime: String
  }],
  rating: Number (default: 0),
  reviewCount: Number (default: 0),
  about: String,
  services: [String],
  achievements: [String],
  isApproved: Boolean (default: false),
  createdAt: Date,
  updatedAt: Date
}
```

### **Appointment Model**
```javascript
{
  _id: ObjectId,
  patientId: ObjectId (ref: 'User'),
  doctorId: ObjectId (ref: 'Doctor'),
  appointmentDate: Date (required),
  timeSlot: String (required),
  status: String (enum: ['pending', 'confirmed', 'completed', 'cancelled']),
  symptoms: String,
  notes: String,
  prescription: String,
  consultationFee: Number,
  paymentStatus: String (enum: ['pending', 'paid', 'refunded']),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔒 Security Features

### **Authentication & Authorization**
- ✅ **JWT Token Authentication** - Secure token-based auth
- ✅ **Password Hashing** - bcrypt with salt rounds
- ✅ **Role-Based Access Control** - Granular permissions
- ✅ **Protected Routes** - Middleware-based protection

### **Data Protection**
- ✅ **Input Validation** - Server-side validation
- ✅ **SQL Injection Prevention** - Mongoose ODM protection
- ✅ **XSS Protection** - Input sanitization
- ✅ **CORS Configuration** - Controlled cross-origin requests

### **Privacy Compliance**
- ✅ **HIPAA Compliance** - Healthcare data protection
- ✅ **Data Encryption** - Sensitive data encryption
- ✅ **Audit Logging** - Complete activity logs
- ✅ **Secure Headers** - Security-focused HTTP headers

---

## 📸 Screenshots

### **Landing Page**
![Landing Page](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Modern+Landing+Page+with+Animations)

*Modern, responsive landing page with smooth animations and professional design*

### **Patient Dashboard**
![Patient Dashboard](https://via.placeholder.com/800x400/10B981/FFFFFF?text=Patient+Dashboard+Overview)

*Comprehensive patient dashboard with health metrics and appointment management*

### **Doctor Dashboard**
![Doctor Dashboard](https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Doctor+Dashboard+Analytics)

*Professional doctor dashboard with patient management and analytics*

### **Appointment Booking**
![Appointment Booking](https://via.placeholder.com/800x400/EF4444/FFFFFF?text=Smart+Appointment+Booking)

*Intuitive appointment booking system with real-time availability*

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **Getting Started**
1. 🍴 Fork the repository
2. 🌟 Star the project (if you like it!)
3. 🔧 Create your feature branch (`git checkout -b feature/AmazingFeature`)
4. 💻 Make your changes
5. ✅ Test thoroughly
6. 📝 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
7. 🚀 Push to the branch (`git push origin feature/AmazingFeature`)
8. 🔄 Open a Pull Request

### **Development Guidelines**
- 📋 Follow the existing code style
- ✅ Write tests for new features
- 📚 Update documentation as needed
- 🔍 Ensure all tests pass
- 📝 Write clear commit messages

### **Code of Conduct**
Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Parthasarathirout

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📧 Contact

### **Project Maintainer**
- **Name**: Parthasarathi Rout
- **Email**: psrout10@gmail.com
- **GitHub**: [@Parthasarathirout](https://github.com/Parthasarathirout)

### **Project Links**
- 🔗 **Repository**: [Production-Project-Arogya-Care-main](https://github.com/Parthasarathirout/Production-Project-Arogya-Care-main)
- 🐛 **Issues**: [Report a Bug](https://github.com/Parthasarathirout/Production-Project-Arogya-Care-main/issues)
- 💡 **Feature Requests**: [Request a Feature](https://github.com/Parthasarathirout/Production-Project-Arogya-Care-main/issues)

### **Support**
If you encounter any issues or need help:
1. 📖 Check the [Documentation](README.md)
2. 🔍 Search [Existing Issues](https://github.com/Parthasarathirout/Production-Project-Arogya-Care-main/issues)
3. 🆕 Create a [New Issue](https://github.com/Parthasarathirout/Production-Project-Arogya-Care-main/issues/new)
4. 💬 Join our [Discussions](https://github.com/Parthasarathirout/Production-Project-Arogya-Care-main/discussions)

---

<div align="center">
  <h3>🌟 Thank you for choosing Arogya Care! 🌟</h3>
  <p><em>Making healthcare accessible for everyone</em></p>
  
  <br/>
  
  <p>
    <img src="https://img.shields.io/github/stars/Parthasarathirout/Production-Project-Arogya-Care-main?style=social" alt="GitHub Stars" />
    <img src="https://img.shields.io/github/forks/Parthasarathirout/Production-Project-Arogya-Care-main?style=social" alt="GitHub Forks" />
    <img src="https://img.shields.io/github/watchers/Parthasarathirout/Production-Project-Arogya-Care-main?style=social" alt="GitHub Watchers" />
  </p>
  
  <p>
    <strong>If this project helped you, please consider giving it a ⭐!</strong>
  </p>
  
  <br/>
  
  <sub>Built with ❤️ by <a href="https://github.com/Parthasarathirout">Parthasarathi Rout</a></sub>
</div>

---

<div align="center">
  <p>
    <a href="#-table-of-contents">⬆️ Back to Top</a>
  </p>
</div>