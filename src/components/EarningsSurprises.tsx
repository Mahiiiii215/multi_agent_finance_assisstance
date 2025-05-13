import React from 'react';
import { StockEarning } from '../types';
import { TrendingUp, TrendingDown, Percent } from 'lucide-react';

interface EarningsSurprisesProps {
  earnings: StockEarning[];
}

const EarningsSurprises: React.FC<EarningsSurprisesProps> = ({ earnings }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-neutral-900">Earnings Surprises</h2>
        <Percent className="h-5 w-5 text-neutral-400" />
      </div>

      <div className="space-y-4">
        {earnings.map((earning, index) => (
          <div key={index} className="border-b border-neutral-100 pb-4 last:border-b-0 last:pb-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-neutral-900">{earning.company}</h3>
                <p className="text-sm text-neutral-500">{earning.date}</p>
              </div>
              <div className={`flex items-center px-2 py-1 rounded-full text-sm ${
                earning.surprise > 0 
                  ? 'text-secondary-700 bg-secondary-50' 
                  : earning.surprise < 0 
                    ? 'text-error-700 bg-error-50'
                    : 'text-neutral-700 bg-neutral-50'
              }`}>
                {earning.surprise > 0 ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : earning.surprise < 0 ? (
                  <TrendingDown className="h-3 w-3 mr-1" />
                ) : null}
                <span>
                  {earning.surprise > 0 ? '+' : ''}
                  {earning.surprise}%
                </span>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-neutral-500">Actual</p>
                <p className="font-medium">${earning.actual.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">Estimate</p>
                <p className="font-medium">${earning.estimate.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}

        {earnings.length === 0 && (
          <div className="text-center py-4 text-neutral-500">
            No earnings surprises reported today
          </div>
        )}
      </div>
    </div>
  );
};

export default EarningsSurprises;