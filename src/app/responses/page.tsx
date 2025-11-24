'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase/client';

export default function ResponsesPage() {
  const [responses, setResponses] = useState<any[]>([]);
  const [selectedResponse, setSelectedResponse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResponses();
  }, []);

  const fetchResponses = async () => {
    try {
      const { data, error } = await supabase
        .from('startup_responses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setResponses(data || []);
      if (data && data.length > 0) {
        setSelectedResponse(data[0]);
      }
    } catch (err) {
      console.error('Error fetching responses:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <>
      <style jsx global>{`
        /* --- IBBE SYSTEM v4.4: DATA COMMAND --- */
        :root {
          --cream: #F7F2E9;
          --bone: #FFF9F0;
          --charcoal: #1D1D1F;
          --gray: #8E8E93;
          --line: #E8E2D8;
          
          /* Data Colors */
          --data-green: #39FF14;
          --data-yellow: #FFE600;
          --data-red: #FF453A;
          --data-blue: #2962FF;
          --data-purple: #D946EF;
          
          /* Physics */
          --border-thick: 3px solid var(--charcoal);
          --border-thin: 1px solid var(--charcoal); /* Thinner but stark */
          --shadow-card: 8px 8px 0px var(--charcoal);
          --radius: 16px;
        }

        /* BASE */
        body {
          margin: 0;
          background-color: var(--cream);
          background-image: radial-gradient(var(--line) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          font-family: 'Inter', sans-serif;
          color: var(--charcoal);
          min-height: 100vh;
        }

        /* --- 2. SIDEBAR --- */
        .sidebar {
          position: fixed;
          left: 24px; top: 50%; transform: translateY(-40%);
          width: 72px;
          background: var(--charcoal);
          border-radius: 24px;
          padding: 32px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          box-shadow: var(--shadow-card);
          z-index: 900;
        }
        .dock-item {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; color: rgba(255,255,255,0.4);
          cursor: pointer; transition: 0.2s;
          text-decoration: none;
        }
        .dock-item:hover { color: white; background: rgba(255,255,255,0.1); }
        .dock-item.active { 
          background: var(--bone); color: var(--charcoal); 
          transform: scale(1.1); border: 2px solid var(--charcoal);
        }
        .avatar-circle {
          margin-top:auto; width:36px; height:36px; 
          background:var(--data-yellow); border-radius:50%; border:2px solid white;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 12px; color: var(--charcoal);
        }

        /* --- 3. MAIN CONTENT --- */
        .main-content {
          margin-left: 120px;
          padding: 40px 60px;
          max-width: 1600px;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        /* HEADER FULL WIDTH */
        .dashboard-header {
          grid-column: span 2;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 20px;
          border-bottom: 3px dashed var(--charcoal);
          padding-bottom: 20px;
        }
        h1 { font-size: 42px; font-weight: 800; margin: 0; letter-spacing: -1.5px; }
        
        .action-btn {
          background: var(--bone);
          border: var(--border-thick);
          padding: 12px 24px;
          font-family: 'JetBrains Mono'; font-weight: 700; font-size: 12px;
          cursor: pointer;
          box-shadow: 4px 4px 0px var(--charcoal);
          transition: 0.1s;
        }
        .action-btn:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0px var(--charcoal); }
        .action-btn:active { transform: translate(2px,2px); box-shadow: 0px 0px 0px; }

        /* --- LEFT COLUMN: ANALYTICS & LIST --- */
        .left-col { display: flex; flex-direction: column; gap: 40px; }

        /* METRICS ROW */
        .metrics-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 24px;
        }
        .metric-card {
          background: var(--charcoal);
          color: var(--bone);
          padding: 24px;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }
        .metric-lbl { font-family: 'JetBrains Mono'; font-size: 11px; opacity: 0.7; margin-bottom: 8px; }
        .metric-val { font-size: 48px; font-weight: 800; line-height: 1; }
        
        /* Big Graph Card */
        .graph-card {
          background: var(--bone);
          border: var(--border-thick);
          border-radius: 16px;
          padding: 32px;
          box-shadow: var(--shadow-card);
        }
        .card-title { font-weight: 800; font-size: 20px; margin-bottom: 24px; display: flex; justify-content: space-between; }
        
        /* TAPE CHARTS (CSS Bars) */
        .chart-container {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 200px;
          padding-top: 20px;
          border-bottom: 2px solid var(--charcoal);
        }
        .bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          width: 10%;
        }
        .bar {
          width: 100%;
          background: var(--data-blue);
          border: 2px solid var(--charcoal);
          border-radius: 4px;
          position: relative;
          transition: height 0.5s ease;
        }
        .bar::after {
          /* Tape effect at top */
          content: ''; position: absolute; top: -4px; left: -4px; right: -4px; height: 8px;
          background: rgba(255,255,255,0.3); transform: rotate(-2deg);
        }
        .x-label { font-family: 'JetBrains Mono'; font-size: 11px; }

        /* LEDGER TABLE */
        .ledger-container {
          background: white;
          border: var(--border-thick);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }
        .ledger-header {
          background: var(--charcoal);
          color: var(--bone);
          padding: 16px 24px;
          font-family: 'JetBrains Mono'; font-size: 12px;
          display: grid; grid-template-columns: 0.5fr 2fr 2fr 1fr;
        }
        .ledger-row {
          padding: 16px 24px;
          display: grid; grid-template-columns: 0.5fr 2fr 2fr 1fr;
          border-bottom: 1px solid var(--line);
          font-family: 'JetBrains Mono'; font-size: 13px;
          align-items: center;
          cursor: pointer;
          transition: 0.1s;
        }
        .ledger-row:hover, .ledger-row.active { background: var(--data-yellow); color: var(--charcoal); font-weight: 700; }
        .ledger-row:last-child { border-bottom: none; }
        
        .tag { 
          display: inline-block; padding: 4px 8px; border-radius: 4px; 
          font-size: 10px; font-weight: 700; border: 1px solid var(--charcoal);
        }

        /* --- RIGHT COLUMN: INDIVIDUAL RECEIPT --- */
        .right-col {
          position: sticky; top: 100px;
          height: fit-content;
        }
        
        /* The "Receipt" Card */
        .receipt-card {
          background: white;
          padding: 0;
          filter: drop-shadow(8px 8px 0px rgba(0,0,0,0.2));
          position: relative;
        }
        /* Zigzag Top/Bottom via CSS Gradient */
        .receipt-edge {
          height: 12px;
          background: linear-gradient(45deg, transparent 33.333%, white 33.333%, white 66.667%, transparent 66.667%), 
                      linear-gradient(-45deg, transparent 33.333%, white 33.333%, white 66.667%, transparent 66.667%);
          background-size: 12px 24px;
        }
        .receipt-body {
          background: white;
          padding: 24px 32px;
          font-family: 'JetBrains Mono';
          font-size: 13px;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
        }
        
        .receipt-header {
          text-align: center;
          border-bottom: 2px dashed var(--charcoal);
          padding-bottom: 16px;
          margin-bottom: 24px;
        }
        .r-row { margin-bottom: 20px; }
        .r-label { color: var(--gray); font-size: 10px; text-transform: uppercase; margin-bottom: 4px; }
        .r-val { font-size: 14px; font-weight: 600; line-height: 1.4; }

        .stamp-approved {
          border: 3px solid var(--data-green);
          color: var(--data-green);
          display: inline-block;
          padding: 8px 16px;
          font-weight: 800;
          font-size: 16px;
          transform: rotate(-10deg);
          margin-top: 24px;
          border-radius: 4px;
        }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .main-content { grid-template-columns: 1fr; padding: 24px; margin-left: 0; }
          .sidebar { display: none; }
          .metrics-row { grid-template-columns: 1fr; }
          .right-col { display: none; } /* Hide receipt on mobile for simplicity */
        }

        @media (max-width: 600px) {
          .ledger-header, .ledger-row {
            grid-template-columns: 0.5fr 2fr 1fr !important;
            padding: 12px 16px;
            font-size: 11px;
          }
          /* Hide Email Column (3rd child) */
          .ledger-header span:nth-child(3),
          .ledger-row span:nth-child(3) {
            display: none;
          }
          
          h1 { font-size: 28px; }
          .dashboard-header { flex-direction: column; align-items: flex-start; gap: 16px; }
          .action-btn { width: 100%; text-align: center; }
        }
      `}</style>

      {/* 2. SIDEBAR */}
      <nav className="sidebar">
        <a href="/dashboard" className="dock-item" style={{ textDecoration: 'none' }}>📂</a>
        <a href="/responses" className="dock-item active" style={{ textDecoration: 'none' }}>📊</a>
        <div className="dock-item">👥</div>
        <div className="dock-item">⚙️</div>
        <div className="avatar-circle">DM</div>
      </nav>

      {/* 3. MAIN */}
      <main className="main-content">

        {/* Header */}
        <header className="dashboard-header">
          <div>
            <div style={{ fontFamily: "'JetBrains Mono'", color: 'var(--gray)', fontSize: '12px', marginBottom: '8px' }}>FLOW_ID: #8291A</div>
            <h1>Startup Interest Form</h1>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="action-btn">DOWNLOAD CSV</button>
            <button className="action-btn" style={{ background: 'var(--charcoal)', color: 'white' }}>SHARE REPORT</button>
          </div>
        </header>

        {/* LEFT COLUMN */}
        <div className="left-col">

          {/* Metrics */}
          <div className="metrics-row">
            <div className="metric-card">
              <div className="metric-lbl">TOTAL RESPONSES</div>
              <div className="metric-val">{responses.length}</div>
              <div style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--data-green)' }}>+12%</div>
            </div>
            <div className="metric-card" style={{ background: 'var(--data-yellow)', color: 'var(--charcoal)' }}>
              <div className="metric-lbl" style={{ color: 'var(--charcoal)' }}>AVG. COMPLETION TIME</div>
              <div className="metric-val">4m 12s</div>
            </div>
            <div className="metric-card" style={{ background: 'var(--bone)', color: 'var(--charcoal)', border: '2px solid var(--charcoal)' }}>
              <div className="metric-lbl">CONVERSION RATE</div>
              <div className="metric-val">68.4%</div>
            </div>
          </div>

          {/* Graph */}
          <div className="graph-card">
            <div className="card-title">
              <span>Submission Velocity</span>
              <span style={{ fontSize: '12px', fontFamily: "'JetBrains Mono'", padding: '4px 8px', background: 'var(--line)', borderRadius: '4px' }}>LAST 7 DAYS</span>
            </div>

            <div className="chart-container">
              {/* Bars (Mock Data for Visuals) */}
              <div className="bar-group"><div className="bar" style={{ height: '40%' }}></div><span className="x-label">MON</span></div>
              <div className="bar-group"><div className="bar" style={{ height: '65%', background: 'var(--data-purple)' }}></div><span className="x-label">TUE</span></div>
              <div className="bar-group"><div className="bar" style={{ height: '30%' }}></div><span className="x-label">WED</span></div>
              <div className="bar-group"><div className="bar" style={{ height: '85%', background: 'var(--data-green)' }}></div><span className="x-label">THU</span></div>
              <div className="bar-group"><div className="bar" style={{ height: '55%' }}></div><span className="x-label">FRI</span></div>
              <div className="bar-group"><div className="bar" style={{ height: '90%' }}></div><span className="x-label">SAT</span></div>
              <div className="bar-group"><div className="bar" style={{ height: '20%' }}></div><span className="x-label">SUN</span></div>
            </div>
          </div>

          {/* Ledger Table */}
          <div className="ledger-container">
            <div className="ledger-header">
              <span>#</span>
              <span>NAME</span>
              <span>EMAIL</span>
              <span>STATUS</span>
            </div>

            {loading ? (
              <div style={{ padding: '24px', textAlign: 'center', fontFamily: "'JetBrains Mono'" }}>Loading data...</div>
            ) : responses.map((res, index) => (
              <div
                key={res.id}
                className={`ledger-row ${selectedResponse?.id === res.id ? 'active' : ''}`}
                onClick={() => window.location.href = `/responses/${res.id}`}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{res.full_name}</span>
                <span>{res.email}</span>
                <span className="tag" style={{ background: res.status === 'COMPLETE' ? 'var(--data-green)' : 'var(--bone)', color: res.status === 'COMPLETE' ? 'white' : 'var(--charcoal)' }}>
                  {res.status || 'COMPLETE'}
                </span>
              </div>
            ))}

            {!loading && responses.length === 0 && (
              <div style={{ padding: '24px', textAlign: 'center', fontFamily: "'JetBrains Mono'" }}>No responses yet.</div>
            )}
          </div>

        </div>

        {/* RIGHT COLUMN (Receipt) */}
        <div className="right-col">
          {selectedResponse ? (
            <>
              <div className="receipt-edge"></div>
              <div className="receipt-card">
                <div className="receipt-body">

                  <div className="receipt-header">
                    <div style={{ fontWeight: 800, fontSize: '18px' }}>RESPONSE #{String(responses.indexOf(selectedResponse) + 1).padStart(2, '0')}</div>
                    <div style={{ color: 'var(--gray)', fontSize: '10px' }}>{formatDate(selectedResponse.created_at)}</div>
                  </div>

                  <div className="r-row">
                    <div className="r-label">FULL NAME</div>
                    <div className="r-val">{selectedResponse.full_name}</div>
                  </div>

                  <div className="r-row">
                    <div className="r-label">PRIMARY FOCUS</div>
                    <div className="r-val">{selectedResponse.primary_focus || 'N/A'}</div>
                  </div>

                  <div className="r-row">
                    <div className="r-label">SKILLS</div>
                    <div className="r-val">{selectedResponse.skills?.join(', ') || 'None'}</div>
                  </div>

                  <div className="r-row">
                    <div className="r-label">BIG IDEA</div>
                    <div className="r-val">"{selectedResponse.problem_to_solve || 'No idea provided'}"</div>
                  </div>

                  <div className="r-row">
                    <div className="r-label">CONFIDENCE (1-5)</div>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} style={{ width: '12px', height: '12px', background: i <= selectedResponse.confidence_tech ? 'black' : '#ddd' }}></div>
                      ))}
                    </div>
                  </div>

                  <div className="stamp-approved">{selectedResponse.status === 'REVIEWING' ? 'PENDING' : 'QUALIFIED'}</div>

                  <div style={{ marginTop: '32px', borderTop: '2px dashed #ccc', paddingTop: '16px', textAlign: 'center', fontSize: '10px', color: '#888' }}>
                    END OF TRANSMISSION
                  </div>

                </div>
              </div>
              <div className="receipt-edge" style={{ transform: 'rotate(180deg)' }}></div>
            </>
          ) : (
            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--gray)', fontFamily: "'JetBrains Mono'" }}>
              Select a response to view details.
            </div>
          )}
        </div>

      </main>
    </>
  );
}
