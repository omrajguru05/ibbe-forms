'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function UrlBar() {
    const pathname = usePathname();

    let urlText = '🔒 flow.ibbe.in';
    let badgeText = 'BETA_V1';
    const isResponseDetail = pathname?.startsWith('/responses/') && pathname.split('/').length > 2;

    if (pathname === '/form/startup/success') {
        urlText = '🔒 flow.ibbe.in/sent';
        badgeText = 'STATUS: 200 OK';
    } else if (pathname === '/responses') {
        urlText = '🔒 flow.ibbe.in/responses';
        badgeText = 'PROJECT: STARTUP_PROFILE';
    } else if (isResponseDetail) {
        const id = pathname.split('/').pop();
        urlText = `🔒 flow.ibbe.in/entry/${id}`;
        badgeText = 'ADMIN_VIEW';
    } else if (pathname === '/dashboard') {
        urlText = '🔒 flow.ibbe.in/dashboard';
    } else if (pathname?.startsWith('/form/')) {
        urlText = '🔒 flow.ibbe.in/form';
    }

    return (
        <nav className="url-bar">
            {isResponseDetail ? (
                <Link href="/responses" style={{
                    color: 'var(--bone)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: "'JetBrains Mono'",
                    fontWeight: 700,
                    fontSize: '12px',
                    cursor: 'pointer'
                }}>
                    ← BACK TO LIST
                </Link>
            ) : (
                <div className="traffic-lights">
                    <div className="light" style={{ background: "#FF5F56" }}></div>
                    <div className="light" style={{ background: "#FFBD2E" }}></div>
                    <div className="light" style={{ background: "#27C93F" }}></div>
                </div>
            )}

            <div className="url-input">
                <span>{urlText}</span>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono'", fontSize: "11px", opacity: badgeText.startsWith('PROJECT') ? 0.8 : 1 }}>
                {badgeText}
            </div>
        </nav>
    );
}
