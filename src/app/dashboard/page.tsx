import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
    return (
        <div className="dashboard-bg">
            {/* 2. SIDEBAR DOCK */}
            <nav className="sidebar">
                <a href="/dashboard" className="dock-item active" style={{ textDecoration: 'none' }}>📂</a>
                <a href="/responses" className="dock-item" style={{ textDecoration: 'none' }}>📊</a>
                <div className="dock-item">👥</div>
                <div className="dock-item">⚙️</div>

                <div className="avatar-circle">DM</div>
            </nav>

            {/* 3. MAIN CONTENT */}
            <main className="main-content">

                {/* WELCOME */}
                <div className="header-row">
                    <div>
                        <h1 className="welcome-title">Good morning, Divit.</h1>
                    </div>
                </div>

                {/* STATS MACHINE */}
                <div className="stats-strip">
                    <div className="stat-item">
                        <span className="stat-label">Total Responses</span>
                        <span className="stat-val">8,249</span>
                    </div>
                    <div className="divider"></div>
                    <div className="stat-item">
                        <span className="stat-label">Active Flows</span>
                        <span className="stat-val">04</span>
                    </div>
                    <div className="divider"></div>
                    <div className="stat-item">
                        <span className="stat-label">Avg. Completion</span>
                        <span className="stat-val">92%</span>
                    </div>
                    <div className="divider"></div>
                    <div className="stat-item" style={{ marginLeft: "auto", color: "var(--marker-yellow)" }}>
                        <span className="stat-label">System Status</span>
                        <span className="stat-val">OPERATIONAL</span>
                    </div>
                </div>

                {/* GRID */}
                <div className="grid-area">

                    {/* CREATE NEW */}
                    <div className="create-card">
                        <div className="plus-icon">+</div>
                        <div style={{ fontFamily: "'JetBrains Mono'", fontWeight: 700 }}>CREATE NEW FLOW</div>
                    </div>

                    {/* CARD: PROFILE */}
                    <Link href="/form/startup" style={{ textDecoration: 'none', color: 'inherit', display: 'contents' }}>
                        <div className="project-card" style={{ transform: "rotate(1deg)", cursor: "pointer" }}>
                            <div className="paperclip" style={{ background: "var(--neon-green)" }}></div>
                            <div className="card-top">
                                <div className="date-badge">EDITED 2M AGO</div>
                                <div style={{ fontSize: "20px" }}>...</div>
                            </div>
                            <h3>Startup Interest & Profile</h3>
                            <p className="desc">Primary intake form for the batch of 2026. collecting demographics and pitch decks.</p>

                            <div className="stamp">LIVE</div>

                            <div className="progress-bar">
                                <div className="fill" style={{ width: "85%" }}></div>
                            </div>
                            <div style={{ fontFamily: "'JetBrains Mono'", fontSize: "10px", marginTop: "8px", textAlign: "right" }}>85% GOAL</div>
                        </div>
                    </Link>

                    {/* OTHER CARDS HIDDEN (NOT LIVE) */}

                </div>

            </main>
        </div>
    );
}
