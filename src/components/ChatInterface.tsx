import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  text: string;
  isBot: boolean;
  prompts?: string[];
  websites?: string[];
}

function ChatInterface() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([{
    text: "Hi! My name is Extranos. I am Uddit's personal AI assistant. How can I help you today?",
    isBot: true
  }]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);

    // Simulate API call to backend
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages(prev => [...prev, { ...data, isBot: true }]);
    } catch (error) {
      // Fallback response if API is not available
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('web') || lowerInput.includes('services')) {
        setMessages(prev => [...prev, {
          text: "I can help you with our web services. Would you like to see our options?",
          isBot: true,
          prompts: [
            "Show me your web development services",
            "I'd like to request a quote",
            "Let's discuss my project"
          ]
        }]);
      }
    }

    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden">
      <div className="h-[600px] overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`${message.isBot ? 'ml-0' : 'ml-auto'} max-w-[80%]`}>
            <div className={`p-3 rounded-lg ${message.isBot ? 'bg-blue-600' : 'bg-green-600'}`}>
              <p>{message.text}</p>
              
              {message.prompts && (
                <div className="mt-4 space-y-2">
                  {message.prompts.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setMessages(prev => [...prev, { text: prompt, isBot: false }]);
                      }}
                      className="block w-full text-left p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              {message.websites && (
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {message.websites.map((url, i) => (
                    <iframe
                      key={i}
                      src={url}
                      className="w-full h-32 rounded border border-gray-600"
                      title={`Website preview ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-gray-700">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 rounded bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatInterface;