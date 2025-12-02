import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiMap, 
  FiTrendingUp, 
  FiBookOpen, 
  FiDatabase,
  FiUsers,
  FiHeart 
} from 'react-icons/fi';

interface CTAButton {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: 'green' | 'blue' | 'orange';
}

const CTAGrid: React.FC = () => {
  const ctas: CTAButton[] = [
    {
      title: 'Explore Illinois Birds',
      description: 'Browse species accounts with photos, sounds, and identification guides',
      icon: <FiBookOpen size={32} />,
      link: '/species',
      color: 'green',
    },
    {
      title: 'Visualize Data',
      description: 'Interactive maps and charts showing distribution and population trends',
      icon: <FiMap size={32} />,
      link: '/data-explorer/maps',
      color: 'blue',
    },
    {
      title: 'View Population Trends',
      description: 'Analyze long-term population changes across Illinois',
      icon: <FiTrendingUp size={32} />,
      link: '/data-explorer/trends',
      color: 'green',
    },
    {
      title: 'Download Data',
      description: 'Access datasets for research and educational purposes',
      icon: <FiDatabase size={32} />,
      link: '/education/datasets',
      color: 'blue',
    },
    {
      title: 'Get Involved',
      description: 'Join monitoring programs and contribute to conservation efforts',
      icon: <FiUsers size={32} />,
      link: '/monitoring',
      color: 'orange',
    },
    {
      title: 'Take Action',
      description: 'Learn how you can help protect Illinois birds',
      icon: <FiHeart size={32} />,
      link: '/conservation/action',
      color: 'orange',
    },
  ];

  const getColorStyle = (color: string) => {
    switch (color) {
      case 'green':
        return { backgroundColor: '#4A7C59' };
      case 'blue':
        return { backgroundColor: '#2E5266' };
      case 'orange':
        return { backgroundColor: '#D9833A' };
      default:
        return { backgroundColor: '#4A7C59' };
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#2E5266' }}>
            What Would You Like to Do?
          </h2>
          <p style={{ color: '#6B7280' }}>
            Choose from our tools and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ctas.map((cta, index) => (
            <Link
              key={index}
              to={cta.link}
              className="text-white rounded-lg p-6 shadow-lg transition-all transform hover:scale-105"
              style={getColorStyle(cta.color)}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{cta.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cta.title}</h3>
                  <p className="text-sm opacity-90">{cta.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTAGrid;
