import { useState } from "react";
import "./App.css";
import { FaStar } from "react-icons/fa";
function App({ noOfStar = 10 }) {
  const [ration, setRation] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handelClick = (num: number): void => {
    console.log(num);
    setRation(num);
  };

  const handelMouseEnter = (num: number): void => {
    console.log(num);
    setHover(num);
  };

  const handelMouseOut = (num: number): void => {
    console.log(num);
    setHover(ration);
  };
  return (
    <>
      <div className="star_rating">
        {[...Array(noOfStar)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || ration) ? "active" : "inactive"}
              onClick={() => handelClick(index)}
              onMouseEnter={() => handelMouseEnter(index)}
              onMouseLeave={() => handelMouseOut(index)}
              size={60}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
