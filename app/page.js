'use client';

import { useState } from 'react';
import React from 'react';

const weddingDetails = {
  title: 'Muhurtham',
  date: 'Sunday, 13 December, 2026',
  time: '4:30 AM to 6:00 AM',
  venue: 'SSS A Mini Palace - Kalyana Mandapam',
  address: '4, Dindigul Rd, Thiru Nagar, Palani, Sivagiripatti, Tamil Nadu 624601',
  mapUrl: 'https://www.google.com/maps/dir//SSS+A+Mini+Palace+-+Kalyana+Mandapam,+4,+Dindigul+Rd,+Thiru+Nagar,+Palani,+Sivagiripatti,+Tamil+Nadu+624601/@11.8960386,79.4496614,8z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba9dfd1433076af:0x2446844caf92ff09!2m2!1d77.5316405!2d10.4480061?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D',
  description:
    'We invite you to witness the beginning of our forever in a heartfelt ceremony surrounded by love, laughter, and cherished memories.',
};

const receptionDetails = {
  title: 'Reception',
  date: 'Tuesday, 15 December 2026',
  time: '7:00 PM to 9:00 PM',
  venue: 'K. C. Thirumana Mandapam',
  address: 'Marudhamalai Rd, Karai Gounder Layout, Mappillai Layout, Kongu Nagar, Kalveerampalayam, Coimbatore, Tamil Nadu 641046',
  mapUrl: 'https://www.google.com/maps?rlz=1C1RXQR_enIN1124IN1124&biw=1536&bih=826&sca_esv=0cc2b9f834b9d715&sxsrf=APpeQnubEWF73t1W7n71mKbl4lJS-cp-yQ:1789984299885&gs_lp=Egxnd3Mtd2l6LXNlcnAiGGsuIGMuIHRoaXJ1bWFuYSBtYW5kYXBhbTILEC4YgAQYxwEYrwEyBRAAGIAEMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGA0jPFFAAWABwAHgBkAEAmAFzoAFzqgEDMC4xuAEByAEA-AEC-AEBmAIBoAJ3mAMAkgcDMC4xoAecB7IHAzAuMbgHd8IHAzItMcgHA4AIAQ&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kbfi7GkTX6g7MTopBCLFAxME&daddr=Marudhamalai+Rd,+Karai+Gounder+Layout,+Mappillai+Layout,+Kongu+Nagar,+Kalveerampalayam,+Coimbatore,+Tamil+Nadu+641046',
  description:
    'Join us for an evening of music, dinner, dancing, and celebration as we toast to love, family, and new beginnings.',
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [opening, setOpening] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Calculate countdown timer
  React.useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date('2026-12-13T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // generate some sparkles with randomized properties (memoized to prevent re-renders)
  const sparkles = React.useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => {
      const left = Math.round(Math.random() * 10000) / 100; // percent
      const delay = Math.round(Math.random() * 12000) / 1000; // seconds (up to 12s)
      const duration = Math.round((14 + Math.random() * 18) * 100) / 100; // seconds (14-32s)
      const size = Math.round((10 + Math.random() * 26) * 10) / 10; // px
      const opacity = Math.round((0.06 + Math.random() * 0.16) * 100) / 100; // slightly lower
      return { id: i, left, delay, duration, size, opacity };
    });
  }, []);

  function handleOpen() {
    // play envelope open animation, then show invitation
    setOpening(true);
    setTimeout(() => {
      setIsOpen(true);
      setOpening(false);
    }, 700);
  }

  return (
    <main className="page-shell">
      {!isOpen ? (
        <section className="welcome-screen">
          <div className="welcome-overlay" />

          <div className="welcome-content">
            <div className="welcome-card">
              <div className="eyebrow-row">
                <span className="line left" />
                <span className="eyebrow">✨ ✨</span>
                <span className="line right" />
              </div>
              <h1>Arvinth & Mohanapriya</h1>
              <p style={{ color: '#edb781' }}>13 & 15 December 2026</p>
            </div>

            <div className={`envelope ${opening ? 'opening' : ''}`}>
              <div className="envelope-body">
                <div className="envelope-flap" />
                <div className="envelope-inner">
                  <button className="open-sticker" onClick={handleOpen}>
                    Open
                  </button>
                </div>
              </div>
              <div className="envelope-shadow" />
            </div>

            {/* sparkles are rendered globally (moved to end of main) */}
          </div>
        </section>
      ) : (
        <div className="invite-stack">
          <section className="story-section wedding-card">
            <div className="section-header">
              <span className="tag">முகூர்த்தம்</span>
              <h2>{weddingDetails.title}</h2>
            </div>

            <div className="info-card">
              <p className="date">{weddingDetails.date}</p>
              <h3>{weddingDetails.venue}</h3>
              <p className="time">{weddingDetails.time}</p>
              <p className="address">{weddingDetails.address}</p>
              <p className="description">{weddingDetails.description}</p>
            </div>

            <div className="map-card">
              <div className="map-glow" />
              <div className="map-details">
                <span>Location</span>
                <strong>{weddingDetails.venue}</strong>
              </div>
              <a href={weddingDetails.mapUrl} target="_blank" rel="noreferrer">
                Open Map
              </a>
            </div>

            <div className="swipe-hint">Swipe up for the reception</div>
          </section>

          <section className="story-section reception-card">
            <div className="section-header">
              <span className="tag">வரவேற்பு</span>
              <h2>{receptionDetails.title}</h2>
            </div>

            <div className="info-card">
              <p className="date">{receptionDetails.date}</p>
              <h3>{receptionDetails.venue}</h3>
              <p className="time">{receptionDetails.time}</p>
              <p className="address">{receptionDetails.address}</p>
              <p className="description">{receptionDetails.description}</p>
            </div>

            <div className="map-card">
              <div className="map-glow" />
              <div className="map-details">
                <span>Location</span>
                <strong>{receptionDetails.venue}</strong>
              </div>
              <a href={receptionDetails.mapUrl} target="_blank" rel="noreferrer">
                Open Map
              </a>
            </div>

            <div className="countdown-section">
              <h3 className="countdown-title">Days Until the Muhurtham</h3>
              <div className="countdown-grid">
                <div className="countdown-item">
                  <div className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</div>
                  <div className="countdown-label">Days</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="countdown-label">Hours</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="countdown-label">Minutes</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="countdown-label">Seconds</div>
                </div>
              </div>
            </div>

            

            <div className="thank-you-section">
              {/* <h3 className="thank-you-heading">A Final Thank You</h3> */}
              <p className="thank-you-message">Your presence means the world to us,</p>
              <p className="thank-you-message">Thank you for being part of our journey.</p>
              <div className="final-note">
              <p> <br></br>With love,</p>
              <h3>Arvinth & Mohanapriya</h3>
            </div>
            </div>
          </section>
        </div>
      )}
      {/* global sparkles so they animate on all pages */}
      <div className="sparkles" aria-hidden>
        {sparkles.map((s) => (
          <span
            key={s.id}
            className="sparkle"
            style={{
              left: `${s.left}%`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              fontSize: `${s.size}px`,
              opacity: s.opacity,
            }}
          >
            ✦
          </span>
        ))}
      </div>
    </main>
  );
}
