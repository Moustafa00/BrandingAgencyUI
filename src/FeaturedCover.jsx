import React from 'react';
const FeaturedCover = () => (
    <div className="relative h-96 overflow-hidden">
    <img 
      src="src/assets/drinkloncaro_cover.jpg" 
      className="w-full h-full object-cover object-center"
      alt="Loncaro Drink Cover"
    />
    
    
    <div className="absolute top-0 left-0 max-w-xs text-left text-black mt-4 ml-4 p-4">
      <h2 className="text-lg font-semibold">FEATURED CASE STUDY</h2>
      <h3 className="text-2xl font-bold mt-2">Loncaro</h3>
      <p className="text-gray-700 mt-2">
        Check out our latest brand launch for Loncaro — the authentic long drink from Kuopio, Finland.
      </p>
    </div>
  </div>
  
  );



export default FeaturedCover;
