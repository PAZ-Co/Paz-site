import React from 'react';
import logo from './assets/paz-logo.png';
import benji from './assets/benji-mascot.png';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={logo} alt="PAZ Logo" className="w-64 mb-6" />
      <h1 className="text-3xl font-bold text-center">Precision Appraisal Zone</h1>
      <p className="text-center mt-4 text-gray-600 max-w-md">
        Appraisals so good, they could bring world peace.
      </p>
      <img src={benji} alt="Benji the Mascot" className="w-40 mt-8 rounded-full shadow-lg" />
      <p className="text-sm italic text-gray-500 mt-2">Benji the Pup of Peace</p>

      <div className="mt-10 px-6 max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-4">Our Services</h2>
        <ul className="space-y-2 text-center text-gray-700">
          <li>✅ Certified Diminished Value Reports</li>
          <li>✅ Expert Loss of Use Claims</li>
          <li>✅ Repair Estimate Disputes</li>
          <li>✅ Total Loss Valuation Support</li>
          <li>✅ Insurance Settlement Consulting</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
