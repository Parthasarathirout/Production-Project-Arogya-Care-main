import React, { useState, useEffect } from 'react'
import { Search, Filter, User, Phone, Mail, Calendar, FileText, Eye, MoreVertical } from 'lucide-react'
import axios from 'axios'

const DoctorPatients = () => {
  const [patients, setPatients] = useState([])
  const [filteredPatients, setFilteredPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [filterBy, setFilterBy] = useState('all')

  useEffect(() => {
    fetchPatients()
  }, [])

  useEffect(() => {
    filterAndSortPatients()
  }, [patients, searchTerm, sortBy, filterBy])

  const fetchPatients = async () => {
    try {
      setLoading(true)
      // Mock data - replace with actual API call
      const mockPatients = [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "+1-555-0201",
          age: 35,
          gender: "Male",
          lastVisit: "2025-10-01",
          condition: "Hypertension",
          status: "Active",
          totalAppointments: 5,
          nextAppointment: "2025-10-08"
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "+1-555-0202",
          age: 28,
          gender: "Female",
          lastVisit: "2025-09-28",
          condition: "Regular Checkup",
          status: "Active",
          totalAppointments: 3,
          nextAppointment: "2025-10-15"
        },
        {
          id: 3,
          name: "Mike Johnson",
          email: "mike@example.com",
          phone: "+1-555-0203",
          age: 42,
          gender: "Male",
          lastVisit: "2025-09-15",
          condition: "Diabetes",
          status: "Inactive",
          totalAppointments: 12,
          nextAppointment: null
        },
        {
          id: 4,
          name: "Sarah Wilson",
          email: "sarah@example.com",
          phone: "+1-555-0204",
          age: 31,
          gender: "Female",
          lastVisit: "2025-10-02",
          condition: "Pregnancy Care",
          status: "Active",
          totalAppointments: 8,
          nextAppointment: "2025-10-10"
        },
        {
          id: 5,
          name: "Robert Brown",
          email: "robert@example.com",
          phone: "+1-555-0205",
          age: 55,
          gender: "Male",
          lastVisit: "2025-09-20",
          condition: "Heart Disease",
          status: "Active",
          totalAppointments: 15,
          nextAppointment: "2025-10-12"
        }
      ]
      
      setPatients(mockPatients)
    } catch (error) {
      console.error('Error fetching patients:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterAndSortPatients = () => {
    let filtered = patients

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(patient => 
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by status
    if (filterBy !== 'all') {
      filtered = filtered.filter(patient => 
        patient.status.toLowerCase() === filterBy.toLowerCase()
      )
    }

    // Sort patients
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'lastVisit':
          return new Date(b.lastVisit) - new Date(a.lastVisit)
        case 'age':
          return a.age - b.age
        case 'appointments':
          return b.totalAppointments - a.totalAppointments
        default:
          return 0
      }
    })

    setFilteredPatients(filtered)
  }

  const getStatusColor = (status) => {
    return status === 'Active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-800'
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
          <h1 className="text-2xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-600 mt-1">Manage and view your patient records</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add New Patient
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Patients</p>
              <p className="text-2xl font-bold text-gray-900">{patients.length}</p>
            </div>
            <User className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Patients</p>
              <p className="text-2xl font-bold text-gray-900">
                {patients.filter(p => p.status === 'Active').length}
              </p>
            </div>
            <User className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">This Month</p>
              <p className="text-2xl font-bold text-gray-900">
                {patients.filter(p => new Date(p.lastVisit) > new Date(2025, 8, 1)).length}
              </p>
            </div>
            <Calendar className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Appointments</p>
              <p className="text-2xl font-bold text-gray-900">
                {patients.reduce((sum, p) => sum + p.totalAppointments, 0)}
              </p>
            </div>
            <FileText className="h-8 w-8 text-orange-600" />
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
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Sort By */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="lastVisit">Sort by Last Visit</option>
              <option value="age">Sort by Age</option>
              <option value="appointments">Sort by Appointments</option>
            </select>
          </div>

          {/* Filter By Status */}
          <div>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Patients</option>
              <option value="active">Active Only</option>
              <option value="inactive">Inactive Only</option>
            </select>
          </div>

          {/* Clear Filters */}
          <div>
            <button
              onClick={() => {
                setSearchTerm('')
                setSortBy('name')
                setFilterBy('all')
              }}
              className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Patients List */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">
            Patients ({filteredPatients.length})
          </h2>
        </div>
        
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age/Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Condition
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Visit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                        <div className="text-sm text-gray-500">{patient.totalAppointments} appointments</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.email}</div>
                    <div className="text-sm text-gray-500">{patient.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.age} years</div>
                    <div className="text-sm text-gray-500">{patient.gender}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.condition}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.lastVisit}</div>
                    {patient.nextAppointment && (
                      <div className="text-sm text-gray-500">Next: {patient.nextAppointment}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden divide-y divide-gray-200">
          {filteredPatients.map((patient) => (
            <div key={patient.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{patient.name}</h3>
                    <p className="text-sm text-gray-600">{patient.condition}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                  {patient.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Age/Gender</p>
                  <p className="text-gray-900">{patient.age} / {patient.gender}</p>
                </div>
                <div>
                  <p className="text-gray-500">Last Visit</p>
                  <p className="text-gray-900">{patient.lastVisit}</p>
                </div>
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="text-gray-900">{patient.email}</p>
                </div>
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p className="text-gray-900">{patient.phone}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPatients.length === 0 && (
          <div className="p-8 text-center">
            <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No patients found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DoctorPatients