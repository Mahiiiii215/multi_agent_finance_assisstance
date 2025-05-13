import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Check, AlertTriangle } from 'lucide-react';

interface AgentStatusProps {
  name: string;
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

const AgentStatus: React.FC<AgentStatusProps> = ({ name, status, message }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'loading':
        return <Loader2 className="h-4 w-4 text-primary-500 animate-spin" />;
      case 'success':
        return <Check className="h-4 w-4 text-secondary-500" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-error-500" />;
      default:
        return <div className="h-4 w-4 rounded-full border border-neutral-300" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'loading':
        return 'border-primary-200 bg-primary-50';
      case 'success':
        return 'border-secondary-200 bg-secondary-50';
      case 'error':
        return 'border-error-200 bg-error-50';
      default:
        return 'border-neutral-200 bg-neutral-50';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center p-3 rounded-md border ${getStatusColor()} mb-2`}
    >
      <div className="flex-shrink-0 mr-3">
        {getStatusIcon()}
      </div>
      <div className="flex-grow min-w-0">
        <p className="text-sm font-medium text-neutral-900 truncate">{name} Agent</p>
        {message && (
          <p className="text-xs text-neutral-500 truncate">{message}</p>
        )}
      </div>
    </motion.div>
  );
};

export default AgentStatus;