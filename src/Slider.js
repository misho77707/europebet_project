import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Style from "./Slider.module.css";
import SliderCard from "./SliderCard";

import P1 from './images/p1.jpeg'
import P2 from './images/p2.jpeg'
import P3 from './images/p3.jpeg'

const Slider = () => {
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  });


  return (
    <div className={Style.slider}>
      <div className={Style.slider_box}>
        
        <motion.div className={Style.slider_box_itmes} ref={dragSlider}>
          <motion.div
            ref={dragSlider}
            className={Style.slider_box_item}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            
              <SliderCard imag={P1}/>
              <SliderCard imag={P2}/>
              <SliderCard imag={P3}/>
              <SliderCard imag={P1}/>
             
            
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;