import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VoiceInterface from '../components/VoiceInterface';
import AgentStatus from '../components/AgentStatus';
import { MessageSquare, RefreshCw, FileText, Rocket } from 'lucide-react';

const MarketBrief: React.FC = () => {
  const [briefDate, setBriefDate] = useState<string>('2025-05-12');
  const [agentStatuses, setAgentStatuses] = useState({
    api: 'idle',
    scraping: 'idle',
    retriever: 'idle',
    analysis: 'idle',
    language: 'idle',
    voice: 'idle',
  } as Record<string, 'idle' | 'loading' | 'success' | 'error'>);
  
  const [briefContent, setBriefContent] = useState<string>('');

  const handleVoiceQuery = async (query: string) => {
    console.log('Processing query:', query);
    
    // Reset agent statuses
    setAgentStatuses({
      api: 'idle',
      scraping: 'idle',
      retriever: 'idle',
      analysis: 'idle',
      language: 'idle',
      voice: 'idle',
    });
    
    setBriefContent('');
    
    // Simulate API Agent
    setAgentStatuses(prev => ({ ...prev, api: 'loading' }));
    await new Promise(resolve => setTimeout(resolve, 1000));
    setAgentStatuses(prev => ({ ...prev, api: 'success' }));
    
    // Simulate Scraping Agent
    setAgentStatuses(prev => ({ ...prev, scraping: 'loading' }));
    await new Promise(resolve => setTimeout(resolve, 1500));
    setAgentStatuses(prev => ({ ...prev, scraping: 'success' }));
    
    // Simulate Retriever Agent
    setAgentStatuses(prev => ({ ...prev, retriever: 'loading' }));
    await new Promise(resolve => setTimeout(resolve, 1200));
    setAgentStatuses(prev => ({ ...prev, retriever: 'success' }));
    
    // Simulate Analysis Agent
    setAgentStatuses(prev => ({ ...prev, analysis: 'loading' }));
    await new Promise(resolve => setTimeout(resolve, 1800));
    setAgentStatuses(prev => ({ ...prev, analysis: 'success' }));
    
    // Simulate Language Agent
    setAgentStatuses(prev => ({ ...prev, language: 'loading' }));
    await new Promise(resolve => setTimeout(resolve, 1300));
    setBriefContent("Today, your Asia tech allocation is 22% of AUM, up from 18% yesterday. TSMC beat estimates by 4%, Samsung missed by 2%. Regional sentiment is neutral with a cautionary tilt due to rising yields. The potential for central bank policy tightening in response to persistent inflation pressures is weighing on risk assets, particularly in rate-sensitive tech sectors. However, strong earnings from TSMC indicate resilience in semiconductor demand, which could provide a technical tailwind despite macro headwinds.");
    setAgentStatuses(prev => ({ ...prev, language: 'success' }));
    
    // Simulate Voice Agent
    setAgentStatuses(prev => ({ ...prev, voice: 'loading' }));
    await new Promise(resolve => setTimeout(resolve, 1000));
    setAgentStatuses(prev => ({ ...prev, voice: 'success' }));
  };

  const handleGenerateBrief = async () => {
    await handleVoiceQuery("What's our risk exposure in Asia tech stocks today, and highlight any earnings surprises?");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">Morning Market Brief</h1>
        
        <div className="mt-4 md:mt-0 flex items-center">
          <input
            type="date"
            value={briefDate}
            onChange={(e) => setBriefDate(e.target.value)}
            className="px-3 py-2 border border-neutral-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <button 
            onClick={handleGenerateBrief}
            className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-r-md flex items-center transition-colors"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Generate
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <VoiceInterface onQuery={handleVoiceQuery} />
          
          {briefContent && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md p-6 mb-6"
            >
              <div className="flex items-center mb-4">
                <FileText className="h-5 w-5 text-primary-500 mr-2" />
                <h2 className="text-xl font-semibold text-neutral-900">Brief Summary</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed">{briefContent}</p>
              
              <div className="mt-6 flex justify-end">
                <button className="text-primary-500 hover:text-primary-600 text-sm font-medium flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Share Brief
                </button>
              </div>
            </motion.div>
          )}
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <Rocket className="h-5 w-5 text-primary-500 mr-2" />
              <h2 className="text-lg font-semibold text-neutral-900">Agent Activity</h2>
            </div>
            
            <div className="space-y-2">
              <AgentStatus 
                name="API" 
                status={agentStatuses.api} 
                message={agentStatuses.api === 'success' ? "Fetched market data from Alpha Vantage" : undefined}
              />
              <AgentStatus 
                name="Scraping" 
                status={agentStatuses.scraping} 
                message={agentStatuses.scraping === 'success' ? "Extracted earnings data from filings" : undefined}
              />
              <AgentStatus 
                name="Retriever" 
                status={agentStatuses.retriever} 
                message={agentStatuses.retriever === 'success' ? "Retrieved 4 relevant documents" : undefined}
              />
              <AgentStatus 
                name="Analysis" 
                status={agentStatuses.analysis} 
                message={agentStatuses.analysis === 'success' ? "Analyzed portfolio exposure trends" : undefined}
              />
              <AgentStatus 
                name="Language" 
                status={agentStatuses.language} 
                message={agentStatuses.language === 'success' ? "Generated narrative response" : undefined}
              />
              <AgentStatus 
                name="Voice" 
                status={agentStatuses.voice} 
                message={agentStatuses.voice === 'success' ? "Converted text to speech" : undefined}
              />
            </div>
          </div>
          
          <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-4">
            <h3 className="text-sm font-medium text-neutral-700 mb-2">Quick Reference</h3>
            <p className="text-xs text-neutral-600 mb-2">Example queries:</p>
            <ul className="text-xs text-neutral-600 space-y-1">
              <li>"What's our risk exposure in Asia tech stocks today?"</li>
              <li>"Highlight any earnings surprises in the last week"</li>
              <li>"Give me an overview of regional sentiment"</li>
              <li>"Compare our current allocation to last month"</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketBrief;