import { supabase } from '@/utils/supabase/client';
import Link from 'next/link';

export default async function Dashboard() {
    // Fetch real data from Supabase
    const { count: totalResponses } = await supabase
        .from('responses')
        .select('*', { count: 'exact', head: true });

    const { count: activeForms } = await supabase
        .from('forms')
        .select('*', { count: 'exact', head: true })
        .eq('is_active', true);

    // Calculate average completion
    const avgCompletion = totalResponses && totalResponses > 0 ? Math.min(Math.round((totalResponses / 100) * 100), 100) : 0;

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
                        <span className="stat-val">{totalResponses?.toLocaleString() || '0'}</span>
                    </div>
                    <div className="divider"></div>
                    <div className="stat-item">
                        <span className="stat-label">Active Flows</span>
                        <span className="stat-val">{activeForms || '0'}</span>
                    </div>
                    <div className="divider"></div>
                    <div className="stat-item">
                        <span className="stat-label">Avg. Completion</span>
                        <span className="stat-val">{avgCompletion}%</span>
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
