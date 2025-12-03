import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import SpeciesListPage from './pages/SpeciesListPage';
import SpeciesDetailPage from './pages/SpeciesDetailPage';
import DataExplorerLayout from './pages/DataExplorerLayout';
import DistributionMapsPage from './pages/DistributionMapsPage';
import PopulationTrendsPage from './pages/PopulationTrendsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="species" element={<SpeciesListPage />} />
        <Route path="species/:id" element={<SpeciesDetailPage />} />
        
        {/* Data Explorer Routes */}
        <Route path="data-explorer" element={<DataExplorerLayout />}>
          <Route path="maps" element={<DistributionMapsPage />} />
          <Route path="trends" element={<PopulationTrendsPage />} />
          <Route path="migration" element={<div>Migration Timing - Coming Soon</div>} />
          <Route path="habitat" element={<div>Habitat & Land Cover - Coming Soon</div>} />
        </Route>

        {/* Monitoring */}
        <Route path="monitoring" element={<div>Monitoring Programs - Coming Soon</div>} />

        {/* Conservation Routes */}
        <Route path="conservation/issues" element={<div>Current Issues - Coming Soon</div>} />
        <Route path="conservation/action" element={<div>What You Can Do - Coming Soon</div>} />
        <Route path="conservation/resources" element={<div>Resources for Managers - Coming Soon</div>} />

        {/* Education Routes */}
        <Route path="education/lessons" element={<div>Lesson Plans - Coming Soon</div>} />
        <Route path="education/datasets" element={<div>Downloadable Datasets - Coming Soon</div>} />
        <Route path="education/activities" element={<div>Interactive Activities - Coming Soon</div>} />
        <Route path="education/articles" element={<div>Articles - Coming Soon</div>} />

        {/* Researchers Routes */}
        <Route path="researchers/methods" element={<div>Model Methods - Coming Soon</div>} />
        <Route path="researchers/api" element={<div>API Access - Coming Soon</div>} />
        <Route path="researchers/data" element={<div>Model Output - Coming Soon</div>} />
        <Route path="researchers/protocols" element={<div>Protocols for Banders - Coming Soon</div>} />

        {/* About Routes */}
        <Route path="about/mission" element={<div>Mission & Vision - Coming Soon</div>} />
        <Route path="about/team" element={<div>Our Team - Coming Soon</div>} />
        <Route path="about/collaborators" element={<div>Collaborators - Coming Soon</div>} />
        <Route path="about/contact" element={<div>Contact - Coming Soon</div>} />
      </Route>
    </Routes>
  );
}

export default App;
