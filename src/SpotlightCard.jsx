import React from 'react';

const SpotlightCard = ({ image, category, title, description }) => {
  const isFullImage = !title && !description;

  return (
    <div className={`rounded-lg ${isFullImage ? 'h-full' : 'p-6'}`}>
      <img
        src={image}
        alt={title || 'Product Image'}
        className={`w-full ${isFullImage ? 'h-full object-cover' : 'rounded-lg'}`}
      />
      {!isFullImage && (
        <div className="bg-white text-center p-2">
          {category && <p className="text-xs font-semibold text-gray-400 mb-2">{category}</p>}
          {title && <h3 className="text-xl font-mono font-bold mb-3">{title}</h3>}
          {description && <p className="text-gray-700">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default SpotlightCard;