import React, { useState, useEffect } from 'react'
import { Calendar, Clock, User, Heart, Activity, Bell, Plus, MapPin, Star } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import axios from 'axios'

const PatientDashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    upcomingAppointments: 0,
    completedAppointments: 0,
    totalDoctors: 0,
    healthScore: 85
  })
  const [upcomingAppointments, setUpcomingAppointments] = useState([])
  const [recentDoctors, setRecentDoctors] = useState([])
  const [healthTips, setHealthTips] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      // Mock data - replace with actual API calls
      
      setStats({
        upcomingAppointments: 2,
        completedAppointments: 8,
        totalDoctors: 3,
        healthScore: 85
      })
      
      setUpcomingAppointments([
        {
          id: 1,
          doctorName: "Dr. Sarah Wilson",
          specialization: "Cardiology",
          date: "2025-10-08",
          time: "10:00 AM",
          type: "Follow-up",
          location: "Health Center A"
        },
        {
          id: 2,
          doctorName: "Dr. Robert Brown",
          specialization: "Neurology",
          date: "2025-10-12",
          time: "02:00 PM",
          type: "Consultation",
          location: "Medical Plaza B"
        }
      ])

      setRecentDoctors([
        {
          id: 1,
          name: "Dr. Sarah Wilson",
          specialization: "Cardiology",
          rating: 4.9,
          image: null,
          lastVisit: "2025-09-15"
        },
        {
          id: 2,
          name: "Dr. Robert Brown",
          specialization: "Neurology", 
          rating: 4.8,
          image: null,
          lastVisit: "2025-09-01"
        }
      ])

      setHealthTips([
        {
          id: 1,
          title: "Stay Hydrated",
          content: "Drink at least 8 glasses of water daily to maintain good health.",
          category: "Nutrition"
        },
        {
          id: 2,
          title: "Regular Exercise",
          content: "30 minutes of moderate exercise can significantly improve your cardiovascular health.",
          category: "Fitness"
        },
        {
          id: 3,
          title: "Quality Sleep",
          content: "Aim for 7-9 hours of quality sleep each night for optimal health.",
          category: "Wellness"
        }
      ])
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Welcome back, {user?.name || 'Patient'}!</h1>
        <p className="text-green-100 mt-2">Here's your health dashboard overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Upcoming Appointments</p>
              <p className="text-2xl font-bold text-gray-900">{stats.upcomingAppointments}</p>
            </div>
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-4">
            <span className="text-blue-600 text-sm">Next appointment in 4 days</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Completed Visits</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completedAppointments}</p>
            </div>
            <Clock className="h-8 w-8 text-green-600" />
          </div>
          <div className="mt-4">
            <span className="text-green-600 text-sm">All time visits</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">My Doctors</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalDoctors}</p>
            </div>
            <User className="h-8 w-8 text-purple-600" />
          </div>
          <div className="mt-4">
            <span className="text-purple-600 text-sm">Trusted healthcare providers</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Health Score</p>
              <p className="text-2xl font-bold text-gray-900">{stats.healthScore}%</p>
            </div>
            <Heart className="h-8 w-8 text-red-500" />
          </div>
          <div className="mt-4">
            <span className="text-red-500 text-sm">Excellent health status</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Appointments */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              <Plus className="h-4 w-4 inline mr-2" />
              Book New
            </button>
          </div>
          <div className="p-6">
            {upcomingAppointments.length === 0 ? (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No upcoming appointments</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Your First Appointment
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{appointment.doctorName}</h3>
                          <p className="text-sm text-gray-600">{appointment.specialization}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{appointment.date}</p>
                        <p className="text-sm text-gray-600">{appointment.time}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        {appointment.location}
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        {appointment.type}
                      </span>
                    </div>
                  </div>
                ))}
                <button className="w-full text-center py-3 text-blue-600 hover:text-blue-700 font-medium">
                  View All Appointments →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions & Health Tips */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="text-gray-900">Book Appointment</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left">
                <User className="h-5 w-5 text-green-600" />
                <span className="text-gray-900">Find Doctors</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-left">
                <Activity className="h-5 w-5 text-purple-600" />
                <span className="text-gray-900">Health Records</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors text-left">
                <Bell className="h-5 w-5 text-orange-600" />
                <span className="text-gray-900">Notifications</span>
              </button>
            </div>
          </div>

          {/* Recent Doctors */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">My Doctors</h3>
            <div className="space-y-3">
              {recentDoctors.map((doctor) => (
                <div key={doctor.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{doctor.name}</p>
                    <p className="text-sm text-gray-600">{doctor.specialization}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{doctor.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Health Tips */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Health Tips</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {healthTips.map((tip) => (
              <div key={tip.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{tip.title}</h4>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {tip.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard