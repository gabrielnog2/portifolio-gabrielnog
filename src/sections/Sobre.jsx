import React, { useState } from 'react';
import './Sobre.css';

function Sobre({ language: propLanguage, toggleLanguage: propToggleLanguage }) {
  const [localLanguage, setLocalLanguage] = useState('pt'); 
  const language = propLanguage ?? localLanguage;
  const toggleLanguage = propToggleLanguage ?? (() => {
    setLocalLanguage((lang) => (lang === 'pt' ? 'en' : 'pt'));
  });

  const [showInstructions, setShowInstructions] = useState(false);

  const instructionsText = language === 'en'
    ? {
        title: "Navigation Instructions",
        lines: [
          "PLAY plays music.",
          "FWD moves to the next section.",
          "REV returns to the previous section.",
          "STOP stops the music.",
          "Use these controls to browse the portfolio while listening."
        ],
        close: "CLOSE"
      }
    : {
        title: "Instruções de Navegação",
        lines: [
          "PLAY toca música.",
          "FWD vai para a próxima seção.",
          "REV volta para a seção anterior.",
          "STOP para a música.",
          "Use esses controles para navegar pelo portfólio enquanto ouve."
        ],
        close: "FECHAR"
      };

  const content = {
    pt: {
      title: "INICIANDO SISTEMA...",
      subtitle: "SOBRE MIM",
      bio1: "Olá! Sou Gabriel Noguera, estudante de Engenharia de Software na PUC Minas. Possuo um ano de experiência na área de tecnologia voltada a suporte de sistemas e desenvolvimento de agentes de IA. Além disso, já atuei nas áreas de Consultoria, Marketing e Financeira.",
      bio2: "Recentemente, tenho me interessado por DevOps e Cloud Engineering.",
      btn: "SWITCH TO ENGLISH",
      techTitle: "LINGUAGENS",
      frameTitle: "FRAMEWORKS"
    },
    en: {
      title: "SYSTEM BOOT...",
      subtitle: "ABOUT ME",
      bio1: "Hello! I'm Gabriel Noguera, a Software Engineering student at PUC Minas. I have one year of experience in the tech industry focused on IT support and AI agent development. Additionally, I hold a degree in Business Administration from UFMG and have previous experience in Consulting, Marketing, and Finance.",
      bio2: "Recently, I've been getting interested in DevOps and Cloud Engineering.",
      btn: "MUDAR PARA PORTUGUÊS",
      techTitle: "LANGUAGES",
      frameTitle: "FRAMEWORKS"
    }
  };

  return (
    <div className="sobre-container fade-in">
      
      <div className="language-toggle-wrapper">
        <button className="cyber-btn" onClick={toggleLanguage}>
          {content[language].btn}
        </button>
      </div>

      <div className="sobre-content">
        
        <div className="profile-image-wrapper">
          <div className="holo-ring"></div>
          <img 
            src="/puconero.jpg" 
            alt="Gabriel Nogueira" 
            className="profile-img"
          />
        </div>

        <div className="text-wrapper">
          <p className="system-status">{content[language].title}</p>
          <h2 className="section-title">{content[language].subtitle}</h2>
          
          <div className="bio-text">
            <p>{content[language].bio1}</p>
            <p>{content[language].bio2}</p>
          </div>

          
          <div className="tech-mini-panel">
            
           
            <div className="cyber-divider"></div>
            
            <div className="tech-row">
              <span className="tech-label">{content[language].techTitle}:</span>
              <div className="tech-icons-small">
                <div className="tech-item-small" title="C"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" /></div>
                <div className="tech-item-small" title="HTML5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" /></div>
                <div className="tech-item-small" title="CSS3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" /></div>
                <div className="tech-item-small" title="JavaScript"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" /></div>
                <div className="tech-item-small" title="Java"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" /></div>
                <div className="tech-item-small" title="Python"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" /></div>
              </div>
            </div>

            <div className="tech-row">
              <span className="tech-label">{content[language].frameTitle}:</span>
              <div className="tech-icons-small">
                <div className="tech-item-small" title="React"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /></div>
                <div className="tech-item-small" title="Node.js"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node" /></div>
                <div className="tech-item-small" title="Spring Boot"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring" /></div>
                <div className="tech-item-small" title="Django"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="Django" /></div>
                <div className="tech-item-small" title="Tailwind CSS"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" /></div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Sobre;