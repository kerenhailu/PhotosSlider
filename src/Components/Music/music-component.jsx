import React, { useEffect, useState } from "react";
import { GetAllMusic } from "../../Services/Music/music-service";

function Music() {
  let [music, setMusic] = useState([]);

  useEffect(() => {
    GetAllMusic().then((res) => {
      setMusic(res.hits);
    });
  }, []);
  return (
    <div>
      <h1>showing music collection</h1>
      {music.map((pic, index) => (
        <div key={index}>
          <img src={pic.previewURL} alt="picURL" />
        </div>
      ))}
    </div>
  );
}

export default Music;
