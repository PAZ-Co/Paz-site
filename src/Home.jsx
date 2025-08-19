import React from 'react';
import logo from './assets/paz-logo.png';
import benji from './assets/benji-mascot.png';

/**
 * Precision Appraisal Zone — Home (upgrade)
 * - Preserves Benji helper (bottom-right)
 * - Cleaner visual hierarchy + stronger CTAs
 * - Adds Process + FAQ while keeping your current content and contact details
 * - TailwindCSS only; drop-in replacement for your existing <Home />
 */

const Home = () => {
  const handleStartQuote = () => {
    const el = document.getElementById('quote');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-start pb-28 text-gray-800">
      {/* Top Hero */}
      <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="PAZ Logo" className="h-9 w-auto rounded-md" />
            <span className="font-semibold tracking-tight">Precision Appraisal Zone</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#why" className="hover:text-gray-900">Why Us</a>
            <a href="#process" className="hover:text-gray-900">Process</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <button onClick={handleStartQuote} className="hidden sm:inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm shadow hover:shadow-md">
            Free Case Review
          </button>
        </div>
      </header>

      {/* Hero Band */}
      <section className="w-full bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-10 sm:py-14 text-center">
          <img src={logo} alt="PAZ Logo" className="w-48 sm:w-56 mx-auto mb-6 rounded-lg shadow-sm opacity-90" />
          <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">Defensible automotive valuations that move insurers to yes.</h1>
          <p className="max-w-2xl mx-auto mt-3 text-gray-600">Certified, independent reports for Diminished Value, Loss of Use, and Total Loss—delivered fast with clean, evidence‑based methodology.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={handleStartQuote} className="bg-gray-900 text-white px-5 py-3 rounded-xl font-medium shadow hover:shadow-md">Start My Quote</button>
            <a href="#services" className="px-5 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100">Explore Services</a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 justify-center text-xs">
            <span className="px-3 py-1 rounded-full border bg-white">48–72h avg turnaround</span>
            <span className="px-3 py-1 rounded-full border bg-white">Florida + Nationwide Remote</span>
            <span className="px-3 py-1 rounded-full border bg-white">Works with Attorneys & Shops</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mt-6 w-full">
        <div className="max-w-3xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold">Diminished Value Reports</h3>
                <p className="text-sm text-gray-600 mt-1">Certified reports that quantify post‑repair loss in market value using comps & condition scoring.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold">Loss of Use Reports</h3>
                <p className="text-sm text-gray-600 mt-1">Accurate reimbursement calculations for downtime with comparable class benchmarking.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold">Total Loss Valuation Support</h3>
                <p className="text-sm text-gray-600 mt-1">Independent ACV opinions & rebuttals when settlement offers miss the mark.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold">Inspections & EDR (optional)</h3>
                <p className="text-sm text-gray-600 mt-1">On‑site photo mapping and event data retrieval where applicable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="w-full mt-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Why Choose Us?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <li>✔️ Certified Independent Appraisers</li>
              <li>✔️ 5‑Star Rated Service</li>
              <li>✔️ Fast Turnaround Times</li>
              <li>✔️ Works with Attorneys & Shops</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="w-full mt-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">How It Works</h2>
            <div className="grid sm:grid-cols-4 gap-4 text-sm">
              {[
                {step: '1', title: 'Free Review', desc: 'Share estimates, photos, and details.'},
                {step: '2', title: 'Evidence', desc: 'We pull comps, auction data, OEM positions.'},
                {step: '3', title: 'Report', desc: 'Clean PDF ready for negotiation or demand.'},
                {step: '4', title: 'Support', desc: 'We clarify methods and addenda if needed.'},
              ].map(s => (
                <div key={s.step} className="border border-gray-200 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold mb-2">{s.step}</div>
                  <div className="font-medium">{s.title}</div>
                  <div className="text-gray-600 mt-1">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Quote CTA */}
      <section className="w-full mt-8" id="quote">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Get a Free Quote</h2>
            <p className="mb-4">Fill out our form and we’ll get back to you within 1 business day.</p>
            <button onClick={handleStartQuote} className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
              Start My Quote
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="w-full mt-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">About Us</h2>
            <p className="text-center text-gray-700">Precision Appraisal Zone is dedicated to helping vehicle owners, law firms, and repair shops fight for fair valuations after an accident. Whether it’s Diminished Value or Total Loss disputes — we’ve got your back.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="w-full mt-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">FAQ</h2>
            <div className="divide-y">
              {[
                {q:'What documents do you need?', a:'Estimate(s), repair invoices if available, photos, police report, and the insurer’s latest offer.'},
                {q:'How fast is turnaround?', a:'Most DV/LOU reports are delivered within 2–3 business days after we receive complete documentation.'},
                {q:'Do you work with attorneys or owners?', a:'Both. We support law firms, public adjusters, and individual owners.'},
              ].map(item => (
                <details key={item.q} className="group py-3">
                  <summary className="flex justify-between cursor-pointer text-left font-medium">
                    <span>{item.q}</span>
                    <span className="text-gray-400 group-open:rotate-180 transition">⌄</span>
                  </summary>
                  <p className="text-sm text-gray-600 mt-2">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full mt-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Contact</h2>
            <ul className="text-center space-y-1">
              <li><strong>Email:</strong> PrecisionAppraisalZone@Gmail.com</li>
              <li><strong>Phone:</strong> 954.839.7653</li>
              <li><strong>Location:</strong> South Florida</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benji VA Bubble (preserved) */}
      <div className="fixed bottom-4 right-4 z-50 flex items-end gap-2 select-none">
        <div className="bg-white text-gray-800 text-xs px-3 py-2 rounded-lg shadow-md max-w-[160px] border border-gray-200">
          Hi there! Need help?
        </div>
        <button
          aria-label="Open Benji Assistant"
          className="flex flex-col items-center text-center focus:outline-none"
          onClick={() => {
            const el = document.getElementById('quote');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img
            src={benji}
            alt="Benji the Pup of Peace"
            className="w-14 h-14 rounded-full shadow-md border border-gray-300 transition-transform hover:scale-110"
          />
          <span className="text-[11px] mt-1 font-medium">Ask Benji</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
