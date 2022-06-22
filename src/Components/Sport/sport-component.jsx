import { useState, useRef, useEffect } from "react";
import { GetAllSport } from "../../Services/Sport/sport-service";
const delay = 2500;

export default function Sport() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  let [sport, setSport] = useState([]);

  useEffect(() => {
    GetAllSport().then((res) => {
      setSport(res.hits);
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
          prevIndex === sport.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <h1>showing Sport collection</h1>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}vw, 0, 0)` }}
      >
        {sport.map((pic, index, backgroundColor) => (
          <div className="slide" key={index} style={{ backgroundColor }}>
            <img src={pic.largeImageURL} alt="picURL" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {sport.map((_, idx) => (
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
