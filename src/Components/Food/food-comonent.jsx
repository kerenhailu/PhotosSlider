import { useState, useRef, useEffect } from "react";
import { GetAllFood } from "../../Services/Food/food-service";
const delay = 2500;

export default function Food() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  let [food, setFood] = useState([]);


  useEffect(() => {
    GetAllFood().then((res) => {
      setFood(res.hits);
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
          prevIndex === food.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <h1>showing Food collection</h1>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}vw, 0, 0)` }}
      >
        {food.map((pic, index, backgroundColor) => (
          <div className="slide" key={index} style={{ backgroundColor }}>
            <img src={pic.largeImageURL} alt="picURL" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {food.map((_, idx) => (
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
