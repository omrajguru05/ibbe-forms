'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-body">
      <style jsx global>{`
        /* --- IBBE SYSTEM v4.7: FIDGET MODE --- */
        :root {
          --cream: #F7F2E9;
          --bone: #FFF9F0;
          --charcoal: #1D1D1F;
          --gray: #8E8E93;
          --line: #E8E2D8;
          
          /* Fidget Colors */
          --toy-red: #FF453A;
          --toy-blue: #2962FF;
          --toy-yellow: #FFD60A;
          --toy-green: #39FF14;
          
          /* Physics */
          --border-thick: 3px solid var(--charcoal);
          --shadow-hard: 8px 8px 0px var(--charcoal);
          --shadow-btn: 4px 4px 0px var(--charcoal);
          
          --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* BASE */
        .not-found-body {
          margin: 0;
          background-color: var(--cream);
          /* Blueprint grid background */
          background-image: linear-gradient(var(--line) 1px, transparent 1px),
                            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 40px 40px;
          font-family: 'Inter', sans-serif;
          color: var(--charcoal);
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* --- PLAY AREA --- */
        .play-area {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* MAIN CARD */
        .error-card {
          background: var(--bone);
          border: var(--border-thick);
          border-radius: 24px;
          box-shadow: var(--shadow-hard);
          padding: 48px;
          text-align: center;
          max-width: 500px;
          position: relative;
          z-index: 10;
        }

        h1 {
          font-size: 80px;
          font-weight: 800;
          margin: 0;
          line-height: 1;
          letter-spacing: -4px;
          /* Glitch text effect */
          text-shadow: 4px 4px 0px var(--line);
        }

        p { font-size: 18px; font-weight: 500; margin: 16px 0 32px; color: #555; }

        /* --- FIDGET ELEMENTS --- */
        
        /* 1. Toggle Switches */
        .switch-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .toggle-box {
          width: 60px; height: 80px;
          background: #ddd;
          border: 2px solid var(--charcoal);
          border-radius: 8px;
          position: relative;
          cursor: pointer;
        }
        .toggle-lever {
          width: 100%; height: 50%;
          background: white;
          border-bottom: 2px solid var(--charcoal);
          border-radius: 6px 6px 0 0;
          transition: 0.1s var(--ease-spring);
        }
        /* Active State (CSS Hack for interaction) */
        .toggle-box:active .toggle-lever { height: 20%; background: var(--toy-green); }
        
        /* 2. Push Buttons */
        .big-red-btn {
          width: 80px; height: 80px;
          background: var(--toy-red);
          border: 3px solid var(--charcoal);
          border-radius: 50%;
          box-shadow: 0px 6px 0px #990000, 0px 6px 0px var(--charcoal);
          cursor: pointer;
          margin: 0 auto 32px;
          transition: 0.1s;
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 12px; color: rgba(0,0,0,0.3);
        }
        .big-red-btn:active {
          transform: translateY(6px);
          box-shadow: 0px 0px 0px #990000, 0px 0px 0px var(--charcoal);
        }

        /* 3. Draggable Sticker */
        .sticker {
          position: absolute;
          top: -20px; right: -30px;
          background: var(--toy-yellow);
          color: var(--charcoal);
          padding: 12px 16px;
          font-family: 'JetBrains Mono'; font-weight: 800; font-size: 14px;
          transform: rotate(12deg);
          border: var(--border-thick);
          cursor: grab;
          box-shadow: 4px 4px 0px rgba(0,0,0,0.1);
        }
        .sticker:active { cursor: grabbing; transform: rotate(0deg) scale(1.1); }

        /* ACTION BUTTON */
        .home-btn {
          background: var(--charcoal);
          color: var(--bone);
          font-family: 'JetBrains Mono'; font-weight: 700;
          padding: 16px 32px;
          border-radius: 12px;
          text-decoration: none;
          display: inline-block;
          box-shadow: var(--shadow-btn);
          transition: 0.2s;
        }
        .home-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px var(--charcoal);
          background: var(--toy-blue);
        }

        /* --- FLOATING JUNK (Decor) --- */
        .junk {
          position: absolute;
          font-size: 40px;
          opacity: 0.5;
          animation: float 6s ease-in-out infinite;
          cursor: pointer;
        }
        .junk:hover { opacity: 1; transform: scale(1.2); }
        
        .j1 { top: 20%; left: 15%; animation-delay: 0s; }
        .j2 { bottom: 20%; right: 15%; animation-delay: 1s; font-size: 60px; }
        .j3 { top: 15%; right: 25%; animation-delay: 2s; font-size: 30px; transform: rotate(45deg); }

        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        /* RESPONSIVE */
        @media (max-width: 600px) {
          .error-card { width: 90%; padding: 32px 20px; }
          h1 { font-size: 60px; }
          .junk { display: none; }
        }
      `}</style>

      {/* PLAY AREA */}
      <div className="play-area">

        {/* Background Junk */}
        <div className="junk j1">📎</div>
        <div className="junk j2">🗑️</div>
        <div className="junk j3">🍌</div>

        <div className="error-card">
          {/* Draggable-ish sticker */}
          <div className="sticker">UH OH.</div>

          <h1>404</h1>
          <p>You went off the map. While you're here, feel free to touch things.</p>

          {/* Fidget Switches */}
          <div className="switch-row">
            <div className="toggle-box" title="Click me!"><div className="toggle-lever"></div></div>
            <div className="toggle-box" title="Click me!"><div className="toggle-lever"></div></div>
            <div className="toggle-box" title="Click me!"><div className="toggle-lever"></div></div>
          </div>

          {/* Panic Button */}
          <div style={{ fontFamily: "'JetBrains Mono'", fontSize: '10px', marginBottom: '8px', color: 'var(--gray)' }}>DO NOT PRESS</div>
          <div className="big-red-btn">RESET</div>

          <Link href="/" className="home-btn">GO HOME →</Link>
        </div>

      </div>
    </div>
  );
}
