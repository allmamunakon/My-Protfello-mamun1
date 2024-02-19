 import React from 'react'
 import './Test.css'
// import TestMonial from './TestMonial'
 
  // import Slideshow from './Slideshow'
// import Testimonialpic from './Testimonialpic'
//  import { AiFillCaretLeft} from "react-icons/ai";
//  import { AiFillCaretRight } from "react-icons/ai";
//  import TestimonialCard from './TestimonialCard'
//   import TestimonialData from './TestimonialData'
import Testimonialpic from './Testimonialpic'
import AutoPlay from './AutoPlay/AutoPlay'
// import AutoPlayText from './AutoPlayText'
 import InfiniteAutoplay from './Infinite Autoplay/InfiniteAutoplay'
// import a1 from '../../image/a1.jpg'
// import a2 from '../../image/a2.jpg'
// import a3 from '../../image/a2.jpg'
// import a4 from '../../image/a4.jpg'
// import a5 from '../../image/a4.jpg'

// import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// import { MDBCarouselItem } from 'mdb-react-ui-kit';









// function Testimonial() {

//   const colors = ["#0088FE", "#00C49F", "#FFBB28"];
//   const delay = 2500;
//   const [index, setIndex] = React.useState(0);

//   React.useEffect(() => {
//     setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === colors.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => { };
//   }, [index]);
 
//   return (
//     <div className="slideshow">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {colors.map((backgroundColor, index) => (
//           <div
//             className="slide"
//             key={index}
//             style={{ backgroundColor }}
//           ></div>
//         ))}
//       </div>

//       <div className="slideshowDots">
//         {colors.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowDot${index === idx ? " active" : ""}`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
    



function Testimonial() {
  return (
    <div>
        {/* <TestimonialCard />  
       <TestimonialData />   */}
      {/* <TestMonial /> */}
    
       {/* <Slideshow/>   */}
       <Testimonialpic /> 
       <AutoPlay />
       {/* <AutoPlayText /> */}
        <InfiniteAutoplay /> 

    
      </div>
  )
}

export default Testimonial