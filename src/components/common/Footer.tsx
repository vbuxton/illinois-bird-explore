import React from 'react';
import { Link } from 'react-router-dom';
import { FiTwitter, FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-blue text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Illinois Birds</h3>
            <p className="text-gray-300 text-sm">
              Connecting people with Illinois bird data to inform conservation and inspire action.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/species" className="text-gray-300 hover:text-white transition-colors">
                  Species Accounts
                </Link>
              </li>
              <li>
                <Link to="/data-explorer/maps" className="text-gray-300 hover:text-white transition-colors">
                  Distribution Maps
                </Link>
              </li>
              <li>
                <Link to="/data-explorer/trends" className="text-gray-300 hover:text-white transition-colors">
                  Population Trends
                </Link>
              </li>
              <li>
                <Link to="/monitoring" className="text-gray-300 hover:text-white transition-colors">
                  Monitoring Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/education/lessons" className="text-gray-300 hover:text-white transition-colors">
                  Lesson Plans
                </Link>
              </li>
              <li>
                <Link to="/education/activities" className="text-gray-300 hover:text-white transition-colors">
                  Interactive Activities
                </Link>
              </li>
              <li>
                <Link to="/education/articles" className="text-gray-300 hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/conservation/action" className="text-gray-300 hover:text-white transition-colors">
                  What You Can Do
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about/team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/about/collaborators" className="text-gray-300 hover:text-white transition-colors">
                  Collaborators
                </Link>
              </li>
              <li>
                <Link to="/about/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/researchers/api" className="text-gray-300 hover:text-white transition-colors">
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <p className="text-sm text-gray-300 text-center mb-6">In Partnership With:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Placeholder for partner logos */}
            <div className="h-12 w-32 bg-white/10 rounded"></div>
            <div className="h-12 w-32 bg-white/10 rounded"></div>
            <div className="h-12 w-32 bg-white/10 rounded"></div>
            <div className="h-12 w-32 bg-white/10 rounded"></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Illinois Birds. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
