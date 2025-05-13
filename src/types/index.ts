export interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface StockEarning {
  company: string;
  actual: number;
  estimate: number;
  surprise: number;
  date: string;
}

export interface PortfolioExposure {
  region: string;
  sector: string;
  allocation: number;
  previousAllocation: number;
  change: number;
}

export interface MarketBrief {
  date: string;
  portfolioExposure: PortfolioExposure[];
  earningsSurprises: StockEarning[];
  sentiment: string;
  marketNotes: string;
}

export interface AgentResponse {
  status: 'success' | 'error' | 'loading';
  data?: any;
  error?: string;
}

export interface VoiceState {
  isListening: boolean;
  isProcessing: boolean;
  isSpeaking: boolean;
  transcript: string;
  response: string;
}