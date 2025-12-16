import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative text-white py-24 overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, #2E5266 0%, #4A7C59 50%, #3d6b4d 100%)'
    }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
            🦅 The Prairie State's Birding Resource
          </div>
          <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">
            Discover Illinois Birds
          </h1>
          <p className="text-xl mb-4 max-w-4xl mx-auto leading-relaxed font-light">
            Explore decades of bird monitoring data from across Illinois. Our comprehensive database 
            tracks population trends, migration patterns, and conservation status of the state's diverse avian species. 
            From backyard feeders to remote prairies, discover the incredible diversity of birdlife across the Prairie State.
          </p>
          <p className="text-lg max-w-4xl mx-auto opacity-90 font-light">
            Building on a rich legacy of ornithological research, Illinois Birds brings together data 
            from citizen scientists, researchers, and monitoring programs to inform conservation action. 
            Access interactive maps, population trend analyses, and species profiles that help tell the story 
            of Illinois birds and their changing habitats.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
