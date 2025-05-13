import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import MarketBrief from './pages/MarketBrief';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <main className="pt-4 pb-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/brief" element={<MarketBrief />} />
            <Route path="/resources" element={<ResourcesPlaceholder />} />
            <Route path="/settings" element={<SettingsPlaceholder />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Placeholder components for routes that aren't fully implemented yet
const ResourcesPlaceholder = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 className="text-2xl font-bold text-neutral-900 mb-6">Resources</h1>
    <div className="bg-white rounded-lg shadow-md p-6">
      <p className="text-neutral-600">Resources and documentation will be available here.</p>
    </div>
  </div>
);

const SettingsPlaceholder = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 className="text-2xl font-bold text-neutral-900 mb-6">Settings</h1>
    <div className="bg-white rounded-lg shadow-md p-6">
      <p className="text-neutral-600">Agent configuration settings will be available here.</p>
    </div>
  </div>
);

export default App;