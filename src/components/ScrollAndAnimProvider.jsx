"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ScrollAndAnimProvider({ children }) {
  return (
    <>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </>
  );
}
