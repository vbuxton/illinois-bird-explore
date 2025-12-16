import React from 'react';
import { FiCalendar, FiExternalLink } from 'react-icons/fi';

const OpportunitiesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2E5266' }}>
          Opportunities in Your Area
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          Discover birding events, programs, and activities happening across Illinois.
        </p>
      </div>

      {/* Owl Nights Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🦉</span>
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Owl Nights
          </h2>
        </div>
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg mb-4">
          <p className="text-base mb-4" style={{ color: '#374151' }}>
            Many nature centers, forest preserves, and parks host owl prowl events during winter months 
            when owls are most vocal and active. These guided nighttime walks offer opportunities to hear 
            and see owls in their natural habitat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>What to Expect</h4>
              <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                <li>• Evening walks (typically 6-8 PM)</li>
                <li>• Owl call playback to elicit responses</li>
                <li>• Educational information about owl ecology</li>
                <li>• Family-friendly programs</li>
                <li>• Dress warmly for winter weather</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Target Species</h4>
              <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                <li>• Great Horned Owl</li>
                <li>• Eastern Screech-Owl</li>
                <li>• Barred Owl</li>
                <li>• Long-eared Owl (occasional)</li>
                <li>• Short-eared Owl (grasslands)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Audubon Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🐦</span>
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Audubon
          </h2>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg mb-4">
          <p className="text-base mb-4" style={{ color: '#374151' }}>
            Illinois Audubon and local Audubon chapters offer year-round programs, field trips, and 
            educational opportunities for birders of all levels.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Programs & Activities</h4>
              <ul className="text-sm space-y-2" style={{ color: '#374151' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span><strong>Guided bird walks:</strong> Weekly or monthly outings to local birding spots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span><strong>Educational programs:</strong> Monthly meetings with guest speakers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span><strong>Conservation projects:</strong> Habitat restoration and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span><strong>Youth programs:</strong> Bird camps and educational activities for kids</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#4A7C59' }}>•</span>
                  <span><strong>Festival participation:</strong> Migration celebrations and bird festivals</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.illinoisaudubon.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
              style={{ backgroundColor: '#4A7C59', color: 'white' }}
            >
              Visit Illinois Audubon <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      {/* Other Opportunities Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiCalendar className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            More Opportunities
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Nature Centers</h4>
            <p className="text-sm" style={{ color: '#374151' }}>
              Local nature centers offer bird-watching programs, festivals, and educational exhibits throughout the year.
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Bird Clubs</h4>
            <p className="text-sm" style={{ color: '#374151' }}>
              Join local bird clubs for regular outings, social connections, and learning opportunities with experienced birders.
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>State Parks</h4>
            <p className="text-sm" style={{ color: '#374151' }}>
              Illinois state parks host birding events, particularly during migration seasons and for special species.
            </p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Festivals</h4>
            <p className="text-sm" style={{ color: '#374151' }}>
              Annual bird festivals celebrate migration and provide guided tours, workshops, and vendor exhibitions.
            </p>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Universities</h4>
            <p className="text-sm" style={{ color: '#374151' }}>
              University programs offer public lectures, field trips, and citizen science opportunities.
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Photography Workshops</h4>
            <p className="text-sm" style={{ color: '#374151' }}>
              Learn bird photography techniques through workshops at nature centers and photography groups.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiCalendar className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Upcoming Bird Events in Illinois
          </h2>
        </div>

        {/* Placeholder Events List */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4" style={{ color: '#2E5266' }}>
            Current Events
          </h3>
          <div className="space-y-4">
            {/* Example Event 1 */}
            <div className="border-l-4 pl-4 py-3 bg-gray-50 rounded-r-lg" style={{ borderColor: '#4A7C59' }}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: '#2E5266' }}>
                    Winter Bird Walk at Montrose Point
                  </h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Join us for a guided walk to spot winter waterfowl and gulls along the lakefront.
                  </p>
                  <p className="text-xs mt-2" style={{ color: '#374151' }}>
                    <strong>Location:</strong> Montrose Point, Chicago
                  </p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <div className="text-sm font-semibold" style={{ color: '#4A7C59' }}>Jan 15, 2026</div>
                  <div className="text-xs" style={{ color: '#6B7280' }}>8:00 AM</div>
                </div>
              </div>
            </div>

            {/* Example Event 2 */}
            <div className="border-l-4 pl-4 py-3 bg-gray-50 rounded-r-lg" style={{ borderColor: '#4A7C59' }}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: '#2E5266' }}>
                    Owl Prowl at Allerton Park
                  </h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Evening walk to listen for Great Horned and Barred Owls. Bring a flashlight!
                  </p>
                  <p className="text-xs mt-2" style={{ color: '#374151' }}>
                    <strong>Location:</strong> Allerton Park, Monticello
                  </p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <div className="text-sm font-semibold" style={{ color: '#4A7C59' }}>Jan 20, 2026</div>
                  <div className="text-xs" style={{ color: '#6B7280' }}>6:30 PM</div>
                </div>
              </div>
            </div>

            {/* Example Event 3 */}
            <div className="border-l-4 pl-4 py-3 bg-gray-50 rounded-r-lg" style={{ borderColor: '#4A7C59' }}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: '#2E5266' }}>
                    Spring Migration Workshop
                  </h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Learn warbler identification skills before spring migration. Indoor presentation followed by field practice.
                  </p>
                  <p className="text-xs mt-2" style={{ color: '#374151' }}>
                    <strong>Location:</strong> Illinois Audubon Center, Springfield
                  </p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <div className="text-sm font-semibold" style={{ color: '#4A7C59' }}>Mar 5, 2026</div>
                  <div className="text-xs" style={{ color: '#6B7280' }}>9:00 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Event Form */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
            Know of a Bird Event?
          </h3>
          <p className="text-sm mb-4" style={{ color: '#374151' }}>
            Help us keep this calendar up to date! Submit bird-related events happening in Illinois. 
            Events will be reviewed before being added to the list.
          </p>
          
          {/* Google Form Embed */}
          <div className="bg-white rounded-lg p-4">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfT76x1J_oTOPglIwXSUkoenNd544GzYc77pOyrGWcXtbkllg/viewform?embedded=true"
              width="100%"
              height="1033"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Submit Bird Event"
              className="rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpportunitiesPage;
