import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      {/* Top section with navigation and newsletter */}
      <div className="bg-orange-500 py-6 px-10 flex items-center justify-between text-white rounded-tl-2xl rounded-tr-2xl">
        <div className="flex items-center space-x-6">
          <span className="text-xl font-bold flex">
            <img src="/assets/icons/white-logo.png" alt="" className="pr-2" />
            eSIM White Label</span>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Affiliate Program</a>
          <a href="#" className="hover:underline">Help Center</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-white hover:bg-white hover:text-orange-500 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-white hover:bg-white hover:text-orange-500 transition-colors">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="p-2 rounded-full border border-white hover:bg-white hover:text-orange-500 transition-colors">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Main content section */}
      <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Top Destination */}
        <div>
          <h4 className="font-bold text-lg mb-4">Top Destination</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">United States</a></li>
            <li><a href="#" className="hover:underline">United Kingdom</a></li>
            <li><a href="#" className="hover:underline">Japan</a></li>
            <li><a href="#" className="hover:underline">Mexico</a></li>
            <li><a href="#" className="hover:underline">China</a></li>
            <li><a href="#" className="hover:underline">France</a></li>
            <li><a href="#" className="hover:underline">Thailand</a></li>
            <li><a href="#" className="hover:underline">Spain</a></li>
            <li><a href="#" className="hover:underline">India</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-lg mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">General Terms and Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Refund Policy</a></li>
            <li><a href="#" className="hover:underline">Cookies Law</a></li>
            <li><a href="#" className="hover:underline">Open Internet Statement</a></li>
          </ul>
        </div>

        {/* Download the App & Newsletter */}
        <div>
          <h4 className="font-bold text-lg mb-4">Download the App</h4>
          <div className="flex space-x-4 mb-8">
            <a href="#" aria-label="Google Play" className="bg-gray-800 text-white rounded-lg px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 transition-colors">
              <FaGooglePlay className="text-xl" />
              <span>
                <div className="text-xs">GET IT ON</div>
                <div className="font-bold">Google Play</div>
              </span>
            </a>
            <a href="#" aria-label="App Store" className="bg-gray-800 text-white rounded-lg px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 transition-colors">
              <FaApple className="text-xl" />
              <span>
                <div className="text-xs">Download on the</div>
                <div className="font-bold">App Store</div>
              </span>
            </a>
          </div>

          <h4 className="font-bold text-lg mb-4">Join Our <span className="text-orange-500">Newsletter</span></h4>
          <p className="text-sm text-gray-500 mb-4">Get expert tips, product news, and exclusive content. No spam—just the good stuff.</p>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none" />
            <button className="bg-orange-500 text-white font-semibold rounded-r-lg px-6 py-3 hover:bg-orange-600 transition-colors">Send</button>
          </div>
        </div>
      </div>

      {/* Bottom copyright & payment section */}
      <div className="bg-gray-800 text-gray-400 py-4 px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-2 md:mb-0">© 2025 eSIM White Label. All Rights Reserved</p>
        <div className="flex space-x-3 text-2xl">
          <img src="/assets/icons/payment-method1.png" alt="" />
          <img src="/assets/icons/payment-method2.png" alt="" />
          <img src="/assets/icons/payment-method3.png" alt="" />
          <img src="/assets/icons/payment-method4.png" alt="" />
          <img src="/assets/icons/payment-method5.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;