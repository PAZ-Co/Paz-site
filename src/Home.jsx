import React from 'react';
import logo from './assets/paz-logo.png';
import benji from './assets/benji-mascot.png';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start py-10 px-4 text-gray-800">
      {/* Logo & Slogan */}
      <img src={logo} alt="PAZ Logo" className="w-64 mb-4" />
      <h1 className="text-3xl font-bold text-center">Precision Appraisal Zone</h1>
      <p className="text-center mt-2 text-gray-600 max-w-md italic">
        Appraisals so good, they could bring world peace.
      </p>

      {/* Our Services */}
      <div className="mt-10 p-6 bg-white rounded-xl shadow-md max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Our Services</h2>
        <ul className="space-y-2 text-left list-disc list-inside">
          <li><strong>Diminished Value Reports:</strong> Certified reports that quantify loss in vehicle value after repairs.</li>
          <li><strong>Loss of Use Reports:</strong> Accurate reimbursement estimates for the time your vehicle was undriveable.</li>
           <li><strong>Total Loss Valuation Support:</strong> Fight undervalued total loss settlements with certified appraisals.</li>
          <li><strong>Repair Estimate Disputes:</strong> We advocate on your behalf to challenge lowball insurer estimates.</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="mt-10 p-6 bg-white rounded-xl shadow-md max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Why Choose Us?</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left list-none">
          <li>✔️ Certified Independent Appraisers</li>
          <li>✔️ 5-Star Rated Service</li>
          <li>✔️ Fast Turnaround Times</li>
          <li>✔️ Works with Attorneys & Shops</li>
        </ul>
      </div>

      {/* Free Quote Call to Action */}
      <div className="mt-10 bg-indigo-600 text-white p-6 rounded-xl shadow-lg max-w-2xl w-full text-center">
        <h2 className="text-xl font-semibold mb-2">Get a Free Quote</h2>
        <p className="mb-4">Fill out our form and we’ll get back to you within 1 business day.</p>
        <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
          Start My Quote
        </button>
      </div>

      {/* About Section */}
      <div className="mt-10 p-6 bg-white rounded-xl shadow-md max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">About Us</h2>
        <p className="text-center">
          Precision Appraisal Zone is dedicated to helping vehicle owners, law firms, and repair shops fight for fair valuations after an accident. Whether it’s Diminished Value or Total Loss disputes — we’ve got your back.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-10 mb-24 p-6 bg-white rounded-xl shadow-md max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact</h2>
        <ul className="text-center space-y-1">
          <li><strong>Email:</strong> PrecisionAppraisalZone@Gmail.com</li>
          <li><strong>Phone:</strong> 954.839.7653</li>
          </strong> Florida</li>
        </ul>
      </div>

      {/* Benji VA Bubble */}
      <div className="fixed bottom-4 right-4 z-50 flex items-end gap-2">
        {/* Chat Bubble */}
        <div className="bg-white text-gray-800 text-xs px-3 py-2 rounded-lg shadow-md max-w-[150px]">
          Hi there! Need help?
        </div>

        {/* Benji Image + Label */}
        <div className="flex flex-col items-center text-center">
          <img
            src={benji}
            alt="Benji the Pup of Peace"
            className="w-14 h-14 rounded-full shadow-md border border-gray-300 transition-transform hover:scale-110"
          />
          <span className="text-xs mt-1 font-medium">Benji the Pup of Peace</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
