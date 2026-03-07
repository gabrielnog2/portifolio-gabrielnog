import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import EMAILJS_CONFIG from '../config/emailJsConfig';
import './Contato.css';

function Contato() {
  const [language, setLanguage] = useState('pt');
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
  const [status, setStatus] = useState('IDLE'); 

  const toggleLanguage = () => setLanguage(language === 'pt' ? 'en' : 'pt');

  const content = {
    pt: {
      vol: "AWESOME MIX VOL. 4",
      title: "CONTATO",
      btnLang: "SWITCH TO ENGLISH",
      channelsTitle: "FREQUÊNCIAS ABERTAS //",
      formTitle: "TERMINAL DE MENSAGENS INTERGALÁCTICAS",
      nameStr: "CODENOME",
      emailStr: "COORDENADA (E-MAIL)",
      msgStr: "CARGA ÚTIL (MENSAGEM)",
      btnFire: "ACIONAR HYPERDRIVE E ENVIAR",
      statusSending: "ROTEANDO PELO IMPÉRIO NOVA...",
      statusSuccess: "SINAL ENTREGUE! TOCA A FITA.",
      statusError: "INTERCEPTADO PELOS KREE. TENTE NOVAMENTE."
    },
    en: {
      vol: "AWESOME MIX VOL. 4",
      title: "CONTACT",
      btnLang: "MUDAR PARA PORTUGUÊS",
      channelsTitle: "OPEN FREQUENCIES //",
      formTitle: "INTERGALACTIC MESSAGE TERMINAL",
      nameStr: "CALLSIGN",
      emailStr: "COORDINATES (E-MAIL)",
      msgStr: "PAYLOAD (MESSAGE)",
      btnFire: "ENGAGE HYPERDRIVE & SEND",
      statusSending: "ROUTING VIA NOVA EMPIRE...",
      statusSuccess: "SIGNAL DELIVERED! HIT PLAY.",
      statusError: "INTERCEPTED BY KREE. RETRY."
    }
  };

  const current = content[language];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFireMessage = (e) => {
    e.preventDefault();
    setStatus('SENDING');
    
    const time = new Date().toLocaleString();
    const { nome, email, mensagem } = formData;

    
    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID, 
      { name: nome, email: email, message: mensagem, title: `Uplink de: ${nome}`, time: time },
      EMAILJS_CONFIG.PUBLIC_KEY
    )
      .then(() => {
        setStatus('SUCCESS');
        setFormData({ nome: '', email: '', mensagem: '' }); 
        setTimeout(() => setStatus('IDLE'), 5000); 
      })
      .catch((err) => {
        console.error("Falha no Uplink:", err);
        setStatus('ERROR');
        setTimeout(() => setStatus('IDLE'), 5000);
      });
  };

  return (
    <div className="contato-container fade-in">
     
      <div className="projetos-top-controls">
        <div className="system-readout ravager-readout">
          <span className="blinking-dot orange-dot"></span>
          SECURE
        </div>
        <button className="cyber-btn" onClick={toggleLanguage}>
          {current.btnLang}
        </button>
      </div>

     
      <div className="projetos-header">
        <p className="tape-volume">{current.vol}</p>
        <h2 className="section-title hud-title">{current.title}</h2>
      </div>

      <div className="milano-dashboard-grid">
        
        
        <div className="comms-panel hacked-panel">
          <div className="panel-top-bar orange-bar">
            <span>{current.channelsTitle}</span>
            <span className="status-ok">100%</span>
          </div>
          
          <div className="hologram-globe">
            <div className="globe-grid"></div>
            <div className="globe-scanline"></div>
          </div>

          <div className="social-links-container">
            <a href="https://gmail.com" className="milano-target" target="_blank" rel="noopener noreferrer">
              <span className="icon-box">✉</span>
              <span className="target-name">E-MAIL UPLINK</span>
              <div className="target-line"></div>
            </a>
            <a href="https://instagram.com" className="milano-target" target="_blank" rel="noopener noreferrer">
              <span className="icon-box">💬</span>
              <span className="target-name">COMUNICADOR</span>
              <div className="target-line"></div>
            </a>
            <a href="https://linkedin.com" className="milano-target" target="_blank" rel="noopener noreferrer">
              <span className="icon-box">🔗</span>
              <span className="target-name">REDE PROFISSIONAL</span>
              <div className="target-line"></div>
            </a>
          </div>
        </div>

        
        <div className="launch-panel tape-deck-panel">
          <div className="rocket-tape-stripes"></div>
          
          <div className="form-header-tech">
            <h3 className="launch-title">{current.formTitle}</h3>
            <div className="tech-decor-line"></div>
          </div>
          
          <form className="milano-form" onSubmit={handleFireMessage}>
           
            <div className="form-grid-layout">
              
              <div className="input-group gotg-input">
                <label><span className="bracket">[</span> {current.nameStr} <span className="bracket">]</span></label>
                <div className="input-wrapper">
                  <input 
                    type="text" name="nome" required 
                    value={formData.nome} onChange={handleChange}
                    placeholder="Ex: P. Quill" disabled={status === 'SENDING'}
                  />
                  <div className="input-glow"></div>
                </div>
              </div>
              
              <div className="input-group gotg-input">
                <label><span className="bracket">[</span> {current.emailStr} <span className="bracket">]</span></label>
                <div className="input-wrapper">
                  <input 
                    type="email" name="email" required 
                    value={formData.email} onChange={handleChange}
                    placeholder="star-lord@ravagers.net" disabled={status === 'SENDING'}
                  />
                  <div className="input-glow"></div>
                </div>
              </div>

              <div className="input-group gotg-input full-width">
                <label><span className="bracket">[</span> {current.msgStr} <span className="bracket">]</span></label>
                <div className="input-wrapper">
                  <textarea 
                    name="mensagem" required rows="4"
                    value={formData.mensagem} onChange={handleChange}
                    placeholder="// Insira os dados da transmissão..." disabled={status === 'SENDING'}
                  ></textarea>
                  <div className="input-glow"></div>
                </div>
              </div>
            </div>

            
            <div className="form-footer-action">
              <div className="status-container">
                {status !== 'IDLE' ? (
                  <div className={`launch-status ${status.toLowerCase()}`}>
                    {status === 'SENDING' && current.statusSending}
                    {status === 'SUCCESS' && current.statusSuccess}
                    {status === 'ERROR' && current.statusError}
                  </div>
                ) : (
                  <div className="launch-status idle-status">SISTEMA PRONTO // AGUARDANDO COMANDO</div>
                )}
              </div>

              
              <div className="fire-control-wrapper">
                <button 
                  type="submit" 
                  className={`hyperdrive-btn ${status === 'SENDING' ? 'locked' : ''}`}
                  disabled={status === 'SENDING'}
                >
                  <span className="btn-icon">🚀</span> {current.btnFire}
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contato;