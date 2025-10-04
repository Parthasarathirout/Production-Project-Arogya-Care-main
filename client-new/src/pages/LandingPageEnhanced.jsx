import React, { useState, useEffect } from 'react'
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
  MapPin,
  Activity,
  Award,
  Clock,
  ChevronLeft,
  ChevronRight,
  Zap,
  Globe,
  Smartphone
} from 'lucide-react'

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)

    return () => {
      clearInterval(testimonialInterval)
      clearInterval(statInterval)
    }
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      content: "Arogya Care made it so easy to find the right doctor. The online booking system is fantastic and the doctors are amazing!",
      rating: 5,
      image: null
    },
    {
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      content: "As a healthcare provider, I love how this platform helps me manage my practice efficiently while providing better patient care.",
      rating: 5,
      image: null
    },
    {
      name: "Robert Martinez",
      role: "Patient",
      content: "The reminder system and easy rescheduling options have been a game-changer for managing my family's health appointments.",
      rating: 5,
      image: null
    }
  ]

  const stats = [
    { number: "15,000+", label: "Happy Patients", icon: Users, color: "blue" },
    { number: "500+", label: "Qualified Doctors", icon: Award, color: "green" },
    { number: "75,000+", label: "Appointments Booked", icon: Calendar, color: "purple" },
    { number: "24/7", label: "Support Available", icon: Clock, color: "orange" }
  ]

  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered appointment booking that finds the perfect time slot for both patients and doctors.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Verified Professionals",
      description: "All healthcare providers are thoroughly verified and certified for your peace of mind.",
      color: "green"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Your health data is protected with bank-level security and strict privacy protocols.",
      color: "purple"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Access your healthcare anywhere, anytime with our responsive mobile platform.",
      color: "pink"
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Get real-time updates about appointments, reminders, and health insights.",
      color: "yellow"
    },
    {
      icon: Globe,
      title: "Telemedicine Ready",
      description: "Connect with doctors virtually from the comfort of your home with video consultations.",
      color: "indigo"
    }
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-teal-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '4s'}}></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Logo and Title */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="relative">
                <Heart className="h-16 w-16 text-blue-600 animate-pulse" />
                <div className="absolute inset-0 h-16 w-16 bg-blue-600 rounded-full animate-ping opacity-25"></div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Arogya Care
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
              Healthcare Made <span className="text-blue-600 font-semibold">Simple & Accessible</span>
            </p>
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
              Connect with qualified doctors, manage appointments, and take control of your health journey with our advanced healthcare platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link
                to="/register"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-3 min-w-[250px]"
              >
                <Users className="h-6 w-6" />
                <span>Join as Patient</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/register"
                className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center space-x-3 min-w-[250px]"
              >
                <Heart className="h-6 w-6" />
                <span>Join as Doctor</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 mb-16">
              <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="font-medium">Verified Doctors</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Activity className="h-4 w-4 text-blue-500" />
                <span className="font-medium">24/7 Available</span>
              </div>
            </div>

            {/* Already have account */}
            <p className="text-gray-500">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-4 hover:decoration-blue-800 transition-all duration-300"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-16 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div 
                  key={index} 
                  className={`text-center p-6 rounded-2xl transition-all duration-500 transform ${
                    currentStat === index ? 'scale-110 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg' : 'hover:scale-105'
                  }`}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    stat.color === 'green' ? 'bg-green-100 text-green-600' :
                    stat.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Why Choose <span className="text-blue-600">Arogya Care?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience healthcare like never before with our comprehensive, secure, and user-friendly platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    feature.color === 'blue' ? 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600' :
                    feature.color === 'green' ? 'bg-gradient-to-br from-green-100 to-green-200 text-green-600' :
                    feature.color === 'purple' ? 'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600' :
                    feature.color === 'pink' ? 'bg-gradient-to-br from-pink-100 to-pink-200 text-pink-600' :
                    feature.color === 'yellow' ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-600' :
                    'bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-600'
                  }`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of satisfied patients and healthcare providers
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-semibold">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-blue-200">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Healthcare Experience?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Join thousands who trust Arogya Care for their healthcare needs. 
              Start your journey to better health today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/register"
                className="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-3"
              >
                <span>Get Started Free</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/login"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                Sign In
              </Link>
            </div>
            
            <p className="text-gray-400 mt-8 text-lg">
              ✨ No credit card required • 🔒 100% Secure • 📱 Works on all devices
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="h-10 w-10 text-blue-500" />
                <span className="text-3xl font-bold">Arogya Care</span>
              </div>
              <p className="text-gray-400 text-lg mb-6 max-w-md">
                Making healthcare accessible, simple, and effective for everyone. 
                Your health, our priority.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-5 w-5" />
                  <span>hello@arogyacare.com</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
                <Link to="/doctors" className="block text-gray-400 hover:text-white transition-colors">Find Doctors</Link>
                <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">Services</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            
            {/* Legal */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Legal</h3>
              <div className="space-y-3">
                <Link to="/privacy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/security" className="block text-gray-400 hover:text-white transition-colors">Security</Link>
                <Link to="/compliance" className="block text-gray-400 hover:text-white transition-colors">HIPAA Compliance</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Arogya Care. All rights reserved. Made with ❤️ for better healthcare.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage