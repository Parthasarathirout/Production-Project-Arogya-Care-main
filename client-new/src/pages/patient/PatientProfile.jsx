import React, { useState, useEffect } from 'react'
import { User, Mail, Phone, MapPin, Calendar, Heart, Activity, Edit, Save, Camera, FileText } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import axios from 'axios'

const PatientProfile = () => {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    bloodGroup: '',
    height: '',
    weight: '',
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    },
    medicalHistory: {
      allergies: '',
      medications: '',
      conditions: '',
      surgeries: ''
    },
    preferences: {
      notifications: true,
      emailUpdates: true,
      smsReminders: true
    }
  })

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      setLoading(true)
      // Mock data - replace with actual API call
      setProfile({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1-555-0201',
        address: '123 Patient Street, Health City, HC 12345',
        dateOfBirth: '1988-05-15',
        gender: 'Male',
        bloodGroup: 'A+',
        height: '175',
        weight: '70',
        emergencyContact: {
          name: 'Jane Doe',
          phone: '+1-555-0202',
          relationship: 'Spouse'
        },
        medicalHistory: {
          allergies: 'Penicillin, Nuts',
          medications: 'None currently',
          conditions: 'Hypertension (controlled)',
          surgeries: 'Appendectomy (2015)'
        },
        preferences: {
          notifications: true,
          emailUpdates: true,
          smsReminders: false
        }
      })
    } catch (error) {
      console.error('Error fetching profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.')
      setProfile(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }))
    } else {
      setProfile(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }
  }

  const handleSave = async () => {
    try {
      setLoading(true)
      // Here you would make the actual API call to update profile
      console.log('Saving profile:', profile)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsEditing(false)
      alert('Profile updated successfully!')
    } catch (error) {
      console.error('Error saving profile:', error)
      alert('Error saving profile. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const calculateAge = (birthDate) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    
    return age
  }

  const calculateBMI = (height, weight) => {
    if (!height || !weight) return 0
    const heightInM = height / 100
    return (weight / (heightInM * heightInM)).toFixed(1)
  }

  if (loading && !profile.email) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const age = profile.dateOfBirth ? calculateAge(profile.dateOfBirth) : 0
  const bmi = calculateBMI(profile.height, profile.weight)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-1">Manage your personal information and preferences</p>
        </div>
        <div className="mt-4 md:mt-0">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Edit className="h-4 w-4" />
              <span>Edit Profile</span>
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={loading}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                <span>{loading ? 'Saving...' : 'Save Changes'}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Photo and Quick Stats */}
        <div className="space-y-6">
          {/* Profile Photo */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="h-32 w-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto">
                  {profile.name?.split(' ').map(n => n[0]).join('') || 'U'}
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                    <Camera className="h-4 w-4" />
                  </button>
                )}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-900">{profile.name}</h2>
              <p className="text-gray-600">Patient ID: #12345</p>
            </div>
          </div>

          {/* Quick Health Stats */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Age</span>
                <span className="font-medium">{age} years</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Blood Group</span>
                <span className="font-medium">{profile.bloodGroup || 'Not set'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Height</span>
                <span className="font-medium">{profile.height ? `${profile.height} cm` : 'Not set'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Weight</span>
                <span className="font-medium">{profile.weight ? `${profile.weight} kg` : 'Not set'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">BMI</span>
                <span className="font-medium">{bmi > 0 ? bmi : 'Calculate'}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left">
                <FileText className="h-5 w-5 text-blue-600" />
                <span className="text-gray-900">Medical Records</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left">
                <Calendar className="h-5 w-5 text-green-600" />
                <span className="text-gray-900">Book Appointment</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-left">
                <Activity className="h-5 w-5 text-purple-600" />
                <span className="text-gray-900">Health Tracker</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={profile.dateOfBirth}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  name="gender"
                  value={profile.gender}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
                <select
                  name="bloodGroup"
                  value={profile.bloodGroup}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  name="address"
                  value={profile.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows="2"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* Physical Information */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Physical Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={profile.height}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={profile.weight}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
            </div>
            {bmi > 0 && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>BMI:</strong> {bmi} - 
                  {bmi < 18.5 ? ' Underweight' : 
                   bmi < 25 ? ' Normal weight' : 
                   bmi < 30 ? ' Overweight' : ' Obese'}
                </p>
              </div>
            )}
          </div>

          {/* Emergency Contact */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Emergency Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="emergencyContact.name"
                  value={profile.emergencyContact.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="emergencyContact.phone"
                  value={profile.emergencyContact.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relationship</label>
                <input
                  type="text"
                  name="emergencyContact.relationship"
                  value={profile.emergencyContact.relationship}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* Medical History */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Medical History</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
                <textarea
                  name="medicalHistory.allergies"
                  value={profile.medicalHistory.allergies}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows="2"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Medications</label>
                <textarea
                  name="medicalHistory.medications"
                  value={profile.medicalHistory.medications}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows="2"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Medical Conditions</label>
                <textarea
                  name="medicalHistory.conditions"
                  value={profile.medicalHistory.conditions}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows="2"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Past Surgeries</label>
                <textarea
                  name="medicalHistory.surgeries"
                  value={profile.medicalHistory.surgeries}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows="2"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Push Notifications</label>
                <input
                  type="checkbox"
                  name="preferences.notifications"
                  checked={profile.preferences.notifications}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Email Updates</label>
                <input
                  type="checkbox"
                  name="preferences.emailUpdates"
                  checked={profile.preferences.emailUpdates}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700">SMS Reminders</label>
                <input
                  type="checkbox"
                  name="preferences.smsReminders"
                  checked={profile.preferences.smsReminders}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientProfile