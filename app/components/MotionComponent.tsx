"use client";

import { motion, MotionProps } from "framer-motion";
import { ElementType, ReactNode } from "react";

interface MotionComponentProps extends MotionProps {
    as: ElementType;
    children: ReactNode;
    className?: string;
}

const MotionComponent = ({ as, children, ...props }: MotionComponentProps) => {
    const MotionTag = motion(as);

    return <MotionTag {...props}>{children}</MotionTag>;
};

export default MotionComponent;
