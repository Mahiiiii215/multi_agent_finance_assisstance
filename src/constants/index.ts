export const API_ENDPOINTS = {
  ALPHA_VANTAGE: 'https://www.alphavantage.co/query',
  YAHOO_FINANCE: 'https://query1.finance.yahoo.com/v8/finance/chart',
  LOCAL_API: 'http://localhost:8000/api',
};

export const ASIA_TECH_COMPANIES = [
  { symbol: 'TSM', name: 'Taiwan Semiconductor' },
  { symbol: '005930.KS', name: 'Samsung Electronics' },
  { symbol: '9988.HK', name: 'Alibaba Group' },
  { symbol: '700.HK', name: 'Tencent Holdings' },
  { symbol: '6758.T', name: 'Sony Group' },
];

export const PORTFOLIO_REGIONS = [
  'Asia',
  'North America',
  'Europe',
  'Latin America',
  'Africa',
  'Oceania',
];

export const PORTFOLIO_SECTORS = [
  'Technology',
  'Healthcare',
  'Financial Services',
  'Consumer Discretionary',
  'Consumer Staples',
  'Energy',
  'Materials',
  'Industrials',
  'Utilities',
  'Real Estate',
  'Communication Services',
];

export const SENTIMENT_TYPES = [
  'Strongly Bullish',
  'Bullish',
  'Neutral with Positive Tilt',
  'Neutral',
  'Neutral with Cautionary Tilt',
  'Bearish',
  'Strongly Bearish',
];

export const COLORS = {
  primary: '#0A84FF',
  secondary: '#30D158',
  accent: '#FF9F0A',
  warning: '#FF9F0A',
  error: '#FF453A',
  neutral: '#8E8E93',
  background: '#F5F5F7',
  surface: '#FFFFFF',
};