import React from 'react';

interface HudCornersProps {
  className?: string;
  borderColor?: string;
  size?: string;
}

export const HudCorners: React.FC<HudCornersProps> = ({ 
  className = '', 
  borderColor = 'rgba(170, 209, 213, 0.4)', 
  size = 'w-3 h-3' 
}) => {
  return (
    <>
      <span 
        className={`absolute top-0 left-0 border-l border-t ${size} pointer-events-none ${className}`}
        style={{ borderColor }}
      />
      <span 
        className={`absolute top-0 right-0 border-r border-t ${size} pointer-events-none ${className}`}
        style={{ borderColor }}
      />
      <span 
        className={`absolute bottom-0 left-0 border-l border-b ${size} pointer-events-none ${className}`}
        style={{ borderColor }}
      />
      <span 
        className={`absolute bottom-0 right-0 border-r border-b ${size} pointer-events-none ${className}`}
        style={{ borderColor }}
      />
    </>
  );
};
