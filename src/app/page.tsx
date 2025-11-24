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
          <h1>Surveys that actually feel human.</h1>
          <p>
            Stop sending boring forms. <strong>ibbe flow</strong> turns questions into conversations. Keyboard-first, tactile, and designed to keep people awake.
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

        {/* 3. FEATURES */}
        <section className="features-grid">
          <div className="feature-card">
            <div style={{ fontSize: "32px", marginBottom: "16px" }}>⚡️</div>
            <h3 style={{ fontWeight: 800, marginBottom: "12px" }}>Keyboard First</h3>
            <p style={{ fontSize: "15px", margin: 0, color: "#555" }}>Navigate entire flows without touching your mouse. Speed is a feature.</p>
          </div>
          <div className="feature-card">
            <div style={{ fontSize: "32px", marginBottom: "16px" }}>🎨</div>
            <h3 style={{ fontWeight: 800, marginBottom: "12px" }}>Brutalist Design</h3>
            <p style={{ fontSize: "15px", margin: 0, color: "#555" }}>Thick borders, high contrast, no fluff. We make data look good.</p>
          </div>
          <div className="feature-card">
            <div style={{ fontSize: "32px", marginBottom: "16px" }}>📊</div>
            <h3 style={{ fontWeight: 800, marginBottom: "12px" }}>Real Analytics</h3>
            <p style={{ fontSize: "15px", margin: 0, color: "#555" }}>Track drop-offs instantly. Find out exactly where you lost them.</p>
          </div>
        </section>

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
