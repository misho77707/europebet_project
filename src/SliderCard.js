import React from "react";
import { motion } from "framer-motion";

//INTERNAL IMPORT
import Style from "./SliderCard.module.css";

const SliderCard = (props) => {
  return (
        <motion.div className={Style.sliderCard_box_img}>
        <div className={Style.sliderCard_box_image}>
          <div className="ragac" style={{display:'flex',flexDirection: 'column',
    justifyContent: 'flex-end'}}>
            <p>Get 300% Cashback</p>
            <p style={{}}>retrieve 300% bet amountas real money only here</p>
            </div>
          </div>
    </motion.div>
  );
};

export default SliderCard;