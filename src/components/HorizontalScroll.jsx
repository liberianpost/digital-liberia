import React from 'react';

const HorizontalScroll = ({ children }) => {
  console.log('HorizontalScroll.jsx - Rendering children:', children);

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-4 p-4 w-max">
        {children}
      </div>
      <style jsx global>{`
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HorizontalScroll;
