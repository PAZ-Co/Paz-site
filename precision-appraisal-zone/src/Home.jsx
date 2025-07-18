
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
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

      {/* Services */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Expert Appraisal Services</h2>
        <ul className="grid gap-4 sm:grid-cols-2 text-lg">
          <li>Diminished Value Reports</li>
          <li>Total Loss Assessments</li>
          <li>Loss of Use Calculations</li>
          <li>Pre-Purchase Inspections</li>
          <li>Custom & Exotic Car Valuations</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
        <ul className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto text-lg">
          <li>Licensed Florida Appraiser</li>
          <li>Fast 24–48 Hour Turnaround</li>
          <li>Detailed Reports w/ Market Comparisons</li>
          <li>Trusted by Body Shops, Attorneys & Dealerships</li>
          <li>Mobile/Remote Service Available</li>
        </ul>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About the Founder</h2>
        <p className="text-lg mb-4">
          <strong>David A. Paz</strong><br />
          Founder, Certified Appraiser
        </p>
        <p>
          With a background in insurance consulting and body shop operations, David created PAZ to deliver accurate, no-BS appraisals for clients who need real numbers — not lowball offers.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Get Started</h2>
        <p className="mb-2">Request an appraisal or ask a question:</p>
        <p className="mb-2">📧 precisionappraisalzone@gmail.com</p>
        <p className="mb-2">📍 Cooper City, FL</p>
        <p className="mb-6">📞 954-839-7653</p>
        <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-200 transition">
          Request Appraisal
        </button>
      </section>
    </main>
  );
}
