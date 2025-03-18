import React from 'react';
import SpotlightCard from './SpotlightCard';
const GallerySpot = () => (
    <div>
    <div className="mx-auto max-w-xl text-center"> 
      <div className="mb-4">
        <img 
          src="/images/logoM.png" 
          alt="Logo"
          className="mx-auto size-20"
        />
      </div>
      
      <h4 className="text-lg font-semibold mb-2">@matterfulbrands</h4>
      <p className="text-sm mx-auto leading-tight px-4"> 
        Get a behind the scenes look at how our Matterful Brands team is movin' & shaking
        in both the studio and out in the field!
      </p>
    </div>
    <div className="grid mt-8 md:grid-cols-9 gap-x-2 gap-y-3 ">
    <div class="col-span-1 h-40 self-end">
           <SpotlightCard 
            image="/images/image1.png "  
          />
    </div> 
    
    <div class="col-span-3 h-115 self-end ">
           <SpotlightCard 
            image="/images/image2.png "  
          />
    </div> 
    
    <div class="col-span-2 h-85 self-end ">
           <SpotlightCard 
            image="/images/image3.png "  
          />
    </div> 
    
    <div class="col-span-2 h-100 self-end  ">
           <SpotlightCard 
            image="/images/image4.png "  
          />
    </div> 
    <div class="col-span-1 h-50 self-end ">
           <SpotlightCard 
            image="/images/image5.png "  
          />
    </div> 
    
    
    
    <div class="col-span-2 h-80">
           <SpotlightCard 
            image="/images/image6.png "  
          />
    </div> 
    
    <div class="col-span-3 h-95 ">
           <SpotlightCard 
            image="/images/image7.png "  
          />
    </div> 
    
    <div class="col-span-1 h-45 ">
           <SpotlightCard 
            image="/images/image8.png "  
          />
    </div> 
    
    <div class="col-span-1  h-35">
           <SpotlightCard 
            image="/images/image9.png "  
          />
    </div> 
    
    <div class="col-span-2  h-90">
           <SpotlightCard 
            image="/images/image10.png "  
          />
    </div> 
    
    </div>
    
    
    </div>
    
    );
    

export default GallerySpot; 