import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import SpeciesListPage from './pages/SpeciesListPage';
import SpeciesDetailPage from './pages/SpeciesDetailPage';
import MigrationPage from './pages/MigrationPage';
import MonitoringProgramsPage from './pages/MonitoringProgramsPage';
import WhatYouCanDoPage from './pages/WhatYouCanDoPage';
import ConservationIssuesPage from './pages/ConservationIssuesPage';
import ConservationOrganizationsPage from './pages/ConservationOrganizationsPage';
import FullAnnualCycleConservationPage from './pages/FullAnnualCycleConservationPage';
import EducationPage from './pages/EducationPage';
import WhereToSeeBirdsPage from './pages/WhereToSeeBirdsPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import WhatIsBirdwatchingPage from './pages/WhatIsBirdwatchingPage';
import CurrentIssuesPage from './pages/CurrentIssuesPage';
import ExampleDataForSchoolsPage from './pages/ExampleDataForSchoolsPage';
import PeoplePage from './pages/PeoplePage';
import HistoryPage from './pages/HistoryPage';
import CurrentResearchPage from './pages/CurrentResearchPage';
import CodeResourcesPage from './pages/CodeResourcesPage';
import ProtocolsPage from './pages/ProtocolsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="species" element={<SpeciesListPage />} />
        <Route path="species/:id" element={<SpeciesDetailPage />} />
        
        {/* New Main Navigation Routes */}
        <Route path="migration" element={<MigrationPage />} />
        <Route path="monitoring" element={<MonitoringProgramsPage />} />
        
        {/* Conservation Routes */}
        <Route path="conservation/status" element={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><h1 className="text-4xl font-bold text-primary-blue">Conservation Status Lists (E and T) - Coming Soon</h1></div>} />
        <Route path="conservation/sgnc" element={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><h1 className="text-4xl font-bold text-primary-blue">SGCN - Coming Soon</h1></div>} />
        <Route path="conservation/extinct" element={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><h1 className="text-4xl font-bold text-primary-blue">Extinct Birds of Illinois - Coming Soon</h1></div>} />
        <Route path="conservation/what-you-can-do" element={<WhatYouCanDoPage />} />
        <Route path="conservation/issues" element={<ConservationIssuesPage />} />
        <Route path="conservation/organizations" element={<ConservationOrganizationsPage />} />
        <Route path="conservation/illinois-birds" element={<FullAnnualCycleConservationPage />} />
        
        {/* Education Routes */}
        <Route path="education/where-to-see-birds" element={<WhereToSeeBirdsPage />} />
        <Route path="education/opportunities" element={<OpportunitiesPage />} />
        <Route path="education/what-is-birdwatching" element={<WhatIsBirdwatchingPage />} />
        <Route path="education/current-issues" element={<CurrentIssuesPage />} />
        <Route path="education/example-data" element={<ExampleDataForSchoolsPage />} />
        <Route path="education" element={<EducationPage />} />
        
        {/* BirdLab Routes */}
        <Route path="birdlab/people" element={<PeoplePage />} />
        <Route path="birdlab/history" element={<HistoryPage />} />
        <Route path="birdlab/current-research" element={<CurrentResearchPage />} />
        <Route path="birdlab/code" element={<CodeResourcesPage />} />
        <Route path="birdlab/protocols" element={<ProtocolsPage />} />
        <Route path="birdlab" element={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><h1 className="text-4xl font-bold text-primary-blue">Illinois BirdLab - Coming Soon</h1></div>} />
      </Route>
    </Routes>
  );
}

export default App;
