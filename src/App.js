import "./App.css";
import { useState } from "react";
import Sinister from "./assets/Kaya.mp3";
import Sinister2 from "./assets/[GRAND.AZ] - Mabel Matiz - Öyle Kolaysa 2018.mp3";
import Sinister3 from "./assets/[GRAND.AZ] - Murad Arif - Dondurma (KARAOKE).mp3";
import TrackList from "./components/TrackList";
import { PlayerControls } from "./components/PlayerControls";
import { MusicContext } from "./contexts/MusicContext";

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Inci Kaya",
        file: Sinister,
      },
      {
        name: "Mabel Martinz",
        file: Sinister2,
      },
      { name: "Murad Arif", file: Sinister3 },
    ],

    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="App">
        <TrackList />
        <PlayerControls />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
