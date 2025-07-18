import React from "react";
import pazLogo from './assets/paz-logo.png'; 
import benjiMascot from './assets/benji-mascot.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header with Logo */}
      <header className="flex items-center justify-between p-4 shadow-md bg-white">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Precision Appraisal Zone logo" className="h-12 w-auto" />
          <h1 className="text-2xl font-bold">Precision Appraisal Zone</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="bg-gray-900 text-white py-24 px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Precision Appraisal Zone</h1>
          <p className="text-xl mb-6">Trusted Automotive Appraisals in South Florida</p>
          <p className="max-w-2xl mx-auto mb-8">
            Get fast, expert vehicle valuation reports — for insurance claims, legal disputes, or resale.
          </p>
          <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-2xl">
            Request an Appraisal
          </button>
        </section>
      </main>

      {/* Footer with Benji */}
      <footer className="relative mt-12 bg-gray-100 p-4 text-center text-sm">
        <p className="mb-2">© 2025 Precision Appraisal Zone. All rights reserved.</p>
        <div className="absolute right-4 bottom-4 w-20">
          <img
            src={benji}
            alt="Benji the mascot"
            className="rounded-full drop-shadow-xl hover:scale-105 transition-transform duration-200"
          />
        </div>
      </footer>
    </div>
  );
}
