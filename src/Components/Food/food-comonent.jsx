import React, { useEffect, useState } from "react";
import { GetAllFood } from "../../Services/Food/food-service";

function Food() {
  let [food, setFood] = useState([]);

  useEffect(() => {
    GetAllFood().then((res) => {
      setFood(res.hits);
    });
  }, []);

  return (
    <div>
      <h1>showing food collection</h1>
      {food.map((pic, index) => (
        <div key={index}>
          <img src={pic.largeImageURL} alt="picURL" />
        </div>
      ))}
    </div>
  );
}
export default Food;
