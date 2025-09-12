import React, { useMemo, useState, useEffect, useRef } from 'react';
import logo from './assets/logo.png';
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

  // Combined experience label
  const combinedYearsLabel = '10+ years combined experience';

  // --- Ask Benji (Option A: Quick-Action Popover) + Upgrades ---
  const [benjiOpen, setBenjiOpen] = useState(false);
  const [isCoarse, setIsCoarse] = useState(false); // mobile-ish pointer detection
  const [toast, setToast] = useState(null); // { text: string }
  const [showWoof, setShowWoof] = useState(false);

  const containerRef = useRef(null);
  const lastWoofRef = useRef(0);
  const woofTimeoutRef = useRef(null);
  const openTimeoutRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  const phone = '+19548397653'; // from 954.839.7653
  const email = 'PrecisionAppraisalZone@gmail.com';

  const smsHref = `sms:${phone}?&body=${encodeURIComponent(
    "Hi PAZ, I'd like a DV quote. Year/Make/Model: ____  Repair total: $____  City/State: ____"
  )}`;
  const telHref = `tel:${phone}`;
  const mailHref = `mailto:${email}?subject=${encodeURIComponent(
    'Free Case Review'
  )}&body=${encodeURIComponent(
    'Name:\nPhone:\nYear/Make/Model:\nRepair total:\nCity/State:\n\nBrief details:'
  )}`;
  const waHref = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(
    "Hi PAZ, I'd like a DV quote."
  )}`;

  // Detect coarse pointer (mobile/tablet) & prefers-reduced-motion once on mount
  const prefersReducedMotion = useRef(false);
  useEffect(() => {
    const coarse = window.matchMedia?.('(pointer: coarse)');
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    setIsCoarse(coarse?.matches ?? false);
    prefersReducedMotion.current = !!reduce?.matches;

    const onChange = () => setIsCoarse(window.matchMedia('(pointer: coarse)').matches);
    coarse?.addEventListener?.('change', onChange);
    return () => coarse?.removeEventListener?.('change', onChange);
  }, []);

  // Close on outside click or ESC while open
  useEffect(() => {
    if (!benjiOpen) return;

    const onDocMouseDown = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setBenjiOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setBenjiOpen(false);
    };

    document.addEventListener('mousedown', onDocMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [benjiOpen]);

  // Listen for a global "open-benji" event so other buttons can open the popover
  useEffect(() => {
    const open = () => setBenjiOpen(true);
    document.addEventListener('open-benji', open);
    return () => document.removeEventListener('open-benji', open);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      clearTimeout(woofTimeoutRef.current);
      clearTimeout(openTimeoutRef.current);
      clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  const handleActionClick = (kind) => {
    // Tiny success toast that auto-dismisses
    const msg =
      kind === 'sms'
        ? 'Opening Messages…'
        : kind === 'call'
        ? 'Opening Phone…'
        : kind === 'whatsapp'
        ? 'Opening WhatsApp…'
        : 'Opening Email…';

    setToast({ text: msg });
    clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => setToast(null), 2000);

    setBenjiOpen(false);
  };

  const handleBenjiClick = () => {
    if (benjiOpen) {
      setBenjiOpen(false);
      return;
    }
    // Show quick "Woof!" bubble before opening (rate-limited 30s)
    the:
    const now = Date.now();
    setBenjiOpen(true);
    const canWoof = !prefersReducedMotion.current && now - lastWoofRef.current > 30000;
    if (canWoof) {
      lastWoofRef.current = now;
      setShowWoof(true);
      clearTimeout(woofTimeoutRef.current);
      woofTimeoutRef.current = setTimeout(() => setShowWoof(false), 280);
    }
  };

  // Order actions based on pointer type
  const actions = isCoarse
    ? [
        { label: '📱 Text (SMS)', href: smsHref, kind: 'sms' },
        { label: '💬 WhatsApp', href: waHref, kind: 'whatsapp' },
        { label: '📞 Call', href: telHref, kind: 'call' },
        { label: '✉️ Email', href: mailHref, kind: 'email' },
      ]
    : [
        { label: '✉️ Email', href: mailHref, kind: 'email' },
        { label: '📞 Call', href: telHref, kind: 'call' },
        { label: '💬 WhatsApp', href: waHref, kind: 'whatsapp' },
        { label: '📱 Text (SMS)', href: smsHref, kind: 'sms' },
      ];

  // ---------- JSON-LD schema (updated for trust/compliance) ----------
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Precision Appraisal Zone",
    "alternateName": "PAZ",
    "description": "Independent auto appraisals specializing in Diminished Value (DV) and Loss of Use (LoU). FL 620 licensed. USPAP coursework in progress.",
    "url": "https://www.precisionappraisalzone.com",
    "telephone": "+1-954-839-7653",
    "serviceType": ["Auto Appraisal","Diminished Value","Loss of Use","Total Loss Valuation Support"],
    "areaServed": ["Florida","United States"],
    "address": { "@type": "PostalAddress", "addressRegion": "FL", "addressCountry": "US" }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-start pb-28 text-gray-800">
      {/* JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

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
            type="button"
            onClick={() => handleScrollTo('quote')}
            className="hidden sm:inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm shadow hover:shadow-md"
          >
            Free Case Review
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10 text-center">
          <img
            src={logo}
            alt="PAZ Logo"
            className="w-36 sm:w-44 md:w-52 lg:w-60 mx-auto mb-4 rounded-none border-none shadow-none ring-0"
          />
          <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
            Defensible automotive valuations that move insurers to yes.
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-gray-600">
            Certified, independent reports for Diminished Value, Loss of Use, and Total Loss—delivered fast with clean, evidence-based methodology.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              aria-label="Start my quote"
              onClick={() => handleScrollTo('quote')}
              className="bg-gray-900 text-white px-5 py-3 rounded-xl font-medium shadow hover:shadow-md"
            >
              Start My Quote
            </button>
            <a
              href="#services"
              aria-label="Explore services"
              className="px-5 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100"
            >
              Explore Services
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 justify-center text-xs">
            <span className="px-3 py-1 rounded-full border bg-white">{combinedYearsLabel}</span>
            <span className="px-3 py-1 rounded-full border bg-white">24–48h avg turnaround</span>
            <span className="px-3 py-1 rounded-full border bg-white">Florida + Nationwide Remote</span>
            <span className="px-3 py-1 rounded-full border bg-white">Licensed FL 620</span>
            <span className="px-3 py-1 rounded-full border bg-white">USPAP coursework in progress</span>
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
                    type="button"
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
                If your insurer doesn’t increase the offer by at least the cost of your PAZ report within 60 days—and you followed our negotiation steps—we’ll refund your fee. Fair and simple.
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
                type="button"
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
                    type="button"
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

            {/* Consent snippet for compliance */}
            <div className="text-xs text-indigo-100 mb-3">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="accent-white" required />
                I agree to the{' '}
                <a className="underline" href="/terms-of-service.html" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                {' '}and{' '}
                <a className="underline" href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="button"
              onClick={() => document.dispatchEvent(new CustomEvent('open-benji'))}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            >
              Submit & Upload Files
            </button>

            {/* short legal notice */}
            <div className="mt-3 text-[11px] text-indigo-100/90">
              Precision Appraisal Zone is an independent appraisal service. We do not sell insurance or provide legal advice.
            </div>
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
              valuations after an accident. Backed by a Florida 620 Adjuster License — we bring expert knowledge of insurance
              claims, valuation, and settlement processes, ensuring every report stands up under scrutiny. Whether it’s
              Diminished Value, Loss of Use, or Total Loss disputes — we’ve got your back.
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
            {/* small legal links row */}
            <div className="mt-4 text-center text-xs text-gray-500 space-x-3">
              <a className="underline" href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <span>•</span>
              <a className="underline" href="/terms-of-service.html" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            </div>
          </div>
        </div>
      </section>

      {/* Benji VA Bubble (popover + Woof + toast) */}
      <div className="fixed bottom-4 right-4 z-50 flex items-end gap-2 select-none">
        {/* helper bubble */}
        <div className="bg-white text-gray-800 text-xs px-3 py-2 rounded-lg shadow-md max-w-[160px] border border-gray-200">
          Hi there! Need help?
        </div>

        {/* Benji + popover container (click/ESC/Outside managed) */}
        <div className="relative" ref={containerRef}>
          {/* Woof micro-pop */}
          {showWoof && (
            <div
              role="status"
              aria-live="polite"
              className="absolute bottom-20 right-0 px-3 py-1 rounded-full bg-gray-900 text-white text-xs shadow-md border border-gray-800
                         transform transition duration-200 ease-out"
            >
              Woof!
              <span className="absolute -bottom-1 right-6 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-900" />
            </div>
          )}

          {/* Success toast */}
          {toast && (
            <div className="absolute bottom-24 right-0 px-3 py-2 rounded-lg bg-white text-gray-800 text-xs shadow-md border border-gray-200">
              {toast.text}
            </div>
          )}

          {/* Popover */}
          {benjiOpen && (
            <div
              className="absolute bottom-16 right-0 w-64 bg-white border border-gray-200 shadow-lg rounded-xl p-3 text-sm"
              role="dialog"
              aria-label="Contact options"
            >
              <div className="font-medium text-gray-800 mb-2">Ask Benji</div>
              <div className="flex flex-col gap-2">
                {actions.map((a) => (
                  <a
                    key={a.kind}
                    href={a.href}
                    onClick={() => handleActionClick(a.kind)}
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100"
                  >
                    {a.label}
                  </a>
                ))}
              </div>
              <div className="mt-2 text-[11px] text-gray-500 text-center">
                SMS works best on mobile devices. Press <span className="font-semibold">Esc</span> to close.
              </div>
            </div>
          )}

          {/* Benji button */}
          <button
            type="button"
            aria-label="Open Benji Assistant"
            aria-expanded={benjiOpen}
            className="flex flex-col items-center text-center focus:outline-none"
            onClick={handleBenjiClick}
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
            type="button"
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






