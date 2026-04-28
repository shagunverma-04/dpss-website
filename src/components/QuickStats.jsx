import React, { useEffect, useRef, useState } from 'react';
import './QuickStats.css';

const useCountUp = (target, duration = 1800, inView = false) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const isPercentage = String(target).includes('%');
    const hasSuffix = String(target).includes('+');
    const num = parseInt(String(target).replace(/[^0-9]/g, ''), 10);

    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * num));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView]);

  const raw = String(target);
  const suffix = raw.replace(/[0-9]/g, '');
  return `${count}${suffix}`;
};

const StatItem = ({ number, label, desc, inView, delay }) => {
  const displayed = useCountUp(number, 1800, inView);
  return (
    <div className="qs-item" style={{ transitionDelay: delay }}>
      <div className="qs-number">{displayed}</div>
      <div className="qs-label">{label}</div>
      <div className="qs-desc">{desc}</div>
    </div>
  );
};

const QuickStats = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const stats = [
    { number: '50+',   label: 'Expert Faculty',      desc: 'Qualified educators' },
    { number: '1000+', label: 'Students',             desc: 'Thriving community' },
    { number: '100%',  label: 'Board Results',        desc: 'Consistent excellence' },
    { number: '10+',   label: 'Years of Excellence',  desc: 'Legacy of trust' },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="quick-stats" ref={sectionRef}>
      {/* Background pattern */}
      <div className="qs-pattern" />

      <div className="section-container qs-inner">
        <div className="qs-left">
          <span className="section-label section-label--light">By the Numbers</span>
          <h2 className="qs-heading">A legacy built<br />on results</h2>
        </div>
        <div className="qs-grid">
          {stats.map((s, i) => (
            <StatItem
              key={i}
              {...s}
              inView={inView}
              delay={`${i * 0.12}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
