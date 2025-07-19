import React from 'react';
import logo from './assets/paz-logo.png';
import benji from './assets/benji-mascot.png';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start py-10 px-4">
      <img src={logo} alt="PAZ Logo" className="w-64 mb-6" />

      <h1 className="text-3xl font-bold text-center">Precision Appraisal Zone</h1>
      <p className="text-center mt-2 text-gray-600 max-w-md">
        Appraisals so good, they could bring world peace.
      </p>

      <div className="mt-10 p-6 bg-white rounded-xl shadow-md max-w-md w-full">
        <h2 className="text-xl font-semibold text-center mb-4">Our Services</h2>
        <ul className="text-left space-y-2 text-gray-700">
          <li>✅ Certified Diminished Value Reports</li>
          <li>✅ Expert Loss of Use Claims</li>
          <li>✅ Repair Estimate Disputes</li>
          <li>✅ Total Loss Valuation Support</li>
          <li>✅ Insurance Settlement Consulting</li>
        </ul>
      </div>

      <div className="mt-10 text-center">
        <img src={benji} alt="Benji the Mascot" className="w-40 mx-auto rounded-full shadow-lg" />
        <p className="text-sm italic text-gray-500 mt-2">Benji the Pup of Peace</p>
      </div>
    </div>
  );
};

export default Home;
