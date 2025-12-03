import React from 'react';
import { Link } from 'react-router-dom';
import { FiTwitter, FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ color: '#FFFFFF' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4" style={{ color: '#FFFFFF' }}>Illinois Birds</h3>
            <p className="text-sm" style={{ color: '#FFFFFF' }}>
              Connecting people with Illinois bird data to inform conservation and inspire action.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                <FiTwitter size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                <FiFacebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                <FiInstagram size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#FFFFFF' }}>Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/species" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Species Accounts
                </Link>
              </li>
              <li>
                <Link to="/data-explorer/maps" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Distribution Maps
                </Link>
              </li>
              <li>
                <Link to="/data-explorer/trends" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Population Trends
                </Link>
              </li>
              <li>
                <Link to="/monitoring" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Monitoring Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#FFFFFF' }}>Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/education/lessons" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Lesson Plans
                </Link>
              </li>
              <li>
                <Link to="/education/activities" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Interactive Activities
                </Link>
              </li>
              <li>
                <Link to="/education/articles" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/conservation/action" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                  What You Can Do
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#FFFFFF' }}>Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about/team" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/about/collaborators" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Collaborators
                </Link>
              </li>
              <li>
                <Link to="/about/contact" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/researchers/api" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-sm" style={{ color: '#FFFFFF' }}>
          <p>© {new Date().getFullYear()} Illinois Birds. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF' }}>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
