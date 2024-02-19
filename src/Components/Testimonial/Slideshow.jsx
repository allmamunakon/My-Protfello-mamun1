import React from 'react'

import a1 from '../../image/a1.jpg'
import a2 from '../../image/a2.jpg'
import a3 from '../../image/a3.jpg'

const Pic1 = <img src={a1} className="outer-shadow" alt="" height={200} width={200} />
const Pic2 = <img src={a2} className="outer-shadow" alt="" height={200} width={200} />
const Pic3 = <img src={a3} className="outer-shadow" alt="" height={200} width={200} />

  //  const colors = ["Pic1", "Pic2","Pic3"];
   const colors = ["#ffff", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          >
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
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
export default Slideshow