import React from "react";

const Preview = () => (
<div>
<div className="bg-black text-white py-4 mt-6 px-4 sm:py-8">
    <section className="flex flex-col items-center max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-4">
        Our Brand Pollination Services
      </h2>
      <p className="text-gray-300 text-base sm:text-base max-w-md mx-auto leading-relaxed text-center mb-8">
        We offer a wide range of proven creative services that help grow your brand 
        in a meaningful and impactful way.
      </p>
      
      {/* Image row */}
      <div className="flex flex-wrap justify-center gap-8 w-full mt-2">
        <div className="flex flex-col items-center w-[200px]">
          <img 
            src="1.png" 
            alt="Service 1" 
            className="w-[100px] h-[100px] object-contain select-none pointer-events-none"
            draggable="false"
          />
          <p className="mt-2">Naming & Strategy</p>
        </div>
        <div className="flex flex-col items-center w-[200px]">
          <img 
            src="2.png" 
            alt="Service 2" 
            className="w-[100px] h-[100px] object-contain select-none pointer-events-none"
            draggable="false"
          />
          <p className="mt-2">Branding</p>
        </div>
        <div className="flex flex-col items-center w-[200px]">
          <img 
            src="3.png" 
            alt="Service 3" 
            className="w-[100px] h-[100px] object-contain select-none pointer-events-none"
            draggable="false"
          />
          <p className="mt-2">Packaging & Design</p>
        </div>
        <div className="flex flex-col items-center w-[200px]">
          <img 
            src="4.png" 
            alt="Service 4" 
            className="w-[100px] h-[100px] object-contain select-none pointer-events-none"
            draggable="false"
          />
          <p className="mt-2">Photo & Video</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 w-full mt-5">
        <div className="flex flex-col items-center w-[200px]">
          <img 
            src="5.png" 
            alt="Service 1" 
            className="w-[100px] h-[100px] object-contain select-none pointer-events-none"
            draggable="false"
          />
          <p className="mt-2">Web Design</p>
        </div>
        <div className="flex flex-col items-center w-[200px]">
          <img 
            src="6.png" 
            alt="Service 2" 
            className="w-[100px] h-[100px] object-contain select-none pointer-events-none"
            draggable="false"
          />
          <p className="mt-2">Trade Show Design</p>
        </div>
        <div className="flex flex-col items-center w-[200px]">
          <img 
            src="7.png" 
            alt="Service 3" 
            className="w-[100px] h-[100px] object-contain select-none pointer-events-none"
            draggable="false"
          />
          <p className="mt-2">Content Creation</p>
        </div>
        <div className="flex flex-col items-center w-[200px]">
          <img 
            src="8.png" 
            alt="Service 4" 
            className="w-[100px] h-[100px] object-contain select-none pointer-events-none"
            draggable="false"
          />
          <p className="mt-2">Ongoing Support</p>
        </div>
      </div>
    </section>
  </div>
  <div className="py-4 mt-6 px-4 sm:py-8">
    <section className="flex flex-col items-center max-w-4xl mx-auto">
      <p className="text-xl sm:text-2xl font-semibold max-w-xl text-center uppercase mb-4">
        We help small emerging brands invent themselves, and fortune 500 companies re-invent themselves. Here's a look at some of our clients:
      </p>
     
      
      {/* Image row */}
      <div className="flex flex-wrap justify-center gap-8 w-full mt-2">
       <div>
       <img 
            src="9.png" 
            alt="Service 1" 
            className="w-full h-full select-none pointer-events-none"
            draggable="false"
          />
       </div>
       <div>
       <img 
            src="10.png" 
            alt="Service 1" 
            className="w-full h-full select-none pointer-events-none"
            draggable="false"
          />
       </div>
      </div>
    </section>
  </div>
  <div className="relative h-96 overflow-hidden">
    <img 
      src="/images/cover3.png" 
      className="w-full h-full object-cover object-center"
      alt="Cover"
    />
  </div>
</div>
);

export default Preview;
