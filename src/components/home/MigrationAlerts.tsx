import React from 'react';
import { FiAlertCircle, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface Alert {
  species: string;
  status: 'Arriving' | 'Peak' | 'Departing';
  date: string;
  location: string;
}

const MigrationAlerts: React.FC = () => {
  const alerts: Alert[] = [
    {
      species: 'Ruby-throated Hummingbird',
      status: 'Arriving',
      date: 'Early May',
      location: 'Statewide',
    },
    {
      species: 'Indigo Bunting',
      status: 'Peak',
      date: 'Mid-May',
      location: 'Southern Illinois',
    },
    {
      species: 'Sandhill Crane',
      status: 'Departing',
      date: 'Late April',
      location: 'Central Illinois',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Arriving':
        return 'bg-green-100 text-green-800';
      case 'Peak':
        return 'bg-blue-100 text-blue-800';
      case 'Departing':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FiAlertCircle className="mr-2" size={32} style={{ color: '#D9833A' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
              Migration Alerts
            </h2>
          </div>
          <p style={{ color: '#6B7280' }}>
            Current migration activity across Illinois
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`p-6 ${
                  index !== alerts.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#1F2937' }}>
                      {alert.species}
                    </h3>
                    <div className="flex items-center text-sm space-x-4" style={{ color: '#6B7280' }}>
                      <span className="flex items-center">
                        <FiClock className="mr-1" />
                        {alert.date}
                      </span>
                      <span>📍 {alert.location}</span>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      alert.status
                    )}`}
                  >
                    {alert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              to="/data-explorer/migration"
              className="inline-block font-semibold"
              style={{ color: '#4A7C59' }}
            >
              View Full Migration Calendar →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationAlerts;
