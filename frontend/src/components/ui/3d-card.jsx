import React, { createContext, useState, useContext, useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const MouseEnterContext = createContext([false, () => { }]);

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const rectRef = useRef(null);

  // Motion values for raw mouse/touch position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Physics-based springs for smoothness
  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(y, springConfig);
  const rotateY = useSpring(x, springConfig);

  const handleMouseMove = useCallback((e) => {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;

    // Normalize to -0.5 to 0.5 range, then scale to deg
    const px = (e.clientX - left) / width;
    const py = (e.clientY - top) / height;

    x.set((px - 0.5) * 40); // Max 20deg each way
    y.set((py - 0.5) * -40); // Max 20deg each way (negative for standard tilt)
  }, [x, y]);

  const handleTouchMove = useCallback((e) => {
    if (!rectRef.current || !e.touches[0]) return;
    const { left, top, width, height } = rectRef.current;

    const px = (e.touches[0].clientX - left) / width;
    const py = (e.touches[0].clientY - top) / height;

    x.set((px - 0.5) * 40);
    y.set((py - 0.5) * -40);
  }, [x, y]);

  const handleEnter = () => {
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
    setIsMouseEntered(true);
  };

  const handleLeave = () => {
    setIsMouseEntered(false);
    x.set(0);
    y.set(0);
    rectRef.current = null;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={containerClassName || ""}
        style={{ perspective: "1000px" }}
      >
        <motion.div
          ref={containerRef}
          onMouseEnter={handleEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleLeave}
          onTouchStart={handleEnter}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleLeave}
          className={className || ""}
          style={{
            transformStyle: "preserve-3d",
            rotateX,
            rotateY,
          }}
        >
          {children}
        </motion.div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className }) => {
  return (
    <div
      className={className || ""}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const [isMouseEntered] = useMouseEnter();

  // Use framer-motion components for nested items to handle translateZ smoothly
  const MotionTag = motion[Tag] || motion.div;

  const springConfig = { damping: 25, stiffness: 200 };

  // Create interpolated values based on hover state
  const targetX = isMouseEntered ? translateX : 0;
  const targetY = isMouseEntered ? translateY : 0;
  const targetZ = isMouseEntered ? translateZ : 0;
  const targetRotateX = isMouseEntered ? rotateX : 0;
  const targetRotateY = isMouseEntered ? rotateY : 0;
  const targetRotateZ = isMouseEntered ? rotateZ : 0;

  return (
    <MotionTag
      className={className || ""}
      animate={{
        x: targetX,
        y: targetY,
        z: targetZ,
        rotateX: targetRotateX,
        rotateY: targetRotateY,
        rotateZ: targetRotateZ,
      }}
      transition={{
        type: "spring",
        ...springConfig
      }}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform"
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a CardContainer");
  }
  return context;
};
