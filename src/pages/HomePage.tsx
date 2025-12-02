import React from 'react';
import Hero from '../components/home/Hero';
import KeyFindings from '../components/home/KeyFindings';
import SpeciesOfWeek from '../components/home/SpeciesOfWeek';
import MigrationAlerts from '../components/home/MigrationAlerts';
import CTAGrid from '../components/home/CTAGrid';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <KeyFindings />
      <SpeciesOfWeek />
      <MigrationAlerts />
      <CTAGrid />
    </div>
  );
};

export default HomePage;
