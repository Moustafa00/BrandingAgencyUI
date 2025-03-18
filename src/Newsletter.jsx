import React from "react";


const Newsletter = () => (
    <div className="bg-black mt-10 py-12 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
   
    <div className="text-white flex-1">
      <h2 className="text-2xl font-bold mb-2">Sign Up For Matterful Updates</h2>
      <p className="text-gray-300">Most newsletters suck but ours won't - we promise!</p>
    </div>

   
    <div className="flex-1 w-full max-w-md">
      <div className="flex gap-4 items-end">
        <div className="flex-1 border-b-2 border-white pb-1">
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent text-white 
                     placeholder-gray-400 focus:outline-none
                     border-0 px-0 py-2"
          />
        </div>
        <button className="text-white px-6 py-2 font-semibold
                         border-2 border-white rounded-none
                         hover:bg-white hover:text-black transition-colors">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
);


export default Newsletter;