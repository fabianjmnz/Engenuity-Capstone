import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { Breakpoint } from 'react-socks';
import SemanticCal from '../Links/SemanticCal'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    
    }
  }),
  closed: {
    clipPath: "circle(30px at 300px -30px)",
    transition: {
      delay: 0.02,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
    
  }
};
const sidebarSmall = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 300px -30px)",
    transition: {
      delay: 0.02,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
    
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
    
    {/* <SemanticCal style={{display:'none'}}></SemanticCal> */}
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
     
    >
      <Breakpoint customQuery="(max-width:600px)">
      <motion.div className="background-mobile" variants={sidebarSmall} />
      </Breakpoint>

      <Breakpoint customQuery="(min-width:601px)">
      <motion.div className="background" variants={sidebar} />
      </Breakpoint >

      <Navigation toggle={() => toggleOpen()}/>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
    </>
  );
};