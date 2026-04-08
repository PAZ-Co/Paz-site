import React, { useMemo, useState, useEffect, useRef } from 'react';
import fullLogo from './assets/logo.png';
import pazIcon from './assets/paz-icon.png';
import benji from './assets/benji-mascot.png';

const Home = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const combinedYearsLabel = '10+ years combined experience';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [benjiOpen, setBenjiOpen] = useState(false);
  const [isCoarse, setIsCoarse] = useState(false);
  const [toast, setToast] = useState(null);
  const [showWoof, setShowWoof] = useState(false);

  const containerRef = useRef(null);
  const lastWoofRef = useRef(0);
  const woofTimeoutRef = useRef(null);
  const toastTimeoutRef = useRef(null);
  const prefersReducedMotion = useRef(false);

  const phone = '+19548397653';
  const email = 'david@paz.services';

  const smsHref = `sms:${phone}?&body=${encodeURIComponent(
    "Hi Precision Appraisal Zone (PAZ), I'd like a quote. Year/Make/Model: ____ Claim type: ____ City/State: ____"
  )}`;
  const telHref = `tel:${phone}`;
  const mailHref = `mailto:${email}?subject=${encodeURIComponent(
    'Free Case Review'
  )}&body=${encodeURIComponent(
    'Name:\nPhone:\nVehicle:\nClaim type:\nCity/State:\n\nBrief details:'
  )}`;
  const waHref = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(
    "Hi Precision Appraisal Zone (PAZ), I'd like a free case review."
  )}`;

  useEffect(() => {
    const coarse = window.matchMedia?.('(pointer: coarse)');
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)');

    setIsCoarse(coarse?.matches ?? false);
    prefersReducedMotion.current = !!reduce?.matches;

    const onChange = () => {
      setIsCoarse(window.matchMedia('(pointer: coarse)').matches);
    };

    coarse?.addEventListener?.('change', onChange);
    return () => coarse?.removeEventListener?.('change', onChange);
  }, []);

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

  useEffect(() => {
    const open = () => setBenjiOpen(true);
    document.addEventListener('open-benji', open);
    return () => document.removeEventListener('open-benji', open);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(woofTimeoutRef.current);
      clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  const handleActionClick = (kind) => {
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

    setBenjiOpen(true);

    const now = Date.now();
    const canWoof =
      !prefersReducedMotion.current && now - lastWoofRef.current > 30000;

    if (canWoof) {
      lastWoofRef.current = now;
      setShowWoof(true);
      clearTimeout(woofTimeoutRef.current);
      woofTimeoutRef.current = setTimeout(() => setShowWoof(false), 280);
    }
  };

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

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Precision Appraisal Zone',
    alternateName: 'PAZ',
    description:
      'Independent auto appraisal and valuation support specializing in Diminished Value, Loss of Use, Total Loss valuation support, and estimate validation.',
    url: 'https://www.precisionappraisalzone.com',
    telephone: '+1-954-839-7653',
    email: 'david@paz.services',
    areaServed: ['Florida', 'United States'],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    serviceType: [
      'Auto Appraisal',
      'Diminished Value Report',
      'Loss of Use Report',
      'Total Loss Valuation Support',
      'Repair Estimate Validation',
      'Addendum / Rebuttal Support',
    ],
  };

  const navItems = [
    ['services', 'Services'],
    ['why', 'Why PAZ'],
    ['process', 'Process'],
    ['pricing', 'Pricing'],
    ['calculator', 'DV Calculator'],
    ['results', 'Results'],
    ['faq', 'FAQ'],
    ['contact', 'Contact'],
  ];

  const serviceCards = [
    {
      title: 'Diminished Value Reports',
      desc: 'Defensible reports quantifying post-repair loss in market value using market comps, repair severity, and written methodology.',
      points: ['Market-backed analysis', 'Negotiation-ready PDF', 'Popular for owner and attorney claims'],
    },
    {
      title: 'Loss of Use Reports',
      desc: 'Support for fair rental-rate recovery using comparable vehicle-class benchmarking and clear written justification.',
      points: ['Comparable rental benchmarks', 'Clear adopted rate', 'Useful for negotiations and demand packages'],
    },
    {
      title: 'Total Loss Valuation Support',
      desc: 'Independent ACV opinions and rebuttals when insurer total-loss offers come in low.',
      points: ['Comparable vehicle analysis', 'Retail-market support', 'Strong rebuttal positioning'],
    },
    {
      title: 'Repair Estimate Validation',
      desc: 'Technical review of insurer versus repair-facility estimates with focus on omitted operations, OEM procedures, and scope gaps.',
      points: ['Great for shops and attorneys', 'OEM-focused analysis', 'Strong supplement support'],
    },
  ];

  const whyCards = [
    {
      title: 'Independent, Not Insurer-Generated',
      desc: 'Every report is built from an independent review of the documentation, market, and scope.',
    },
    {
      title: 'Methodology You Can Follow',
      desc: 'Clear written reasoning, not black-box numbers, so the report is easier to defend.',
    },
    {
      title: 'Built for Real Negotiation',
      desc: 'Structured to help owners, attorneys, and shops push back effectively when offers come in light.',
    },
    {
      title: 'Fast, Professional Turnaround',
      desc: 'Most common report types are completed within 24–48 hours once documentation is in.',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Send Your Documents',
      desc: 'Estimate, photos, valuation, invoice, or any insurer paperwork you have.',
    },
    {
      step: '2',
      title: 'We Review the File',
      desc: 'We analyze the vehicle, damages, scope, market data, and claim context.',
    },
    {
      step: '3',
      title: 'We Build the Report',
      desc: 'You receive a clean, polished PDF built for negotiation or legal support.',
    },
    {
      step: '4',
      title: 'Need Follow-Up?',
      desc: 'We can help with clarification, addenda, or rebuttal support where needed.',
    },
  ];

  const pricingCards = [
    { name: 'Diminished Value Report', price: '$395', desc: 'Most common owner claim report' },
    { name: 'Loss of Use Report', price: '$395', desc: 'Daily-rate support with written analysis' },
    { name: 'DV + LOU Bundle', price: '$595', desc: 'Best value for combined claims' },
    { name: 'Total Loss / ACV Support', price: 'From $495', desc: 'Independent ACV review and support' },
    { name: 'Estimate Validation', price: 'Custom', desc: 'Scope depends on vehicle, estimate, and OEM issues' },
    { name: 'Addendum / Rebuttal Support', price: 'From $195', desc: 'Follow-up support when needed' },
  ];

  const results = [
    {
      caseId: 'BMW M4',
      before: '$2,500',
      after: '$9,450',
      note: 'DV + LOU support',
    },
    {
      caseId: 'Tesla Model 3',
      before: '$0',
      after: '$4,200',
      note: 'DV support',
    },
    {
      caseId: 'F-150 Platinum',
      before: '$1,100',
      after: '$6,350',
      note: 'DV + LOU support',
    },
  ];

  const reviews = [
    {
      quote:
        'Professional, responsive, and easy to work with. The report gave us exactly what we needed to push back.',
      name: 'Client Review',
    },
    {
      quote:
        'Clean report, strong support, and fast turnaround. Helped make the valuation much easier to defend.',
      name: 'South Florida Client',
    },
    {
      quote:
        'Very knowledgeable and thorough. You can tell the report is built to hold up under scrutiny.',
      name: 'Vehicle Owner',
    },
  ];

  const faqs = [
    {
      q: 'What do you need to get started?',
      a: 'Usually the estimate, photos, VIN, mileage, and any insurer valuation or offer already made. If you have more documents, send those too.',
    },
    {
      q: 'How fast is turnaround?',
      a: 'Most common reports are completed within 24–48 hours after we receive the needed documentation.',
    },
    {
      q: 'Do you work with attorneys, shops, and owners?',
      a: 'Yes. Precision Appraisal Zone (PAZ) works with vehicle owners, collision centers, law firms, and related claim professionals.',
    },
    {
      q: 'Is the DV calculator a formal appraisal?',
      a: 'No. It is only an educational estimate. A formal report requires a document review and market-backed written analysis.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <img
              src={pazIcon}
              alt="PAZ Icon"
              className="h-10 w-auto rounded-none border-none shadow-none ring-0"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                Precision Appraisal Zone
              </div>
              <div className="text-[11px] text-gray-500">(PAZ)</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-600">
            {navItems.map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => handleScrollTo(id)}
                className="transition hover:text-gray-900"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScrollTo('quote')}
              className="hidden sm:inline-flex rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-black"
            >
              Start My Quote
            </button>

            <button
              type="button"
              className="inline-flex lg:hidden rounded-xl border border-gray-300 px-3 py-2 text-sm"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
              {navItems.map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    handleScrollTo(id);
                    setMobileMenuOpen(false);
                  }}
                  className="border-b border-gray-100 py-3 text-left text-sm text-gray-700 last:border-b-0"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section className="w-full bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:py-14 lg:py-16">
          <img
            src={fullLogo}
            alt="PAZ Logo"
            className="mx-auto mb-5 w-36 rounded-none border-none shadow-none ring-0 sm:w-44 md:w-52 lg:w-56"
          />

          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Independent reports.
            <br className="hidden sm:block" />
            <span className="inline-block">Laser-focused results.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
            Defensible valuation support built on market comps and clear methodology.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => handleScrollTo('quote')}
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-black"
            >
              Start My Quote
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('services')}
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
            >
              Explore Services
            </button>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs">
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-700">
              {combinedYearsLabel}
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-700">
              24–48h turnaround
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-700">
              Florida + Nationwide
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-700">
              FL Licensed 620
            </span>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Built around the claim issues that matter most.
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Clear scope, clean reporting, and real support for the moments when the
              insurer’s number or position needs a closer look.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{card.desc}</p>

                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-0.5 text-gray-900">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleScrollTo('quote')}
                  className="mt-6 inline-flex rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
                >
                  Start a Case Review
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="w-full bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Why PAZ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              A stronger alternative to generic claim-side numbers.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="w-full py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Simple to start. Built to look professional.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                  {step.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="w-full bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Straightforward pricing for the most common requests.
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Transparent starting points. More technical or document-heavy matters may
              require a custom quote.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {pricingCards.map((card) => (
              <div
                key={card.name}
                className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">{card.name}</h3>
                <div className="mt-3 text-3xl font-semibold text-gray-900">{card.price}</div>
                <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
                <button
                  type="button"
                  onClick={() => handleScrollTo('quote')}
                  className="mt-6 inline-flex rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
                >
                  Start My Quote
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Our Promise</h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
              If new documentation comes in after delivery, we can revise the report as
              needed within a reasonable window so the final product reflects the best
              available file.
            </p>
          </div>
        </div>
      </section>

      <section id="calculator" className="w-full py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                DV Calculator
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Quick estimate for educational purposes.
              </h2>
              <p className="mt-4 text-sm text-gray-600">
                This tool is not a formal appraisal. For a defensible number, request a
                full review and report.
              </p>
            </div>

            <div className="mt-8">
              <DVCalculator onStartQuote={() => handleScrollTo('quote')} />
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="w-full bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Results
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              The kind of movement clients are looking for.
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Examples shown for illustration of outcome positioning and client value.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {results.map((r) => (
              <div
                key={r.caseId}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm text-gray-500">Case type</div>
                <div className="mt-1 text-lg font-semibold text-gray-900">{r.caseId}</div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <div className="text-xs uppercase tracking-wide text-gray-500">
                      Before
                    </div>
                    <div className="mt-2 text-xl font-semibold text-gray-900">
                      {r.before}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <div className="text-xs uppercase tracking-wide text-gray-500">
                      After
                    </div>
                    <div className="mt-2 text-xl font-semibold text-gray-900">
                      {r.after}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-600">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                Sample deliverables
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
                Show visitors what a professional report looks like.
              </h2>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Add blurred screenshots of your real report pages here later. This section
                will sell the professionalism of your formatting fast.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  'Market comps page',
                  'Methodology section',
                  'Charts / visuals',
                  'Photo evidence',
                  'Certification page',
                  'Conclusion page',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[110px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-4 text-center text-sm text-gray-500"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-gray-200 bg-gray-50 p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                Reviews
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
                Social proof helps close hesitation.
              </h2>

              <div className="mt-6 space-y-4">
                {reviews.map((review) => (
                  <div
                    key={review.quote}
                    className="rounded-2xl border border-gray-200 bg-white p-5"
                  >
                    <div className="text-sm text-gray-700">★★★★★</div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      “{review.quote}”
                    </p>
                    <div className="mt-3 text-sm font-medium text-gray-900">
                      {review.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="w-full bg-gray-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            Free case review
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to send your file?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
            Send your estimate, photos, valuation, or insurer paperwork and Precision
            Appraisal Zone (PAZ) will review the file and respond as quickly as possible.
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
            <label className="inline-flex items-start gap-3 text-xs leading-5 text-gray-300">
              <input type="checkbox" className="mt-1 accent-white" required />
              <span>
                I agree to the{' '}
                <a
                  className="underline"
                  href="/terms-of-service.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  className="underline"
                  href="/privacy-policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            <button
              type="button"
              onClick={() => document.dispatchEvent(new CustomEvent('open-benji'))}
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Contact PAZ / Upload Files
            </button>

            <p className="mt-4 text-[11px] leading-5 text-gray-400">
              Precision Appraisal Zone (PAZ) is an independent appraisal service. We do
              not provide legal advice or sell insurance on this site.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-[28px] border border-gray-200 bg-white p-8 text-center shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
              Independent support for claim disputes and valuation questions.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
              Precision Appraisal Zone (PAZ) supports vehicle owners, law firms, and
              repair facilities with professional valuation and technical reporting after
              a loss. From Diminished Value and Loss of Use to Total Loss support and
              estimate validation, the goal is simple: provide a clean, defensible report
              backed by real analysis.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="w-full bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
                Common questions
              </h2>
            </div>

            <div className="mt-8 divide-y divide-gray-200">
              {faqs.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-gray-900">
                    <span>{item.q}</span>
                    <span className="text-gray-400 transition group-open:rotate-180">
                      ⌄
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
                Get in touch
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center">
                <div className="text-xs uppercase tracking-wide text-gray-500">Email</div>
                <div className="mt-2 text-sm font-medium text-gray-900">{email}</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center">
                <div className="text-xs uppercase tracking-wide text-gray-500">Phone</div>
                <div className="mt-2 text-sm font-medium text-gray-900">954.839.7653</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center">
                <div className="text-xs uppercase tracking-wide text-gray-500">Service area</div>
                <div className="mt-2 text-sm font-medium text-gray-900">
                  South Florida + remote nationwide
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
              <a
                className="underline"
                href="/privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <span>•</span>
              <a
                className="underline"
                href="/terms-of-service.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-center text-sm text-gray-500 md:flex-row md:text-left">
          <div>© {new Date().getFullYear()} Precision Appraisal Zone (PAZ). All rights reserved.</div>
          <div>Serving Miami-Dade • Broward • Palm Beach • Florida statewide • Remote nationwide</div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50 flex items-end gap-2 select-none">
        <div className="hidden max-w-[170px] rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-800 shadow-md sm:block">
          Need help getting started?
        </div>

        <div className="relative" ref={containerRef}>
          {showWoof && (
            <div
              role="status"
              aria-live="polite"
              className="absolute bottom-20 right-0 rounded-full border border-gray-800 bg-gray-900 px-3 py-1 text-xs text-white shadow-md"
            >
              Woof!
              <span className="absolute -bottom-1 right-6 h-0 w-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-900" />
            </div>
          )}

          {toast && (
            <div className="absolute bottom-24 right-0 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-800 shadow-md">
              {toast.text}
            </div>
          )}

          {benjiOpen && (
            <div
              className="absolute bottom-16 right-0 w-64 rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-lg"
              role="dialog"
              aria-label="Contact options"
            >
              <div className="mb-2 font-medium text-gray-800">Ask Benji</div>
              <div className="flex flex-col gap-2">
                {actions.map((a) => (
                  <a
                    key={a.kind}
                    href={a.href}
                    onClick={() => handleActionClick(a.kind)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 hover:bg-gray-100"
                  >
                    {a.label}
                  </a>
                ))}
              </div>
              <div className="mt-2 text-center text-[11px] text-gray-500">
                SMS works best on mobile. Press <span className="font-semibold">Esc</span> to close.
              </div>
            </div>
          )}

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
              className="h-14 w-14 rounded-full border border-gray-300 shadow-md transition-transform hover:scale-110"
            />
            <span className="mt-1 text-[11px] font-medium">Ask Benji</span>
          </button>
        </div>
      </div>
    </div>
  );
};

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

    let pct = 0.2;
    if (form.frame) pct += 0.1;
    if (form.airbags) pct += 0.05;
    pct += Math.min(0.05, 0.01 * panels);

    const raw = repair * pct;
    const floor = repair > 0 ? Math.max(250, raw * 0.8) : 0;
    const ceilCap = repair * 0.35;
    const low = Math.min(raw * 0.8, ceilCap);
    const high = Math.min(raw * 1.2, ceilCap);

    return {
      repair,
      estimateLow: Math.max(floor, Math.round(low)),
      estimateHigh: Math.max(floor + 50, Math.round(high)),
    };
  }, [form]);

  const currency = (n) =>
    n.toLocaleString(undefined, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <input
            className="rounded-xl border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Year"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
            inputMode="numeric"
          />
          <input
            className="rounded-xl border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Make"
            value={form.make}
            onChange={(e) => setForm({ ...form, make: e.target.value })}
          />
          <input
            className="rounded-xl border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Model"
            value={form.model}
            onChange={(e) => setForm({ ...form, model: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <input
            className="rounded-xl border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Mileage"
            value={form.mileage}
            onChange={(e) => setForm({ ...form, mileage: e.target.value })}
            inputMode="numeric"
          />
          <input
            className="rounded-xl border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Repair Total ($)"
            value={form.repairTotal}
            onChange={(e) => setForm({ ...form, repairTotal: e.target.value })}
            inputMode="decimal"
          />
          <select
            className="rounded-xl border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-800"
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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <label className="inline-flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              className="accent-gray-900"
              checked={form.frame}
              onChange={(e) => setForm({ ...form, frame: e.target.checked })}
            />
            Frame Damage
          </label>

          <label className="inline-flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              className="accent-gray-900"
              checked={form.airbags}
              onChange={(e) => setForm({ ...form, airbags: e.target.checked })}
            />
            Airbag Deploy
          </label>

          <input
            className="rounded-xl border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Panels Affected"
            value={form.panels}
            onChange={(e) => setForm({ ...form, panels: e.target.value })}
            inputMode="numeric"
          />
        </div>

        <div className="text-xs leading-5 text-gray-500">
          Educational estimate only. Real-world diminished value depends on market
          comps, condition, equipment, severity, state practices, and documentation.
        </div>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
        <div className="text-sm text-gray-600">Estimated DV range</div>
        <div className="mt-2 text-3xl font-semibold text-gray-900">
          {parsed.repair > 0
            ? `${currency(parsed.estimateLow)} — ${currency(parsed.estimateHigh)}`
            : '—'}
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          Based on the inputs above. For a true supportable number, request a formal
          review and written report.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onStartQuote}
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-black"
          >
            Request a DV Report
          </button>

          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
          >
            View Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;


