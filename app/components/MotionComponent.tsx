"use client";

import { motion } from "motion/react";

const MotionComponent = ({ as, children, ...props }) => {
  const ChildrenComponent = motion.create(as, {
    forwardMotionProps: true,
  });

  return <ChildrenComponent {...props}>{children}</ChildrenComponent>;
};

export default MotionComponent;
