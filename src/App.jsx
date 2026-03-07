import React, { useState, useRef } from "react";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import Walkman from "./components/Walkman";

import Sobre from "./sections/Sobre";
import Projetos from "./sections/Projetos";
import Experiencia from "./sections/Experiencia";
import Contato from './sections/Contato';
import "./index.css"; 

function App() {

  const tracks = [
    { 
      id: "01", 
      vol: "VOL. 1",
      title: "SOBRE MIM", 
      component: <Sobre /> 
    },
    { 
      id: "02", 
      vol: "VOL. 2",
      title: "PROJETOS", 
      component: <Projetos /> 
    },
    { 
      id: "03", 
      vol: "VOL. 3",
      title: "EXPERIÊNCIA", 
      component: <Experiencia /> 
    },
    { 
      id: "04", 
      vol: "VOL. 4",
      title: "CONTATO", 
      component: <Contato /> 
    }
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  
  // --- MOTOR DE ÁUDIO DO WALKMAN ---
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Função para dar o PLAY
  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Função para dar o STOP
  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  // ---------------------------------

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const currentTrack = tracks[currentTrackIndex];

  return (
    <div className="app-container">
      
      {/* O toca-fitas invisível que puxa a música da sua pasta public */}
      <audio ref={audioRef} src="/awesome-mix.mp3" loop preload="auto"></audio>
      
      <Header />

      <main className="main-content-area">
        <div className="sci-fi-monitor">
          {currentTrack.component}
        </div>
      </main>

      <div className="walkman-widget">
        <Walkman 
          title={`AWESOME MIX ${currentTrack.vol}`} 
          content={`TRACK ${currentTrack.id} - ${currentTrack.title}`} 
          next={nextTrack} 
          prev={prevTrack} 
          play={playMusic}
          stop={stopMusic}
          isPlaying={isPlaying}
        />
      </div>

      <Footer />

    </div>
  );
}

export default App;