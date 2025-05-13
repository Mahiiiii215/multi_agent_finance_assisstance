import React, { useState } from 'react';
import { Mic, Volume2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { VoiceState } from '../types';

interface VoiceInterfaceProps {
  onQuery: (query: string) => Promise<void>;
}

const VoiceInterface: React.FC<VoiceInterfaceProps> = ({ onQuery }) => {
  const [voiceState, setVoiceState] = useState<VoiceState>({
    isListening: false,
    isProcessing: false,
    isSpeaking: false,
    transcript: '',
    response: '',
  });

  const handleStartListening = () => {
    if (voiceState.isListening || voiceState.isProcessing || voiceState.isSpeaking) return;
    
    // In a real implementation, we would initialize the Web Speech API here
    setVoiceState(prev => ({ ...prev, isListening: true, transcript: '' }));
    
    // Simulating voice detection
    setTimeout(() => {
      const simulatedQuery = "What's our risk exposure in Asia tech stocks today, and highlight any earnings surprises?";
      setVoiceState(prev => ({ 
        ...prev, 
        isListening: false, 
        isProcessing: true,
        transcript: simulatedQuery
      }));
      
      // Process the query
      handleProcessQuery(simulatedQuery);
    }, 3000);
  };
  
  const handleProcessQuery = async (query: string) => {
    try {
      await onQuery(query);
      
      // Simulating response
      setTimeout(() => {
        const simulatedResponse = "Today, your Asia tech allocation is 22% of AUM, up from 18% yesterday. TSMC beat estimates by 4%, Samsung missed by 2%. Regional sentiment is neutral with a cautionary tilt due to rising yields.";
        
        setVoiceState(prev => ({ 
          ...prev, 
          isProcessing: false,
          isSpeaking: true,
          response: simulatedResponse
        }));
        
        // Simulating text-to-speech completion
        setTimeout(() => {
          setVoiceState(prev => ({ ...prev, isSpeaking: false }));
        }, 5000);
      }, 3000);
    } catch (error) {
      setVoiceState(prev => ({ 
        ...prev, 
        isProcessing: false,
        response: "Sorry, I encountered an error processing your request."
      }));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-6">
      <div className="flex flex-col items-center">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">Voice Assistant</h2>
          <p className="text-neutral-500">
            {voiceState.isListening 
              ? "Listening..." 
              : voiceState.isProcessing 
                ? "Processing..." 
                : voiceState.isSpeaking 
                  ? "Speaking..." 
                  : "Press the microphone to ask a question"}
          </p>
        </div>
        
        <div className="flex justify-center mb-6">
          {voiceState.isListening ? (
            <div className="flex space-x-1 items-end">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 bg-primary-500 rounded-full"
                  animate={{
                    height: ["20%", "80%", "20%"],
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                  style={{ height: "20%" }}
                />
              ))}
            </div>
          ) : voiceState.isProcessing ? (
            <Loader2 className="h-12 w-12 text-primary-500 animate-spin" />
          ) : voiceState.isSpeaking ? (
            <Volume2 className="h-12 w-12 text-secondary-500 animate-pulse" />
          ) : (
            <button
              onClick={handleStartListening}
              className="h-16 w-16 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-colors"
            >
              <Mic className="h-8 w-8" />
            </button>
          )}
        </div>
        
        {voiceState.transcript && (
          <div className="w-full mb-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <h3 className="text-sm font-medium text-neutral-500 mb-1">You asked:</h3>
            <p className="text-neutral-800">{voiceState.transcript}</p>
          </div>
        )}
        
        {voiceState.response && (
          <div className="w-full p-4 bg-primary-50 rounded-lg border border-primary-100">
            <h3 className="text-sm font-medium text-primary-600 mb-1">Assistant response:</h3>
            <p className="text-neutral-800">{voiceState.response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceInterface;