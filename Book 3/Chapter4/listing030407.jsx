import { useState } from "react";

function VolumeSlider(props) {
  const [volume, setVolume] = useState(0);

  function changeVolume(e) {
    setVolume(e.target.value);
  }

  return (
    <>
      <p>Turn up the volume! Current volume: {volume}</p>
      <input
        type="range"
        value={volume}
        min="0"
        max="11"
        onChange={changeVolume}
      />
    </>
  );
}

export default VolumeSlider;
