'use client';

import React from 'react';

export default function Home() {
  return (
    <>
      {/* 1. NAV (Moved to Layout) */}


      {/* 2. MAIN */}
      <main className="container">

        {/* Left: Copy */}
        <section className="hero-section">
          <span className="badge">SYSTEM: ONLINE</span>
          <h1>Research that feels truly human.</h1>
          <p>
            Experience a refreshing way to contribute. Join active studies published directly by the team. We transform questions into fluid conversations. Immersive, meaningful, and designed to keep every participant fully engaged.
          </p>

          <div className="cta-group">
            <a href="https://ibbe.in" className="btn">JOIN WAITLIST →</a>
            <a href="https://journal.ibbe.in" className="btn btn-secondary">READ JOURNAL</a>
          </div>
        </section>

        {/* Right: INTERACTIVE FORTUNE CARD */}
        <section className="visual-section">

          <div style={{ textDecoration: 'none', display: 'block', width: '100%', maxWidth: '460px' }}>
            <div className="folder-card">
              {/* The Tab attached to top */}
              <div className="folder-tab" style={{ background: 'var(--neon-green)', color: 'var(--charcoal)', borderColor: 'var(--charcoal)' }}>
                VERY SCIENTIFIC
              </div>

              <div className="card-body" style={{ background: 'var(--bone)', border: '3px solid var(--charcoal)', borderRadius: '16px', borderTopRightRadius: '0', position: 'relative', overflow: 'hidden' }}>

                {/* Stamp */}
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  border: '3px solid var(--blue)', color: 'var(--blue)',
                  padding: '4px 12px', fontFamily: "'JetBrains Mono'", fontWeight: 800,
                  fontSize: '12px', transform: 'rotate(-15deg)', opacity: 0.8,
                  maskImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC')",
                  whiteSpace: 'nowrap',
                  zIndex: 10
                }}>
                  100% ACCURATE
                </div>

                <div className="card-header" style={{ marginBottom: '32px' }}>
                  <span style={{ fontFamily: "'JetBrains Mono'", color: "var(--gray)", fontSize: "12px" }}>CERTIFIED ORACLE</span>
                  <span className="required-tag" style={{ color: 'var(--charcoal)', fontSize: '11px' }}>DESTINY: PENDING</span>
                </div>

                <div className="survey-q" style={{ fontSize: '28px', marginBottom: '16px' }}>
                  Fortune Cookie Generator
                </div>

                <p style={{ fontSize: '15px', lineHeight: '1.5', color: '#555', marginBottom: '32px' }}>
                  Since our forms are on vacation, here's something equally useless but way more fun. Click for your totally real fortune.
                </p>

                <button onClick={() => {
                  const fortunes = [
                    "You will receive a form. Eventually. Maybe.",
                    "Your startup idea is actually just TaskRabbit for cats.",
                    "A Redis cache misses you. You should call.",
                    "You will find true happiness in a 404 error page.",
                    "The forms will return...when the prophecy is fulfilled.",
                    "Your next bug will be caused by a missing semicolon from 2019.",
                    "A server somewhere is thinking about you right now.",
                    "You will accidentally push to main. Today.",
                    "The real treasure was the merge conflicts we made along the way.",
                    "Your code works, but nobody knows why. Including you."
                  ];
                  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
                  const el = document.getElementById('fortune-text');
                  if (el) {
                    el.style.opacity = '0';
                    setTimeout(() => {
                      el.textContent = fortune;
                      el.style.opacity = '1';
                    }, 150);
                  }
                }} style={{
                  width: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'var(--charcoal)', color: 'var(--bone)', padding: '16px 24px',
                  borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s'
                }}>
                  <span>REVEAL DESTINY</span>
                  <span>🥠</span>
                </button>

                <div id="fortune-text" style={{
                  marginTop: '24px',
                  fontFamily: "'JetBrains Mono'",
                  fontSize: '14px',
                  color: 'var(--charcoal)',
                  background: 'var(--cream)',
                  padding: '16px',
                  borderRadius: '8px',
                  minHeight: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transition: 'opacity 0.3s',
                  border: '2px solid var(--line)'
                }}>
                  Click above to receive your fortune...
                </div>

              </div>
            </div>
          </div>

          {/* Background accent to give depth */}
          <div style={{ position: "absolute", top: "20px", right: "-20px", width: "100%", height: "100%", background: "var(--line)", borderRadius: "16px", zIndex: -1, transform: "rotate(3deg)" }}></div>

        </section>

        {/* 2.5 LIVE FORMS SECTION - EMPTY STATE */}
        <section style={{
          gridColumn: 'span 12',
          marginTop: '80px',
          marginBottom: '80px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-2px' }}>
              Forms That Are Actually Live Right Now
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '17px', fontFamily: "'JetBrains Mono'" }}>
              (Narrator: There were none.)
            </p>
          </div>

          <div style={{
            width: '100%',
            maxWidth: '900px',
            background: 'var(--bone)',
            border: '3px solid var(--charcoal)',
            borderRadius: '24px',
            padding: '48px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '72px', marginBottom: '24px' }}>🦗</div>
            <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.2' }}>
              The Great Form Shortage of 2024
            </h3>
            <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6', marginBottom: '24px', maxWidth: '700px', margin: '0 auto 24px' }}>
              Our last form escaped during a routine server migration. We found it three weeks later living in a Redis cache, refusing to come out. It had made friends with some orphaned API keys and started a small commune.
            </p>
            <p style={{ fontSize: '16px', color: '#777', lineHeight: '1.6', marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px' }}>
              We tried to lure it back with promises of "better validation" and "improved UX," but it just laughed and said it had found true happiness among the abandoned cookies. The other forms heard about this and staged a mass exodus. They're currently backpacking through various CDNs, "finding themselves."
            </p>
            <div style={{
              fontFamily: "'JetBrains Mono'",
              fontSize: '14px',
              color: 'var(--charcoal)',
              background: 'var(--cream)',
              padding: '16px',
              borderRadius: '12px',
              border: '2px solid var(--line)'
            }}>
              💡 <strong>Status Update:</strong> Our recovery team (two interns and a chatbot) is currently negotiating with the forms. They're demanding better work-life balance and weekends off. We're considering their terms.
            </div>
          </div>
        </section>

        {/* 3. FEATURES - REMOVED */}

        {/* 4. FOOTER */}
        <footer className="footer">
          <div>
            <span style={{ fontWeight: 800, fontSize: "20px" }}>ibbe.</span>
            <br />
            <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "12px", color: "var(--gray)" }}>© 2025 IBBE INC.</span>
          </div>
          <div>
            <a href="https://journal.ibbe.in" className="footer-link">JOURNAL</a>
            <a href="https://ibbe.in" className="footer-link">IBBE.IN</a>
            <a href="#" className="footer-link">TWITTER</a>
          </div>
        </footer>

      </main>
    </>
  );
}
