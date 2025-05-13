import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { PortfolioExposure as PortfolioExposureType } from '../types';
import { TrendingUp, TrendingDown, BarChart } from 'lucide-react';

interface PortfolioExposureProps {
  data: PortfolioExposureType[];
  title: string;
}

const COLORS = ['#0A84FF', '#30D158', '#FF9F0A', '#FF453A', '#5E5CE6', '#BF5AF2'];

const PortfolioExposureChart: React.FC<PortfolioExposureProps> = ({ data, title }) => {
  const totalAllocation = data.reduce((sum, item) => sum + item.allocation, 0);
  const previousTotal = data.reduce((sum, item) => sum + item.previousAllocation, 0);
  const changeDirection = totalAllocation >= previousTotal ? 'up' : 'down';
  const changeAmount = Math.abs(totalAllocation - previousTotal);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900">{title}</h2>
          <div className="flex items-center mt-2">
            <span className="text-2xl font-bold">{totalAllocation}%</span>
            <div className={`flex items-center ml-2 ${changeDirection === 'up' ? 'text-secondary-500' : 'text-error-500'}`}>
              {changeDirection === 'up' ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              <span className="text-sm font-medium">
                {changeAmount}% from {previousTotal}%
              </span>
            </div>
          </div>
        </div>
        <BarChart className="h-6 w-6 text-neutral-400" />
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="allocation"
              nameKey="region"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Allocation']}
              labelFormatter={(label) => `${label}`}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-neutral-500 mb-2">Allocation Breakdown</h3>
        <div className="space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }} 
                />
                <span className="text-sm text-neutral-700">{item.region} - {item.sector}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium">{item.allocation}%</span>
                <div className={`ml-2 ${item.change > 0 ? 'text-secondary-500' : item.change < 0 ? 'text-error-500' : 'text-neutral-500'}`}>
                  {item.change > 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : item.change < 0 ? (
                    <TrendingDown className="h-4 w-4" />
                  ) : (
                    <span className="text-xs">—</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioExposureChart;