import React from "react";
import { motion } from "motion/react";
import ComingFromBottom from "./motion-animation/ComingFromBottom";

const ComponentBox = ({
  children,
  header,
  description,
}: {
  children: React.ReactNode;
  header?: string;
  description?: string;
}) => {
  let words;
  if (description) {
    words = description.split(" ");
  }
  return (
    <ComingFromBottom className="rounded-xl p-4 sm:p-7 min-h-screen text-white">
      {header && <h1 className="text-3xl text-center font-bold">{header}</h1>}
      {description && words && (
        <p className="text-center my-4 text-balance">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </p>
      )}
      {children}
    </ComingFromBottom>
  );
};

export default ComponentBox;
