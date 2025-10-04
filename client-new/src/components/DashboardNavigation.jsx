import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  Home, 
  Calendar, 
  Users, 
  User, 
  Search,
  Activity,
  Settings,
  LogOut
} from 'lucide-react'

const DashboardNavigation = ({ userType = 'patient', onLogout }) => {
  const patientNavItems = [
    { path: '/patient-dashboard', icon: Home, label: 'Dashboard', color: 'blue' },
    { path: '/patient-appointments', icon: Calendar, label: 'My Appointments', color: 'green' },
    { path: '/find-doctors', icon: Search, label: 'Find Doctors', color: 'purple' },
    { path: '/patient-profile', icon: User, label: 'My Profile', color: 'indigo' },
  ]

  const doctorNavItems = [
    { path: '/doctor-dashboard', icon: Home, label: 'Dashboard', color: 'blue' },
    { path: '/doctor-appointments', icon: Calendar, label: 'Appointments', color: 'green' },
    { path: '/doctor-patients', icon: Users, label: 'My Patients', color: 'purple' },
    { path: '/doctor-profile', icon: User, label: 'Profile', color: 'indigo' },
  ]

  const navItems = userType === 'doctor' ? doctorNavItems : patientNavItems

  return (
    <nav className="bg-white shadow-lg border-r border-gray-200 h-full w-64 fixed left-0 top-16 z-40">
      <div className="p-6">
        <div className="space-y-2">
          {navItems.map((item, index) => {
            const Icon = item.icon
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? `bg-${item.color}-50 border-2 border-${item.color}-200 text-${item.color}-700 shadow-lg`
                      : 'hover:bg-gray-50 hover:shadow-md text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon 
                      className={`h-5 w-5 transition-colors ${
                        isActive ? `text-${item.color}-600` : 'text-gray-500 group-hover:text-gray-700'
                      }`} 
                    />
                    <span className={`font-medium ${isActive ? 'font-semibold' : ''}`}>
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            )
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Additional Actions */}
        <div className="space-y-2">
          <button className="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gray-50 hover:shadow-md text-gray-600 hover:text-gray-900 w-full text-left group">
            <Settings className="h-5 w-5 text-gray-500 group-hover:text-gray-700" />
            <span className="font-medium">Settings</span>
          </button>
          
          <button 
            onClick={onLogout}
            className="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-red-50 hover:shadow-md text-gray-600 hover:text-red-600 w-full text-left group"
          >
            <LogOut className="h-5 w-5 text-gray-500 group-hover:text-red-600" />
            <span className="font-medium">Logout</span>
          </button>
        </div>

        {/* User Info */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Welcome!</p>
              <p className="text-xs text-gray-600 capitalize">{userType} Dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default DashboardNavigation