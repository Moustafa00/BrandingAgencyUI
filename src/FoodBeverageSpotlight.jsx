import React from 'react';
import SpotlightCard from './SpotlightCard';

const FoodBeverageSpotlight = () => (
  <div className="mt-10 max-w-5xl mx-auto -mb-28">
    <h2 className="text-center text-3xl font-bold">Food & Beverage Spotlight</h2>
    <div className="grid md:grid-cols-5 gap-x-2 gap-y-3">
      <div className="col-span-2"></div>
      <div className="col-span-3">
        <SpotlightCard
          image="src/assets/caulikids-bags.webp"
          category="BRANDING, PACKAGING DESIGN, CONTENT, G2M MARKETING"
          title="Caulikids"
          description="Caulikids is a plant-based line of healthy snacks for kids! Launching in Spring 2023."
        />
      </div>

      <div className="col-span-3">
        <SpotlightCard
          image="src/assets/amayu.png"
          category="CONTENT, WEBSITE, SOCIAL MEDIA, AMAZON DESIGN"
          title="Amayu"
          description="Sustainably harvested from the Peruvian Amazon, Amayu is a superfruit juice packed with vitamins and antioxidants."
        />
      </div>
      <div className="col-span-2">
        <SpotlightCard
          image="src/assets/ba1.png"
          title=""
          description=""
        />
      </div>

      <div className="col-span-2">
        <SpotlightCard
          image="src/assets/wairdo.jpeg"
          title=""
          description=""
        />
      </div>
      <div className="col-span-3">
        <SpotlightCard
          image="src/assets/mezcla.jpeg"
          category="BRANDING, PACKAGING, WEB & E-COMM, AMAZON, G2M"
          title="Mezcla"
          description="Mezcla is arguably the fastest growing plant protein bar in the better-for-you space. Each bar fuses art and food, featuring ingredients and designs from around the world."
        />
      </div>

      <div className="col-span-3">
        <SpotlightCard
          image="src/assets/Toum.jpeg"
          category="BRANDING, PACKAGING DESIGN, WEBSITE"
          title="Toum"
          description="Toum is a Middle Eastern garlic dip and spread made from all REAL ingredients. Suspiciously healthy and deliciously addictive, you'll want to put it on everything. We do!"
        />
      </div>
      <div className="col-span-2"></div>

      <div className="col-span-2">
        <SpotlightCard
          image="src/assets/ba2.png"
          title=""
          description=""
        />
      </div>
      <div className="col-span-3">
        <SpotlightCard
          image="src/assets/TwoGood.png"
          category="BRANDING, PACKAGING DESIGN, ILLUSTRATION"
          title="Two Good"
          description="Matterful is proud to have worked on this innovative new line of low-sugar yogurts from Danone's Light and Fit portfolio. Full case study coming soon!"
        />
      </div>

      <div className="col-span-3">
        <SpotlightCard
          image="src/assets/RedJacketJuice.png"
          category="Packaging Design"
          title="Red Jacket Juice"
          description="Matterful redesigned several of Red Jacket's core packaging products; including their premium line of Stomps as well as Joe's Half & Half and NY-style Lemonade. Full case study coming soon."
        />
      </div>
      <div className="col-span-2">
        <SpotlightCard
          image="src/assets/Natasha.png"
          title=""
          description=""
        />
      </div>

      <div className="col-span-2">
        <SpotlightCard
          image="src/assets/CookedBeets.png"
          category="Packaging Design"
          title="Love Beets"
          description="Matterful recently helped Love Beets design an eco-friendly version of packaging design for their popular Cooked Beets SKU. Look out for these fun and whimsical packs in Target, Costco, and other high-profile retailers nationwide!"
        />
      </div>

      <div className="col-span-3 h-[76%]">
        <SpotlightCard
          image="src/assets/coffee.png"
          title=""
          description=""
        />
      </div>
    </div>
  </div>
);

export default FoodBeverageSpotlight;
