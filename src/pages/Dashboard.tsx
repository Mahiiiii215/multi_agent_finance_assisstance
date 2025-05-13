import React from 'react';
import VoiceInterface from '../components/VoiceInterface';
import PortfolioExposureChart from '../components/PortfolioExposure';
import EarningsSurprises from '../components/EarningsSurprises';
import MarketSentiment from '../components/MarketSentiment';
import { PortfolioExposure, StockEarning } from '../types';

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  // Sample data
  const portfolioData: PortfolioExposure[] = [
    { region: 'Asia', sector: 'Technology', allocation: 22, previousAllocation: 18, change: 4 },
    { region: 'North America', sector: 'Technology', allocation: 28, previousAllocation: 30, change: -2 },
    { region: 'Europe', sector: 'Financial', allocation: 15, previousAllocation: 15, change: 0 },
    { region: 'Asia', sector: 'Consumer', allocation: 10, previousAllocation: 12, change: -2 },
    { region: 'North America', sector: 'Healthcare', allocation: 18, previousAllocation: 17, change: 1 },
    { region: 'Europe', sector: 'Energy', allocation: 7, previousAllocation: 8, change: -1 },
  ];

  const earningsData: StockEarning[] = [
    { company: 'TSMC', actual: 1.26, estimate: 1.21, surprise: 4, date: 'May 10, 2025' },
    { company: 'Samsung Electronics', actual: 0.98, estimate: 1.00, surprise: -2, date: 'May 9, 2025' },
    { company: 'Alibaba Group', actual: 2.14, estimate: 2.05, surprise: 4.4, date: 'May 8, 2025' },
    { company: 'Sony Group', actual: 1.53, estimate: 1.53, surprise: 0, date: 'May 7, 2025' },
  ];

  const sentimentNote = 'Regional sentiment is neutral with a cautionary tilt due to rising yields. The potential for central bank policy tightening in response to persistent inflation pressures is weighing on risk assets, particularly in rate-sensitive tech sectors.';

  const handleVoiceQuery = async (query: string) => {
    setIsLoading(true);
    console.log('Processing query:', query);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-neutral-900 mb-6">Financial Dashboard</h1>
      
      <VoiceInterface onQuery={handleVoiceQuery} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <PortfolioExposureChart 
          data={portfolioData} 
          title="Asia Tech Exposure" 
        />
        <EarningsSurprises earnings={earningsData} />
      </div>
      
      <div className="mb-6">
        <MarketSentiment 
          sentiment="Neutral with Cautionary Tilt" 
          notes={sentimentNote} 
        />
      </div>
    </div>
  );
};

export default Dashboard;