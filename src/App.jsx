import { useState, useRef, useEffect } from "react";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import Walkman from "./components/Walkman";

import Sobre from "./sections/Sobre";
import Projetos from "./sections/Projetos";
import Experiencia from "./sections/Experiencia";
import Contato from './sections/Contato';
import "./index.css"; 

function App() {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === 'pt' ? 'en' : 'pt'));
  };

  const tracks = [
    {
      id: "01",
      vol: "VOL. 1",
      title: "SOBRE MIM",
      audio: "/01 Hooked On a Feeling.m4a",
      component: <Sobre language={language} toggleLanguage={toggleLanguage} />
    },
    {
      id: "02",
      vol: "VOL. 2",
      title: "PROJETOS",
      audio: "/02 Go All the Way.m4a",
      component: <Projetos language={language} toggleLanguage={toggleLanguage} />
    },
    {
      id: "03",
      vol: "VOL. 3",
      title: "EXPERIÊNCIA",
      audio: "/03 Spirit In the Sky.m4a",
      component: <Experiencia language={language} toggleLanguage={toggleLanguage} />
    },
    {
      id: "04",
      vol: "VOL. 4",
      title: "CONTATO",
      audio: "/04 Moonage Daydream.m4a",
      component: <Contato language={language} toggleLanguage={toggleLanguage} />
    }
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  
  
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


  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = currentTrack.audio;
    audioRef.current.load();
    if (isPlaying) {
      audioRef.current
        .play()
        .catch(() => {
         
        });
    }
  }, [currentTrackIndex, currentTrack.audio, isPlaying]);

  return (
    <div className="app-container">
      
      <audio ref={audioRef} loop preload="auto" />
      
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
          language={language}
        />
      </div>

      <Footer />

    </div>
  );
}

export default App;