'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';

export default function StartupForm() {
    const [formData, setFormData] = useState({
        full_name: '',
        age: '',
        phone: '',
        email: '',
        primary_focus: '',
        skills: [] as string[],
        education_level: 'Class Eleven',
        start_date: '',
        best_time: '',
        confidence_tech: 3,
        matrix_creativity: 'Med',
        matrix_discipline: 'Med',
        matrix_leadership: 'Med',
        open_to_mentorship: false,
        interests: '',
        problem_to_solve: '',
        worked_on_project: false,
        project_link: '',
    });

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSkillChange = (skill: string) => {
        setFormData(prev => {
            const skills = prev.skills.includes(skill)
                ? prev.skills.filter(s => s !== skill)
                : [...prev.skills, skill];
            return { ...prev, skills };
        });
    };

    const handleSubmit = async () => {
        setError('');
        if (!formData.full_name || !formData.email) {
            setError('Please fill in all required fields (Name, Email).');
            return;
        }

        setLoading(true);
        try {
            const { error: insertError } = await supabase
                .from('startup_responses')
                .insert([{
                    ...formData,
                    age: formData.age ? parseInt(formData.age) : null,
                    confidence_tech: formData.confidence_tech,
                }]);

            if (insertError) throw insertError;
            router.push('/form/startup/success');
        } catch (err: any) {
            setError(err.message || 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    };

    return (
        <>
            <style jsx global>{`
        .ibbe-input {
          width: 100%;
          background: var(--cream);
          border: 2px solid var(--line);
          padding: 16px;
          font-size: 16px;
          font-family: 'Inter';
          font-weight: 600;
          color: var(--charcoal);
          border-radius: var(--radius-md);
          transition: 0.2s;
        }
        .ibbe-input:focus {
          border-color: var(--charcoal);
          box-shadow: 4px 4px 0px rgba(0,0,0,0.1);
        }
        textarea.ibbe-input { min-height: 120px; resize: vertical; }
        
        .tile-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 12px;
        }
        .tile-option { cursor: pointer; position: relative; }
        .tile-option input { display: none; }
        .tile-face {
          display: flex; align-items: center; justify-content: center;
          padding: 16px; background: white; border: 2px solid var(--line);
          border-radius: var(--radius-md); font-weight: 700; font-size: 14px;
          text-align: center; transition: 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);
          height: 100%;
        }
        .tile-option input:checked + .tile-face {
          border-color: var(--charcoal); background: var(--yellow);
          box-shadow: 4px 4px 0px var(--charcoal); transform: translate(-2px, -2px);
        }
        .tile-option:hover .tile-face { border-color: var(--charcoal); }

        .rating-scale { display: flex; justify-content: space-between; gap: 8px; }
        .rating-box {
          flex: 1; height: 48px; background: white; border: 2px solid var(--line);
          border-radius: 8px; display: flex; align-items: center; justify-content: center;
          font-weight: 800; cursor: pointer; font-family: 'JetBrains Mono'; transition: 0.15s;
        }
        .rating-box:hover, .rating-box.active {
          background: var(--charcoal); color: var(--bone); border-color: var(--charcoal);
        }

        .matrix-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 0; border-bottom: 1px solid var(--line);
        }
        .matrix-label { font-weight: 600; font-size: 15px; width: 30%; }
        .matrix-options { display: flex; gap: 8px; width: 70%; justify-content: flex-end; }
        .matrix-btn {
          padding: 8px 16px; border: 2px solid var(--line); border-radius: 50px;
          font-size: 12px; font-weight: 700; cursor: pointer; background: white;
        }
        .matrix-btn:hover, .matrix-btn.selected {
          background: var(--blue); color: white; border-color: var(--charcoal);
        }

        .switch-wrapper {
          display: flex; align-items: center; justify-content: space-between;
          background: var(--cream); padding: 20px; border-radius: 12px;
          border: 2px solid var(--line);
        }
        .toggle-ui {
          width: 60px; height: 32px; background: var(--charcoal);
          border-radius: 50px; position: relative; cursor: pointer;
        }
        .toggle-knob {
          width: 26px; height: 26px; background: white; border-radius: 50%;
          position: absolute; top: 3px; left: 3px; transition: 0.2s;
        }
        .toggle-ui.active { background: var(--green); }
        .toggle-ui.active .toggle-knob { left: 31px; }

        .card-tab {
          position: absolute; top: -15px; left: 30px; background: var(--charcoal);
          color: var(--bone); padding: 6px 16px; font-family: 'JetBrains Mono';
          font-size: 12px; font-weight: 700; transform: rotate(-2deg);
          border-radius: 4px; z-index: 10;
        }

        .big-btn {
          background: var(--charcoal); color: var(--bone); font-size: 20px;
          font-weight: 700; padding: 20px 60px; border: none; border-radius: 16px;
          box-shadow: 4px 4px 0px var(--charcoal); cursor: pointer;
          transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .big-btn:hover {
          transform: scale(1.05); box-shadow: 8px 8px 0px var(--charcoal);
          background: var(--blue);
        }

        /* RESPONSIVE */
        @media (max-width: 600px) {
          .input-group[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          .matrix-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .matrix-label { width: 100%; margin-bottom: 4px; }
          .matrix-options { width: 100%; justify-content: space-between; }
          .matrix-btn { flex: 1; text-align: center; padding: 8px 4px; }
          
          .rating-scale { gap: 4px; }
          .rating-box { height: 40px; font-size: 14px; }
          
          .switch-wrapper { flex-direction: column; align-items: flex-start; gap: 12px; }
          .switch-wrapper > div { align-self: flex-end; }
          
          .header { padding: 40px 20px 20px !important; }
          .flow-container { padding: 0 16px 80px !important; }
          .card { padding: 24px !important; }
        }
      `}</style>

            {/* HEADER */}
            <header className="header" style={{ padding: '60px 24px 40px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                <span className="status-badge" style={{ display: 'inline-block', background: 'var(--charcoal)', color: 'var(--yellow)', padding: '6px 12px', borderRadius: '50px', fontFamily: "'JetBrains Mono'", fontSize: '11px', fontWeight: 700, marginBottom: '16px' }}>OPEN FOR BATCH '26</span>
                <h1 style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-1.5px', margin: 0, lineHeight: 1 }}>Startup Interest & Profile</h1>
                <p className="mono" style={{ color: 'var(--gray)', marginTop: '16px', fontFamily: "'JetBrains Mono'" }}>ESTIMATED TIME: 4 MINS</p>
                <button onClick={copyLink} style={{ marginTop: '16px', background: 'transparent', border: 'none', textDecoration: 'underline', cursor: 'pointer', fontFamily: "'JetBrains Mono'", fontSize: '12px' }}>COPY FORM LINK</button>
            </header>

            {/* MAIN FLOW */}
            <main className="flow-container" style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px', padding: '0 24px 100px' }}>

                {/* CARD 1: THE BASICS */}
                <div className="card" style={{ background: 'var(--bone)', border: '3px solid var(--charcoal)', borderRadius: '24px', boxShadow: '8px 8px 0px var(--charcoal)', padding: '40px', position: 'relative', overflow: 'visible' }}>
                    <div className="card-tab">01 / THE BASICS</div>
                    <h2>Who are you?</h2>

                    <div className="input-group" style={{ marginBottom: '24px' }}>
                        <label>Full Name *</label>
                        <input type="text" name="full_name" value={formData.full_name} onChange={handleInputChange} className="ibbe-input" placeholder="e.g. Elon Musk (but cooler)" />
                    </div>

                    <div className="input-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                        <div>
                            <label>Age</label>
                            <input type="number" name="age" value={formData.age} onChange={handleInputChange} className="ibbe-input" placeholder="24" />
                        </div>
                        <div>
                            <label>Phone</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="ibbe-input" placeholder="+91 999..." />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="ibbe-input" placeholder="hello@internet.com" />
                    </div>
                </div>

                {/* CARD 2: SKILLS & FOCUS */}
                <div className="card" style={{ background: 'var(--bone)', border: '3px solid var(--charcoal)', borderRadius: '24px', boxShadow: '8px 8px 0px var(--charcoal)', padding: '40px', position: 'relative', overflow: 'visible', transform: 'rotate(1deg)' }}>
                    <div className="card-tab" style={{ background: 'var(--blue)', transform: 'rotate(2deg)' }}>02 / SKILLS</div>
                    <h2>What's your superpower?</h2>

                    <label>Primary Focus Area</label>
                    <p className="sub-label" style={{ fontSize: '13px', color: '#666', marginTop: '-4px', marginBottom: '16px', lineHeight: 1.4 }}>Choose one path to master.</p>
                    <div className="tile-grid" style={{ marginBottom: '32px' }}>
                        {['Product', 'Design', 'Engineering', 'Research', 'Operations', 'Marketing'].map(focus => (
                            <label key={focus} className="tile-option">
                                <input type="radio" name="primary_focus" checked={formData.primary_focus === focus} onChange={() => setFormData(prev => ({ ...prev, primary_focus: focus }))} />
                                <span className="tile-face">{focus}</span>
                            </label>
                        ))}
                    </div>

                    <label>Skills Stack</label>
                    <p className="sub-label" style={{ fontSize: '13px', color: '#666', marginTop: '-4px', marginBottom: '16px', lineHeight: 1.4 }}>Select all that apply.</p>
                    <div className="tile-grid">
                        {['Writing', 'Coding', 'Speaking', 'Finance', 'Graphics', 'Editing'].map(skill => (
                            <label key={skill} className="tile-option">
                                <input type="checkbox" checked={formData.skills.includes(skill)} onChange={() => handleSkillChange(skill)} />
                                <span className="tile-face">{skill}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* CARD 3: LOGISTICS */}
                <div className="card" style={{ background: 'var(--bone)', border: '3px solid var(--charcoal)', borderRadius: '24px', boxShadow: '8px 8px 0px var(--charcoal)', padding: '40px', position: 'relative', overflow: 'visible' }}>
                    <div className="card-tab" style={{ background: 'var(--red)' }}>03 / LOGISTICS</div>
                    <h2>The boring details</h2>

                    <div className="input-group" style={{ marginBottom: '24px' }}>
                        <label>Current Education Level</label>
                        <select name="education_level" value={formData.education_level} onChange={handleInputChange} className="ibbe-input" style={{ cursor: 'pointer' }}>
                            <option>Class Eleven</option>
                            <option>Class Twelve</option>
                            <option>Undergraduate</option>
                            <option>Postgraduate</option>
                            <option>Working Professional</option>
                        </select>
                    </div>

                    <div className="input-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                            <label>Start Date</label>
                            <input type="date" name="start_date" value={formData.start_date} onChange={handleInputChange} className="ibbe-input" />
                        </div>
                        <div>
                            <label>Best Time</label>
                            <input type="time" name="best_time" value={formData.best_time} onChange={handleInputChange} className="ibbe-input" />
                        </div>
                    </div>
                </div>

                {/* CARD 4: SELF EVAL */}
                <div className="card" style={{ background: 'var(--bone)', border: '3px solid var(--charcoal)', borderRadius: '24px', boxShadow: '8px 8px 0px var(--charcoal)', padding: '40px', position: 'relative', overflow: 'visible', transform: 'rotate(-1deg)' }}>
                    <div className="card-tab" style={{ background: 'var(--green)' }}>04 / REALITY CHECK</div>
                    <h2>Rate yourself</h2>

                    <div className="input-group" style={{ marginBottom: '24px' }}>
                        <label>Confidence with Technology (1-5)</label>
                        <div className="rating-scale">
                            {[1, 2, 3, 4, 5].map(rating => (
                                <div key={rating} className={`rating-box ${formData.confidence_tech === rating ? 'active' : ''}`} onClick={() => setFormData(prev => ({ ...prev, confidence_tech: rating }))}>
                                    {rating}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="input-group" style={{ marginTop: '32px' }}>
                        <label>The Matrix</label>

                        {['Creativity', 'Discipline', 'Leadership'].map(trait => (
                            <div key={trait} className="matrix-row">
                                <span className="matrix-label">{trait}</span>
                                <div className="matrix-options">
                                    {['Low', 'Med', 'High'].map(level => (
                                        <div
                                            key={level}
                                            className={`matrix-btn ${formData[`matrix_${trait.toLowerCase()}` as keyof typeof formData] === level ? 'selected' : ''}`}
                                            onClick={() => setFormData(prev => ({ ...prev, [`matrix_${trait.toLowerCase()}`]: level }))}
                                        >
                                            {level}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Toggle */}
                    <div className="switch-wrapper" style={{ marginTop: '24px' }}>
                        <span style={{ fontWeight: 700 }}>Open to Mentorship?</span>
                        <div className={`toggle-ui ${formData.open_to_mentorship ? 'active' : ''}`} onClick={() => setFormData(prev => ({ ...prev, open_to_mentorship: !prev.open_to_mentorship }))}>
                            <div className="toggle-knob"></div>
                        </div>
                    </div>
                </div>

                {/* CARD 5: THE PITCH */}
                <div className="card" style={{ background: 'var(--bone)', border: '3px solid var(--charcoal)', borderRadius: '24px', boxShadow: '8px 8px 0px var(--charcoal)', padding: '40px', position: 'relative', overflow: 'visible' }}>
                    <div className="card-tab" style={{ background: 'var(--yellow)', color: 'var(--charcoal)' }}>05 / THE IDEA</div>
                    <h2>Show us what you got</h2>

                    <div className="input-group" style={{ marginBottom: '24px' }}>
                        <label>Describe your current interests</label>
                        <textarea name="interests" value={formData.interests} onChange={handleInputChange} className="ibbe-input" placeholder="Don't be shy..."></textarea>
                    </div>

                    <div className="input-group" style={{ marginBottom: '24px' }}>
                        <label>Explain a problem you want to solve in India</label>
                        <textarea name="problem_to_solve" value={formData.problem_to_solve} onChange={handleInputChange} className="ibbe-input" placeholder="The bigger the better..."></textarea>
                    </div>

                    <div className="switch-wrapper" style={{ marginBottom: '24px', background: 'var(--bone)', borderColor: 'var(--line)' }}>
                        <span style={{ fontWeight: 600, fontSize: '14px' }}>Have you worked on a project before?</span>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button className={`matrix-btn ${formData.worked_on_project ? 'selected' : ''}`} style={{ background: formData.worked_on_project ? 'var(--charcoal)' : 'white', color: formData.worked_on_project ? 'white' : 'black' }} onClick={() => setFormData(prev => ({ ...prev, worked_on_project: true }))}>YES</button>
                            <button className={`matrix-btn ${!formData.worked_on_project ? 'selected' : ''}`} style={{ background: !formData.worked_on_project ? 'var(--charcoal)' : 'white', color: !formData.worked_on_project ? 'white' : 'black' }} onClick={() => setFormData(prev => ({ ...prev, worked_on_project: false }))}>NO</button>
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Project Link (URL)</label>
                        <input type="url" name="project_link" value={formData.project_link} onChange={handleInputChange} className="ibbe-input" placeholder="https://..." />
                    </div>
                </div>

                {/* SUBMIT AREA */}
                <div className="submit-area" style={{ textAlign: 'center', marginTop: '40px' }}>
                    {error && <p style={{ color: 'var(--red)', fontWeight: 'bold', marginBottom: '16px' }}>{error}</p>}
                    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px', cursor: 'pointer' }}>
                        <div style={{ width: '24px', height: '24px', border: '2px solid var(--charcoal)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '14px', height: '14px', background: 'var(--charcoal)', borderRadius: '2px' }}></div>
                        </div>
                        <span style={{ textTransform: 'none', fontFamily: "'Inter'", fontSize: '14px', color: 'var(--charcoal)' }}>I agree to the terms & confirm info is accurate</span>
                    </label>

                    <button onClick={handleSubmit} disabled={loading} className="big-btn">
                        {loading ? 'SENDING...' : 'SUBMIT APPLICATION →'}
                    </button>
                    <p className="mono" style={{ fontSize: '11px', color: 'var(--gray)', marginTop: '24px', fontFamily: "'JetBrains Mono'" }}>NO SPAM. WE PROMISE.</p>
                </div>

            </main>
        </>
    );
}
