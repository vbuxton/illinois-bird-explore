import React from 'react';
import { FiTrendingUp, FiMapPin, FiUsers, FiDatabase } from 'react-icons/fi';

interface Finding {
  icon: React.ReactNode;
  title: string;
  statistic: string;
  description: string;
}

const KeyFindings: React.FC = () => {
  const findings: Finding[] = [
    {
      icon: <FiDatabase size={32} />,
      title: 'Species Documented',
      statistic: '450+',
      description: 'Bird species observed in Illinois',
    },
    {
      icon: <FiMapPin size={32} />,
      title: 'Observations',
      statistic: '2.5M+',
      description: 'Bird sightings recorded statewide',
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Years of Data',
      statistic: '50+',
      description: 'Long-term monitoring programs',
    },
    {
      icon: <FiUsers size={32} />,
      title: 'Contributors',
      statistic: '10K+',
      description: 'Citizen scientists & researchers',
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#2E5266' }}>
            Key Findings
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Discover insights from Illinois' comprehensive bird monitoring efforts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {findings.map((finding, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4" style={{ color: '#4A7C59' }}>
                {finding.icon}
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#2E5266' }}>
                {finding.statistic}
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>
                {finding.title}
              </h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>{finding.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFindings;
