import React, { useEffect, useState } from "react";
import { GetAllSport } from "../../Services/Sport/sport-service";

function Sport() {
  let [sport, setSport] = useState([]);
  useEffect(() => {
    GetAllSport().then((res) => {
      setSport(res.hits);
    });
  }, []);
  return (
    <div>
      <h1>showing sport collection</h1>
      {sport.map((pic, index) => (
        <div key={index}>
          <img src={pic.largeImageURL} alt="picURL" />
        </div>
      ))}
    </div>
  );
}

export default Sport;
