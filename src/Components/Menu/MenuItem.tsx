import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    },
    display:"flex"
  },
  closed: {
    y: 50,
    transition: {
      y: { stiffness: 1000 }
    },
    display:"none"
  }
};
const links = ['ezchart','eztest','ezvision','ezvalve','support','calculator']

export const MenuItem = ({ i,toggle }:any) => {
  const yes = links[i]
 
  return (
   <Link to={`/${yes}`}>
    <motion.li
      id="each-item"
      variants={variants}
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.95}}
    >
      <div className="icon-placeholder" ></div>
  <div className="text-placeholder" onClick={toggle}>{yes}</div>
  
    </motion.li>
   </Link>
    
   
  );
};
