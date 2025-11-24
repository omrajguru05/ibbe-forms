'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase/client';
import { useParams } from 'next/navigation';

export default function ResponseDetailPage() {
  const { id } = useParams();
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) fetchResponse();
  }, [id]);

  const fetchResponse = async () => {
    try {
      const { data, error } = await supabase
        .from('startup_responses')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setResponse(data);
    } catch (err) {
      console.error('Error fetching response:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  if (loading) return <div style={{ padding: '40px', textAlign: 'center', fontFamily: "'JetBrains Mono'" }}>Loading dossier...</div>;
  if (!response) return <div style={{ padding: '40px', textAlign: 'center', fontFamily: "'JetBrains Mono'" }}>Response not found.</div>;

  return (
    <>
      <style jsx global>{`
        /* --- IBBE SYSTEM v4.7: THE DOSSIER (FULL) --- */
        :root {
          --cream: #F7F2E9;
          --bone: #FFF9F0;
          --charcoal: #1D1D1F;
          --gray: #8E8E93;
          --line: #E8E2D8;
          
          /* Highlighter Colors */
          --high-yellow: #FFE600;
          --high-green: #39FF14;
          --high-blue: #2962FF;
          
          /* Physics */
          --border-thick: 3px solid var(--charcoal);
          --border-thin: 1px solid var(--charcoal);
          --shadow-file: 10px 10px 0px var(--charcoal);
          --radius: 12px;
        }

        /* BASE */
        body {
          margin: 0;
          background-color: var(--cream);
          background-size: 40px 40px;
          background-image:
            linear-gradient(to right, rgba(29, 29, 31, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(29, 29, 31, 0.05) 1px, transparent 1px);
          font-family: 'Inter', sans-serif;
          color: var(--charcoal);
          min-height: 100vh;
        }

        /* --- MAIN CONTAINER --- */
        .dossier-container {
          max-width: 1100px;
          margin: 60px auto;
          padding: 0 24px;
          display: block;
        }

        /* --- TOP BAR --- */
        .submission-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 32px;
          flex-wrap: wrap;
          gap: 16px;
        }
        .sub-meta { font-family: 'JetBrains Mono'; font-size: 12px; color: var(--gray); margin-bottom: 8px; }
        h1 { font-size: 32px; font-weight: 800; margin: 0; line-height: 1.1; }
        
        .status-stamp {
          border: 3px solid var(--high-green);
          color: var(--high-green);
          padding: 8px 16px;
          font-family: 'JetBrains Mono'; font-weight: 800; font-size: 14px;
          transform: rotate(-4deg);
          border-radius: 8px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* --- THE FILE FOLDER --- */
        .folder-tabs {
          display: flex;
          padding-left: 20px;
          overflow-x: auto; /* Allow scrolling on tiny screens */
        }
        .tab {
          background: var(--line);
          padding: 12px 24px;
          border: var(--border-thick);
          border-bottom: none;
          border-radius: 12px 12px 0 0;
          font-family: 'JetBrains Mono'; font-weight: 700; font-size: 12px;
          margin-right: -4px;
          cursor: pointer;
          position: relative;
          white-space: nowrap;
        }
        .tab.active {
          background: var(--bone);
          z-index: 10;
          padding-bottom: 16px;
          margin-bottom: -3px;
        }
        .tab:hover { background: white; }

        .dossier-card {
          background: var(--bone);
          border: var(--border-thick);
          border-radius: var(--radius);
          border-top-left-radius: 0;
          box-shadow: var(--shadow-file);
          min-height: 600px;
          position: relative;
          z-index: 5;
          padding: 40px;
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 60px;
        }

        /* LEFT COLUMN: SNAPSHOT */
        .profile-col {
          border-right: 2px dashed var(--charcoal);
          padding-right: 40px;
        }
        .avatar-box {
          width: 80px; height: 80px;
          background: var(--high-yellow);
          border: var(--border-thick);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; font-weight: 800;
          margin-bottom: 32px;
        }
        .p-label { font-family: 'JetBrains Mono'; font-size: 10px; color: var(--gray); text-transform: uppercase; margin-bottom: 4px; letter-spacing: 0.5px; }
        .p-val { font-weight: 700; font-size: 15px; margin-bottom: 24px; word-break: break-word; line-height: 1.4; }
        
        .score-box {
          background: var(--charcoal);
          color: var(--bone);
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          margin-top: 40px;
          box-shadow: 4px 4px 0px rgba(0,0,0,0.2);
        }
        .score-num { font-size: 32px; font-weight: 800; color: var(--high-green); line-height: 1; margin-top: 4px; }
        
        /* RIGHT COLUMN: RESPONSES */
        .responses-col {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        
        .section-title {
          font-family: 'JetBrains Mono'; font-weight: 800; font-size: 12px;
          background: var(--charcoal); color: var(--bone); display: inline-block; padding: 6px 12px;
          border-radius: 4px; margin-bottom: 24px; letter-spacing: 1px;
        }

        .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
        }

        .q-block {
          margin-bottom: 24px;
        }
        .question {
          font-size: 13px;
          color: #666;
          margin-bottom: 8px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .answer {
          font-size: 16px;
          font-weight: 500;
          line-height: 1.6;
          background: white;
          border: 1px solid var(--line);
          padding: 16px;
          border-radius: 8px;
          position: relative;
        }
        
        /* Special Answer Types */
        .answer.long-text {
          border-left: 4px solid var(--high-blue);
          white-space: pre-wrap; /* Preserve line breaks */
        }
        .answer.multi-choice {
          display: flex; gap: 8px; flex-wrap: wrap; border: none; padding: 0; background: transparent;
        }
        .pill {
          background: white; color: var(--charcoal); padding: 6px 14px; 
          border: 1px solid var(--charcoal);
          border-radius: 50px; font-size: 13px; font-weight: 600;
          box-shadow: 2px 2px 0px var(--charcoal);
        }

        .attachment-preview {
          display: flex; align-items: center; gap: 12px;
          border: 2px solid var(--charcoal);
          padding: 12px 16px; border-radius: 8px;
          background: white; cursor: pointer; width: fit-content;
          transition: 0.1s;
          text-decoration: none; color: inherit;
        }
        .attachment-preview:hover { background: var(--bone); transform: translate(-2px, -2px); box-shadow: 4px 4px 0px var(--charcoal); }

        /* Matrix Table */
        .matrix-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }
        .matrix-table td {
            padding: 12px 0;
            border-bottom: 1px solid var(--line);
        }
        .matrix-val {
            font-weight: 700;
            text-align: right;
        }

        /* --- FOOTER ACTIONS --- */
        .action-bar {
          margin-top: 40px;
          display: flex;
          justify-content: flex-end;
          gap: 16px;
        }
        .btn {
          font-family: 'JetBrains Mono'; font-weight: 700; font-size: 14px;
          padding: 14px 24px;
          border: var(--border-thick); border-radius: 8px;
          cursor: pointer; transition: 0.1s;
        }
        .btn-del { background: var(--bone); color: var(--charcoal); }
        .btn-del:hover { background: #FFEEEE; border-color: #FF453A; color: #FF453A; }
        
        .btn-main { background: var(--charcoal); color: var(--bone); box-shadow: 4px 4px 0px rgba(0,0,0,0.2); }
        .btn-main:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0px rgba(0,0,0,0.2); }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .dossier-card { grid-template-columns: 1fr; gap: 40px; padding: 24px; }
          .profile-col { 
            border-right: none; 
            border-bottom: 2px dashed var(--charcoal); 
            padding-right: 0; 
            padding-bottom: 32px; 
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 24px; 
          }
          .avatar-box { grid-column: span 2; margin-bottom: 16px; }
          .score-box { grid-column: span 2; margin-top: 0; }
          .grid-2 { grid-template-columns: 1fr; }
        }
        @media (max-width: 500px) {
            .profile-col { grid-template-columns: 1fr; gap: 16px; }
            .avatar-box, .score-box { grid-column: span 1; }
            .submission-header { flex-direction: column; align-items: flex-start; }
            .status-stamp { align-self: flex-start; transform: none; margin-top: 8px; }
        }
      `}</style>

      {/* MAIN CONTENT */}
      <div className="dossier-container">

        {/* HEADER */}
        <div className="submission-header">
          <div>
            <div className="sub-meta">SUBMITTED: {formatDate(response.created_at)}</div>
            <h1>{response.full_name}</h1>
            <div style={{ marginTop: '8px', fontFamily: "'JetBrains Mono'", fontSize: '12px', color: 'var(--gray)' }}>ID: #{response.id.slice(0, 8).toUpperCase()}</div>
          </div>
          <div className="status-stamp">{response.status || 'QUALIFIED'}</div>
        </div>

        {/* FOLDER TABS */}
        <div className="folder-tabs">
          <div className="tab active">FULL DOSSIER</div>
          <div className="tab">NOTES & COMMENTS</div>
          <div className="tab">ACTIVITY LOG</div>
        </div>

        {/* DOSSIER CARD */}
        <div className="dossier-card">

          {/* Left: Profile Snapshot */}
          <div className="profile-col">
            <div className="avatar-box">{response.full_name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()}</div>

            <div className="p-label">EMAIL ADDRESS</div>
            <div className="p-val">{response.email}</div>

            <div className="p-label">PHONE NUMBER</div>
            <div className="p-val">{response.phone || 'N/A'}</div>

            <div className="p-label">AGE</div>
            <div className="p-val">{response.age || 'N/A'}</div>

            <div className="p-label">EDUCATION</div>
            <div className="p-val">{response.education_level || 'N/A'}</div>

            <div className="p-label">LOGISTICS</div>
            <div className="p-val">
              Start: {response.start_date || 'Anytime'}<br />
              Time: {response.best_time || 'Flexible'}
            </div>

            <div className="score-box">
              <div style={{ fontFamily: "'JetBrains Mono'", fontSize: '10px', opacity: 0.7, marginBottom: '4px' }}>AUTO-SCORE</div>
              <div className="score-num">94</div>
              <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '4px' }}>OUT OF 100</div>
            </div>
          </div>

          {/* Right: Q&A Flow */}
          <div className="responses-col">

            {/* SECTION 1 */}
            <div>
              <div className="section-title">01. SKILLS & FOCUS</div>
              <div className="q-block">
                <div className="question">Primary Focus Area</div>
                <div className="answer" style={{ fontWeight: 700, fontSize: '18px' }}>{response.primary_focus || 'N/A'}</div>
              </div>

              <div className="q-block">
                <div className="question">Skills Stack</div>
                <div className="answer multi-choice">
                  {response.skills && response.skills.length > 0 ? (
                    response.skills.map((skill: string) => (
                      <span key={skill} className="pill">{skill}</span>
                    ))
                  ) : (
                    <span>None selected</span>
                  )}
                </div>
              </div>
            </div>

            {/* SECTION 2 */}
            <div>
              <div className="section-title">02. THE PITCH</div>

              <div className="q-block">
                <div className="question">Current Interests</div>
                <div className="answer">{response.interests || 'No answer provided.'}</div>
              </div>

              <div className="q-block">
                <div className="question">Problem to Solve</div>
                <div className="answer long-text">
                  {response.problem_to_solve || 'No answer provided.'}
                </div>
              </div>

              <div className="grid-2">
                <div className="q-block">
                  <div className="question">Worked on Project?</div>
                  <div className="answer">{response.worked_on_project ? 'YES' : 'NO'}</div>
                </div>
                {response.project_link && (
                  <div className="q-block">
                    <div className="question">Project Link</div>
                    <a href={response.project_link} target="_blank" rel="noopener noreferrer" className="attachment-preview">
                      <span style={{ fontSize: '20px' }}>🔗</span>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: 700, fontSize: '12px' }}>Open Project</span>
                        <span style={{ fontSize: '10px', color: 'var(--gray)' }}>EXTERNAL LINK</span>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* SECTION 3 */}
            <div>
              <div className="section-title">03. SELF ASSESSMENT</div>

              <div className="grid-2">
                <div className="q-block">
                  <div className="question">Tech Confidence</div>
                  <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} style={{ width: '100%', height: '8px', background: i <= response.confidence_tech ? 'var(--charcoal)' : 'var(--line)', borderRadius: '2px' }}></div>
                    ))}
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '12px', fontWeight: 700, marginTop: '4px' }}>{response.confidence_tech}/5</div>
                </div>
                <div className="q-block">
                  <div className="question">Mentorship?</div>
                  <div className="answer" style={{ background: response.open_to_mentorship ? 'var(--bone)' : 'white', borderColor: response.open_to_mentorship ? 'var(--high-green)' : 'var(--line)' }}>
                    {response.open_to_mentorship ? '✅ OPEN TO MENTORSHIP' : '❌ NOT LOOKING'}
                  </div>
                </div>
              </div>

              <div className="q-block">
                <div className="question">The Matrix</div>
                <div className="answer" style={{ padding: '0 16px' }}>
                  <table className="matrix-table">
                    <tbody>
                      <tr>
                        <td>Creativity</td>
                        <td className="matrix-val">{response.matrix_creativity || '-'}</td>
                      </tr>
                      <tr>
                        <td>Discipline</td>
                        <td className="matrix-val">{response.matrix_discipline || '-'}</td>
                      </tr>
                      <tr style={{ borderBottom: 'none' }}>
                        <td>Leadership</td>
                        <td className="matrix-val">{response.matrix_leadership || '-'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM ACTIONS */}
        <div className="action-bar">
          <button className="btn btn-del">DELETE ENTRY</button>
          <button className="btn btn-main">EXPORT AS PDF</button>
        </div>

      </div>
    </>
  );
}
