const bcrypt = require("bcrypt");
const userModel = require("../models/userModels");
const doctorModel = require("../models/doctorModel");
const appointmentModel = require("../models/appointmentModel");
const connectDB = require("../src/db");
require("dotenv").config();

// Connect to database
connectDB();

const seedData = async () => {
  try {
    // Clear existing data
    await userModel.deleteMany({});
    await doctorModel.deleteMany({});
    await appointmentModel.deleteMany({});
    
    console.log("Cleared existing data...");

    // Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password123", salt);

    // Create Admin User
    const admin = new userModel({
      name: "Admin User",
      email: "admin@arogyacare.com",
      password: hashedPassword,
      isAdmin: true,
      isDoctor: false,
      notification: [],
      seennotification: []
    });
    await admin.save();

    // Create Sample Regular Users
    const users = [
      {
        name: "John Doe",
        email: "john@example.com",
        password: hashedPassword,
        isAdmin: false,
        isDoctor: false,
        notification: [],
        seennotification: []
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: hashedPassword,
        isAdmin: false,
        isDoctor: false,
        notification: [],
        seennotification: []
      },
      {
        name: "Mike Johnson",
        email: "mike@example.com",
        password: hashedPassword,
        isAdmin: false,
        isDoctor: false,
        notification: [],
        seennotification: []
      }
    ];

    const createdUsers = await userModel.insertMany(users);
    
    // Create Sample Doctor Users
    const doctorUsers = [
      {
        name: "Dr. Sarah Wilson",
        email: "dr.sarah@arogyacare.com",
        password: hashedPassword,
        isAdmin: false,
        isDoctor: true,
        notification: [],
        seennotification: []
      },
      {
        name: "Dr. Robert Brown",
        email: "dr.robert@arogyacare.com",
        password: hashedPassword,
        isAdmin: false,
        isDoctor: true,
        notification: [],
        seennotification: []
      }
    ];

    const createdDoctorUsers = await userModel.insertMany(doctorUsers);

    // Create Doctor Profiles
    const doctors = [
      {
        userId: createdDoctorUsers[0]._id,
        firstName: "Sarah",
        lastName: "Wilson",
        phone: "+1-555-0101",
        email: "dr.sarah@arogyacare.com",
        website: "www.drsakahwilson.com",
        address: "123 Medical Center Dr, Health City, HC 12345",
        specialization: "Cardiology",
        experience: "8 years",
        feesPerCunsultation: 150,
        status: "approved",
        timings: {
          start: "09:00",
          end: "17:00"
        }
      },
      {
        userId: createdDoctorUsers[1]._id,
        firstName: "Robert",
        lastName: "Brown",
        phone: "+1-555-0102",
        email: "dr.robert@arogyacare.com",
        website: "www.drrobertbrown.com",
        address: "456 Healthcare Ave, Wellness Town, WT 67890",
        specialization: "Neurology",
        experience: "12 years",
        feesPerCunsultation: 200,
        status: "approved",
        timings: {
          start: "08:00",
          end: "16:00"
        }
      }
    ];

    const createdDoctors = await doctorModel.insertMany(doctors);

    // Create Sample Appointments
    const appointments = [
      {
        userId: createdUsers[0]._id.toString(),
        doctorId: createdDoctors[0]._id.toString(),
        doctorInfo: JSON.stringify({
          firstName: "Sarah",
          lastName: "Wilson",
          phone: "+1-555-0101",
          email: "dr.sarah@arogyacare.com",
          specialization: "Cardiology",
          experience: "8 years",
          feesPerCunsultation: 150
        }),
        userInfo: JSON.stringify({
          name: "John Doe",
          phone: "+1-555-0201",
          email: "john@example.com"
        }),
        date: new Date().toISOString().split('T')[0],
        status: "approved",
        time: "10:00"
      },
      {
        userId: createdUsers[1]._id.toString(),
        doctorId: createdDoctors[1]._id.toString(),
        doctorInfo: JSON.stringify({
          firstName: "Robert",
          lastName: "Brown",
          phone: "+1-555-0102",
          email: "dr.robert@arogyacare.com",
          specialization: "Neurology",
          experience: "12 years",
          feesPerCunsultation: 200
        }),
        userInfo: JSON.stringify({
          name: "Jane Smith",
          phone: "+1-555-0202",
          email: "jane@example.com"
        }),
        date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: "pending",
        time: "14:00"
      }
    ];

    await appointmentModel.insertMany(appointments);

    console.log("✅ Database seeded successfully!");
    console.log("\n📋 Seeded Data Summary:");
    console.log(`👤 Admin: admin@arogyacare.com (password: password123)`);
    console.log(`👥 Users: ${users.length} regular users created`);
    console.log(`👨‍⚕️ Doctors: ${doctors.length} doctors created`);
    console.log(`📅 Appointments: ${appointments.length} sample appointments created`);
    console.log("\n🔑 Login Credentials:");
    console.log("Admin: admin@arogyacare.com / password123");
    console.log("Doctor: dr.sarah@arogyacare.com / password123");
    console.log("Doctor: dr.robert@arogyacare.com / password123");
    console.log("User: john@example.com / password123");
    console.log("User: jane@example.com / password123");
    console.log("User: mike@example.com / password123");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

// Run seeder
seedData();