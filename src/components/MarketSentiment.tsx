import React from 'react';
import { motion } from 'framer-motion';

interface MarketSentimentProps {
  sentiment: string;
  notes: string;
}

const getSentimentData = (sentiment: string) => {
  switch (sentiment) {
    case 'Strongly Bullish':
      return { color: 'bg-secondary-500', position: 85, icon: '🚀' };
    case 'Bullish':
      return { color: 'bg-secondary-400', position: 70, icon: '📈' };
    case 'Neutral with Positive Tilt':
      return { color: 'bg-secondary-300', position: 60, icon: '⏫' };
    case 'Neutral':
      return { color: 'bg-neutral-300', position: 50, icon: '↔️' };
    case 'Neutral with Cautionary Tilt':
      return { color: 'bg-warning-300', position: 40, icon: '⏬' };
    case 'Bearish':
      return { color: 'bg-error-400', position: 30, icon: '📉' };
    case 'Strongly Bearish':
      return { color: 'bg-error-500', position: 15, icon: '🧸' };
    default:
      return { color: 'bg-neutral-300', position: 50, icon: '↔️' };
  }
};

const MarketSentiment: React.FC<MarketSentimentProps> = ({ sentiment, notes }) => {
  const { color, position, icon } = getSentimentData(sentiment);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-neutral-900 mb-4">Market Sentiment</h2>
      
      <div className="mb-6">
        <div className="relative w-full h-2 bg-neutral-100 rounded-full mb-4">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-error-500 via-warning-500 to-secondary-500 rounded-full w-full opacity-50" />
          <motion.div 
            className={`absolute top-0 w-4 h-4 -mt-1 rounded-full ${color}`}
            initial={{ left: '50%' }}
            animate={{ left: `${position}%` }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          />
        </div>
        
        <div className="flex justify-between text-xs text-neutral-500">
          <span>Bearish</span>
          <span>Neutral</span>
          <span>Bullish</span>
        </div>
      </div>
      
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">{icon}</span>
        <h3 className="text-lg font-medium">{sentiment}</h3>
      </div>
      
      <div className="bg-neutral-50 p-4 rounded border border-neutral-100">
        <h4 className="text-sm font-medium text-neutral-700 mb-2">Analysis Notes</h4>
        <p className="text-neutral-600 text-sm">{notes}</p>
      </div>
    </div>
  );
};

export default MarketSentiment;