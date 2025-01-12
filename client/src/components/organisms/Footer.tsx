// components/Footer.tsx
import { Mail, Phone, Facebook, Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">JobFinder</h2>
          <p className="mt-4 text-gray-400">Your trusted platform to find your dream job and grow your career.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-gray-300">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info and Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:support@jobfinder.com" className="hover:text-gray-300">
                support@jobfinder.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              +1 (234) 567-8901
            </p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        © {new Date().getFullYear()} JobFinder. All rights reserved.
      </div>
    </footer>
  )
}
