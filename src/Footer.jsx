import React from "react";
import { FaClock, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <div className="mt-10 flex flex-col md:flex-row justify-between items-start p-10 bg-gray-100">
    {/* Left Side */}
    <div class="text-center">
      <h1 className="text-5xl font-extrabold font-serif leading-none">MATTERFUL</h1>
      <h1 className="text-xl font-mono tracking-[.95em] mt-2">BRANDS</h1>
    </div>

    {/* Center - Locations */}
    <div className="flex flex-col gap-8">
      <div className="flex items-start gap-2">
        <FaClock className="text-gray-700 mt-1" />
        <div>
          <h2 className="font-bold text-lg">Los Angeles</h2>
          <p className="text-gray-500">CA</p>
          <p className="text-sm">901 Hermosa Ave, Hermosa Beach, CA 90245</p>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <FaClock className="text-gray-700 mt-1" />
        <div>
          <h2 className="font-bold text-lg">Manhattan</h2>
          <p className="text-gray-500">NY</p>
          <p className="text-sm">901 Hermosa Ave, Hermosa Beach, CA 90245</p>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="mt-5 md:mt-0 text-center md:text-left">
      <p className="text-lg font-semibold">Have a big idea? Let's talk!</p>
      <p className="text-blue-500 font-medium">contact@matterfulbrands.com</p>
      <div className="flex justify-center md:justify-start gap-4 mt-3">
        <FaFacebook className="text-xl cursor-pointer hover:text-blue-700" />
        <FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
        <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
      </div>
    </div>
  </div>
);

export default Footer;
