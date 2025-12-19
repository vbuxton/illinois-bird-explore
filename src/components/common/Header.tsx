import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

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

          {/* Desktop Navigation */}
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

          {/* Mobile menu button */}
          <Disclosure as="div" className="md:hidden">
            {({ open }) => (
              <>
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-green">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>

                <DisclosurePanel className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {/* Species Accounts */}
                    <Link
                      to="/species"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-green"
                    >
                      Species Accounts
                    </Link>

                    {/* Migration */}
                    <Link
                      to="/migration"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-green"
                    >
                      Migration
                    </Link>

                    {/* Monitoring Programs */}
                    <Link
                      to="/monitoring"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-green"
                    >
                      Monitoring Programs
                    </Link>

                    {/* Conservation Section */}
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-green">
                            Conservation
                            <FiChevronDown
                              className={`${
                                open ? 'transform rotate-180' : ''
                              } w-5 h-5 transition-transform`}
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="pl-4 space-y-1">
                            <Link
                              to="/conservation/status"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              Conservation Status Lists (E and T)
                            </Link>
                            <Link
                              to="/conservation/sgnc"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              SGCN
                            </Link>
                            <Link
                              to="/conservation/extinct"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              Extinct Birds of Illinois
                            </Link>
                            <Link
                              to="/conservation/what-you-can-do"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              What You Can Do for Birds
                            </Link>
                            <Link
                              to="/conservation/issues"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              Conservation Issues
                            </Link>
                            <Link
                              to="/conservation/organizations"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              Bird Conservation Organizations
                            </Link>
                            <Link
                              to="/conservation/illinois-birds"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              Full Annual Cycle Conservation for "Illinois Birds"
                            </Link>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    {/* Bird Curiosity/Education Section */}
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-green">
                            Bird Curiosity/Education
                            <FiChevronDown
                              className={`${
                                open ? 'transform rotate-180' : ''
                              } w-5 h-5 transition-transform`}
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="pl-4 space-y-1">
                            <Link
                              to="/education/where-to-see-birds"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              Where You Can See Birds
                            </Link>
                            <Link
                              to="/education/opportunities"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              Opportunities in Your Area
                            </Link>
                            <Link
                              to="/education/what-is-birdwatching"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              What is Birdwatching
                            </Link>
                            <Link
                              to="/education/current-issues"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              Current Issues
                            </Link>
                            <Link
                              to="/education/example-data"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              Example Data for Schools
                            </Link>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    {/* Illinois BirdLab Section */}
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-green">
                            Illinois BirdLab
                            <FiChevronDown
                              className={`${
                                open ? 'transform rotate-180' : ''
                              } w-5 h-5 transition-transform`}
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="pl-4 space-y-1">
                            <Link
                              to="/birdlab/people"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              People
                            </Link>
                            <Link
                              to="/birdlab/history"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              History of Bird Research in Illinois
                            </Link>
                            <Link
                              to="/birdlab/current-research"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              Current research
                            </Link>
                            <Link
                              to="/birdlab/code"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              Resources - Code
                            </Link>
                            <Link
                              to="/birdlab/protocols"
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-green"
                            >
                              Resources - Protocols
                            </Link>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </header>
  );
};

export default Header;
