import React from 'react';
import logo from './assets/paz-logo.png';
import benji from './assets/benji-mascot.png';

const Home = () => {
  return (
    <>
      {/* Sticky Header */}
      <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-800">Precision Appraisal Zone</h1>
          <nav className="space-x-6 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start py-24 px-4">
        <img src={logo} alt="PAZ Logo" className="w-64 mb-6" />

        <h1 className="text-3xl font-bold text-center">Precision Appraisal Zone</h1>
        <p className="text-center mt-2 text-gray-600 max-w-md">
          Appraisals so good, they could bring world peace.
        </p>

        <div
          id="services"
          className="mt-10 p-6 bg-white rounded-xl shadow-md max-w-md w-full"
        >
          <h2 className="text-xl font-semibold text-center mb-4">Our Services</h2>
          <ul className="text-left space-y-2 text-gray-700">
            <li>✔️ Certified Diminished Value Reports</li>
            <li>✔️ Expert Loss of Use Reports</li>
            <li>✔️ Repair Estimate Disputes</li>
            <li>✔️ Total Loss Valuation Support</li>
          </ul>
        </div>

        {/* Benji VA Chat */}
        <div className="fixed bottom-4 right-4 z-50 flex items-end gap-2">
          <div className="bg-white text-gray-800 text-xs px-3 py-2 rounded-lg shadow-md max-w-[150px]">
            Hi there! Need help?
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={benji}
              alt="Benji the Mascot"
              className="w-16 h-16 rounded-full shadow-md border border-gray-300 transition-transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
