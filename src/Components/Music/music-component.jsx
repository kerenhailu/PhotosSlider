import { useState, useRef, useEffect } from "react";
import { GetAllMusic } from "../../Services/Music/music-service";
import "../../App.css";
const delay = 2500;

export default function Music() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  let [music, setMusic] = useState([]);

  useEffect(() => {
    GetAllMusic().then((res) => {
      setMusic(res.hits);
    });
  }, []);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === music.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <h1>showing Music collection</h1>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}vw, 0, 0)` }}
      >
        {music.map((pic, index, backgroundColor) => (
          <div className="slide" key={index} style={{ backgroundColor }}>
            <img src={pic.largeImageURL} alt="picURL" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {music.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
