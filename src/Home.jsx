import React, { useMemo, useState } from 'react';
import logo from './assets/paz-logo-stacked-zslash.svg';
import benji from './assets/benji-mascot.png';

/**
 * Precision Appraisal Zone — Home (Autoloss-inspired upgrade)
 * - Preserves Benji helper (bottom-right)
 * - Adds: Pricing & Guarantee, DV Calculator (estimate-only), Results, State Laws hub
 * - Expanded nav + smooth-scroll CTAs
 * - TailwindCSS only; drop-in replacement for your existing <Home />
 */

const Home = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // NEW: combined experience label
  const combinedYearsLabel = '10+ years combined experience';

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-start pb-28 text-gray-800">
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="PAZ Logo" className="h-10 w-auto rounded-none border-none shadow-none ring-0" />
            <span className="font-semibold tracking-tight">Precision Appraisal Zone</span>
          </div>
          <nav className="hidden lg:flex gap-6 text-sm">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#why" className="hover:text-gray-900">Why Us</a>
            <a href="#process" className="hover:text-gray-900">Process</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#calculator" className="hover:text-gray-900">Calculator</a>
            <a href="#results" className="hover:text-gray-900">Results</a>
            <a href="#state-laws" className="hover:text-gray-900">State Laws</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <button
            onClick={() => handleScrollTo('quote')}
            className="hidden sm:inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm shadow hover:shadow-md"
          >
            Free Case Review
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14 text-center">
          <img
            src={logo}
            alt="PAZ Logo"
            className="w-64 sm:w-72 md:w-80 lg:w-[28rem] mx-auto mb-6 rounded-none border-none shadow-none ring-0 opacity-100 block transform translate-x-2 sm:translate-x-3"
          />
          <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
            Defensible automotive valuations that move insurers to yes.
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-gray-600">
            Certified, independent reports for Diminished Value, Loss of Use, and Total Loss—delivered fast with clean, evidence-based methodology.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => handleScrollTo('quote')}
              className="bg-gray-900 text-white px-5 py-3 rounded-xl font-medium shadow hover:shadow-md"
            >
              Start My Quote
            </button>
            <a href="#services" className="px-5 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100">
              Explore Services
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 justify-center text-xs">
            <span className="px-3 py-1 rounded-full border bg-white">{combinedYearsLabel}</span>
            <span className="px-3 py-1 rounded-full border bg-white">48–72h avg turnaround</span>
            <span className="px-3 py-1 rounded-full border bg-white">Florida + Nationwide Remote</span>
            <span className="px-3 py-1 rounded-full border bg-white">Works with Attorneys & Shops</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mt-6 w-full">
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold">Diminished Value Reports</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Certified reports that quantify post-repair loss in market value using comps & condition scoring.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold">Loss of Use Reports</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Accurate reimbursement calculations for downtime with comparable class benchmarking.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold">Total Loss Valuation Support</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Independent ACV opinions & rebuttals when settlement offers miss the mark.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold">Inspections & EDR (optional)</h3>
                <p className="text-sm text-gray-600 mt-1">
                  On-site photo mapping and event data retrieval where applicable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="w-full mt-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Why Choose Us?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <li>✔️ Certified Independent Appraisers</li>
              <li>✔️ 5-Star Rated Service</li>
              <li>✔️ Fast Turnaround Times</li>
              <li>✔️ Works with Attorneys & Shops</li>
              <li>✔️ {combinedYearsLabel}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="w-full mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">How It Works</h2>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 text-sm">
              {[
                { step: '1', title: 'Free Review', desc: 'Share estimates, photos, and details.' },
                { step: '2', title: 'Evidence', desc: 'We pull comps, auction data, OEM positions.' },
                { step: '3', title: 'Report', desc: 'Clean PDF ready for negotiation or demand.' },
                { step: '4', title: 'Support', desc: 'We clarify methods and addenda if needed.' },
              ].map((s) => (
                <div key={s.step} className="border border-gray-200 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold mb-2">
                    {s.step}
                  </div>
                  <div className="font-medium">{s.title}</div>
                  <div className="text-gray-600 mt-1">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Guarantee */}
      <section id="pricing" className="w-full mt-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-2">Pricing</h2>
            <p className="text-center text-gray-600 mb-6">Simple, transparent pricing. Rush options available.</p>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
              {[
                { name: 'DV Report', price: '$295', desc: '48–72h delivery' },
                { name: 'Loss of Use Add-On', price: '+$95', desc: 'Bundle with DV' },
                { name: 'Rush Turnaround', price: '+$95', desc: '24h (when feasible)' },
                { name: 'Total Loss Rebuttal', price: 'from $395', desc: 'ACV opinion + comps' },
              ].map((c) => (
                <div key={c.name} className="border border-gray-200 rounded-xl p-4 text-center">
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-2xl mt-1">{c.price}</div>
                  <div className="text-sm text-gray-600 mt-1">{c.desc}</div>
                  <button
                    onClick={() => handleScrollTo('quote')}
                    className="mt-3 inline-flex items-center justify-center px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 text-sm"
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-gray-200 p-4 bg-gray-50">
              <h3 className="font-medium">Our Guarantee</h3>
              <p className="text-sm text-gray-700 mt-1">
                If your insurer doesn’t increase the offer by at least your PAZ fee within 60 days and you followed our
                negotiation steps, we’ll refund 100%. Clear, fair, and simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator (estimate-only) */}
      <section id="calculator" className="w-full mt-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-2">Diminished Value Calculator</h2>
            <p className="text-center text-gray-600 mb-6 text-sm">
              Quick estimate for education only — not a formal appraisal. For a defensible report, start a free case review.
            </p>
            <DVCalculator onStartQuote={() => handleScrollTo('quote')} />
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="w-full mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Results Our Clients Feel</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { caseId: 'BMW M4', before: '$2,500', after: '$9,450', days: '9 days', note: 'DV + LOU' },
                { caseId: 'Tesla Model 3', before: '$0', after: '$4,200', days: '12 days', note: 'DV only' },
                { caseId: 'F-150 Platinum', before: '$1,100', after: '$6,350', days: '8 days', note: 'DV + LOU' },
              ].map((r) => (
                <div key={r.caseId} className="border border-gray-200 rounded-xl p-4">
                  <div className="text-sm text-gray-500">Case</div>
                  <div className="font-medium">{r.caseId}</div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    <div className="rounded-lg bg-gray-50 p-2">
                      <div className="text-gray-500">Before</div>
                      <div className="font-semibold">{r.before}</div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-2">
                      <div className="text-gray-500">After</div>
                      <div className="font-semibold">{r.after}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-600">{r.note} • {r.days}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <button
                onClick={() => handleScrollTo('quote')}
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gray-900 text-white text-sm shadow hover:shadow-md"
              >
                Start Your Free Review
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* State Laws hub (starter) */}
      <section id="state-laws" className="w-full mt-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">State Laws (Overview)</h2>
            <p className="text-gray-700 text-sm text-center max-w-3xl mx-auto">
              Diminished Value and Loss of Use rules vary by state. We’re building out clear, plain-English pages for each state.
              Start with Florida below, or contact us and we’ll route you correctly.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { state: 'Florida', status: 'Live soon', desc: 'Owner claims recognized; negotiation best practices.' },
                { state: 'Georgia', status: 'Queued', desc: 'Common DV precedent; strict documentation helps.' },
                { state: 'North Carolina', status: 'Queued', desc: 'Case-by-case; comp grids recommended.' },
              ].map((s) => (
                <div key={s.state} className="border border-gray-200 rounded-xl p-4">
                  <div className="font-medium">{s.state}</div>
                  <div className="text-xs text-gray-500">{s.status}</div>
                  <p className="text-sm text-gray-700 mt-2">{s.desc}</p>
                  <button
                    onClick={() => handleScrollTo('quote')}
                    className="mt-3 inline-flex items-center justify-center px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 text-sm"
                  >
                    Ask About {s.state}
                  </button>
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
            <p className="mb-4">Upload your estimate and photos—an appraiser will respond within one business day.</p>
            <button
              onClick={() => handleScrollTo('contact')}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            >
              Submit & Upload Files
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="w-full mt-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">About Us</h2>
            <p className="text-center text-gray-700">
              Precision Appraisal Zone is dedicated to helping vehicle owners, law firms, and repair shops fight for fair
              valuations after an accident. Whether it’s Diminished Value or Total Loss disputes — we’ve got your back.
            </p>
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
                {
                  q: 'What documents do you need?',
                  a: 'Estimate(s), repair invoices if available, photos, police report, and the insurer’s latest offer.',
                },
                {
                  q: 'How fast is turnaround?',
                  a: 'Most DV/LOU reports are delivered within 2–3 business days after we receive complete documentation.',
                },
                {
                  q: 'Do you work with attorneys or owners?',
                  a: 'Both. We support law firms, public adjusters, and individual owners.',
                },
              ].map((item) => (
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
          onClick={() => handleScrollTo('quote')}
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

/** ===========================
 * DV Calculator component
 * Simple, front-end only, estimate for education (not an appraisal).
 * Formula: base ~20% of repair total; +10% if frame; +5% if airbags; +1% per panel (max +5%).
 * Outputs a range (±20%). Floor at $250, ceiling at 35% of repair total (soft).
 * =========================== */
const DVCalculator = ({ onStartQuote }) => {
  const [form, setForm] = useState({
    year: '',
    make: '',
    model: '',
    mileage: '',
    state: 'FL',
    repairTotal: '',
    panels: 1,
    frame: false,
    airbags: false,
  });

  const parsed = useMemo(() => {
    const repair = Math.max(0, Number(form.repairTotal) || 0);
    const panels = Math.min(10, Math.max(0, Number(form.panels) || 0));
    let pct = 0.20; // 20% of repair total baseline
    if (form.frame) pct += 0.10;
    if (form.airbags) pct += 0.05;
    pct += Math.min(0.05, 0.01 * panels); // +1% per panel, cap +5%

    const raw = repair * pct;
    const floor = repair > 0 ? Math.max(250, raw * 0.8) : 0;
    const ceilCap = repair * 0.35; // soft cap
    const low = Math.min(raw * 0.8, ceilCap);
    const high = Math.min(raw * 1.2, ceilCap);
    return {
      repair,
      estimateLow: Math.max(floor, Math.round(low)),
      estimateHigh: Math.max(floor + 50, Math.round(high)),
    };
  }, [form]);

  const currency = (n) =>
    n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Form */}
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-3">
          <input
            className="col-span-1 rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Year"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
            inputMode="numeric"
          />
          <input
            className="col-span-1 rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Make"
            value={form.make}
            onChange={(e) => setForm({ ...form, make: e.target.value })}
          />
          <input
            className="col-span-1 rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Model"
            value={form.model}
            onChange={(e) => setForm({ ...form, model: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <input
            className="col-span-1 rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Mileage"
            value={form.mileage}
            onChange={(e) => setForm({ ...form, mileage: e.target.value })}
            inputMode="numeric"
          />
          <input
            className="col-span-1 rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Repair Total ($)"
            value={form.repairTotal}
            onChange={(e) => setForm({ ...form, repairTotal: e.target.value })}
            inputMode="decimal"
          />
          <select
            className="col-span-1 rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-800"
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
          >
            <option value="FL">Florida (FL)</option>
            <option value="GA">Georgia (GA)</option>
            <option value="NC">North Carolina (NC)</option>
            <option value="TX">Texas (TX)</option>
            <option value="NY">New York (NY)</option>
            <option value="CA">California (CA)</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <label className="col-span-1 inline-flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              className="accent-gray-900"
              checked={form.frame}
              onChange={(e) => setForm({ ...form, frame: e.target.checked })}
            />
            Frame Damage
          </label>
          <label className="col-span-1 inline-flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              className="accent-gray-900"
              checked={form.airbags}
              onChange={(e) => setForm({ ...form, airbags: e.target.checked })}
            />
            Airbag Deploy
          </label>
          <div className="col-span-1">
            <input
              className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="Panels Affected"
              value={form.panels}
              onChange={(e) => setForm({ ...form, panels: e.target.value })}
              inputMode="numeric"
            />
          </div>
        </div>

        <div className="text-xs text-gray-500">
          This tool provides an educational range only and is not a substitute for a certified appraisal.
        </div>
      </div>

      {/* Output */}
      <div className="rounded-xl border border-gray-200 p-4 bg-gray-50">
        <div className="text-sm text-gray-600">Estimated DV Range</div>
        <div className="text-3xl font-semibold mt-1">
          {parsed.repair > 0 ? `${currency(parsed.estimateLow)} — ${currency(parsed.estimateHigh)}` : '—'}
        </div>
        <div className="text-xs text-gray-600 mt-2">
          Based on your inputs. Real-world DV depends on market comps, condition scoring, options, and state practices.
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <button
            onClick={onStartQuote}
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gray-900 text-white text-sm shadow hover:shadow-md"
          >
            Get a Certified DV Report
          </button>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 text-sm"
          >
            See What’s Included
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
