export const pageStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .hero-bg {
    background-image:
      linear-gradient(rgba(15,15,19,0.68), rgba(15,15,19,0.82)),
      url('/home.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
  }

  .hero-bg::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 20% 40%, rgba(99,102,241,0.12) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(14,165,233,0.10) 0%, transparent 50%);
  }

  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  .card {
    background: #18181f;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.25s ease;
    position: relative;
    overflow: hidden;
  }

  .card:hover {
    border-color: rgba(255,255,255,0.18);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  }

  .card-accent {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 20px 20px 0 0;
    transition: height 0.25s ease;
  }

  .card:hover .card-accent {
    height: 4px;
  }

  .card-stack {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .detail-card {
    background: rgba(18,18,24,0.92);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    padding: 14px 16px;
    backdrop-filter: blur(8px);
  }

  .year-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 99px;
    margin-bottom: 12px;
  }

  .emoji-box {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    margin-bottom: 14px;
    border: 1px solid rgba(255,255,255,0.08);
  }

  .play-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 100%;
    padding: 10px;
    border-radius: 12px;
    border: none;
    background: rgba(255,255,255,0.07);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    margin-top: 14px;
  }

  .play-btn:hover {
    background: rgba(255,255,255,0.14);
  }

  .timeline-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(8px);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .modal-box {
    background: #18181f;
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 28px;
    width: 100%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
  }

  .modal-header {
    padding: 24px 24px 0;
  }

  .tab-bar {
    display: flex;
    gap: 4px;
    padding: 16px 24px 0;
  }

  .tab {
    padding: 8px 18px;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    background: transparent;
    color: rgba(255,255,255,0.4);
    transition: all 0.2s;
  }

  .tab.active {
    background: rgba(255,255,255,0.08);
    color: #fff;
  }

  .modal-body {
    padding: 16px 24px 24px;
  }

  .scroll-indicator {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(6px); }
  }

  .close-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.12);
    background: transparent;
    color: rgba(255,255,255,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;
  }

  .close-btn:hover {
    background: rgba(255,255,255,0.08);
    color: #fff;
  }

  .era-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`;
