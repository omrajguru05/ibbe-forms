'use client';

import React from 'react';
import Link from 'next/link';

export default function SuccessPage() {
    const copyLink = () => {
        navigator.clipboard.writeText(window.location.origin + '/form/startup');
        alert('Link copied to clipboard!');
    };

    return (
        <>
            <style jsx global>{`
        /* --- IBBE SYSTEM v4.5: CELEBRATION --- */
        :root {
          --cream: #F7F2E9;
          --bone: #FFF9F0;
          --charcoal: #1D1D1F;
          --gray: #8E8E93;
          --line: #E8E2D8;
          
          /* Party Colors */
          --pop-green: #39FF14;
          --pop-yellow: #FFE600;
          --pop-pink: #FF0099;
          --pop-blue: #2962FF;
          
          /* Physics */
          --border-thick: 3px solid var(--charcoal);
          --shadow-deep: 12px 12px 0px var(--charcoal);
          --shadow-btn: 6px 6px 0px var(--charcoal);
          
          --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        /* BASE */
        body {
          margin: 0;
          background-color: var(--cream);
          /* Confetti Texture Background */
          background-image: radial-gradient(var(--line) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          font-family: 'Inter', sans-serif;
          color: var(--charcoal);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* --- CENTER STAGE --- */
        .stage {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
        }

        /* THE TICKET CARD */
        .ticket-container {
          width: 480px;
          background: var(--bone);
          border: var(--border-thick);
          border-radius: 24px;
          box-shadow: var(--shadow-deep);
          position: relative;
          z-index: 10;
          transform: rotate(-2deg);
          animation: float 6s ease-in-out infinite;
        }
        
        /* Top Section (Success) */
        .ticket-top {
          padding: 48px 40px 32px;
          text-align: center;
          border-bottom: 3px dashed var(--charcoal);
          position: relative;
        }
        
        /* Punch holes for ticket effect */
        .ticket-top::before, .ticket-top::after {
          content: '';
          position: absolute;
          bottom: -15px;
          width: 30px; height: 30px;
          background: var(--cream); /* Matches background to look like a hole */
          border: var(--border-thick);
          border-radius: 50%;
          z-index: 20;
        }
        .ticket-top::before { left: -18px; border-right-color: transparent; border-top-color: transparent; border-bottom-color: transparent; transform: rotate(-45deg); }
        .ticket-top::after { right: -18px; border-left-color: transparent; border-top-color: transparent; border-bottom-color: transparent; transform: rotate(45deg); }

        /* Icon Circle */
        .success-icon {
          width: 80px; height: 80px;
          background: var(--pop-green);
          border: var(--border-thick);
          border-radius: 50%;
          margin: 0 auto 24px;
          display: flex; align-items: center; justify-content: center;
          font-size: 40px;
          box-shadow: 4px 4px 0px rgba(0,0,0,0.1);
          animation: pop 0.6s var(--ease-bounce);
        }

        h1 {
          font-size: 36px;
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 16px;
          letter-spacing: -1px;
        }
        p {
          font-size: 16px;
          line-height: 1.5;
          color: #555;
          margin: 0;
        }

        /* Bottom Section (Actions) */
        .ticket-bottom {
          padding: 32px 40px 40px;
          text-align: center;
          background: #fff; /* Slightly lighter for contrast */
          border-radius: 0 0 24px 24px;
        }

        /* Buttons */
        .btn-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .btn-primary {
          background: var(--charcoal);
          color: var(--bone);
          font-family: 'JetBrains Mono';
          font-weight: 700;
          font-size: 16px;
          padding: 18px;
          width: 100%;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: var(--shadow-btn);
          transition: 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          text-decoration: none;
          text-align: center;
        }
        .btn-primary:hover {
          transform: translate(-2px, -2px);
          box-shadow: 8px 8px 0px var(--charcoal);
          background: var(--pop-blue);
        }
        
        .btn-outline {
          background: transparent;
          color: var(--charcoal);
          font-family: 'JetBrains Mono';
          font-weight: 700;
          font-size: 14px;
          padding: 16px;
          width: 100%;
          border: 2px solid var(--charcoal);
          border-radius: 12px;
          cursor: pointer;
          transition: 0.2s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .btn-outline:hover {
          background: var(--bone);
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0px var(--charcoal);
        }

        /* STICKER DECORATION */
        .sticker {
          position: absolute;
          top: -20px; right: -20px;
          background: var(--pop-yellow);
          color: var(--charcoal);
          padding: 8px 16px;
          font-family: 'JetBrains Mono';
          font-weight: 800;
          font-size: 12px;
          border: var(--border-thick);
          transform: rotate(15deg);
          box-shadow: 4px 4px 0px rgba(0,0,0,0.1);
          z-index: 30;
        }

        /* ANIMATIONS */
        @keyframes float {
          0%, 100% { transform: rotate(-2deg) translateY(0px); }
          50% { transform: rotate(-1deg) translateY(-10px); }
        }
        @keyframes pop {
          0% { transform: scale(0); }
          80% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        /* FLOATING CONFETTI (CSS ONLY) */
        .confetti {
          position: absolute;
          width: 12px; height: 12px;
          background: var(--pop-pink);
          border: 2px solid var(--charcoal);
        }
        .c1 { top: 20%; left: 20%; transform: rotate(10deg); background: var(--pop-blue); }
        .c2 { top: 30%; right: 15%; transform: rotate(-20deg); background: var(--pop-yellow); border-radius: 50%; }
        .c3 { bottom: 25%; left: 10%; transform: rotate(45deg); background: var(--pop-green); width: 20px; height: 8px; }
        .c4 { top: 15%; right: 35%; transform: rotate(-15deg); background: var(--charcoal); }

        /* RESPONSIVE */
        @media (max-width: 600px) {
          .ticket-container { width: 90%; margin: 0 20px; transform: rotate(0deg); animation: none; }
          .ticket-top::before, .ticket-top::after { display: none; } /* Hide complicated punch holes on mobile */
        }
      `}</style>

            {/* CENTER STAGE */}
            <div className="stage">

                {/* Decor Confetti */}
                <div className="confetti c1"></div>
                <div className="confetti c2"></div>
                <div className="confetti c3"></div>
                <div className="confetti c4"></div>

                {/* MAIN TICKET */}
                <div className="ticket-container">
                    <div className="sticker">NICE JOB!</div>

                    <div className="ticket-top">
                        <div className="success-icon">🚀</div>
                        <h1>Application Sent!</h1>
                        <p>
                            Thanks for applying. We've received your profile and our robots are already analyzing it.
                            <br /><br />
                            <span style={{ fontSize: '13px', fontFamily: "'JetBrains Mono'", color: 'var(--gray)' }}>ETA: 48 HOURS</span>
                        </p>
                    </div>

                    <div className="ticket-bottom">
                        <div className="btn-group">
                            <Link href="/form/startup" className="btn-primary">
                                SUBMIT ANOTHER
                            </Link>

                            <button className="btn-outline" onClick={copyLink}>
                                <span>🔗</span> COPY LINK
                            </button>
                        </div>

                        <div style={{ marginTop: '24px', fontSize: '12px', color: 'var(--gray)' }}>
                            <Link href="/" style={{ textDecoration: 'underline', color: 'inherit' }}>Back to Homepage</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
