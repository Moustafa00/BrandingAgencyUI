import { useState } from 'react';
import './App.css';
import GallerySpot from './GallerySpot';
import FoodBeverageSpotlight from './FoodBeverageSpotlight';
import FeaturedCover from './FeaturedCover';
import Header from './Header';
import ContactUs from './ContantUs';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Preview from './Preview';


function App() {
  return (
  <>
     <body className="relative bg-gray-100">
          <Header/>
          <FeaturedCover/>
          <FoodBeverageSpotlight/>
          <GallerySpot/>
          <Preview/>
          <ContactUs/>
          <Newsletter/>
          <Footer/>
      </body>
  </>
  );
}

export default App;
