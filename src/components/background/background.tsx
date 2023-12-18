import React, { useState, useEffect } from 'react';
import './Style.css';

const Background: React.FC = () => {
  const numberOfStars = 300;

  const [starStyles, setStarStyles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const generatedStarStyles = Array.from({ length: numberOfStars }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animationDelay: `${Math.random() * 2}s`
    }));

    setStarStyles(generatedStarStyles);
  }, []);

  return (
    <div className="estrela-body">
      {starStyles.map((style, index) => (
        <div key={index} className="star" style={style} />
      ))}
    </div>
  );
};

export default Background;
