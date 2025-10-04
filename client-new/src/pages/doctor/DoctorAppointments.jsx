import React, { useState, useEffect } from 'react'
import { Calendar, Clock, User, Phone, Mail, Filter, Search, CheckCircle, XCircle, AlertCircle, Eye } from 'lucide-react'
import axios from 'axios'

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [filteredAppointments, setFilteredAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

  useEffect(() => {
    fetchAppointments()
  }, [])

  useEffect(() => {
    filterAppointments()
  }, [appointments, statusFilter, searchTerm, selectedDate])

  const fetchAppointments = async () => {
    try {
      setLoading(true)
      // Mock data for now - replace with actual API call
      const mockAppointments = [
        {
          id: 1,
          patientName: "John Doe",
          patientEmail: "john@example.com",
          patientPhone: "+1-555-0201",
          date: "2025-10-04",
          time: "09:00",
          type: "Consultation",
          status: "approved",
          notes: "Regular checkup"
        },
        {
          id: 2,
          patientName: "Jane Smith",
          patientEmail: "jane@example.com",
          patientPhone: "+1-555-0202",
          date: "2025-10-04",
          time: "10:30",
          type: "Follow-up",
          status: "pending",
          notes: "Follow-up for previous treatment"
        },
        {
          id: 3,
          patientName: "Mike Johnson",
          patientEmail: "mike@example.com",
          patientPhone: "+1-555-0203",
          date: "2025-10-04",
          time: "14:00",
          type: "Emergency",
          status: "completed",
          notes: "Emergency consultation"
        },
        {
          id: 4,
          patientName: "Sarah Wilson",
          patientEmail: "sarah@example.com",
          patientPhone: "+1-555-0204",
          date: "2025-10-05",
          time: "11:00",
          type: "Consultation",
          status: "cancelled",
          notes: "Initial consultation"
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
        apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apt.patientEmail.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by date
    if (selectedDate) {
      filtered = filtered.filter(apt => apt.date === selectedDate)
    }

    setFilteredAppointments(filtered)
  }

  const updateAppointmentStatus = async (appointmentId, newStatus) => {
    try {
      // Update in state immediately for better UX
      setAppointments(prev => 
        prev.map(apt => 
          apt.id === appointmentId ? { ...apt, status: newStatus } : apt
        )
      )
      
      // Here you would make the actual API call
      console.log(`Updating appointment ${appointmentId} to status: ${newStatus}`)
    } catch (error) {
      console.error('Error updating appointment status:', error)
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-blue-500" />
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-500" />
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
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600 mt-1">Manage your patient appointments</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Schedule New Appointment
          </button>
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
              placeholder="Search patients..."
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
                setSelectedDate(new Date().toISOString().split('T')[0])
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
            </div>
          ) : (
            filteredAppointments.map((appointment) => (
              <div key={appointment.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-medium text-gray-900">
                          {appointment.patientName}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {appointment.status}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {appointment.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {appointment.time}
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          {appointment.patientEmail}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-1" />
                          {appointment.patientPhone}
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{appointment.notes}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {appointment.status === 'pending' && (
                      <>
                        <button
                          onClick={() => updateAppointmentStatus(appointment.id, 'approved')}
                          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateAppointmentStatus(appointment.id, 'cancelled')}
                          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                        >
                          Cancel
                        </button>
                      </>
                    )}
                    {appointment.status === 'approved' && (
                      <button
                        onClick={() => updateAppointmentStatus(appointment.id, 'completed')}
                        className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                      >
                        Complete
                      </button>
                    )}
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

export default DoctorAppointments