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

          <div className="folder-card">
            {/* The Tab attached to top */}
            <div className="folder-tab">
              LIVE DEMO
            </div>

            <div className="card-body">
              <div className="card-header">
                <span style={{ fontFamily: "'JetBrains Mono'", color: "var(--gray)", fontSize: "12px" }}>01 / 03</span>
                <span className="required-tag">REQUIRED *</span>
              </div>

              <div className="survey-q">
                What’s the most annoying thing about surveys?
              </div>

              <div className="option">
                <span className="key-hint">A</span>
                <span>They are too long.</span>
              </div>

              <div className="option active">
                <span className="key-hint" style={{ background: "var(--blue)" }}>B</span>
                <span>They look boring.</span>
              </div>

              <div className="option">
                <span className="key-hint">C</span>
                <span>I never finish them.</span>
              </div>

              <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontFamily: "'JetBrains Mono'", fontSize: "11px", color: "var(--gray)" }}>PRESS ↵ TO CONTINUE</div>
              </div>
            </div>
          </div>

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
