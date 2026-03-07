import { useState } from "react";
import Controls from "./Controls";
import "./Walkman.css";

// Adicionamos 'stop' às props para receber a função do App.jsx
function Walkman({ title, next, prev, play, stop, isPlaying = false }) {
  const [seekState, setSeekState] = useState(null);

  const handleNext = () => {
    setSeekState("fwd");
    setTimeout(() => {
      setSeekState(null);
      if (next) next();
    }, 500);
  };

  const handlePrev = () => {
    setSeekState("rev");
    setTimeout(() => {
      setSeekState(null);
      if (prev) prev();
    }, 500);
  };

  // Lógica de animação das rodinhas (Reels)
  let reelClass = "";
  if (seekState === "fwd") {
    reelClass = "spinning-fast-fwd";
  } else if (seekState === "rev") {
    reelClass = "spinning-fast-rev";
  } else if (isPlaying) {
    // Só gira se o isPlaying vindo do App for true (após o PLAY)
    reelClass = "spinning-realistic";
  }

  return (
    <div className="viewport">
      <div className="hot-line-btn-top"></div>

      <main className="walkman-case-sony">
        <div className="silver-panel-left">
          <div className="side-button-group">
            <div className="side-button vol-slider"></div>
            <div className="side-button tone-switch"></div>
          </div>
        </div>

        <div className="main-blue-body">
          <header className="sony-branding">
            <span className="logo-text">SONY</span>
            <span className="model-text">STEREO CASSETTE PLAYER TPS-L2</span>
          </header>

          <div className="cassette-door">
            <div className="glass-window">
              <svg viewBox="0 0 450 280" preserveAspectRatio="xMidYMid meet" className="cassette-svg">
                <defs>
                  <mask id="windowHole">
                    <rect x="0" y="0" width="450" height="280" fill="white" />
                    <rect x="110" y="95" width="230" height="65" rx="4" fill="black" />
                  </mask>

                  <pattern id="plasticRidges" width="4" height="4" patternUnits="userSpaceOnUse">
                    <rect width="4" height="2" fill="#2a2a2e" />
                    <rect y="2" width="4" height="2" fill="#18181c" />
                  </pattern>

                  <linearGradient id="woodGrain" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c2a077" />
                    <stop offset="50%" stopColor="#d8bba0" />
                    <stop offset="100%" stopColor="#b4916a" />
                  </linearGradient>

                  <radialGradient id="metalHub" cx="50%" cy="50%" r="50%">
                    <stop offset="80%" stopColor="#e2e2e2" />
                    <stop offset="100%" stopColor="#a0a0a0" />
                  </radialGradient>
                </defs>

                <rect x="0" y="0" width="450" height="280" fill="url(#woodGrain)" />
                <rect x="15" y="15" width="420" height="250" fill="#111" opacity="0.4" />
                <rect x="25" y="25" width="400" height="230" fill="url(#woodGrain)" />
                
                <circle cx="45" cy="45" r="5" fill="#111" />
                <circle cx="405" cy="45" r="5" fill="#111" />
                <circle cx="45" cy="235" r="5" fill="#111" />
                <circle cx="405" cy="235" r="5" fill="#111" />

                <rect x="55" y="35" width="340" height="210" rx="8" fill="url(#plasticRidges)" />
                <rect x="55" y="35" width="340" height="210" rx="8" fill="#000" opacity="0.3" />
                <rect x="110" y="95" width="230" height="65" rx="4" fill="#0c0c0e" />

                {/* Rolo Esquerdo */}
                <g className={reelClass} style={{ transformOrigin: '155px 127px' }}>
                  <circle cx="155" cy="127" r="28" fill="#3a281c" /> 
                  <circle cx="155" cy="127" r="16" fill="url(#metalHub)" /> 
                  <path d="M155 111 L155 143 M141 119 L169 135 M141 135 L169 119" stroke="#d0d0d0" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="155" cy="127" r="7" fill="#111" /> 
                  <polygon points="152,124 158,124 155,130" fill="#fff" opacity="0.5" /> 
                </g>

                {/* Rolo Direito */}
                <g className={reelClass} style={{ transformOrigin: '295px 127px' }}>
                  <circle cx="295" cy="127" r="20" fill="#3a281c" /> 
                  <circle cx="295" cy="127" r="16" fill="url(#metalHub)" /> 
                  <path d="M295 111 L295 143 M281 119 L309 135 M281 135 L309 119" stroke="#d0d0d0" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="295" cy="127" r="7" fill="#111" />
                  <polygon points="292,124 298,124 295,130" fill="#fff" opacity="0.5" />
                </g>
                
                <path d="M 155 155 L 295 147" stroke="#3a281c" strokeWidth="2" opacity="0.8" />

                <g mask="url(#windowHole)">
                  <rect x="65" y="45" width="320" height="135" rx="5" fill="#f4e6b5" />
                  
                  <text x="225" y="85" textAnchor="middle" className="quill-handwriting" transform="rotate(-1 225 85)">
                    {title || "Portifolio Mix Vol. 1"}
                  </text>

                  <rect x="65" y="105" width="320" height="5" fill="#f7a440" /> 
                  <rect x="65" y="116" width="320" height="7" fill="#f47835" />  
                  <rect x="65" y="129" width="320" height="11" fill="#e64b27" /> 
                  <rect x="65" y="146" width="320" height="15" fill="#ce271c" /> 
                  <rect x="65" y="166" width="320" height="14" fill="#a81813" /> 
                </g>

                <rect x="110" y="95" width="230" height="65" rx="4" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
                <path d="M 100 190 L 350 190 L 335 235 L 115 235 Z" fill="#1e1e22" stroke="#111" strokeWidth="2" />
                
                <circle cx="85" cy="215" r="9" fill="#080808" />
                <circle cx="365" cy="215" r="9" fill="#080808" />
                <circle cx="140" cy="215" r="5" fill="#080808" />
                <circle cx="310" cy="215" r="5" fill="#080808" />
                <rect x="205" y="205" width="40" height="20" rx="3" fill="#080808" />
                
                <circle cx="70" cy="50" r="3" fill="#111" />
                <circle cx="380" cy="50" r="3" fill="#111" />
                <circle cx="70" cy="230" r="3" fill="#111" />
                <circle cx="380" cy="230" r="3" fill="#111" />
                <circle cx="225" cy="230" r="3" fill="#111" />

              </svg>
            </div>
          </div>

          <div className="controls-wrapper-realistic">
            {/* Agora passamos tanto o play quanto o stop para o componente Controls */}
            <Controls next={handleNext} prev={handlePrev} play={play} stop={stop} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Walkman;