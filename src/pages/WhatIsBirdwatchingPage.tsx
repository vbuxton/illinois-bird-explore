import React from 'react';
import { FiBook } from 'react-icons/fi';

const WhatIsBirdwatchingPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2E5266' }}>
          What is Birdwatching
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          Learn about the hobby of birdwatching and how to get started identifying birds in Illinois.
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3" style={{ color: '#2E5266' }}>
            Introduction to Birding
          </h3>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
            Birdwatching (or birding) is the observation of birds in their natural habitat as a recreational 
            activity or citizen science. It's one of the fastest-growing outdoor activities, appealing to people 
            of all ages and physical abilities. Birding can be as simple as watching birds at your backyard 
            feeder or as involved as traveling to see rare species.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Why Bird?</h4>
              <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                <li>• Connect with nature</li>
                <li>• Reduce stress and improve mental health</li>
                <li>• Lifelong learning opportunities</li>
                <li>• Social connections with like-minded people</li>
                <li>• Contribute to scientific research</li>
                <li>• Accessible and affordable hobby</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Getting Started</h4>
              <ul className="text-sm space-y-1" style={{ color: '#374151' }}>
                <li>• Binoculars (8x42 recommended)</li>
                <li>• Field guide or bird ID app</li>
                <li>• Notebook or eBird app</li>
                <li>• Patience and curiosity</li>
                <li>• Join a local bird walk</li>
                <li>• Start in your own backyard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bird Identification */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiBook className="w-8 h-8" style={{ color: '#4A7C59' }} />
          <h2 className="text-3xl font-bold" style={{ color: '#2E5266' }}>
            Bird Identification Basics
          </h2>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
          <p className="text-base mb-4" style={{ color: '#374151' }}>
            Learning to identify birds takes practice, but following a systematic approach helps:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Size & Shape</h4>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• Overall body size</li>
                <li>• Bill shape and size</li>
                <li>• Tail length and shape</li>
                <li>• Wing shape and length</li>
                <li>• Leg length</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Color & Pattern</h4>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• Overall color</li>
                <li>• Wing bars and patches</li>
                <li>• Eye rings or stripes</li>
                <li>• Breast patterns</li>
                <li>• Tail patterns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#2E5266' }}>Behavior & Habitat</h4>
              <ul className="text-xs space-y-1" style={{ color: '#374151' }}>
                <li>• Flight pattern</li>
                <li>• Feeding behavior</li>
                <li>• Habitat preference</li>
                <li>• Song and calls</li>
                <li>• Seasonal presence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Beginners */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg shadow-lg">
        <h4 className="font-semibold mb-3" style={{ color: '#2E5266' }}>
          🔍 Tips for Beginning Birders
        </h4>
        <ul className="space-y-2 text-sm" style={{ color: '#374151' }}>
          <li className="flex items-start gap-2">
            <span>1.</span>
            <span><strong>Start local:</strong> Learn the common birds in your area before seeking rarities</span>
          </li>
          <li className="flex items-start gap-2">
            <span>2.</span>
            <span><strong>Use technology:</strong> Apps like Merlin Bird ID can help identify birds by photo or song</span>
          </li>
          <li className="flex items-start gap-2">
            <span>3.</span>
            <span><strong>Take notes:</strong> Record what you see to reinforce learning and track your progress</span>
          </li>
          <li className="flex items-start gap-2">
            <span>4.</span>
            <span><strong>Join others:</strong> Bird with experienced birders who can teach you field marks and calls</span>
          </li>
          <li className="flex items-start gap-2">
            <span>5.</span>
            <span><strong>Be patient:</strong> Bird ID skills develop over time through repeated observation</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default WhatIsBirdwatchingPage;
