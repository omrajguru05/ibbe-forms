'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { login } from '../actions/auth'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    try {
      const result = await login(formData)
      if (result.success) {
        router.push('/dashboard')
      } else {
        setError(result.message || 'Login failed')
      }
    } catch (err) {
      setError('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <style jsx global>{`
        /* --- IBBE SYSTEM v5.3: MECHA-LOGIN --- */
        :root {
          --cream: #F7F2E9;
          --bone: #FFF9F0;
          --charcoal: #1D1D1F;
          --gray: #8E8E93;
          --line: #E8E2D8;
          
          /* Indicators */
          --led-green: #39FF14;
          --led-red: #FF453A;
          --led-yellow: #FFD60A;
          --neon-blue: #2962FF;
          
          /* Physics */
          --border-heavy: 3px solid var(--charcoal);
          --border-light: 1px solid var(--charcoal);
          --shadow-block: 10px 10px 0px var(--charcoal);
          --shadow-pressed: 2px 2px 0px var(--charcoal);
          
          --radius-panel: 24px;
          --radius-btn: 12px;
        }

        /* BASE */
        * { box-sizing: border-box; user-select: none; } /* Fidget friendly */
        body {
          margin: 0;
          background-color: var(--cream);
          /* Blueprint Grid */
          background-image: 
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 40px 40px;
          font-family: 'Inter', sans-serif;
          color: var(--charcoal);
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* --- STAGE --- */
        .stage {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* FLOATING JUNK (Decoration) */
        .floater {
          position: absolute;
          border: 2px solid var(--charcoal);
          background: var(--bone);
          animation: float 10s infinite linear;
          z-index: 1;
        }
        .f-circle { width: 40px; height: 40px; border-radius: 50%; top: 20%; left: 10%; background: var(--led-yellow); }
        .f-square { width: 30px; height: 30px; bottom: 20%; right: 15%; background: var(--neon-blue); transform: rotate(45deg); }
        .f-cross { top: 15%; right: 25%; background: transparent; border: none; font-size: 40px; font-weight: 900; }

        /* --- ACCESS PANEL --- */
        .panel {
          width: 420px;
          background: var(--bone);
          border: var(--border-heavy);
          border-radius: var(--radius-panel);
          box-shadow: var(--shadow-block);
          position: relative;
          z-index: 10;
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* FIDGET TOGGLES TOP */
        .fidget-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 24px;
          border-bottom: 2px dashed var(--charcoal);
        }
        .toggle-switch {
          width: 40px; height: 60px;
          background: #ddd;
          border: 2px solid var(--charcoal);
          border-radius: 6px;
          position: relative;
          cursor: pointer;
        }
        .lever {
          width: 100%; height: 50%;
          background: white;
          border-bottom: 2px solid var(--charcoal);
          border-radius: 4px 4px 0 0;
          transition: 0.1s cubic-bezier(0.6, -0.28, 0.735, 0.045);
        }
        /* Click interaction simulation */
        .toggle-switch:active .lever { height: 20%; background: var(--led-green); }
        .toggle-switch:hover { transform: translateY(-2px); }

        /* HEADER */
        .panel-header { text-align: center; }
        h1 {
          font-size: 32px; font-weight: 900; margin: 0;
          text-transform: uppercase; letter-spacing: -1px;
        }
        .status-text {
          font-family: 'JetBrains Mono'; font-size: 11px;
          background: var(--charcoal); color: var(--led-red);
          padding: 4px 8px; border-radius: 4px;
          display: inline-block; margin-top: 8px;
        }

        /* FORM AREA */
        .input-group { position: relative; }
        
        .panel-label {
          font-family: 'JetBrains Mono'; font-size: 10px; font-weight: 700;
          text-transform: uppercase; margin-bottom: 6px; display: block;
          color: var(--gray);
        }

        .panel-input {
          width: 100%; padding: 16px;
          font-family: 'JetBrains Mono'; font-size: 14px; font-weight: 700;
          background: white;
          border: 2px solid var(--charcoal);
          border-radius: 12px;
          outline: none;
          box-shadow: 4px 4px 0px rgba(0,0,0,0.05);
          transition: 0.15s;
          color: var(--charcoal);
        }
        .panel-input:focus {
          border-color: var(--neon-blue);
          box-shadow: 6px 6px 0px var(--neon-blue);
          transform: translate(-2px, -2px);
        }
        .panel-input::placeholder { color: #ccc; }

        /* THE BIG BUTTON */
        .access-btn {
          width: 100%; padding: 20px;
          background: var(--charcoal); color: var(--bone);
          font-family: 'JetBrains Mono'; font-weight: 800; font-size: 16px;
          text-transform: uppercase; border: 2px solid var(--charcoal);
          border-radius: 12px; cursor: pointer;
          box-shadow: 6px 6px 0px #555;
          transition: 0.1s;
          margin-top: 12px;
          position: relative; overflow: hidden;
        }
        .access-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 8px 8px 0px #555;
          background: var(--neon-blue); border-color: var(--neon-blue);
        }
        .access-btn:active {
          transform: translate(4px, 4px);
          box-shadow: 0px 0px 0px #555;
        }

        /* STICKER */
        .sticker {
          position: absolute; top: -15px; right: -25px;
          background: var(--led-yellow); color: var(--charcoal);
          padding: 8px 16px;
          font-family: 'JetBrains Mono'; font-weight: 800; font-size: 11px;
          border: 2px solid var(--charcoal);
          transform: rotate(10deg);
          box-shadow: 3px 3px 0px rgba(0,0,0,0.1);
          cursor: grab;
          transition: 0.2s;
        }
        .sticker:active { cursor: grabbing; transform: rotate(0deg) scale(1.1); }

        /* FOOTER */
        .panel-footer {
          text-align: center; margin-top: 12px;
        }
        .help-link {
          font-family: 'JetBrains Mono'; font-size: 10px; 
          color: var(--gray); text-decoration: underline; cursor: pointer;
        }
        .help-link:hover { color: var(--charcoal); }

        /* ANIMATIONS */
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -20px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        /* RESPONSIVE */
        @media (max-width: 500px) {
          .panel { width: 90%; padding: 24px; }
          .floater { display: none; }
        }
      `}</style>

      <div className="stage">

        {/* Floating Debris */}
        <div className="floater f-circle"></div>
        <div className="floater f-square"></div>
        <div className="floater f-cross">+</div>

        <div className="panel">
          {/* Draggable Sticker */}
          <div className="sticker">RESTRICTED AREA</div>

          {/* Useless Fidget Switches */}
          <div className="fidget-row">
            <div className="toggle-switch" title="Click!"><div className="lever"></div></div>
            <div className="toggle-switch" title="Click!"><div className="lever"></div></div>
            <div className="toggle-switch" title="Click!"><div className="lever"></div></div>
          </div>

          <div className="panel-header">
            <h1>System Login</h1>
            <div className="status-text">● NOT AUTHENTICATED</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="panel-label">Identity</label>
              <input
                type="text"
                className="panel-input"
                placeholder="username_or_email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group" style={{ marginTop: '16px' }}>
              <label className="panel-label">Keycode</label>
              <input
                type="password"
                className="panel-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div style={{ color: 'var(--led-red)', fontFamily: 'JetBrains Mono', fontSize: '12px', marginTop: '12px', textAlign: 'center' }}>{error}</div>}

            <button type="submit" className="access-btn" disabled={loading}>
              {loading ? 'UNLOCKING...' : 'UNLOCK TERMINAL'}
            </button>
          </form>

          <div className="panel-footer">
            <span className="help-link">FORGOT KEYCODE?</span>
          </div>

        </div>
      </div>
    </>
  )
}
