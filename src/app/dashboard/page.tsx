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

                <div className="avatar-circle">OR</div>
            </nav>

            {/* 3. MAIN CONTENT */}
            <main className="main-content">

                {/* WELCOME */}
                <div className="header-row">
                    <div>
                        <h1 className="welcome-title">Good morning, Om.</h1>
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

                    {/* ALL FORMS ON VACATION - EMPTY STATE */}

                </div>

            </main>
        </div>
    );
}
