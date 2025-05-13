import axios from 'axios';
import { API_ENDPOINTS } from '../constants';
import { MarketData, StockEarning, PortfolioExposure, MarketBrief } from '../types';

// Market Data API
export const fetchMarketData = async (symbols: string[]): Promise<MarketData[]> => {
  try {
    // This would typically call Alpha Vantage or Yahoo Finance
    // For now, we'll simulate the response
    return symbols.map(symbol => ({
      symbol,
      price: Math.random() * 1000 + 100,
      change: (Math.random() * 10) - 5,
      changePercent: (Math.random() * 10) - 5,
    }));
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw error;
  }
};

// Earnings API
export const fetchEarningsSurprises = async (): Promise<StockEarning[]> => {
  try {
    // This would typically call an earnings API or use web scraping
    // For now, we'll simulate the response
    return [
      { company: 'TSMC', actual: 1.26, estimate: 1.21, surprise: 4, date: 'May 10, 2025' },
      { company: 'Samsung Electronics', actual: 0.98, estimate: 1.00, surprise: -2, date: 'May 9, 2025' },
      { company: 'Alibaba Group', actual: 2.14, estimate: 2.05, surprise: 4.4, date: 'May 8, 2025' },
      { company: 'Sony Group', actual: 1.53, estimate: 1.53, surprise: 0, date: 'May 7, 2025' },
    ];
  } catch (error) {
    console.error('Error fetching earnings surprises:', error);
    throw error;
  }
};

// Portfolio Exposure API
export const fetchPortfolioExposure = async (): Promise<PortfolioExposure[]> => {
  try {
    // This would typically call a portfolio management API
    // For now, we'll simulate the response
    return [
      { region: 'Asia', sector: 'Technology', allocation: 22, previousAllocation: 18, change: 4 },
      { region: 'North America', sector: 'Technology', allocation: 28, previousAllocation: 30, change: -2 },
      { region: 'Europe', sector: 'Financial', allocation: 15, previousAllocation: 15, change: 0 },
      { region: 'Asia', sector: 'Consumer', allocation: 10, previousAllocation: 12, change: -2 },
      { region: 'North America', sector: 'Healthcare', allocation: 18, previousAllocation: 17, change: 1 },
      { region: 'Europe', sector: 'Energy', allocation: 7, previousAllocation: 8, change: -1 },
    ];
  } catch (error) {
    console.error('Error fetching portfolio exposure:', error);
    throw error;
  }
};

// Market Brief API
export const generateMarketBrief = async (query: string): Promise<MarketBrief> => {
  try {
    // This would typically call a language model API
    // For now, we'll simulate the response
    return {
      date: new Date().toISOString().split('T')[0],
      portfolioExposure: [
        { region: 'Asia', sector: 'Technology', allocation: 22, previousAllocation: 18, change: 4 },
        { region: 'North America', sector: 'Technology', allocation: 28, previousAllocation: 30, change: -2 },
      ],
      earningsSurprises: [
        { company: 'TSMC', actual: 1.26, estimate: 1.21, surprise: 4, date: 'May 10, 2025' },
        { company: 'Samsung Electronics', actual: 0.98, estimate: 1.00, surprise: -2, date: 'May 9, 2025' },
      ],
      sentiment: 'Neutral with Cautionary Tilt',
      marketNotes: 'Regional sentiment is neutral with a cautionary tilt due to rising yields.',
    };
  } catch (error) {
    console.error('Error generating market brief:', error);
    throw error;
  }
};

// Text-to-Speech API
export const textToSpeech = async (text: string): Promise<string> => {
  try {
    // This would typically call a TTS API
    // For now, we'll simulate the response with a URL to an audio file
    return 'https://example.com/audio.mp3';
  } catch (error) {
    console.error('Error converting text to speech:', error);
    throw error;
  }
};

// Speech-to-Text API
export const speechToText = async (audioBlob: Blob): Promise<string> => {
  try {
    // This would typically call an STT API
    // For now, we'll simulate the response
    return "What's our risk exposure in Asia tech stocks today, and highlight any earnings surprises?";
  } catch (error) {
    console.error('Error converting speech to text:', error);
    throw error;
  }
};