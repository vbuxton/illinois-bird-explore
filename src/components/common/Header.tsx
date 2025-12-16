import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">IL</span>
            </div>
            <span className="font-heading font-bold text-xl text-primary-blue">
              Illinois Birds
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link
              to="/species"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-green transition-colors"
            >
              Species Accounts
            </Link>

            <Link
              to="/migration"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-green transition-colors"
            >
              Migration
            </Link>

            <Link
              to="/monitoring"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-green transition-colors"
            >
              Monitoring Programs
            </Link>

            {/* Conservation Dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-green transition-colors">
                Conservation
                <FiChevronDown className="ml-1" />
              </MenuButton>
              <MenuItems className="absolute left-0 mt-2 w-64 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/conservation/status"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Conservation Status Lists (E and T)
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/conservation/sgnc"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      SGCN
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/conservation/extinct"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Extinct Birds of Illinois
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/conservation/what-you-can-do"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      What You Can Do for Birds
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/conservation/issues"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Conservation Issues
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/conservation/organizations"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Bird Conservation Organizations
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/conservation/illinois-birds"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Full Annual Cycle Conservation for "Illinois Birds"
                    </Link>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>

            {/* Bird Curiosity/Education Dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-green transition-colors">
                Bird Curiosity/Education
                <FiChevronDown className="ml-1" />
              </MenuButton>
              <MenuItems className="absolute left-0 mt-2 w-64 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/education/where-to-see-birds"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Where You Can See Birds
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/education/opportunities"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Opportunities in Your Area
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/education/what-is-birdwatching"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      What is Birdwatching
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/education/current-issues"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Current Issues
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/education/example-data"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Example Data for Schools
                    </Link>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>

            {/* Illinois BirdLab Dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-green transition-colors">
                Illinois BirdLab
                <FiChevronDown className="ml-1" />
              </MenuButton>
              <MenuItems className="absolute left-0 mt-2 w-64 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/birdlab/people"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      People
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/birdlab/history"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      History of Bird Research in Illinois
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/birdlab/current-research"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Current research
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/birdlab/code"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Resources - Code
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/birdlab/protocols"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Resources - Protocols
                    </Link>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
