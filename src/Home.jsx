import React from 'react';
import logo from './assets/paz-logo.png';
import benji from './assets/benji-mascot.png';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray">
      <img src={logo} alt="PAZ Logo" className="w-64 mb-6" />
      <h1 className="text-3xl font-bold text-center">Precision Appraisal Zone</h1>
      <h2 className="text-red-600 text-xl mt-2">TEST1</h2>
      <p className="text-center mt-4 text-gray-600 max-w-md">
        Appraisals so good, they could bring world peace;)
      </p>
      <img src={benji} alt="Benji the Mascot" className="w-40 mt-8 rounded-full shadow-lg" />
      <p className="text-sm italic text-gray-500 mt-2">Benji the Pup of Peace</p>
    </div>
  );
};

export default Home;
