import React, { useState, useEffect } from 'react'
import { Calendar, Users, FileText, Clock, TrendingUp, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import axios from 'axios'

const DoctorDashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    todayAppointments: 0,
    totalPatients: 0,
    pendingAppointments: 0,
    completedToday: 0
  })
  const [recentAppointments, setRecentAppointments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('token')
      
      // Fetch appointments and other data
      // This would be actual API calls in a real app
      // For now, using mock data
      
      setStats({
        todayAppointments: 8,
        totalPatients: 156,
        pendingAppointments: 3,
        completedToday: 5
      })
      
      setRecentAppointments([
        {
          id: 1,
          patientName: "John Doe",
          time: "09:00 AM",
          type: "Consultation",
          status: "completed"
        },
        {
          id: 2,
          patientName: "Jane Smith",
          time: "10:30 AM",
          type: "Follow-up",
          status: "pending"
        },
        {
          id: 3,
          patientName: "Mike Johnson",
          time: "02:00 PM",
          type: "Check-up",
          status: "upcoming"
        }
      ])
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case 'upcoming':
        return <Clock className="h-4 w-4 text-blue-500" />
      default:
        return <XCircle className="h-4 w-4 text-red-500" />
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Welcome back, Dr. {user?.name || 'Doctor'}</h1>
        <p className="text-blue-100 mt-2">Here's your dashboard overview for today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Today's Appointments</p>
              <p className="text-2xl font-bold text-gray-900">{stats.todayAppointments}</p>
            </div>
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-green-600 text-sm">+12% from yesterday</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Patients</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalPatients}</p>
            </div>
            <Users className="h-8 w-8 text-green-600" />
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-green-600 text-sm">+5% this month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Appointments</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pendingAppointments}</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
          <div className="mt-4 flex items-center">
            <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
            <span className="text-yellow-600 text-sm">Needs attention</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Completed Today</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completedToday}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-emerald-600" />
          </div>
          <div className="mt-4 flex items-center">
            <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
            <span className="text-emerald-600 text-sm">Great progress!</span>
          </div>
        </div>
      </div>

      {/* Recent Appointments */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Today's Appointments</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(appointment.status)}
                  <div>
                    <p className="font-medium text-gray-900">{appointment.patientName}</p>
                    <p className="text-sm text-gray-600">{appointment.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{appointment.time}</p>
                  <p className="text-sm text-gray-600 capitalize">{appointment.status}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              View All Appointments
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <FileText className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">Patient Records</h3>
          <p className="text-gray-600 text-sm mb-4">Access and manage patient medical records</p>
          <button className="text-blue-600 hover:text-blue-700 font-medium">View Records →</button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <Calendar className="h-8 w-8 text-green-600 mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">Schedule</h3>
          <p className="text-gray-600 text-sm mb-4">Manage your appointment schedule</p>
          <button className="text-green-600 hover:text-green-700 font-medium">View Schedule →</button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <Users className="h-8 w-8 text-purple-600 mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">Patients</h3>
          <p className="text-gray-600 text-sm mb-4">Browse and search patient database</p>
          <button className="text-purple-600 hover:text-purple-700 font-medium">View Patients →</button>
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard