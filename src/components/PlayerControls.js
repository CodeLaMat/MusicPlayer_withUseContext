import React from "react";
import {
  faStepBackward,
  faStepForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { useMusicPlayer } from "../hooks/useMusicPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlayerControls = () => {
  const music = useMusicPlayer();

  return (
    <>
      <div>
        <p>{music.currentTrackName}</p>
      </div>
      <button>
        <FontAwesomeIcon
          icon={faStepBackward}
          onClick={music.playPreviousTrack}
        />
      </button>
      <button onClick={music.togglePlay}>
        {music.isPlaying ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
      <button>
        <FontAwesomeIcon icon={faStepForward} onClick={music.playNextTrack} />
      </button>
    </>
  );
};

export { PlayerControls };
