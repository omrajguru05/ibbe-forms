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

        {/* Right: REDESIGNED CARD */}
        <section className="visual-section">

          <a href="/form/startup" style={{ textDecoration: 'none', display: 'block', width: '100%', maxWidth: '460px' }}>
            <div className="folder-card">
              {/* The Tab attached to top */}
              <div className="folder-tab" style={{ background: 'var(--charcoal)', color: 'var(--bone)', borderColor: 'var(--charcoal)' }}>
                CONFIDENTIAL
              </div>

              <div className="card-body" style={{ background: 'var(--bone)', border: '3px solid var(--charcoal)', borderRadius: '16px', borderTopRightRadius: '0', position: 'relative', overflow: 'hidden' }}>

                {/* Stamp */}
                <div style={{
                  position: 'absolute', top: '20px', right: '20px',
                  border: '3px solid var(--red)', color: 'var(--red)',
                  padding: '4px 12px', fontFamily: "'JetBrains Mono'", fontWeight: 800,
                  fontSize: '14px', transform: 'rotate(-15deg)', opacity: 0.8,
                  maskImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC')"
                }}>
                  OPEN ACCESS
                </div>

                <div className="card-header">
                  <span style={{ fontFamily: "'JetBrains Mono'", color: "var(--gray)", fontSize: "12px" }}>BATCH '26</span>
                  <span className="required-tag" style={{ color: 'var(--charcoal)' }}>PRIORITY: HIGH</span>
                </div>

                <div className="survey-q" style={{ fontSize: '28px', marginBottom: '16px' }}>
                  Startup Interest & Profile
                </div>

                <p style={{ fontSize: '15px', lineHeight: '1.5', color: '#555', marginBottom: '32px' }}>
                  Primary intake form for the upcoming cohort. Collecting demographics, pitch decks, and psychometrics.
                </p>

                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'var(--charcoal)', color: 'var(--bone)', padding: '16px 24px',
                  borderRadius: '12px', fontWeight: 700
                }}>
                  <span>BEGIN TRANSMISSION</span>
                  <span>→</span>
                </div>

              </div>
            </div>
          </a>

          {/* Background accent to give depth */}
          <div style={{ position: "absolute", top: "20px", right: "-20px", width: "100%", height: "100%", background: "var(--line)", borderRadius: "16px", zIndex: -1, transform: "rotate(3deg)" }}></div>

        </section>

        {/* 2.5 LIVE FORMS SECTION */}
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
              (Yes, we're accepting responses. Shocking, we know.)
            </p>
          </div>

          <div style={{
            width: '100%',
            maxWidth: '900px'
          }}>

            {/* Startup Interest Form - Larger Card */}
            <a href="/form/startup" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                background: 'var(--charcoal)',
                color: 'var(--bone)',
                borderRadius: '24px',
                padding: '48px',
                position: 'relative',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '3px solid var(--charcoal)'
              }}
                className="live-form-card">

                {/* Live Badge */}
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'var(--neon-green)',
                  color: 'var(--charcoal)',
                  padding: '6px 16px',
                  borderRadius: '8px',
                  fontFamily: "'JetBrains Mono'",
                  fontSize: '12px',
                  fontWeight: 800,
                  border: '2px solid var(--charcoal)'
                }}>
                  LIVE
                </div>

                <div style={{
                  fontFamily: "'JetBrains Mono'",
                  fontSize: '13px',
                  color: 'var(--neon-green)',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Editor's Pick
                </div>

                <h3 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.1' }}>
                  Startup Interest & Profile
                </h3>
                <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: '1.6', marginBottom: '32px' }}>
                  We explore if your startup idea is genius or just another "Uber for X." Primary intake for batch '26. Bring your pitch deck and your courage.
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'JetBrains Mono'", fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
                    BY IBBE TEAM
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono'", fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
                    5 MIN READ
                  </span>
                </div>
              </div>
            </a>

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
