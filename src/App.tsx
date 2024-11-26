import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ChatInterface from './components/ChatInterface';
import VerticalSlider from './components/VerticalSlider';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <VerticalSlider />
      
      <div className="container mx-auto px-4 pt-20 pb-4 pr-[320px]">
        <ChatInterface />
      </div>
    </div>
  );
}

export default App;