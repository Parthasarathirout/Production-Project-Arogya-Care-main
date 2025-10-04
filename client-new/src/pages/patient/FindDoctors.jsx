import React, { useState, useEffect } from 'react'
import { Search, Filter, Star, MapPin, Clock, DollarSign, Calendar, User, Phone, Mail, Heart } from 'lucide-react'
import axios from 'axios'

const FindDoctors = () => {
  const [doctors, setDoctors] = useState([])
  const [filteredDoctors, setFilteredDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [specializationFilter, setSpecializationFilter] = useState('all')
  const [locationFilter, setLocationFilter] = useState('all')
  const [sortBy, setSortBy] = useState('rating')
  const [specializations, setSpecializations] = useState([])

  useEffect(() => {
    fetchDoctors()
  }, [])

  useEffect(() => {
    filterAndSortDoctors()
  }, [doctors, searchTerm, specializationFilter, locationFilter, sortBy])

  const fetchDoctors = async () => {
    try {
      setLoading(true)
      // Mock data - replace with actual API call
      const mockDoctors = [
        {
          id: 1,
          firstName: "Sarah",
          lastName: "Wilson",
          email: "dr.sarah@arogyacare.com",
          phone: "+1-555-0101",
          specialization: "Cardiology",
          experience: 8,
          rating: 4.9,
          reviews: 156,
          feesPerConsultation: 150,
          address: "123 Medical Center Dr, Health City",
          timings: { start: "09:00", end: "17:00" },
          about: "Experienced cardiologist with expertise in preventive cardiology and heart disease management.",
          education: "MD from Harvard Medical School",
          services: ["Cardiac Consultation", "ECG", "Stress Testing"],
          available: true,
          nextAvailable: "Today"
        },
        {
          id: 2,
          firstName: "Robert",
          lastName: "Brown",
          email: "dr.robert@arogyacare.com",
          phone: "+1-555-0102",
          specialization: "Neurology",
          experience: 12,
          rating: 4.8,
          reviews: 203,
          feesPerConsultation: 200,
          address: "456 Healthcare Ave, Wellness Town",
          timings: { start: "08:00", end: "16:00" },
          about: "Neurologist specializing in brain disorders, stroke prevention, and neurological rehabilitation.",
          education: "MD from Johns Hopkins University",
          services: ["Neurological Consultation", "EEG", "Stroke Treatment"],
          available: true,
          nextAvailable: "Tomorrow"
        },
        {
          id: 3,
          firstName: "Emily",
          lastName: "Davis",
          email: "dr.emily@arogyacare.com",
          phone: "+1-555-0103",
          specialization: "Pediatrics",
          experience: 6,
          rating: 4.7,
          reviews: 89,
          feesPerConsultation: 120,
          address: "789 Children's Hospital, Kidstown",
          timings: { start: "10:00", end: "18:00" },
          about: "Pediatrician dedicated to providing comprehensive healthcare for children and adolescents.",
          education: "MD from Stanford Medical School",
          services: ["Child Healthcare", "Vaccinations", "Growth Monitoring"],
          available: false,
          nextAvailable: "Next Week"
        },
        {
          id: 4,
          firstName: "Michael",
          lastName: "Johnson",
          email: "dr.michael@arogyacare.com",
          phone: "+1-555-0104",
          specialization: "Orthopedics",
          experience: 10,
          rating: 4.6,
          reviews: 134,
          feesPerConsultation: 180,
          address: "321 Sports Medicine Clinic, Athletic City",
          timings: { start: "09:30", end: "17:30" },
          about: "Orthopedic surgeon specializing in sports injuries and joint replacement surgery.",
          education: "MD from UCLA Medical School",
          services: ["Joint Surgery", "Sports Medicine", "Fracture Treatment"],
          available: true,
          nextAvailable: "Today"
        },
        {
          id: 5,
          firstName: "Lisa",
          lastName: "Anderson",
          email: "dr.lisa@arogyacare.com",
          phone: "+1-555-0105",
          specialization: "Dermatology",
          experience: 7,
          rating: 4.9,
          reviews: 98,
          feesPerConsultation: 160,
          address: "654 Skin Care Center, Beauty Town",
          timings: { start: "08:30", end: "16:30" },
          about: "Dermatologist specializing in skin disorders, cosmetic procedures, and skin cancer prevention.",
          education: "MD from Mayo Clinic",
          services: ["Skin Consultation", "Cosmetic Procedures", "Skin Cancer Screening"],
          available: true,
          nextAvailable: "Tomorrow"
        }
      ]
      
      setDoctors(mockDoctors)
      
      // Extract unique specializations
      const uniqueSpecs = [...new Set(mockDoctors.map(doc => doc.specialization))]
      setSpecializations(uniqueSpecs)
      
    } catch (error) {
      console.error('Error fetching doctors:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterAndSortDoctors = () => {
    let filtered = doctors

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(doctor => 
        `${doctor.firstName} ${doctor.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.address.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by specialization
    if (specializationFilter !== 'all') {
      filtered = filtered.filter(doctor => doctor.specialization === specializationFilter)
    }

    // Sort doctors
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'experience':
          return b.experience - a.experience
        case 'fees':
          return a.feesPerConsultation - b.feesPerConsultation
        case 'name':
          return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`)
        default:
          return 0
      }
    })

    setFilteredDoctors(filtered)
  }

  const bookAppointment = (doctorId) => {
    // Navigate to booking page or open booking modal
    console.log(`Booking appointment with doctor ${doctorId}`)
    alert('Booking functionality will be implemented with backend integration')
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-current text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 text-yellow-400" />)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)
    }

    return stars
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
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Find Your Doctor</h1>
        <p className="text-gray-600 mt-2">Discover and book appointments with qualified healthcare professionals</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Search */}
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors, specializations, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Specialization Filter */}
          <div>
            <select
              value={specializationFilter}
              onChange={(e) => setSpecializationFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Specializations</option>
              {specializations.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="rating">Sort by Rating</option>
              <option value="experience">Sort by Experience</option>
              <option value="fees">Sort by Fees</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>

          {/* Clear Filters */}
          <div>
            <button
              onClick={() => {
                setSearchTerm('')
                setSpecializationFilter('all')
                setSortBy('rating')
              }}
              className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-gray-600">
        Found {filteredDoctors.length} doctors
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDoctors.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No doctors found</p>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        ) : (
          filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                {/* Doctor Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {doctor.firstName[0]}{doctor.lastName[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Dr. {doctor.firstName} {doctor.lastName}
                      </h3>
                      {doctor.available ? (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          Available {doctor.nextAvailable}
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                          Unavailable
                        </span>
                      )}
                    </div>
                    <p className="text-blue-600 font-medium">{doctor.specialization}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {renderStars(doctor.rating)}
                      <span className="text-sm text-gray-600 ml-2">
                        {doctor.rating} ({doctor.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-2" />
                    {doctor.experience} years experience
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {doctor.address}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {doctor.timings.start} - {doctor.timings.end}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    ${doctor.feesPerConsultation} per consultation
                  </div>
                </div>

                {/* About */}
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {doctor.about}
                </p>

                {/* Services */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {doctor.services.slice(0, 3).map((service, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        {service}
                      </span>
                    ))}
                    {doctor.services.length > 3 && (
                      <span className="bg-gray-50 text-gray-600 px-2 py-1 rounded text-xs">
                        +{doctor.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View Profile
                    </button>
                    <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                      Reviews
                    </button>
                  </div>
                  <button
                    onClick={() => bookAppointment(doctor.id)}
                    disabled={!doctor.available}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Load More - for pagination */}
      {filteredDoctors.length > 0 && (
        <div className="text-center">
          <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Load More Doctors
          </button>
        </div>
      )}
    </div>
  )
}

export default FindDoctors