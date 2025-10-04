import React, { useState, useEffect } from 'react'
import { Calendar, Clock, User, MapPin, Phone, Mail, Filter, Search, Plus, Eye, X } from 'lucide-react'
import axios from 'axios'

const PatientAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [filteredAppointments, setFilteredAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDate, setSelectedDate] = useState('')

  useEffect(() => {
    fetchAppointments()
  }, [])

  useEffect(() => {
    filterAppointments()
  }, [appointments, statusFilter, searchTerm, selectedDate])

  const fetchAppointments = async () => {
    try {
      setLoading(true)
      // Mock data - replace with actual API call
      const mockAppointments = [
        {
          id: 1,
          doctorName: "Dr. Sarah Wilson",
          doctorEmail: "dr.sarah@arogyacare.com",
          doctorPhone: "+1-555-0101",
          specialization: "Cardiology",
          date: "2025-10-08",
          time: "10:00",
          status: "approved",
          type: "Follow-up",
          location: "Health Center A, Room 205",
          notes: "Regular cardiac checkup",
          fee: 150
        },
        {
          id: 2,
          doctorName: "Dr. Robert Brown",
          doctorEmail: "dr.robert@arogyacare.com", 
          doctorPhone: "+1-555-0102",
          specialization: "Neurology",
          date: "2025-10-12",
          time: "14:00",
          status: "pending",
          type: "Consultation",
          location: "Medical Plaza B, Floor 3",
          notes: "Initial consultation for headaches",
          fee: 200
        },
        {
          id: 3,
          doctorName: "Dr. Sarah Wilson",
          doctorEmail: "dr.sarah@arogyacare.com",
          doctorPhone: "+1-555-0101",
          specialization: "Cardiology",
          date: "2025-09-15",
          time: "09:30",
          status: "completed",
          type: "Consultation",
          location: "Health Center A, Room 205",
          notes: "Routine cardiac examination completed",
          fee: 150
        },
        {
          id: 4,
          doctorName: "Dr. Michael Davis",
          doctorEmail: "dr.davis@arogyacare.com",
          doctorPhone: "+1-555-0103",
          specialization: "General Medicine",
          date: "2025-09-28",
          time: "11:00",
          status: "cancelled",
          type: "Check-up",
          location: "Community Clinic",
          notes: "Patient cancelled due to scheduling conflict",
          fee: 100
        }
      ]
      
      setAppointments(mockAppointments)
    } catch (error) {
      console.error('Error fetching appointments:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterAppointments = () => {
    let filtered = appointments

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(apt => apt.status === statusFilter)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(apt => 
        apt.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apt.specialization.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by date
    if (selectedDate) {
      filtered = filtered.filter(apt => apt.date === selectedDate)
    }

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date))

    setFilteredAppointments(filtered)
  }

  const cancelAppointment = async (appointmentId) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      try {
        // Update in state immediately for better UX
        setAppointments(prev => 
          prev.map(apt => 
            apt.id === appointmentId ? { ...apt, status: 'cancelled' } : apt
          )
        )
        
        // Here you would make the actual API call
        console.log(`Cancelling appointment ${appointmentId}`)
      } catch (error) {
        console.error('Error cancelling appointment:', error)
      }
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'completed':
        return 'bg-blue-100 text-blue-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusActions = (appointment) => {
    switch (appointment.status) {
      case 'pending':
        return (
          <button
            onClick={() => cancelAppointment(appointment.id)}
            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
          >
            Cancel
          </button>
        )
      case 'approved':
        return (
          <div className="flex space-x-2">
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
              Reschedule
            </button>
            <button
              onClick={() => cancelAppointment(appointment.id)}
              className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        )
      case 'completed':
        return (
          <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors">
            View Report
          </button>
        )
      default:
        return null
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Appointments</h1>
          <p className="text-gray-600 mt-1">View and manage your medical appointments</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Book New Appointment</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">
              {appointments.filter(a => a.status === 'approved').length}
            </p>
            <p className="text-gray-600 text-sm">Upcoming</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">
              {appointments.filter(a => a.status === 'pending').length}
            </p>
            <p className="text-gray-600 text-sm">Pending</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">
              {appointments.filter(a => a.status === 'completed').length}
            </p>
            <p className="text-gray-600 text-sm">Completed</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-600">{appointments.length}</p>
            <p className="text-gray-600 text-sm">Total</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Date Filter */}
          <div>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Clear Filters */}
          <div>
            <button
              onClick={() => {
                setSearchTerm('')
                setStatusFilter('all')
                setSelectedDate('')
              }}
              className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Appointments List */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">
            Appointments ({filteredAppointments.length})
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredAppointments.length === 0 ? (
            <div className="p-8 text-center">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No appointments found</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Your First Appointment
              </button>
            </div>
          ) : (
            filteredAppointments.map((appointment) => (
              <div key={appointment.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {appointment.doctorName}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {appointment.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            {appointment.specialization}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {appointment.date} at {appointment.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {appointment.location}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            {appointment.doctorEmail}
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2" />
                            {appointment.doctorPhone}
                          </div>
                          <div className="font-medium text-gray-900">
                            Fee: ${appointment.fee}
                          </div>
                        </div>
                      </div>
                      {appointment.notes && (
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">
                            <strong>Notes:</strong> {appointment.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusActions(appointment)}
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default PatientAppointments