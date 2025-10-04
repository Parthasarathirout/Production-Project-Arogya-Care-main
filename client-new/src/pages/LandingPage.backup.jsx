import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  Calendar, 
  Users, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

const LandingPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Healthcare Made{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Simple
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Connect with qualified doctors, book appointments, and manage your health journey 
                with Arogya Care - your trusted healthcare platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link
                to="/register"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center space-x-2 min-w-[220px]"
              >
                <Users className="h-5 w-5" />
                <span>Join as Patient</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/register"
                className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center space-x-2 min-w-[220px]"
              >
                <Heart className="h-5 w-5" />
                <span>Join as Doctor</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <p className="text-gray-500 pt-4">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-blue-600 hover:text-blue-800 font-medium underline decoration-2 underline-offset-4 hover:decoration-blue-800 transition-colors"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Why Choose Arogya Care?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience healthcare like never before with our comprehensive platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group text-center space-y-6 p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Calendar className="h-10 w-10 text-blue-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Easy Appointment Booking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Book appointments with qualified doctors in just a few clicks. 
                  Choose your preferred time and date with our intuitive interface.
                </p>
              </div>
            </div>
            
            <div className="group text-center space-y-6 p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Qualified Doctors</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with certified healthcare professionals with years of experience 
                  and specialized knowledge in various medical fields.
                </p>
              </div>
            </div>
            
            <div className="group text-center space-y-6 p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Shield className="h-10 w-10 text-purple-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Secure & Private</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your health data is protected with industry-standard security measures 
                  and strict privacy protocols to ensure complete confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is simple and straightforward
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '1',
                title: 'Sign Up',
                description: 'Create your account as a patient or doctor. Complete your profile with necessary information and verification.',
                color: 'blue',
                icon: Users
              },
              {
                step: '2',
                title: 'Find & Book',
                description: 'Browse available doctors, check their profiles, ratings, and book appointments at your convenience.',
                color: 'green',
                icon: Calendar
              },
              {
                step: '3',
                title: 'Get Care',
                description: 'Attend your appointment and receive quality healthcare from certified professionals in a secure environment.',
                color: 'purple',
                icon: Heart
              }
            ].map((item, index) => (
              <div key={index} className="group text-center space-y-6">
                <div className="relative">
                  <div className={`w-24 h-24 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-3xl flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    {item.step}
                  </div>
                  <div className={`absolute -inset-4 bg-${item.color}-100 rounded-3xl -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">1000+</div>
              <div className="text-blue-100">Happy Patients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">50+</div>
              <div className="text-blue-100">Qualified Doctors</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">99%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of patients and doctors who trust Arogya Care for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Link
              to="/register"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Get Started as Patient
            </Link>
            <Link
              to="/register"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Join as Doctor
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Arogya Care</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted healthcare platform connecting patients with qualified doctors 
                for better health outcomes.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
                <Link to="/login" className="block text-gray-400 hover:text-white transition-colors">Login</Link>
                <Link to="/register" className="block text-gray-400 hover:text-white transition-colors">Sign Up</Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>support@arogyacare.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Arogya Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage