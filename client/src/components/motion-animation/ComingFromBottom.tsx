import React from "react";
import { motion } from "motion/react";

const ComingFromBottom = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, y: 100 }} // Start from bottom (y: 100) with opacity 0
      animate={{ opacity: 1, y: 0 }} // End at original position with full opacity
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ComingFromBottom;
