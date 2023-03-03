import { useMusicPlayer } from "../hooks/useMusicPlayer";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrackList = () => {
  const music = useMusicPlayer();
  return (
    <>
      {music.trackList.map((track, index) => (
        <div>
          <button onClick={() => music.playTrack(index)}>
            {music.isPlaying && music.currentTrackIndex === index ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <div>Track playing: {track.name}</div>
        </div>
      ))}
    </>
  );
};

export default TrackList;
