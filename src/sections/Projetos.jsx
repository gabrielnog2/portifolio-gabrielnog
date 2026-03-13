import React, { useState } from 'react';
import './Projetos.css';
import fabricaImg from '../assets/fabric.png';
import budgetImg from '../assets/budget.png';
import reiImg from '../assets/rei.png';

function Projetos({ language: propLanguage, toggleLanguage: propToggleLanguage }) {
  const [localLanguage, setLocalLanguage] = useState('pt');
  const language = propLanguage ?? localLanguage;
  const toggleLanguage = propToggleLanguage ?? (() => {
    setLocalLanguage((lang) => (lang === 'pt' ? 'en' : 'pt'));
  });

  const projectsData = {
    pt: {
      vol: "AWESOME MIX VOL. 2",
      title: "DIÁRIO DE BORDO: PROJETOS",
      btn: "SWITCH TO ENGLISH",
      items: [
        {
          id: 1, node: "NODE-01", status: "DEPLOYED",
          name: "Fábrica de Histórias",
          desc: "Um sistema para autores emergentes terem espaço para divulgação em rede.",
          tech: ["HTML", "CSS", "JS", "Java", "Spring Boot"],
          link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-2-ti2-1381100-fabrica-de-historias/tree/main/docs/video",
          image: fabricaImg
        },
        {
          id: 2, node: "NODE-02", status: "VERIFIED",
          name: "Budget Software",
          desc: "Sistema logístico completo para gestão de recursos em engenharia civil.",
          tech: ["HTML", "CSS", "JS", "Java", "Spring Boot"],
          link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-1-ti3-898110-grupo-4-sistema-de-engenharia/blob/main/Divulgacao/Video/Meu%20V%C3%ADdeo%20(1).mp4",
          image: budgetImg
        },
        {
          id: 3, node: "NODE-03", status: "ONLINE",
          name: "Rei do Cabeçote",
          desc: "Sistema integrado de gerenciamento de hardware mecânico e oficina retífica.",
          tech: ["React", "Node.js", "Java", "Spring Boot"],
          link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-2-ti3-5533100-rei-do-cabecote/blob/main/Divulgacao/Video/Video_apresentacao.mp4",
          image: reiImg
        }
      ]
    },
    en: {
      vol: "AWESOME MIX VOL. 2",
      title: "CAPTAIN'S LOG: PROJECTS",
      btn: "MUDAR PARA PORTUGUÊS",
      items: [
        {
          id: 1, node: "NODE-01", status: "DEPLOYED",
          name: "Story Factory",
          desc: "A network system designed to give emerging authors a space for promotion and visibility.",
          tech: ["HTML", "CSS", "JS", "Java", "Spring Boot"],
          link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-2-ti2-1381100-fabrica-de-historias/tree/main/docs/video",
          image: fabricaImg
        },
        {
          id: 2, node: "NODE-02", status: "VERIFIED",
          name: "Budget Software",
          desc: "A complete logistics system for civil engineering resource management.",
          tech: ["HTML", "CSS", "JS", "Java", "Spring Boot"],
          link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-1-ti3-898110-grupo-4-sistema-de-engenharia/blob/main/Divulgacao/Video/Meu%20V%C3%ADdeo%20(1).mp4",
          image: budgetImg
        },
        {
          id: 3, node: "NODE-03", status: "ONLINE",
          name: "Cylinder Head King",
          desc: "An integrated management system for automotive mechanical hardware and workshop.",
          tech: ["React", "Node.js", "Java", "Spring Boot"],
          link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-2-ti3-5533100-rei-do-cabecote/blob/main/Divulgacao/Video/Video_apresentacao.mp4",
          image: reiImg
        }
      ]
    }
  };

  const current = projectsData[language];

  return (
    <div className="projetos-container fade-in">
      
      <div className="projetos-top-controls">
        <div className="system-readout">
          <span className="blinking-dot"></span>
          CONNECTION SECURE
        </div>
        <button className="cyber-btn" onClick={toggleLanguage}>
          {current.btn}
        </button>
      </div>

      <div className="projetos-header">
        <p className="tape-volume">{current.vol}</p>
        <h2 className="section-title hud-title">{current.title}</h2>
      </div>

   
      <div className="projects-grid-pipeline">
        
        
        <div className="pipeline-axis-horizontal">
          <div className="data-flow-horizontal"></div>
        </div>

        {current.items.map((project) => (
          <div className="grid-node-wrapper" key={project.id}>
            
            
            <div className="grid-marker">
              <span className="marker-id">{project.node}</span>
              <div className="marker-core"></div>
              <div className="marker-connector"></div>
            </div>

            <div className="project-card hud-panel">
              <div className="card-scanline"></div>

              <div className="panel-top-bar">
                <span className="panel-sys-id">ARCHIVE // {project.name.toUpperCase()}</span>
                <span className="panel-status">{project.status}</span>
              </div>

              {project.image && (
                <div className="project-image-wrapper target-lock">
                  <div className="crosshair"></div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />
                </div>
              )}

              <div className="card-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-techs">
                  {project.tech.map((t, index) => (
                    <span key={index} className="tech-badge hex-badge">{t}</span>
                  ))}
                </div>
                
                <div className="project-footer">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-link"
                  >
                    EXTRACT_DATA ➔
                  </a>
                </div>
              </div>

              <div className="hud-corner top-left"></div>
              <div className="hud-corner bottom-right"></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Projetos;