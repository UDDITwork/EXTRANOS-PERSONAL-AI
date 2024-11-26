import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  "https://images.unsplash.com/photo-1605379399642-870262d3d051",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
].map(url => `${url}?auto=format&fit=crop&w=400&h=300`);

function VerticalSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed right-0 top-0 h-screen w-[300px] overflow-hidden">
      <div className="relative h-full">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -300 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Project showcase"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80" />
      </div>
    </div>
  );
}

export default VerticalSlider;