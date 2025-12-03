import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative text-white py-20" style={{ 
      background: 'linear-gradient(to right, #2E5266, #4A7C59)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Discover Illinois Birds
          </h1>
          <p className="text-xl mb-4 max-w-8xl mx-auto leading-relaxed">
            Explore decades of bird monitoring data from across Illinois. Our comprehensive database 
            tracks population trends, migration patterns, and conservation status of the state's diverse avian species. 
            From backyard feeders to remote prairies, discover the incredible diversity of birdlife across the Prairie State.
          </p>
          <p className="text-lg mb-8 max-w-8xl mx-auto opacity-90">
            Building on a rich legacy of ornithological research, Illinois Birds brings together data 
            from citizen scientists, researchers, and monitoring programs to inform conservation action. 
            Access interactive maps, population trend analyses, and species profiles that help tell the story 
            of Illinois birds and their changing habitats.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/species" className="px-6 py-3 rounded-lg font-semibold transition-colors" style={{
              backgroundColor: '#D9833A',
              color: 'white'
            }}>
              Explore Species
            </Link>
            <Link to="/data-explorer/maps" className="bg-white px-6 py-3 rounded-lg font-semibold transition-colors" style={{
              color: '#2E5266'
            }}>
              View Distribution Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
