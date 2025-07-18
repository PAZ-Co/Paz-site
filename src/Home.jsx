
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <section className="bg-gray-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Precision Appraisal Zone</h1>
        <p className="text-xl mb-6">Trusted Automotive Appraisals in South Florida</p>
        <p className="max-w-2xl mx-auto mb-8">
          Get fast, expert vehicle valuation reports — for insurance claims, legal disputes, diminished value, and more.
        </p>
        <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-200 transition">
          Request an Appraisal
        </button>
      </section>
    </main>
  );
}
