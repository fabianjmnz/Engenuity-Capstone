import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { Breakpoint } from 'react-socks'



const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({toggle}:any) => (
  <>
  <Breakpoint customQuery="(max-width:600px)">
    <motion.ul id="menu-list-mobile" variants={variants}>   
      {itemIds.map(i => (
      
        <MenuItem i={i} key={i} toggle={toggle}/> 
      ))}
    </motion.ul>
  </Breakpoint>
  <Breakpoint customQuery="(min-width:601px)">
    <motion.ul id="menu-list" variants={variants}>   
      {itemIds.map(i => (
      
        <MenuItem i={i} key={i} toggle={toggle}/> 
      ))}
    </motion.ul>
  </Breakpoint>
  </>
);

const itemIds = [0, 1, 2, 3,4,5];