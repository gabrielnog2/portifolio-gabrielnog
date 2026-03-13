import React, { useState, useEffect } from 'react';
import './Experiencia.css';

function Experiencia({ language: propLanguage, toggleLanguage: propToggleLanguage }) {
  const [localLanguage, setLocalLanguage] = useState('pt');
  const language = propLanguage ?? localLanguage;
  const toggleLanguage = propToggleLanguage ?? (() => {
    setLocalLanguage((lang) => (lang === 'pt' ? 'en' : 'pt'));
  });
  const [activeExpIndex, setActiveExpIndex] = useState(0);
  const [isDecrypting, setIsDecrypting] = useState(false);


  const handleMissionChange = (index) => {
    if (index === activeExpIndex) return;
    setIsDecrypting(true);
    setActiveExpIndex(index);
  };

  useEffect(() => {
    if (isDecrypting) {
      const timer = setTimeout(() => {
        setIsDecrypting(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isDecrypting]);

  const expData = {
    pt: {
      vol: "AWESOME MIX VOL. 3",
      title: "ARQUIVOS DA TELA DE COMANDO: EXPERIÊNCIA",
      btn: "SWITCH TO ENGLISH",
      missionLog: "SELECIONE O REGISTRO",
      statusLabel: "STATUS DA OPERAÇÃO: ",
      decryptMsg: "DESCRIPTOGRAFANDO DADOS...",
      items: [
        {
          id: 1,
          logId: "LOG-A77.1",
          coords: "SCT-09 // LAT-B",
          company: "Vallourec",
          role: "Suporte de Sistemas",
          period: "2025 - Presente",
          status: "EM CURSO",
          desc: "Atuação na tratativa e resolução de anomalias e erros do sistema empresarial utilizado para solicitações de viagens corporativas. Também estou desenvolvendo o agente de Inteligência Artificial para atendimento aos clientes internos da empresa.",
          tech: ["Troubleshooting", "SQL", "Python", "Copilot Studio"]
        },
        {
          id: 2,
          logId: "LOG-X22.4",
          coords: "XND-44 // SEC-7",
          company: "Supersonic",
          role: "Analista de UX/UI",
          period: "2023 - 2024",
          status: "CONCLUÍDA",
          desc: "Projeção e desenvolvimento de interfaces de usuário e experiências de navegação.",
          tech: ["Figma", "Frontend", "XML", "SEO", "Google Analytics"]
        },
        {
          id: 3,
          logId: "LOG-E01.9",
          coords: "TER-01 // NY-HQ",
          company: "Freelancer",
          role: "Consultora Esportiva",
          period: "2020 - 2021",
          status: "ARQUIVADA",
          desc: "Edição e estruturação de vídeos de melhores momentos de atletas de futebol para fins de recrutamento para bolsas esportivas no exterior.",
          tech: ["Vegas Pro", "Adobe", "Análise de Desempenho"]
        }
      ]
    },
    en: {
      vol: "AWESOME MIX VOL. 3",
      title: "COMMAND DECK ARCHIVES: EXPERIENCE",
      btn: "MUDAR PARA PORTUGUÊS",
      missionLog: "SELECT LOG ENTRY",
      statusLabel: "OPERATION STATUS: ",
      decryptMsg: "DECRYPTING DATA...",
      items: [
        {
          id: 1,
          logId: "LOG-A77.1",
          coords: "SCT-09 // LAT-B",
          company: "Vallourec",
          role: "Systems Support",
          period: "2025 - Present",
          status: "ONGOING",
          desc: "Handling and resolving anomalies and errors in the enterprise system used for corporate travel requests. I am also developing the Artificial Intelligence agent for internal customer service.",
          tech: ["Troubleshooting", "SQL", "Python", "Copilot Studio"]
        },
        {
          id: 2,
          logId: "LOG-X22.4",
          coords: "XND-44 // SEC-7",
          company: "Supersonic",
          role: "UX/UI Analyst",
          period: "2023 - 2024",
          status: "COMPLETED",
          desc: "Design and development of user interfaces and navigation experiences.",
          tech: ["Figma", "Frontend", "XML", "SEO", "Google Analytics"]
        },
        {
          id: 3,
          logId: "LOG-E01.9",
          coords: "TER-01 // NY-HQ",
          company: "Freelancer",
          role: "Sports Consultant",
          period: "2020 - 2021",
          status: "ARCHIVED",
          desc: "Editing and structuring highlight videos of soccer athletes for recruitment purposes for sports scholarships abroad.",
          tech: ["Vegas Pro", "Adobe", "Performance Analysis"]
        }
      ]
    }
  };

  const current = expData[language];
  const activeExp = current.items[activeExpIndex];

  return (
    <div className="experiencia-container fade-in">
      
      <div className="experiencia-top-controls">
        <div className="system-readout">
          <span className="blinking-dot"></span>
          SYS.ONLINE // UPLINK SECURE
        </div>
        <button className="cyber-btn exp-btn" onClick={toggleLanguage}>
          {current.btn}
        </button>
      </div>

      <div className="experiencia-header">
        <p className="tape-volume">{current.vol}</p>
        <h2 className="section-title hud-title">{current.title}</h2>
      </div>

      <div className="mission-deck-layout">
        
        <aside className="mission-list-panel">
          <div className="mission-list-header">
            <span>{current.missionLog}</span>
            <div className="header-decor-line"></div>
          </div>
          
          <div className="mission-items">
            {current.items.map((exp, index) => (
              <button 
                key={exp.id} 
                className={`mission-nav-btn ${index === activeExpIndex ? 'active' : ''}`}
                onClick={() => handleMissionChange(index)}
              >
                <div className="mission-nav-content">
                  <span className="mission-log-id">[{exp.logId}]</span>
                  <span className="mission-nav-role">{exp.role}</span>
                  <span className="mission-nav-company">@ {exp.company}</span>
                </div>

                {index === activeExpIndex && (
                  <div className="audio-visualizer">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </aside>

        <main className="mission-briefing-panel">
          <div className="hud-screen">
            
            {isDecrypting && (
              <div className="decryption-overlay">
                <div className="spinner"></div>
                <p>{current.decryptMsg}</p>
              </div>
            )}

            <div className={`hud-content-wrapper ${isDecrypting ? 'glitching' : ''}`}>
              <div className="card-scanline briefing-scanline"></div>
              
              <div className="briefing-top-bar">
                <div className="status-box">
                  <span className="status-label">{current.statusLabel}</span> 
                  <span className={`status-highlight ${activeExp.status === 'EM CURSO' || activeExp.status === 'ONGOING' ? 'pulse-text' : ''}`}>
                    {activeExp.status}
                  </span>
                </div>
                <div className="tech-coords">
                  <span>DATA: {activeExp.period}</span>
                  <span>LOC: {activeExp.coords}</span>
                </div>
              </div>

              <div className="briefing-main-info">
                <h3 className="briefing-role">{activeExp.role}</h3>
                <h4 className="briefing-company">TARGET // {activeExp.company}</h4>
              </div>
              
              <div className="cyber-crosshair-divider"></div>

              <p className="briefing-desc">{activeExp.desc}</p>
              
              <div className="project-techs hud-techs">
                {activeExp.tech.map((t, index) => (
                  <span key={index} className="tech-badge hex-badge">{t}</span>
                ))}
              </div>
            </div>

            
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>
          </div>
        </main>

      </div>
    </div>
  );
}

export default Experiencia;