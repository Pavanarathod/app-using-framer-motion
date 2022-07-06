import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
const Layout = ({ children }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      className="overflow-hidden h-screen"
    >
      {children}
    </motion.div>
  );
};

export default Layout;
