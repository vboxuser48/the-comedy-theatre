import React from 'react';
import { Mic2, Heart, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 p-2 rounded-full">
                <Mic2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">The Comedy Theatre</h3>
                <p className="text-sm text-yellow-400">Indiranagar, Bangalore</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bangalore's premier comedy destination since 2018. Join us for unforgettable 
              nights of laughter, featuring the best local and national comedians in an 
              intimate, welcoming atmosphere.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/comedytheatrebangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/comedytheatrebangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/comedytheatreblr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-400 p-2 rounded-full transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2 text-red-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-red-500" />
                <span>info@comedytheatre.in</span>
              </div>
              <div className="text-gray-400">
                <p>123 100 Feet Rd, Indiranagar</p>
                <p>Bangalore, Karnataka 560038</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-2 text-red-500" />
              <span>for comedy lovers in Bangalore</span>
            </div>
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} The Comedy Theatre. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;